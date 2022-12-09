const { app, ipcMain, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    // titleBarStyle: 'hidden',
    // frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');

  ipcMain.on('close', () => {
    console.log('close');
    app.quit();
  });

  ipcMain.on('minimize', () => {
    console.log('close');
    win.minimize();
  });

  ipcMain.on('maximize', () => {
    console.log('close');
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
