// Modulos que controlam o ciclo de vida da aplicação e cria a janela.
const { app, BrowserWindow } = require('electron')

// Mantém uma referência global do objeto window, se você não fizer, a janela
// fechará automaticamente quando o JavaScript for coletado pelo coletor de lixo.
let mainWindow

const createWindow = () => {
  // Cria a janela do browser.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    backgroundColor: '#f5f5f5'
  })

  // carrega a index.html do app.
  mainWindow.loadFile('./dist/index.html')

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

// Este método é chamado quando o Electron terminar a inicialização
// e estiver pronto para criar a janela.
// Algumas APIs só podem ser usadas depois da ocorrencia deste evento.
app.on('ready', createWindow)

// Encerrar quando todas as janelas forem fechadas.
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

// Neste arquivo você pode incluir todo o código do seu processo principal.
// Você também pode escrever em arquivos separados e incluir (com require()) aqui.
