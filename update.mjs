import fs from 'node:fs'

const buildTools = [
  'build.config.*',
  'electron-builder.*',
  'grunt*',
  'gulp*',
  'rolldown.config.*',
  'rollup.config.*',
  'tsup.config.*',
  'tsdown.config.*',
  'webpack*',
  'rspack*',
]

const dependencyAnalysis = [
  'knip.*',
  '.knip.*',
]

const syntaxHighlighting = [
  'ec.config.*',
]

// @keep-sorted
const testingTools = [
  '.codecov',
  '.lighthouserc.*',
  '.mocha*',
  'ava.config.*',
  'cypress.*',
  'histoire.config.*',
  'jasmine.*',
  'jest.config.*',
  'karma*',
  'lighthouserc.*',
  'playwright.config.*',
  'puppeteer.config.*',
  'vitest.config.*',
]

// @keep-sorted
const tsconfig = [
  'api-extractor.json',
  'jsconfig.*',
  'tsconfig.*',
  'tsdoc.*',
]

// @keep-sorted
const services = [
  '.circleci*',
  '.cursorrules',
  '.firebase*',
  '.github*',
  '.gitlab*',
  '.gitpod*',
  '.sentry*',
  '.stackblitz*',
  '.styleci*',
  '.travis*',
  'appveyor*',
  'azure-pipelines*',
  'colada.options.ts',
  'crowdin*',
  'jenkins*',
  'netlify*',
  'nixpacks*',
  'Procfile',
  'pullapprove*',
  'release-tasks.sh',
  'renovate*',
  'sentry.*.config.ts',
  'sonar-project.properties',
  'unlighthouse*',
  'vercel*',
  'wrangler.*',
]

// @keep-sorted
const linters = [
  '.commitlint*',
  '.cspell*',
  '.dlint.json',
  '.dprint.json*',
  '.editorconfig',
  '.eslint*',
  '.flowconfig',
  '.jslint*',
  '.lintstagedrc*',
  '.ls-lint.yml',
  '.markdownlint*',
  '.prettier*',
  '.pylintrc',
  '.ruff.toml',
  '.shellcheckrc',
  '.stylelint*',
  '.textlint*',
  '.xo-config*',
  '.yamllint*',
  'biome.json*',
  'commitlint*',
  'cspell*',
  'dangerfile*',
  'dlint.json',
  'dprint.json*',
  'eslint*',
  'lint-staged*',
  'phpcs.xml',
  'prettier*',
  'pyrightconfig.json',
  'ruff.toml',
  'stylelint*',
  'tslint*',
  'xo.config.*',
]

// @keep-sorted
const env = [
  '.env.*',
  '.envrc',
  '*.env',
  'env.d.ts',
]

// @keep-sorted
const workspaces = [
  '.gitmojirc.json',
  '.huskyrc*',
  '.node-version',
  '.npm*',
  '.nvmrc',
  '.pnp.*',
  '.pnpm*',
  '.release-please*.json',
  '.releaserc*',
  '.simple-git-hooks*',
  '.tazerc*',
  '.tool-versions',
  '.yarnrc*',
  '*.code-workspace',
  'bower.json',
  'bun.lock',
  'bun.lockb',
  'bunfig.toml',
  'firebase.json',
  'lerna*',
  'npm-shrinkwrap.json',
  'nx.*',
  'package-lock.json',
  'package.nls*.json',
  'pnpm*',
  'release-please*.json',
  'release.config.*',
  'simple-git-hooks*',
  'turbo*',
  'workspace.json',
  'yarn*',
]

const docker = [
  'dockerfile*',
  '*.dockerfile',
  '.dockerignore',
  'docker-compose.*',
  'compose.*',
  '.devcontainer.*',
  'captain-definition',
]

// latex
// @keep-sorted
const tex = [
  '$(capture).acn',
  '$(capture).acr',
  '$(capture).alg',
  '$(capture).aux',
  '$(capture).bbl-SAVE-ERROR',
  '$(capture).bbl',
  '$(capture).bcf',
  '$(capture).blg',
  '$(capture).fdb_latexmk',
  '$(capture).fls',
  '$(capture).glg',
  '$(capture).glo',
  '$(capture).gls',
  '$(capture).idx',
  '$(capture).ind',
  '$(capture).ist',
  '$(capture).lof',
  '$(capture).log',
  '$(capture).lot',
  '$(capture).nav',
  '$(capture).out',
  '$(capture).run.xml',
  '$(capture).snm',
  '$(capture).synctex.gz',
  '$(capture).toc',
  '$(capture).xdv',
]

// frameworks and their specific files
// @keep-sorted
const frameworks = {
  'app.config.*': [],
  'artisan': ['server.php', 'webpack.mix.js'],
  'astro.config.*': [],
  'gatsby-config.*': ['gatsby-browser.*', 'gatsby-node.*', 'gatsby-ssr.*', 'gatsby-transformer.*'],
  'next.config.*': ['next-env.d.ts', 'next-i18next.config.*'],
  'nuxt.config.*': ['.nuxtignore', '.nuxtrc'],
  'quasar.conf.js': ['quasar.extensions.json'],
  'remix.config.*': ['remix.*'],
  'svelte.config.*': ['mdsvex.config.js', 'vite.config.*', 'houdini.config.*'],
  'vite.config.*': [],
  'vue.config.*': [],
}

// library configs, will be appended to all the frameworks
// @keep-sorted
const libraries = [
  '.babelrc*',
  '.cssnanorc*',
  '.htmlnanorc*',
  '.postcssrc*',
  '.terserrc*',
  'babel.config.*',
  'capacitor.config.*',
  'content.config.*',
  'contentlayer.config.*',
  'cssnano.config.*',
  'formkit.config.*',
  'formulate.config.*',
  'htmlnanorc.*',
  'i18n.config.*',
  'ionic.config.*',
  'panda.config.*',
  'postcss.config.*',
  'react-router.config.*',
  'rspack.config.*',
  'sst.config.*',
  'svgo.config.*',
  'tailwind.config.*',
  'uno.config.*',
  'unocss.config.*',
  'vuetify.config.*',
  'webpack.config.*',
  'windi.config.*',
  ...env,
  ...testingTools,
  ...tsconfig,
]

// @keep-sorted
const packageJSON = [
  '.browserslist*',
  '.cz-config.js',
  '.czrc',
  '.nodemon*',
  '.pm2*',
  '.versionrc*',
  '.vscode*',
  '.watchman*',
  'apollo.config.*',
  'nest-cli.*',
  'nodemon*',
  'pm2.*',
  'typedoc*',
  'vetur.config.*',
  ...workspaces,
  ...buildTools,
  ...services,
  ...linters,
  ...dependencyAnalysis,
  ...syntaxHighlighting,
]

// @keep-sorted
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
  'README_*',
  'README-*',
  'RELEASE_NOTES*',
  'ROADMAP.MD',
  'SECURITY.MD',
  'SPONSORS*',
]

readme = addTitleCaseVariants(readme)
readme = addLowerCaseVariants(readme)

// @keep-sorted
const cargo = [
  '.clippy.toml',
  '.rustfmt.toml',
  'Cargo.Bazel.lock',
  'Cargo.lock',
  'clippy.toml',
  'cross.toml',
  'insta.yaml',
  'rust-toolchain.toml',
  'rustfmt.toml',
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
  'poetry.toml',
  'uv.lock',
  'uv.toml',
  ...setuppy,
  ...pipfile,
  ...hatchtoml,
  ...linters,
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

const sqlite = [
  '*.db-shm',
  '*.db-wal',
]

const razor = [
  '$(capture).razor.css',
  '$(capture).razor.scss',
  '$(capture).razor.cs',
]

const sanity = [
  'sanity.cli.*',
  'sanity.types.ts',
  'schema.json',
]

// @keep-sorted
const base = {
  '.clang-tidy': '.clang-format, .clangd, compile_commands.json',
  '.gitignore': '.gitattributes, .gitmodules, .gitmessage, .lfsconfig, .mailmap, .git-blame*',
  '.project': '.classpath',
  '*.asax': '$(capture).*.cs, $(capture).*.vb',
  '*.ascx': '$(capture).*.cs, $(capture).*.vb',
  '*.ashx': '$(capture).*.cs, $(capture).*.vb',
  '*.aspx': '$(capture).*.cs, $(capture).*.vb',
  '*.axaml': '$(capture).axaml.cs',
  '*.bloc.dart': '$(capture).event.dart, $(capture).state.dart',
  '*.c': '$(capture).h',
  '*.cc': '$(capture).hpp, $(capture).h, $(capture).hxx, $(capture).hh',
  '*.cjs': '$(capture).cjs.map, $(capture).*.cjs, $(capture)_*.cjs',
  '*.component.ts': '$(capture).component.html, $(capture).component.spec.ts, $(capture).component.css, $(capture).component.scss, $(capture).component.sass, $(capture).component.less',
  '*.cpp': '$(capture).hpp, $(capture).h, $(capture).hxx, $(capture).hh',
  '*.cs': '$(capture).*.cs',
  '*.cshtml': '$(capture).cshtml.cs',
  '*.css': '$(capture).css.map, $(capture).*.css',
  '*.cxx': '$(capture).hpp, $(capture).h, $(capture).hxx, $(capture).hh',
  '*.dart': '$(capture).freezed.dart, $(capture).g.dart',
  '*.fs': '$(capture).fs.js, $(capture).fs.js.map, $(capture).fs.jsx, $(capture).fs.ts, $(capture).fs.tsx, $(capture).fs.rs, $(capture).fs.php, $(capture).fs.dart',
  '*.go': '$(capture)_test.go',
  '*.java': '$(capture).class',
  '*.js': '$(capture).js.map, $(capture).*.js, $(capture)_*.js, $(capture).d.ts, $(capture).d.ts.map, $(capture).js.flow',
  '*.jsx': '$(capture).js, $(capture).*.jsx, $(capture)_*.js, $(capture)_*.jsx, $(capture).css, $(capture).module.css, $(capture).less, $(capture).module.less, $(capture).module.less.d.ts, $(capture).scss, $(capture).module.scss, $(capture).module.scss.d.ts',
  '*.master': '$(capture).*.cs, $(capture).*.vb',
  '*.md': '$(capture).*',
  '*.mjs': '$(capture).mjs.map, $(capture).*.mjs, $(capture)_*.mjs',
  '*.module.ts': '$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts',
  '*.mts': '$(capture).mts.map, $(capture).*.mts, $(capture)_*.mts',
  '*.pubxml': '$(capture).pubxml.user',
  '*.py': '$(capture).pyi',
  '*.resx': '$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb',
  '*.ts': '$(capture).js, $(capture).d.ts.map, $(capture).*.ts, $(capture)_*.js, $(capture)_*.ts',
  '*.tsx': '$(capture).ts, $(capture).*.tsx, $(capture)_*.ts, $(capture)_*.tsx, $(capture).css, $(capture).module.css, $(capture).less, $(capture).module.less, $(capture).module.less.d.ts, $(capture).scss, $(capture).module.scss, $(capture).module.scss.d.ts, $(capture).css.ts',
  '*.vue': '$(capture).*.ts, $(capture).*.js, $(capture).story.vue',
  '*.w': '$(capture).*.w, I$(capture).w',
  '*.wat': '$(capture).wasm',
  '*.xaml': '$(capture).xaml.cs',
  'ansible.cfg': 'ansible.cfg, .ansible-lint, requirements.yml',
  'build-wrapper.log': 'build-wrapper*.log, build-wrapper-dump*.json, build-wrapper-win*.exe, build-wrapper-linux*, build-wrapper-macosx*',
  'BUILD.bazel': '*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, .bazelversion, MODULE.bazel.lock, WORKSPACE',
  'CMakeLists.txt': '*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json, CMakeCache.txt',
  'default.nix': 'shell.nix',
  'flake.nix': 'flake.lock',
  'go.mod': 'go.sum',
  'go.work': 'go.work.sum',
  'I*.cs': '$(capture).cs',
  'Makefile': '*.mk',
  'shims.d.ts': '*.d.ts',
}
// Based on the new SvelteKit's routing system https://kit.svelte.dev/docs/routing
const svelteKitRouting = {
  '+page.svelte': '+page.server.ts,+page.server.js,+page.ts,+page.js,+page.gql',
  '+layout.svelte': '+layout.ts,+layout.ts,+layout.js,+layout.server.ts,+layout.server.js,+layout.gql',
}

function stringify(items) {
  return Array.from(new Set(items)).sort().join(', ')
}

function sortObject(obj, fn = (a, b) => a.localeCompare(b)) {
  return Object
    .keys(obj)
    .sort(fn)
    .reduce((acc, key) => {
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
  '*.db': stringify(sqlite),
  '*.razor': stringify(razor),
  'sanity.config.*': stringify(sanity),
  ...Object.fromEntries(Object.entries(frameworks).map(([n, i]) => [n, stringify([...i, ...libraries])])),
  ...svelteKitRouting,
}, (a, b) => {
  if (a.startsWith('*') && !b.startsWith('*'))
    return 1
  if (!a.startsWith('*') && b.startsWith('*'))
    return -1
  return a.localeCompare(b)
})

/**
 * Throw an error if any of the values contain multiple wildcards.
 *
 * @see https://github.com/antfu/vscode-file-nesting-config/pull/245
 */
Object.entries(full).forEach(([key, value]) => {
  const items = value.split(',').map(i => i.trim())
  const itemWithMultipleWildcards = items.find(i => i.split('*').length > 2)
  if (itemWithMultipleWildcards)
    throw new Error(`Multiple wildcards are not allowed, found in ${key}: ${itemWithMultipleWildcards}`)
})

const today = new Date().toISOString().slice(0, 16).replace('T', ' ')

fs.writeFileSync('README.md', fs.readFileSync('README.md', 'utf-8')
  .replace(/```json([\s\S]*?)```/, () => {
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
