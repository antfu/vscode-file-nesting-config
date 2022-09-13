import fetch from 'node-fetch'
import type { ExtensionContext } from 'vscode'
import { window, workspace } from 'vscode'
import { FILE, MSG_PREFIX, URL_PREFIX } from './constants'
import { getConfig } from './config'

export async function fetchLatest(): Promise<{ config: {}; lastUpdated: number }> {
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
  // Extract the date from the top comment "// updated 2022-09-10 20:46" <- iso date
  const updateStr = '// updated '
  const lastUpdated = Date.parse(content.slice(content.indexOf(updateStr) + updateStr.length, content.indexOf('\n')))

  const config = JSON.parse(json) || {}
  return { config: config['explorer.fileNesting.patterns'], lastUpdated }
}

/** @returns `true` if it updated the config. `false` if no new config was available or the user denied the request */
export async function fetchAndUpdate(ctx: ExtensionContext, prompt = true) {
  const { lastUpdated, config: patterns } = await fetchLatest()
  const config = workspace.getConfiguration()
  const newVersionAvailable = lastUpdated > (Date.parse((config.get('explorer.fileNesting.patterns') as {})['//']) || 0)
  if (!newVersionAvailable)
    return false

  let shouldUpdate = true

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
    config.update('explorer.fileNesting.enabled', true, true)
    if (config.inspect('explorer.fileNesting.expand').globalValue == null)
      config.update('explorer.fileNesting.expand', false, true)
    config.update('explorer.fileNesting.patterns', {
      '//': `Last update at ${new Date().toISOString()}`,
      ...patterns,
    }, true)

    ctx.globalState.update('lastUpdate', Date.now())

    window.showInformationMessage(`${MSG_PREFIX} Config updated`)
  }

  return shouldUpdate
}
