const { app, ipcMain, BrowserWindow, shell } = require('electron');
const path = require('path');
const fs = require('fs');

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
    // win.minimize();
    shell.openPath('C:\\Users\\citru\\Downloads\\11934746.pdf');
  });

  ipcMain.on('get-favourites', () => {
    const documents = app.getPath('documents');
    const downloads = app.getPath('downloads');
    const desktop = app.getPath('desktop');
    const documentsName = documents.split('\\').pop();
    const downloadsName = downloads.split('\\').pop();
    const desktopName = desktop.split('\\').pop();

    win.webContents.send('get-favourites-response', [
      { id: 'documents', path: documents, name: documentsName },
      { id: 'downloads', path: downloads, name: downloadsName },
      { id: 'desktop', path: desktop, name: desktopName },
    ]);
  });

  ipcMain.on('get-files', (_, path) => {
    fs.readdir(path, { withFileTypes: true }, (err, f) => {
      const folders = f
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
      const files = f
        .filter((dirent) => !dirent.isDirectory())
        .map((dirent) => dirent.name);
      win.webContents.send('get-files-response', { files, folders });
    });
  });

  ipcMain.on('open-file', (_, path) => {
    shell.openPath(path);
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
