<br>

<p align="center">
<img src="./res/logo.png" style="width:100px;" />
</p>

<h1 align="center">File Nesting Updater</h1>

<p align="center">
Auto updater for <a href="https://github.com/antfu/vscode-file-nesting-config" target="_blank"><code>vscode-file-nesting-config</code></a>
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=antfu.file-nesting" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/antfu.file-nesting.svg?color=blue&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>

Config to make your file tree cleaner by [the file nesting feature](https://code.visualstudio.com/updates/v1_64#_explorer-file-nesting) of VS Code.

![](https://user-images.githubusercontent.com/11247099/157142238-b00deecb-8d56-424f-9b20-ef6a6f5ddf99.png)

## Configurations

```json
{
  "fileNestingUpdater.autoUpdate": true,
  "fileNestingUpdater.autoUpdateInterval": 720,
  "fileNestingUpdater.promptOnAutoUpdate": true,
}
```

It will checks for update every 12 hours by default. You can also do it manually by executing command `File Nesting Updater: Update config now`.

## License

MIT
