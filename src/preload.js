const SpellCheckHandler = require('electron-spellchecker').SpellCheckHandler;
const spellchecker = new SpellCheckHandler();

window.injectedGlobal = {
  pid: process.pid,
  spellchecker
};
