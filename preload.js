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
});
