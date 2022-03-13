import { commands } from 'vscode'
import { getConfig } from './config'
import { fetchAndUpdate } from './fetch'

/**
 * TODO:
 *
 * - [x] prompt about overriding
 * - cache
 * - settings (interval)
 * - [x] manual command
 */

export async function activate(/* ctx: ExtensionContext */) {
  commands.registerCommand('antfu.file-nesting.manualUpdate', () => fetchAndUpdate(false))

  if (getConfig('fileNestingUpdater.autoUpdate'))
    fetchAndUpdate(getConfig('fileNestingUpdater.promptOnAutoUpdate'))
}

export function deactivate() {}
