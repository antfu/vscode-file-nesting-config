import fs from 'node:fs'

const buildTools = [
  'build.config.*',
  'electron-builder.*',
  'grunt*',
  'gulp*',
  'rollup.config.*',
  'tsup.config.*',
  'webpack*',
  'rspack*',
]

const testingTools = [
  '.codecov',
  '.mocha*',
  'ava.config.*',
  'cypress.*',
  'jasmine.*',
  'jest.config.*',
  'karma*',
  'lighthouserc.*',
  '.lighthouserc.*',
  'playwright.config.*',
  'puppeteer.config.*',
  'vitest.config.*',
  'histoire.config.*',
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
  'release-tasks.sh',
  'renovate*',
  'vercel*',
  '.firebase*',
  '.github*',
  'unlighthouse*',
]

const linters = [
  '.commitlint*',
  '.editorconfig',
  '.eslint*',
  'eslint*',
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
  '.dprint.json*',
  'dprint.json*',
  '.dlint.json',
  'dlint.json',
  'lint-staged*',
  '.lintstagedrc*',
  'prettier*',
  'phpcs.xml',
  'stylelint*',
  'tslint*',
  'xo.config.*',
  'pyrightconfig.json',
  'biome.json',
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
  '.simple-git-hooks*',
  '.releaserc*',
  'release.config.*',
  '.release-please*.json',
  'release-please*.json',
  '.tazerc*',
  '.yarnrc*',
  'bower.json',
  'lerna*',
  'nx.*',
  'package-lock.json',
  'npm-shrinkwrap.json',
  'package.nls*.json',
  'pnpm*',
  'simple-git-hooks*',
  'turbo*',
  'workspace.json',
  'yarn*',
  'firebase.json',
  'bun.lockb',
]

const docker = [
  'dockerfile*',
  '*.dockerfile',
  '.dockerignore',
  'docker-compose.*',
  '.devcontainer.*',
]

// latex
const tex = [
  '$(capture).aux',
  '$(capture).bbl',
  '$(capture).blg',
  '$(capture).idx',
  '$(capture).ind',
  '$(capture).lof',
  '$(capture).lot',
  '$(capture).out',
  '$(capture).toc',
  '$(capture).acn',
  '$(capture).acr',
  '$(capture).alg',
  '$(capture).glg',
  '$(capture).glo',
  '$(capture).gls',
  '$(capture).ist',
  '$(capture).fls',
  '$(capture).log',
  '$(capture).synctex.gz',
  '$(capture).xdv',
  '$(capture).fdb_latexmk',
  '$(capture).pdf',
]

// frameworks and their specific files
const frameworks = {
  'vite.config.*': [],
  'vue.config.*': [],
  'nuxt.config.*': ['.nuxtignore'],
  'next.config.*': ['next-env.d.ts', 'next-i18next.config.*'],
  'svelte.config.*': ['mdsvex.config.js', 'vite.config.*', 'houdini.config.*'],
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
  'contentlayer.config.*',
  'cssnano.config.*',
  'formkit.config.*',
  'formulate.config.*',
  'htmlnanorc.*',
  'postcss.config.*',
  'svgo.config.*',
  'tailwind.config.*',
  'uno.config.*',
  'unocss.config.*',
  'webpack.config.*',
  'rspack.config.*',
  'windi.config.*',
  'i18n.config.*',
  'vuetify.config.*',
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
]

let readme = [
  'AUTHORS',
  'BACKERS*',
  'CHANGELOG*',
  'CITATION*',
  'CODE_OF_CONDUCT*',
  'CODEOWNERS',
  'CONTRIBUTING*',
  'CONTRIBUTORS',
  'COPYING*',
  'CREDITS',
  'GOVERNANCE.MD',
  'HISTORY.MD',
  'LICENSE*',
  'MAINTAINERS',
  'README*',
  'SECURITY.MD',
  'SPONSORS*',
]

readme = addTitleCaseVariants(readme)
readme = addLowerCaseVariants(readme)

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
  'pubspec_overrides.yaml',
]

const elixir = [
  'mix.lock',
  '.formatter.exs',
  '.credo.exs',
  '.dialyzer_ignore.exs',
  '.iex.exs',
  '.tool-versions',
]

const pythonConfigs = [
  'tox.ini',
  '.editorconfig',
  '.flake8',
  '.isort.cfg',
  '.python-version',
]

const requirementstxt = [
  'requirements*.txt',
  'requirements*.in',
  'requirements*.pip',
  ...pythonConfigs,
]

const setupcfg = [
  'setup.cfg',
  'MANIFEST.in',
  ...requirementstxt,
]

const setuppy = [
  'setup.py',
  ...setupcfg,
]

const pipfile = [
  'Pipfile',
  'Pipfile.lock',
  ...requirementstxt,
]

const hatchtoml = [
  'hatch.toml',
  ...requirementstxt,
]

const pyprojecttoml = [
  // the one config file to rule them all
  'pyproject.toml',
  'pdm.lock',
  '.pdm.toml',
  '.pdm-python',
  'poetry.lock',
  ...setuppy,
  ...pipfile,
  ...hatchtoml,
]

const phoenixLiveView = [
  '$(capture).html.eex',
  '$(capture).html.leex',
  '$(capture).html.heex',
]

const denoRuntime = [
  'import_map.json',
  'import-map.json',
  'deno.lock',
  ...tsconfig,
  ...env,
]

const base = {
  '.gitignore': '.gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*',
  '*.css': '$(capture).css.map, $(capture).*.css',
  '*.js': '$(capture).js.map, $(capture).*.js, $(capture)_*.js',
  '*.mjs': '$(capture).mjs.map, $(capture).*.mjs, $(capture)_*.mjs',
  '*.mts': '$(capture).mts.map, $(capture).*.mts, $(capture)_*.mts',
  '*.cjs': '$(capture).cjs.map, $(capture).*.cjs, $(capture)_*.cjs',
  '*.jsx': '$(capture).js, $(capture).*.jsx, $(capture)_*.js, $(capture)_*.jsx, $(capture).less, $(capture).module.less',
  '*.ts': '$(capture).js, $(capture).d.ts.map, $(capture).*.ts, $(capture)_*.js, $(capture)_*.ts',
  '*.component.ts': '$(capture).component.html, $(capture).component.spec.ts, $(capture).component.css, $(capture).component.scss, $(capture).component.sass, $(capture).component.less',
  '*.tsx': '$(capture).ts, $(capture).*.tsx, $(capture)_*.ts, $(capture)_*.tsx, $(capture).less, $(capture).module.less, $(capture).scss, $(capture).module.scss',
  '*.vue': '$(capture).*.ts, $(capture).*.js, $(capture).story.vue',
  'shims.d.ts': '*.d.ts',
  '*.cpp': '$(capture).hpp, $(capture).h, $(capture).hxx',
  '*.cxx': '$(capture).hpp, $(capture).h, $(capture).hxx',
  '*.cc': '$(capture).hpp, $(capture).h, $(capture).hxx',
  '*.c': '$(capture).h',
  '*.go': '$(capture)_test.go',
  'go.mod': 'go.sum',
  'go.work': 'go.work.sum',
  'default.nix': 'shell.nix',
  'flake.nix': 'flake.lock',
  'BUILD.bazel': '*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE',
  'CMakeLists.txt': '*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json, CMakeCache.txt',
  '.clang-tidy': '.clang-format, .clangd, compile_commands.json',
  '*.pubxml': '$(capture).pubxml.user',
  '*.asax': '$(capture).*.cs, $(capture).*.vb',
  '*.ascx': '$(capture).*.cs, $(capture).*.vb',
  '*.ashx': '$(capture).*.cs, $(capture).*.vb',
  '*.aspx': '$(capture).*.cs, $(capture).*.vb',
  '*.axaml': '$(capture).axaml.cs',
  '*.master': '$(capture).*.cs, $(capture).*.vb',
  '*.xaml': '$(capture).xaml.cs',
  '*.cshtml': '$(capture).cshtml.cs',
  '*.cs': '$(capture).*.cs',
  'I*.cs': '$(capture).cs',
  '*.resx': '$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb',
  '*.dart': '$(capture).freezed.dart, $(capture).g.dart',
  '*.bloc.dart': '$(capture).event.dart, $(capture).state.dart',
  '*.module.ts': '$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts',
  '*.java': '$(capture).class',
  '.project': '.classpath',
  '*.fs': '$(capture).fs.js, $(capture).fs.jsx, $(capture).fs.ts, $(capture).fs.tsx, $(capture).fs.rs, $(capture).fs.php, $(capture).fs.dart',
}
// Based on the new SvelteKit's routing system https://kit.svelte.dev/docs/routing
const svelteKitRouting = {
  '+page.svelte': '+page.server.ts,+page.server.js,+page.ts,+page.js,+page.gql',
  '+layout.svelte': '+layout.ts,+layout.ts,+layout.js,+layout.server.ts,+layout.server.js,+layout.gql',
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

/**
 * @param {string} str
 */
function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|[-_])(\w)/g, (_, a, b) => `${a}${b.toUpperCase()}`)
}

/**
 * Add title case variants of key/values to the array
 * @param {string[]} arr
 */
function addTitleCaseVariants(arr) {
  const upperCaseArr = arr.map(elm => toTitleCase(elm))
  return [...arr, ...upperCaseArr]
}

/**
 * Add lowercase variants of key/values to the array
 * @param {string[]} arr
 */
function addLowerCaseVariants(arr) {
  const lowerCaseArr = arr.map(elm => elm.toLowerCase())
  return [...arr, ...lowerCaseArr]
}

const full = sortObject({
  ...base,
  '.env': stringify(env),
  'Dockerfile': stringify(docker),
  'package.json': stringify(packageJSON),
  'rush.json': stringify(packageJSON),
  'pubspec.yaml': stringify(pubspecYAML),
  'README*': stringify(readme),
  'Readme*': stringify(readme),
  'readme*': stringify(readme),
  'Cargo.toml': stringify(cargo),
  'gemfile': stringify(gemfile),
  'go.mod': stringify(gofile),
  'composer.json': stringify(composer),
  '*.csproj': stringify(dotnetProject),
  '*.vbproj': stringify(dotnetProject),
  'mix.exs': stringify(elixir),
  'pyproject.toml': stringify(pyprojecttoml),
  'setup.cfg': stringify(setupcfg),
  'setup.py': stringify(setuppy),
  'Pipfile': stringify(pipfile),
  'hatch.toml': stringify(hatchtoml),
  'requirements.txt': stringify(requirementstxt),
  '*.ex': stringify(phoenixLiveView),
  '*.tex': stringify(tex),
  'deno.json*': stringify(denoRuntime),
  ...Object.fromEntries(Object.entries(frameworks).map(([n, i]) => [n, stringify([...i, ...libraries])])),
  ...svelteKitRouting,
})

const today = new Date().toISOString().slice(0, 16).replace('T', ' ')

fs.writeFileSync('README.md', fs.readFileSync('README.md', 'utf-8')
  .replace(/```json([\s\S]*?)```/m, () => {
    const body = JSON.stringify(full, null, 2).split('\n').map(l => `  ${l}`).join('\n')
    return `
\`\`\`jsonc
  // updated ${today}
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.expand": false,
  "explorer.fileNesting.patterns": ${body.trimStart()},
\`\`\``.trim()
  }), 'utf-8')
