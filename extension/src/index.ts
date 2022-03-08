import fetch from 'node-fetch'
import type { ExtensionContext } from 'vscode'
import { window, workspace } from 'vscode'

const URL = 'https://cdn.jsdelivr.net/gh/antfu/vscode-file-nesting-config@main/README.md'

async function fetchLatest() {
  const md = await fetch(URL).then(r => r.text())
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
  return config['explorer.experimental.fileNesting.patterns']
}

export async function activate(ctx: ExtensionContext) {
  window.showInformationMessage('Hello from file-nesting-config!')

  const patterns = await fetchLatest()

  const config = workspace.getConfiguration()
  if (!config.has('explorer.experimental.fileNesting.enabled'))
    config.update('explorer.experimental.fileNesting.enabled', true, true)
  if (!config.has('explorer.experimental.fileNesting.expand'))
    config.update('explorer.experimental.fileNesting.expand', false, true)

  // TODO: prompt about overriding
  config.update('explorer.experimental.fileNesting.patterns', patterns, true)
  window.showInformationMessage('Updated with latest patterns')
}

export function deactivate() {}
