// Modulos que controlam o ciclo de vida da aplicação e cria a janela.
const { app, BrowserWindow } = require('electron')

// Mantém uma referência global do objeto window, se você não fizer, a janela
// fechará automaticamente quando o JavaScript for coletado pelo coletor de lixo.
let mainWindow

function createWindow () {
  // Cria a janela do browser.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true
  })

  // carrega a index.html do app.
  mainWindow.loadFile('index.html')

  // Abre o DevTools.
  mainWindow.webContents.openDevTools()

  // Emitido quando a janela é fechada.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
