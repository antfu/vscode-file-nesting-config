import type { ExtensionContext } from 'vscode'
import { fetch } from 'ofetch'
import { window, workspace } from 'vscode'
import { getConfig } from './config'
import { FILE, MSG_PREFIX, URL_PREFIX } from './constants'

const UPDATE_MARKER_FALLBACK = 'Last update from upstream'

export async function fetchLatest() {
  const repo = getConfig<string>('fileNestingUpdater.upstreamRepo')
  const branch = getConfig<string>('fileNestingUpdater.upstreamBranch')
  const url = `${URL_PREFIX}/${repo}@${branch}/${FILE}`
  const md = await fetch(url).then(r => r.text())
  const content = (md.match(/```jsonc([\s\S]*?)```/) || [])[1] || ''
  const updated = content.match(/^\s*\/\/ updated (.+)$/m)?.[1]?.trim()

  const json = `{${
    content
      .trim()
      .split(/\n/g)
      .filter(line => !line.trim().startsWith('//'))
      .join('\n')
      .slice(0, -1)
  }}`

  const config = JSON.parse(json) || {}
  return {
    patterns: config['explorer.fileNesting.patterns'],
    updated,
  }
}

export async function fetchAndUpdate(ctx: ExtensionContext, prompt = true) {
  const config = workspace.getConfiguration()
  const { patterns, updated } = await fetchLatest()
  let shouldUpdate = true

  const oringalPatterns = { ...(config.get<object>('explorer.fileNesting.patterns') || {}) }
  delete oringalPatterns['//']
  // no change
  if (Object.keys(oringalPatterns).length > 0 && JSON.stringify(patterns) === JSON.stringify(oringalPatterns))
    return false

  if (prompt) {
    const buttonUpdate = 'Update'
    const buttonSkip = 'Skip this time'
    const result = await window.showInformationMessage(
      `${MSG_PREFIX} new config found, do you want to update?`,
      buttonUpdate,
      buttonSkip,
    )
    shouldUpdate = result === buttonUpdate
  }

  if (shouldUpdate) {
    if (config.inspect('explorer.fileNesting.enabled')?.globalValue == null)
      config.update('explorer.fileNesting.enabled', true, true)

    if (config.inspect('explorer.fileNesting.expand')?.globalValue == null)
      config.update('explorer.fileNesting.expand', false, true)

    config.update('explorer.fileNesting.patterns', {
      '//': updated
        ? `Last update at ${updated} UTC`
        : UPDATE_MARKER_FALLBACK,
      ...patterns,
    }, true)

    ctx.globalState.update('lastUpdate', Date.now())

    window.showInformationMessage(`${MSG_PREFIX} Config updated`)
  }
}
