import fs from 'fs'

const date = new Date().toDateString()

// frameworks and their specific files
const frameworks = {
  'vite.config.*': [],
  'vue.config.*': [],
  'nuxt.config.*': [],
  'next.config.*': [],
  'svelte.config.*': [],
  'remix.config.*': ['remix.*'],
}

// library configs, will be appended to all the frameworks
const libraries = [
  '.env*',
  'vitest.config.*',
  'unocss.config.*',
  'windi.config.*',
  'babel.config.*',
  'postcss.config.*',
  'tailwind.config.*',
]

const packageJSON = [
  '.editorconfig',
  '.eslint*',
  '.gitpod*',
  '.markdownlint*',
  '.npmrc',
  '.stackblitz',
  '.tazerc*',
  '.yarnrc*',
  '.prettierrc*',
  '.node-version',
  'babel.config.*',
  'build.config.*',
  'lerna.json',
  'netlify.toml',
  'package-lock.json',
  'pnpm-*',
  'renovate.json',
  'tsconfig.json',
  'tsconfig.*.json',
  'vercel.*',
  'yarn.lock',
]

const readme = [
  'license',
  'codeowners',
  'authors',
  'code_of_conduct.md',
  'contributing.md',
  'changelog.md',
]

const base = {
  '.gitignore': '.gitattributes',
  '*.js': '$(capture).js.map, $(capture).min.js, $(capture).d.ts',
  '*.jsx': '$(capture).js',
  '*.ts': '$(capture).js, $(capture).*.ts',
  '*.tsx': '$(capture).ts',
  'index.d.ts': '*.d.ts',
  'shims.d.ts': '*.d.ts',
  '.env': '*.env, .env-*',
  'tsconfig.json': 'tsconfig.*.json',
  'webpack.config.js': 'webpack.config.*',
}

const full = {
  ...base,
  'package.json': packageJSON.join(', '),
  'readme.md': readme.join(', '),
  ...Object.fromEntries(Object.entries(frameworks).map(([n, i]) => [n, [...i, ...libraries].join(', ')])),
}

const todayDate = new Date().toISOString().slice(0, 10)

fs.writeFileSync('README.md',
  fs.readFileSync('README.md', 'utf-8')
    .replace(/```json([\s\S]*?)```/m, () => {
      const body = JSON.stringify(full, null, 2).split('\n').map(l => `  ${l}`).join('\n')
      return `
\`\`\`json
{
  // updated ${todayDate}
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.expand": false,
  "explorer.experimental.fileNesting.patterns": ${body.trimStart()}
}
\`\`\``.trim()
    })
  ,
  'utf-8',
)
