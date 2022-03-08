import fs from 'fs'

const buildTools = [
  'build.config.*',
  'tsup.config.*',
  'rollup.config.*',
  'webpack.config.*',
  'gulp.*',
]

const testingTools = [
  'jest.config.*',
  'ava.config.*',
  'jasmine.*',
  'vitest.config.*',
  'cypress.json',
  '.mocha*',
]

const tsconfig = [
  'tsconfig.*',
  'jsconfig.*',
  'api-extractor.json',
]

const services = [
  '.circleci*',
  '.gitlab*',
  '.gitpod*',
  '.sentry*',
  '.stackblitz',
  '.travis.yml',
  'vercel.*',
  'netlify.toml',
  'renovate.*',
]

const linters = [
  '.editorconfig',
  '.eslint*',
  '.markdownlint*',
  '.prettier*',
  '.stylelint*',
  '.yamllint*',
  'commitlint.config',
  'lint-staged.config',
  'stylelint.config.*',
]

const env = [
  '*.env',
  '.env-*',
  'env.d.ts',
]

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
  'babel.config.*',
  'postcss.config.*',
  'svgo.config.*',
  'tailwind.config.*',
  'unocss.config.*',
  'webpack.config.*',
  'windi.config.*',
  ...env,
  ...testingTools,
  ...tsconfig,
].sort()

const packageJSON = [
  '.browserslist*',
  '.node-version',
  '.nodemon*',
  '.npm*',
  '.nvmrc',
  '.releaserc*',
  '.tazerc*',
  '.vscode*',
  '.watchman*',
  '.yarnrc*',
  'lerna*',
  'package-lock.json',
  'pnpm-*',
  'turbo.json',
  'vetur.config.*',
  'yarn-*',
  '.huskyrc.*'
  ...buildTools,
  ...services,
  ...linters,
  ...tsconfig,
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
  '.gitignore': '.git*',
  '*.js': '$(capture).js.map, $(capture).min.js, $(capture).d.ts',
  '*.jsx': '$(capture).js',
  '*.ts': '$(capture).js, $(capture).*.ts',
  '*.tsx': '$(capture).ts',
  'index.d.ts': '*.d.ts',
  'shims.d.ts': '*.d.ts',
}

const full = {
  ...base,
  '.env': env.join(', '),
  'package.json': packageJSON.join(', '),
  'readme.md': readme.join(', '),
  ...Object.fromEntries(Object.entries(frameworks).map(([n, i]) => [n, [...i, ...libraries].join(', ')])),
}

const today = new Date().toISOString().slice(0, 16).replace('T', ' ')

fs.writeFileSync('README.md',
  fs.readFileSync('README.md', 'utf-8')
    .replace(/```json([\s\S]*?)```/m, () => {
      const body = JSON.stringify(full, null, 2).split('\n').map(l => `  ${l}`).join('\n')
      return `
\`\`\`jsonc
  // updated ${today}
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.expand": false,
  "explorer.experimental.fileNesting.patterns": ${body.trimStart()}
\`\`\``.trim()
    })
  ,
  'utf-8',
)
