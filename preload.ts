const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  windowApi: {
    close() {
      ipcRenderer.send('close');
    },
    maximize() {
      ipcRenderer.send('maximize');
    },
    minimize() {
      ipcRenderer.send('minimize');
    },
  },
  fileApi: {
    getFavourites() {
      ipcRenderer.send('get-favourites');
    },
    getFiles(path) {
      ipcRenderer.send('get-files', path);
    },
    openFile(path) {
      ipcRenderer.send('open-file', path);
    },
    addEventListener: (channel, callback) => ipcRenderer.on(channel, callback),
    removeEventListener: (channel) => ipcRenderer.removeAllListeners(channel),
  },
});
