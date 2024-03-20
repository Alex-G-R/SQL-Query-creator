const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'src/index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Maximize the window
  mainWindow.maximize();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

