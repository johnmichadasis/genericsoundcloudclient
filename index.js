const {app, BrowserWindow} = require('electron');
const {url} = require('url');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: './icons/soundcloud.ico',
//    backgroundColor: '#fd4202',
	backgroundColor: '#1c1c1c',
    title: 'Soundcloud'
});
win.removeMenu()
win.loadURL('https://soundcloud.com/')
win.on('page-title-updated', (evt) => {
  evt.preventDefault();
});

win.on('closed', function(){
    win = null;
});

}


app.on('ready', createWindow)

app.on('window-all-closed', function(){
    if(process.platform != 'darwin'){
        app.quit();
    }
})

app.on('activate', function(){
    if(win === null) {
        createWindow();
    }
})