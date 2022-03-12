import fs from 'fs'
import { resolve } from 'path'
import { config } from './config.mjs'

const pkgPath = resolve('./package.json')

fs.writeFileSync(pkgPath,
  fs.readFileSync(pkgPath, 'utf-8')
    .replace(/"configurationDefaults": {([\s\S]*?)}/m, () => {
      const body = JSON.stringify(config, null, 2).split('\n').map(l => `    ${l}`).join('\n')
      return `"configurationDefaults":{${body.trim().slice(1, -1).trimEnd()}`
    })
  ,
  'utf-8',
)
