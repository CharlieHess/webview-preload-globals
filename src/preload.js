const runas = require('runas');

window.injectedGlobal = {
  runas
};

document.addEventListener('DOMContentLoaded', () => console.log(process.pid));
