const {app, BrowserWindow} = require('electron');
const {url} = require('url');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
    width: 1200,
    height: 750,
    icon: './soundcloud.ico',
    backgroundColor: '#fd4202',
    title: 'SoundCloud'
});
win.removeMenu()
win.loadURL('https://soundcloud.com/')

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