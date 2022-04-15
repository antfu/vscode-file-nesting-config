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
  'Procfile',
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
  'phpcs.xml',
  'stylelint*',
  'tslint*',
  'xo.config.*',
  'pyrightconfig.json',
]

const env = [
  '*.env',
  '.env.*',
  'env.d.ts',
  '.envrc',
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
  'docker-compose.*',
]

// frameworks and their specific files
const frameworks = {
  'vite.config.*': [],
  'vue.config.*': [],
  'nuxt.config.*': [],
  'next.config.*': ['next-env.d.ts'],
  'svelte.config.*': ['mdsvex.config.js'],
  'remix.config.*': ['remix.*'],
  'artisan': ['server.php', 'webpack.mix.js'],
  'astro.config.*': [],
  'gatsby-config.*': ['gatsby-browser.*', 'gatsby-node.*', 'gatsby-ssr.*', 'gatsby-transformer.*'],
  'quasar.conf.js': ['quasar.extensions.json'],
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
  'apollo.config.*',
  'vetur.config.*',
  '.czrc',
  '.cz-config.js',
  '.versionrc*',
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

const pubspecYAML = [
  '.metadata',
  '.packages',
  'all_lint_rules.yaml',
  'analysis_options.yaml',
  'build.yaml',
  'pubspec.lock',
]

const elixir = [
  'mix.lock',
  '.formatter.exs',
  '.credo.exs',
  '.dialyzer_ignore.exs',
]

const pdm = [
  'pyproject.toml',
  'pdm.lock',
  '.pdm.toml',
]

const phoenixLiveView = [
  '$(capture).html.eex',
  '$(capture).html.leex',
  '$(capture).html.heex',
]

const base = {
  '.gitignore': '.gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*',
  '*.css': '$(capture).css.map, $(capture).*.css',
  '*.js': '$(capture).js.map, $(capture).*.js',
  '*.jsx': '$(capture).js, $(capture).*.jsx',
  '*.ts': '$(capture).js, $(capture).*.ts',
  '*.tsx': '$(capture).ts, $(capture).*.tsx',
  '*.vue': '$(capture).*.ts, $(capture).*.js',
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
  '.clang-tidy': '.clang-format, .clangd, compile_commands.json',
  '*.pubxml': '$(capture).pubxml.user',
  '*.asax': '$(capture).*.cs, $(capture).*.vb',
  '*.ascx': '$(capture).*.cs, $(capture).*.vb',
  '*.ashx': '$(capture).*.cs, $(capture).*.vb',
  '*.aspx': '$(capture).*.cs, $(capture).*.vb',
  '*.master': '$(capture).*.cs, $(capture).*.vb',
  '*.resx': '$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb',
  '*.dart': '$(capture).freezed.dart, $(capture).g.dart',
  '*.module.ts': '$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts',
  '*.java': '$(capture).class',
  '.project': '.classpath',
}

function stringify(items) {
  return Array.from(new Set(items)).sort().join(', ')
}

function sortObject(obj) {
  return Object.keys(obj).sort().reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})
}

const full = sortObject({
  ...base,
  '.env': stringify(env),
  'dockerfile': stringify(docker),
  'package.json': stringify(packageJSON),
  'rush.json': stringify(packageJSON),
  'pubspec.yaml': stringify(pubspecYAML),
  'readme': stringify(readme),
  'readme.md': stringify(readme),
  'readme.txt': stringify(readme),
  'readme.rst': stringify(readme),
  'cargo.toml': stringify(cargo),
  'gemfile': stringify(gemfile),
  'go.mod': stringify(gofile),
  'composer.json': stringify(composer),
  '*.csproj': stringify(dotnetProject),
  '*.vbproj': stringify(dotnetProject),
  'mix.exs': stringify(elixir),
  'pyproject.toml': stringify(pdm),
  '*.ex': stringify(phoenixLiveView),
  ...Object.fromEntries(Object.entries(frameworks).map(([n, i]) => [n, stringify([...i, ...libraries])])),
})

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
