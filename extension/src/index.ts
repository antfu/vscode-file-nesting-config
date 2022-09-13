import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'
import { getConfig } from './config'
import { fetchAndUpdate } from './fetch'
import { MSG_PREFIX } from './constants'

async function manualUpdate(ctx: ExtensionContext) {
  const updated = await fetchAndUpdate(ctx, false)
  // A message has already been shown if it was updated
  if (!updated)
    window.showInformationMessage(`${MSG_PREFIX} No new config found`)
}

export async function activate(ctx: ExtensionContext) {
  commands.registerCommand('antfu.file-nesting.manualUpdate', () => manualUpdate(ctx))

  const lastUpdate = ctx.globalState.get('lastUpdate', 0)
  const initialized = ctx.globalState.get('init', false)
  const autoUpdateInterval = getConfig<number>('fileNestingUpdater.autoUpdateInterval')

  if (!initialized) {
    ctx.globalState.update('init', true)
    fetchAndUpdate(ctx, false)
  }

  if (getConfig('fileNestingUpdater.autoUpdate')) {
    if (Date.now() - lastUpdate >= (autoUpdateInterval || 720) * 60_000)
      fetchAndUpdate(ctx, getConfig('fileNestingUpdater.promptOnAutoUpdate'))
  }
}

export function deactivate() {}
