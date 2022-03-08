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
  'jest.config.*',
  'tailwind.config.*',
].sort()

const packageJSON = [
  '.editorconfig',
  '.eslint*',
  '.gitpod*',
  '.markdownlint*',
  '.npm*',
  '.vscode*',
  '.stackblitz',
  '.tazerc*',
  '.yarn*',
  '.prettier*',
  '.watchman*',
  '.nodemon*',
  '.travis.yml',
  '.circleci*',
  '.node-version',
  'babel.config.*',
  'build.config.*',
  'commitlint.config',
  'lint-staged.config',
  'lerna*',
  'api-extractor*',
  'netlify.toml',
  'package-lock.json',
  'pnpm-*',
  'renovate.*',
  'jsconfig.*',
  'tsconfig.*',
  'vercel.*',
  'yarn-*',
  'turbo.json',
  '.nvmrc',
  'vetur.config.*',
  '.sentryclirc'
].sort()

const readme = [
  'license',
  'codeowners',
  'authors',
  'code_of_conduct.md',
  'contributing.md',
  'changelog.md',
  'backers.md',
  'sponsors.md',
  'security.md',
].sort()

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
  'rollup.config.*': 'api-extractor.json',
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
\`\`\`jsonc
  // updated ${todayDate}
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.expand": false,
  "explorer.experimental.fileNesting.patterns": ${body.trimStart()}
\`\`\``.trim()
    })
  ,
  'utf-8',
)
