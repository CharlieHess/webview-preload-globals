# webview-preload-globals
This is a minimal repro for an issue where, after a series of navigations, globals injected via preload script go missing.

It seems related to native modules being loaded twice. You'll see the following in the console about 50% of the time:
```
Unable to load preload script: /Users/charlie/webview-redirects/src/preload.js
Error: Module did not self-register.
    at process.module.(anonymous function) [as dlopen] (ELECTRON_ASAR.js:173:20)
    at Object.Module._extensions..node (module.js:598:18)
    at Object.module.(anonymous function) [as .node] (ELECTRON_ASAR.js:173:20)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/charlie/webview-redirects/node_modules/runas/lib/runas.js:4:11)
    at Object.<anonymous> (/Users/charlie/webview-redirects/node_modules/runas/lib/runas.js:47:4)
```

## To Run
```
npm i
electron-forge start
```
Then sign into one of your Slack teams.
