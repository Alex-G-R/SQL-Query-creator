const { app, BrowserWindow, Menu, Tray } = require('electron');
const path = require('path');

let mainWindow;

function createMainWindow() {
  // Create the main window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    frame: false,
    icon: path.join(__dirname, 'res/icon.ico')
  });

  mainWindow.loadFile('src/index.html');

  Menu.setApplicationMenu(null);

  mainWindow.webContents.closeDevTools();

  // Show the window once it's ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.maximize();
}

app.on('ready', () => {
  createMainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
