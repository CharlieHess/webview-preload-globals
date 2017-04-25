window.setupGlobal = () => {
  const SpellCheckHandler = require('electron-spellchecker').SpellCheckHandler;
  const spellchecker = new SpellCheckHandler();
  spellchecker.attachToInput();

  window.injectedGlobal = {
    pid: process.pid,
    spellchecker
  };
};
