<sub><em>Anthony's</em></sub>
<h1>File Nesting Config<sup><em> for VS Code</em></sup></h1>

![](https://user-images.githubusercontent.com/11247099/157142238-b00deecb-8d56-424f-9b20-ef6a6f5ddf99.png)

This is a config snippet making your file tree cleaner by [the file nesting feature](https://code.visualstudio.com/updates/v1_64#_explorer-file-nesting) of VS Code.

Inspired by [this tweet](https://twitter.com/dzhavatushev/status/1500511236634599430) by [Dzhavat Ushev](https://twitter.com/dzhavatushev) and [this tweet](https://twitter.com/jachands/status/1500173829733240844) by [Jacob Hands](https://twitter.com/jachands).

With some scripts to avoid duplication of works. And it's very opinionated.

## Use it

Open your VS Code, bring up your `settings.json`, copy-n-paste the snippet below, and you are good to go :)

```jsonc
  // updated 2022-03-09 06:12
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.expand": false,
  "explorer.experimental.fileNesting.patterns": {
    ".gitignore": ".gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*",
    "*.js": "$(capture).js.map, $(capture).min.js, $(capture).d.ts",
    "*.jsx": "$(capture).js",
    "*.ts": "$(capture).js, $(capture).*.ts",
    "*.tsx": "$(capture).ts",
    "index.d.ts": "*.d.ts",
    "shims.d.ts": "*.d.ts",
    "*.cpp": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.cxx": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.cc": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.c": "$(capture).h",
    "go.mod": ".air*, go.sum",
    "default.nix": "shell.nix",
    "flake.nix": "flake.lock",
    "BUILD.bazel": "*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE",
    "CMakeLists.txt": "*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json",
    ".clang-tidy": ".clang-format",
    ".env": "*.env, .env*, env.d.ts",
    "dockerfile": ".dockerignore, dockerfile*",
    "package.json": ".browserslist*, .circleci*, .codecov, .commitlint*, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .travis*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, api-extractor.json, appveyor*, ava.config.*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile*, dprint.json, firebase.json, grunt*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, playwright.config.*, pm2.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint*, tsup.config.*, turbo*, typedoc*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, workspace.json, xo.config.*, yarn*",
    "rush.json": ".browserslist*, .circleci*, .codecov, .commitlint*, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .travis*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, api-extractor.json, appveyor*, ava.config.*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile*, dprint.json, firebase.json, grunt*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, playwright.config.*, pm2.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint*, tsup.config.*, turbo*, typedoc*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, workspace.json, xo.config.*, yarn*",
    "readme.*": "authors, backers.md, changelog*, citation*, code_of_conduct.md, codeowners, contributing.md, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors.md",
    "cargo.toml": "cargo.lock, rust-toolchain.toml, rustfmt.toml",
    "gemfile": ".ruby-version, gemfile.lock",
    "composer.json": "composer.lock, phpunit.xml*, psalm*.xml",
    "vite.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, index.html, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vue.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "nuxt.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "next.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, next-env.d.ts, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "svelte.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "remix.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, remix.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*"
  },
```

## Contributing

The snippet is generated by script, do not edit the README directly.
Instead, go to `update.mjs`, make changes and then submit a PR. Thanks!

## License

MIT
