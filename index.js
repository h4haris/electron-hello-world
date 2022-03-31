const { app, BrowserWindow } = require("electron")
const url = require("url")

// We can directly use win variable inside boot() without defining it, 
// But for good practice, make sure to define variable as global so to be considered while GC of node / electron
let win = null

function boot() {
    console.log(process.type)
        // win = new BrowserWindow()
    win = new BrowserWindow({
            width: 1000,
            height: 500,
            resizable: false,
            // frame: false
        })
        // win.loadURL(url.format({
        //     pathname: 'index.html',
        //     slashes: true
        // }))


    // Load a remote URL
    //win.loadURL("https://google.com")

    // load a local html file
    win.loadURL(`file://${__dirname}/index.html`)

    win2 = new BrowserWindow({
        width: 500,
        height: 250,
        // resizable: false,
        parent: win
    })

    win2.loadURL("https://google.com")

    win2.on("closed", _ => {
        console.log('win2 was closed')
    })
}

app.on('ready', boot)