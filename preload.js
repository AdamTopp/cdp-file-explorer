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
      ipcRenderer.send('getFavourites');
    },
    addEventListener: (channel, callback) => ipcRenderer.on(channel, callback),
    removeEventListener: (channel) => ipcRenderer.removeAllListeners(channel),
  },
});
