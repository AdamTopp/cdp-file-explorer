const { app, ipcMain, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 800,
    minWidth: 1250,
    minHeight: 600,
    titleBarStyle: 'hidden',
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');

  ipcMain.on('close', () => {
    app.quit();
  });

  ipcMain.on('minimize', () => {
    win.minimize();
  });

  ipcMain.on('maximize', () => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
}

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});

app.whenReady().then(createWindow);
