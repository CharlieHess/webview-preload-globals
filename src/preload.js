const { ipcRenderer } = require('electron');
const { ContextMenuListener, SpellCheckHandler, setGlobalLogger } = require('electron-spellchecker');

const spellchecker = new SpellCheckHandler();

window.injectedGlobal = {
  spellchecker
};
