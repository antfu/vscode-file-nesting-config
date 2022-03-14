import type { ExtensionContext } from 'vscode'
import { commands } from 'vscode'
import { getConfig } from './config'
import { fetchAndUpdate } from './fetch'

export async function activate(ctx: ExtensionContext) {
  commands.registerCommand('antfu.file-nesting.manualUpdate', () => fetchAndUpdate(ctx, false))

  const lastUpdate = ctx.globalState.get('lastUpdate', 0)
  const autoUpdateInterval = getConfig<number>('fileNestingUpdater.autoUpdateInterval')

  if (getConfig('fileNestingUpdater.autoUpdate')) {
    if (Date.now() - lastUpdate >= autoUpdateInterval * 60_000)
      fetchAndUpdate(ctx, getConfig('fileNestingUpdater.promptOnAutoUpdate'))
  }
}

export function deactivate() {}
