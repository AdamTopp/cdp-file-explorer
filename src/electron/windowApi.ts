// @ts-nocheck
const api = {
  close: electron.windowApi.close,
  minimize: electron.windowApi.minimize,
  maximize: electron.windowApi.maximize,
};

export default api;
