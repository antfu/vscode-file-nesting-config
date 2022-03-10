import fs from 'fs'

const buildTools = [
  'build.config.*',
  'grunt*',
  'gulp*',
  'rollup.config.*',
  'tsup.config.*',
  'webpack.config.*',
]

const testingTools = [
  '.codecov',
  '.mocha*',
  'ava.config.*',
  'cypress.json',
  'jasmine.*',
  'jest.config.*',
  'karma*',
  'playwright.config.*',
  'puppeteer.config.*',
  'vitest.config.*',
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
  '.styleci*',
  '.travis*',
  'appveyor*',
  'azure-pipelines*',
  'crowdin*',
  'jenkins*',
  'netlify*',
  'pullapprove*',
  'renovate*',
  'vercel*',
  '.firebase*',
  '.github*',
]

const linters = [
  '.commitlint*',
  '.editorconfig',
  '.eslint*',
  '.flowconfig',
  '.jslint*',
  '.markdownlint*',
  '.prettier*',
  '.stylelint*',
  '.textlint*',
  '.xo-config*',
  '.yamllint*',
  'commitlint*',
  'dangerfile*',
  'dprint.json',
  'lint-staged*',
  '.lintstagedrc*',
  'prettier*',
  'stylelint*',
  'tslint*',
  'xo.config.*',
]

const env = [
  '*.env',
  '.env.*',
  'env.d.ts',
]

const workspaces = [
  '.huskyrc*',
  '.node-version',
  '.npm*',
  '.nvmrc',
  '.tool-versions',
  '.pnp.*',
  '.pnpm*',
  '.releaserc*',
  '.tazerc*',
  '.yarnrc*',
  'bower.json',
  'lerna*',
  'nx.*',
  'package-lock.json',
  'pnpm*',
  'turbo*',
  'workspace.json',
  'yarn*',
  'firebase.json',
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
  'svelte.config.*': ['mdsvex.config.js'],
  'remix.config.*': ['remix.*'],
  'artisan': ['server.php', 'webpack.mix.js'],
  'astro.config.*': [],
}

// library configs, will be appended to all the frameworks
const libraries = [
  '.babelrc*',
  '.cssnanorc*',
  '.htmlnanorc*',
  '.postcssrc*',
  '.terserrc*',
  'babel.config.*',
  'cssnano.config.*',
  'htmlnanorc.*',
  'postcss.config.*',
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
  '.nodemon*',
  '.pm2*',
  '.vscode*',
  '.watchman*',
  'nest-cli.*',
  'nodemon*',
  'pm2.*',
  'typedoc*',
  'vetur.config.*',
  ...workspaces,
  ...buildTools,
  ...services,
  ...linters,
  ...tsconfig,
  ...testingTools,
]

const readme = [
  'authors',
  'backers.md',
  'changelog*',
  'citation*',
  'code_of_conduct.md',
  'codeowners',
  'contributing.md',
  'contributors',
  'copying',
  'credits',
  'governance.md',
  'history.md',
  'license*',
  'maintainers',
  'readme*',
  'security.md',
  'sponsors.md',
]

const cargo = [
  'cargo.lock',
  'rust-toolchain.toml',
  'rustfmt.toml',
  '.rustfmt.toml',
  'clippy.toml',
  '.clippy.toml',
  'cross.toml',
]

const gofile = [
  'go.sum',
  '.air*',
]

const gemfile = [
  'gemfile.lock',
  '.ruby-version',
]

const composer = [
  'composer.lock',
  'phpunit.xml*',
  'psalm*.xml',
  '.php*.cache',
]

const dotnetProject = [
  '*proj.user',
  '*.config',
  'appsettings.*',
  'bundleconfig.json',
]

const base = {
  '.gitignore': '.gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*',
  '*.js': '$(capture).js.map, $(capture).min.js, $(capture).d.ts',
  '*.jsx': '$(capture).js',
  '*.ts': '$(capture).js, $(capture).*.ts',
  '*.tsx': '$(capture).ts',
  '*.vue': '$(capture).*.ts, $(capture).*.js',
  'index.d.ts': '*.d.ts',
  'shims.d.ts': '*.d.ts',
  '*.cpp': '$(capture).hpp, $(capture).h, $(capture).hxx',
  '*.cxx': '$(capture).hpp, $(capture).h, $(capture).hxx',
  '*.cc': '$(capture).hpp, $(capture).h, $(capture).hxx',
  '*.c': '$(capture).h',
  'go.mod': 'go.sum',
  'default.nix': 'shell.nix',
  'flake.nix': 'flake.lock',
  'BUILD.bazel': '*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE',
  'CMakeLists.txt': '*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json',
  '.clang-tidy': '.clang-format',
  '*.pubxml': '$(capture).pubxml.user',
  '*.asax': '$(capture).*.cs, $(capture).*.vb',
  '*.ascx': '$(capture).*.cs, $(capture).*.vb',
  '*.ashx': '$(capture).*.cs, $(capture).*.vb',
  '*.aspx': '$(capture).*.cs, $(capture).*.vb',
  '*.master': '$(capture).*.cs, $(capture).*.vb',
  '*.resx': '$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb',
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
  'readme.*': stringify(readme),
  'cargo.toml': stringify(cargo),
  'gemfile': stringify(gemfile),
  'go.mod': stringify(gofile),
  'composer.json': stringify(composer),
  '*.csproj': stringify(dotnetProject),
  '*.vbproj': stringify(dotnetProject),
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
  "explorer.experimental.fileNesting.patterns": ${body.trimStart()},
\`\`\``.trim()
    })
  ,
  'utf-8',
)
