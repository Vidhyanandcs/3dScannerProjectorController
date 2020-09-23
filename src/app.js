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

        const data = cp.execSync('sudo export DISPLAY=:0' , function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
        
        const data1 = cp.execSync('sudo gpicview  /home/pi/3dScannerProjectorController/public/img/pattern.png', function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

    } catch (err) {

        res.send('Image not uploaded')

    }

    res.send('Image Opened')
})



app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})