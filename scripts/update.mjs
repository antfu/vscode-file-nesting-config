import fs from 'fs'
import { resolve } from 'path'
import { config } from './config.mjs'

const today = new Date().toISOString().slice(0, 16).replace('T', ' ')

const filePath = resolve('README.md')
fs.writeFileSync(filePath,
  fs.readFileSync(filePath, 'utf-8')
    .replace(/```json([\s\S]*?)```/m, () => {
      const body = JSON.stringify(config, null, 2).split('\n').map(l => `  ${l}`).join('\n')
      return `
\`\`\`jsonc
// updated ${today}
// https://github.com/antfu/vscode-file-nesting-config
${body}
\`\`\``.trim()
    })
  ,
  'utf-8',
)
