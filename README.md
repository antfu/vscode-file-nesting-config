<sub><em>Anthony's</em></sub>
<h1>File Nesting Config<sup><em> for VS Code</em></sup></h1>

![](https://user-images.githubusercontent.com/11247099/157142238-b00deecb-8d56-424f-9b20-ef6a6f5ddf99.png)

This is a config snippet making your file tree cleaner by [the file nesting feature](https://code.visualstudio.com/updates/v1_64#_explorer-file-nesting) of VS Code.

Inspired by [this tweet](https://twitter.com/dzhavatushev/status/1500511236634599430) by [Dzhavat Ushev](https://twitter.com/dzhavatushev) and [this tweet](https://twitter.com/jachands/status/1500173829733240844) by [Jacob Hands](https://twitter.com/jachands).

With some scripts to avoid duplication of works. And it's very opinionated.

## Use it

Open your VS Code, bring up your `settings.json`, copy-n-paste the snippet below, and you are good to go :)

```jsonc
  // updated 2022-03-08 06:23
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
    "go.mod": "go.sum",
    ".env": "*.env, .env*, env.d.ts",
    "dockerfile": "dockerfile*, .dockerignore",
    "package.json": ".browserslist*, .circleci*, .codecov, .commitlintrc*, .editorconfig, .eslint*, .flowconfig, .gitlab*, .gitpod*, .huskyrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .stylelint*, .tazerc*, .textlintrc*, .travis*, .vscode*, .watchman*, .yamllint*, .yarnrc*, api-extractor.json, appveyor*, ava.config.*, azure-pipelines*, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile.*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, netlify*, nx.*, package-lock.json, playwright.config.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint.*, tsup.config.*, turbo*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, yarn*",
    "readme.md": "authors, backers.md, changelog*.md, code_of_conduct.md, codeowners, contributing.md, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors.md",
    "cargo.toml": "cargo.lock, rust-toolchain.toml, rustfmt.toml",
    "gemfile": "gemfile.lock, .ruby-version",
    "vite.config.*": "index.html, *.env, .babelrc, .codecov, .env*, .mocha*, .postcssrc.*, api-extractor.json, ava.config.*, babel.config.*, cypress.json, env.d.ts, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vue.config.*": "*.env, .babelrc, .codecov, .env*, .mocha*, .postcssrc.*, api-extractor.json, ava.config.*, babel.config.*, cypress.json, env.d.ts, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "nuxt.config.*": "*.env, .babelrc, .codecov, .env*, .mocha*, .postcssrc.*, api-extractor.json, ava.config.*, babel.config.*, cypress.json, env.d.ts, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "next.config.*": "*.env, .babelrc, .codecov, .env*, .mocha*, .postcssrc.*, api-extractor.json, ava.config.*, babel.config.*, cypress.json, env.d.ts, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "svelte.config.*": "*.env, .babelrc, .codecov, .env*, .mocha*, .postcssrc.*, api-extractor.json, ava.config.*, babel.config.*, cypress.json, env.d.ts, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "remix.config.*": "remix.*, *.env, .babelrc, .codecov, .env*, .mocha*, .postcssrc.*, api-extractor.json, ava.config.*, babel.config.*, cypress.json, env.d.ts, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*"
  }
```

## Contributing

The snippet is generated by script, do not edit the README directly.
Instead, go to `update.mjs`, make changes and then submit a PR. Thanks!

## License

MIT
