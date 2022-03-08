<sub><em>Anthony's</em></sub>
<h1>File Nesting Config<sup><em> for VS Code</em></sup></h1>

![](https://user-images.githubusercontent.com/11247099/157142238-b00deecb-8d56-424f-9b20-ef6a6f5ddf99.png)

This is a snippet config making your file tree cleaner by [the file nesting feature](https://code.visualstudio.com/updates/v1_64#_explorer-file-nesting) of VS Code.

Inspired by [this tweet](https://twitter.com/dzhavatushev/status/1500511236634599430) by [Dzhavat Ushev](https://twitter.com/dzhavatushev) and [this tweet](https://twitter.com/jachands/status/1500173829733240844) by [Jacob Hands](https://twitter.com/jachands).

With some scripts to avoid duplication of works. And it's very opinionated by Anthony.

## Use it

Open your VS Code, bring up your `settings.json`, copy-paste the snippet below, and you are good to go :)

```jsonc
  // updated 2022-03-08
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.expand": false,
  "explorer.experimental.fileNesting.patterns": {
    ".gitignore": ".gitattributes",
    "*.js": "$(capture).js.map, $(capture).min.js, $(capture).d.ts",
    "*.jsx": "$(capture).js",
    "*.ts": "$(capture).js, $(capture).*.ts",
    "*.tsx": "$(capture).ts",
    "index.d.ts": "*.d.ts",
    "shims.d.ts": "*.d.ts",
    ".env": "*.env, .env-*",
    "tsconfig.json": "tsconfig.*.json",
    "webpack.config.js": "webpack.config.*",
    "rollup.config.*": "api-extractor.json",
    "package.json": ".circleci*, .editorconfig, .eslint*, .gitpod*, .markdownlint*, .node-version, .nodemon*, .npm*, .prettier*, .stackblitz, .tazerc*, .travis.yml, .vscode*, .watchman*, .yarnrc*, babel.config.*, build.config.*, lerna.json, netlify.toml, package-lock.json, pnpm-*, renovate.*, tsconfig.*, vercel.*, yarn.lock",
    "readme.md": "authors, backers.md, changelog.md, code_of_conduct.md, codeowners, contributing.md, license, security.md, sponsors.md",
    "vite.config.*": ".env*, babel.config.*, jest.config.*, postcss.config.*, tailwind.config.*, unocss.config.*, vitest.config.*, windi.config.*",
    "vue.config.*": ".env*, babel.config.*, jest.config.*, postcss.config.*, tailwind.config.*, unocss.config.*, vitest.config.*, windi.config.*",
    "nuxt.config.*": ".env*, babel.config.*, jest.config.*, postcss.config.*, tailwind.config.*, unocss.config.*, vitest.config.*, windi.config.*",
    "next.config.*": ".env*, babel.config.*, jest.config.*, postcss.config.*, tailwind.config.*, unocss.config.*, vitest.config.*, windi.config.*",
    "svelte.config.*": ".env*, babel.config.*, jest.config.*, postcss.config.*, tailwind.config.*, unocss.config.*, vitest.config.*, windi.config.*",
    "remix.config.*": "remix.*, .env*, babel.config.*, jest.config.*, postcss.config.*, tailwind.config.*, unocss.config.*, vitest.config.*, windi.config.*"
  }
```

## Contributing

The snippet is generated by script, do not directly edit this. Instead, go to `update.mjs`, make changes, and run `node update.mjs`.

## License

MIT
