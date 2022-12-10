// @ts-nocheck
export const windowApi = {
  close: electron.windowApi.close,
  minimize: electron.windowApi.minimize,
  maximize: electron.windowApi.maximize,
};

export const fileApi = {
  getFavourites: electron.fileApi.getFavourites,
  addEventListener: electron.fileApi.addEventListener,
  removeEventListener: electron.fileApi.removeEventListener,
};
