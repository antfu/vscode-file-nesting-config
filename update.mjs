import fs from 'fs'

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
  'babel.config.*',
  'jest.config.*',
  'postcss.config.*',
  'svgo.config.*',
  'tailwind.config.*',
  'unocss.config.*',
  'vitest.config.*',
  'webpack.config.*',
  'windi.config.*',
].sort()

const packageJSON = [
  '.browserslist*',
  '.circleci*',
  '.editorconfig',
  '.eslint*',
  '.gitlab-*.yml',
  '.gitlab-*',
  '.gitpod*',
  '.markdownlint*',
  '.node-version',
  '.nodemon*',
  '.npm*',
  '.nvmrc',
  '.prettier*',
  '.releaserc*',
  '.sentry*',
  '.stackblitz',
  '.stylelint*',
  '.tazerc*',
  '.travis.yml',
  '.vscode*',
  '.watchman*',
  '.yamllint*',
  '.yarnrc*',
  'api-extractor*',
  'babel.config.*',
  'build.config.*',
  'commitlint.config',
  'cypress.json',
  'gulp.*',
  'jsconfig.*',
  'lerna*',
  'lint-staged.config',
  'netlify.toml',
  'package-lock.json',
  'pnpm-*',
  'renovate.*',
  'rollup.config.*',
  'stylelint.config.*',
  'svgo.config.*',
  'tsconfig.*',
  'tsup.config.*',
  'turbo.json',
  'vercel.*',
  'vetur.config.*',
  'yarn-*',
  '.huskyrc.*'
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
  '.env': '*.env, .env-*, env.d.ts',
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
