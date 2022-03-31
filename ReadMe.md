# Electron Hello World

First Project for Electron Getting Started from the very basics.

## Electron

Electron is a framework for building desktop applications using JavaScript, HTML, and CSS. By embedding Chromium and Node.js into its binary, Electron allows you to maintain one JavaScript codebase and create cross-platform apps that work on Windows, macOS, and Linux — no native development experience required.

## Electron Processes
- Electron work like Chrome browser and uses separate processes for main and renderer
- Two processes Main, renderer
- main:     
    main process is entry point boot up your app
    manages all BrowserWindows and events like creating native menus
- renderer: 
    used for ui rendering
    manages Document object APIs, some node and electron APIs

## Development server

```bash
npm install -g electron
```

1. Install electron globally 

2. Run below command for starring application.

```bash
electron .
```

## Reference
See Documentation [Here](https://www.electronjs.org/docs/latest/api/browser-window)