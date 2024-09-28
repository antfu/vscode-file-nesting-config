import { fetch } from 'ofetch'
import { window, workspace } from 'vscode'
import type { ExtensionContext } from 'vscode'
import { getConfig } from './config'
import { FILE, MSG_PREFIX, URL_PREFIX } from './constants'

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
  const patterns = config['explorer.fileNesting.patterns']
  const whitelist = getConfig<string[]>('fileNestingUpdater.whitelist') || []

  return whitelist.length > 0 ? whitelistFiler(whitelist, patterns) : patterns
}

export async function fetchAndUpdate(ctx: ExtensionContext, prompt = true) {
  const config = workspace.getConfiguration()
  const patterns = await fetchLatest()
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
      '//': `Last update at ${new Date().toLocaleString()}`,
      ...patterns,
    }, true)

    ctx.globalState.update('lastUpdate', Date.now())

    window.showInformationMessage(`${MSG_PREFIX} Config updated`)
  }
}

/**
 * Filters the given patterns based on the provided whitelist.
 *
 * @param whitelist - An array of strings representing the keys to be whitelisted.
 * @param patterns - A record of key-value pairs to be filtered.
 * @returns A new record containing only the key-value pairs from the patterns that are in the whitelist.
 */
function whitelistFiler(whitelist: string[], patterns: Record<string, string>): Record<string, string> {
  if (whitelist.length > 0) {
    return Object.keys(patterns)
      .filter(key => whitelist.includes(key))
      .reduce((obj, key) => {
        obj[key] = patterns[key]
        return obj
      }, {} as Record<string, string>)
  }
  return patterns
}
