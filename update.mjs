import fs from 'fs'

const buildTools = [
  'build.config.*',
  'tsup.config.*',
  'rollup.config.*',
  'webpack.config.*',
  'gulp*',
]

const testingTools = [
  '.codecov',
  '.mocha*',
  'ava.config.*',
  'cypress.json',
  'jasmine.*',
  'jest.config.*',
  'vitest.config.*',
  'karma*',
  'playwright.config.*',
  'puppeteer.config.*',
]

const tsconfig = [
  'tsconfig.*',
  'tsdoc.*',
  'jsconfig.*',
  'api-extractor.json',
]

const services = [
  '.circleci*',
  '.gitlab*',
  '.gitpod*',
  '.sentry*',
  '.stackblitz*',
  '.travis*',
  'vercel*',
  'netlify*',
  'renovate*',
  'appveyor*',
  'crowdin*',
  'azure-pipelines*',
  'jenkins*',
  'pullapprove*',
]

const linters = [
  '.commitlint*',
  '.editorconfig',
  '.eslint*',
  '.flowconfig',
  '.jshintrc',
  '.markdownlint*',
  '.prettier*',
  '.stylelint*',
  '.textlint*',
  '.yamllint*',
  'commitlint*',
  'dangerfile*',
  'lint-staged*',
  'prettier*',
  'stylelint*',
  'tslint*',
]

const env = [
  '*.env',
  '.env*',
  'env.d.ts',
]

const workspaces = [
  '.huskyrc*',
  '.node-version',
  '.npm*',
  '.nvmrc',
  '.releaserc*',
  '.tazerc*',
  '.yarnrc*',
  'lerna*',
  'nx.*',
  'workspace.json',
  'package-lock.json',
  'pnpm*',
  '.pnpm*',
  'turbo*',
  'yarn*',
]

const docker = [
  'dockerfile*',
  '.dockerignore',
]

// frameworks and their specific files
const frameworks = {
  'vite.config.*': ['index.html'],
  'vue.config.*': [],
  'nuxt.config.*': [],
  'next.config.*': ['next-env.d.ts'],
  'svelte.config.*': [],
  'remix.config.*': ['remix.*'],
}

// library configs, will be appended to all the frameworks
const libraries = [
  '.babelrc',
  'babel.config.*',
  'postcss.config.*',
  '.postcssrc.*',
  'svgo.config.*',
  'tailwind.config.*',
  'unocss.config.*',
  'webpack.config.*',
  'windi.config.*',
  ...env,
  ...testingTools,
  ...tsconfig,
]

const packageJSON = [
  '.browserslist*',
  '.vscode*',
  '.nodemon*',
  'nodemon*',
  '.watchman*',
  '.pm2*',
  'pm2.*',
  'vetur.config.*',
  'nest-cli.*',
  'typedoc*',
  ...workspaces,
  ...buildTools,
  ...services,
  ...linters,
  ...tsconfig,
  ...testingTools,
]

const readme = [
  'readme*',
  'license*',
  'codeowners',
  'authors',
  'code_of_conduct.md',
  'contributing.md',
  'changelog*.md',
  'backers.md',
  'sponsors.md',
  'security.md',
  'governance.md',
  'history.md',
  'copying',
  'contributors',
  'maintainers',
  'credits',
]

const cargo = [
  'cargo.lock',
  'rust-toolchain.toml',
  'rustfmt.toml',
]

const gofile = [
  'go.sum',
  '.air*'
]

const gemfile = [
  'gemfile.lock',
  '.ruby-version',
]

const base = {
  '.gitignore': '.gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*',
  '*.js': '$(capture).js.map, $(capture).min.js, $(capture).d.ts',
  '*.jsx': '$(capture).js',
  '*.ts': '$(capture).js, $(capture).*.ts',
  '*.tsx': '$(capture).ts',
  'index.d.ts': '*.d.ts',
  'shims.d.ts': '*.d.ts',
  'go.mod': 'go.sum',
}

function stringify(items) {
  return Array.from(new Set(items)).sort().join(', ')
}

const full = {
  ...base,
  '.env': stringify(env),
  'dockerfile': stringify(docker),
  'package.json': stringify(packageJSON),
  'rush.json': stringify(packageJSON),
  'readme.md': stringify(readme),
  'cargo.toml': stringify(cargo),
  'gemfile': stringify(gemfile),
  'go.mod': stringify(gofile),
  ...Object.fromEntries(Object.entries(frameworks).map(([n, i]) => [n, stringify([...i, ...libraries])])),
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
