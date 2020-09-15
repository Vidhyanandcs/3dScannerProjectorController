const cp = require('child_process')
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

const exec_options = {
    cwd: null,
    env: null,
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM'
}

app.get('', (req,res) => {

    try {

        const data = cp.execSync('@mirage -f /home/pi/3dScannerProjectorController/public/img/pattern.png', exec_options);

    } catch (err) {

        res.send('Image not uploaded')

    }

    res.send('Image Opened')
})



app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})