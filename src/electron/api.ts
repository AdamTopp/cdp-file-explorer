// @ts-nocheck
export const windowApi = {
  close: electron.windowApi.close,
  minimize: electron.windowApi.minimize,
  maximize: electron.windowApi.maximize,
};

export const fileApi = {
  getFavourites: electron.fileApi.getFavourites,
  getFiles: electron.fileApi.getFiles,
  openFile: electron.fileApi.openFile,
  addEventListener: electron.fileApi.addEventListener,
  removeEventListener: electron.fileApi.removeEventListener,
};
