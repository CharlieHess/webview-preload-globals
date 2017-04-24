# webview-preload-globals
This is a minimal repro for https://github.com/electron/electron/issues/4025. After a series of navigations in a `webview` with a `preload` script, we attempt to load native modules twice and get the following about 50% of the time:

```
Unable to load preload script: /Users/charlie/webview-preload-globals/src/preload.js
Error: Module did not self-register.
    at process.module.(anonymous function) [as dlopen] (ELECTRON_ASAR.js:173:20)
    at Object.Module._extensions..node (module.js:598:18)
    at Object.module.(anonymous function) [as .node] (ELECTRON_ASAR.js:173:20)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/charlie/webview-preload-globals/node_modules/runas/lib/runas.js:4:11)
    at Object.<anonymous> (/Users/charlie/webview-preload-globals/node_modules/runas/lib/runas.js:47:4)
```

In the `webview`'s devTools, check `window.injectedGlobal` and you'll see that it's no longer there. 

## To Reproduce
```
npm i
electron-forge start
```
Then sign into one of your Slack teams. It might take a couple attempts.
