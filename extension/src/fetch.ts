import { fetch } from 'ofetch'
import type { ExtensionContext } from 'vscode'
import { window } from 'vscode'
import { FILE, MSG_PREFIX, URL_PREFIX } from './constants'
import Config, { getConfig } from './config'

export async function fetchLatest() {
  const repo = getConfig<string>('fileNestingUpdater.upstreamRepo')
  const branch = getConfig<string>('fileNestingUpdater.upstreamBranch')
  const url = `${URL_PREFIX}/${repo}@${branch}/${FILE}`
  const md = await fetch(url).then(r => r.text())
  const content = (md.match(/```jsonc([\s\S]*?)```/) || [])[1] || ''

  const json = `{${
    content
      .trim()
      .split(/\n/g)
      .filter(line => !line.trim().startsWith('//'))
      .join('\n')
      .slice(0, -1)
  }}`

  const config = JSON.parse(json) || {}
  return config['explorer.fileNesting.patterns']
}

export async function fetchAndUpdate(ctx: ExtensionContext, prompt = true) {
  const fileNestingConfig = new Config()
  const patterns = await fetchLatest()
  let shouldUpdate = true

  const originalPatterns = { ...(fileNestingConfig.get<object>('patterns') || {}) }
  delete originalPatterns['//']
  // no change
  if (Object.keys(originalPatterns).length > 0 && JSON.stringify(patterns) === JSON.stringify(originalPatterns))
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
    fileNestingConfig.set('enabled', true)
    fileNestingConfig.set('expand', false)
    fileNestingConfig.set('patterns', {
      '//': `Last update at ${new Date().toLocaleString()}`,
      ...patterns,
    })

    ctx.globalState.update('lastUpdate', Date.now())

    window.showInformationMessage(`${MSG_PREFIX} Config updated`)
  }
}
