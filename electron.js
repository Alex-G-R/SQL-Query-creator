const { app, BrowserWindow, Menu, Tray } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'res/icon.ico') 
  });

  // Load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'src/index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Hide the default menu
  Menu.setApplicationMenu(null);

  // Hide the console (remove this line if you want to keep the console)
  mainWindow.webContents.closeDevTools();

  // Maximize the window
  mainWindow.maximize();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object.
    mainWindow = null;
  });
}

app.on('ready', createWindow);



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

