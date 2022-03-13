import { commands } from 'vscode'
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
  fetchAndUpdate(true)
}

export function deactivate() {}
