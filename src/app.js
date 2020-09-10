const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {

    res.render('index')

})

app.get('/pattern', (req,res) => {

    res.render('pattern')

})

app.listen(3000, () => {
    console.log('server is up and running in port 3000')
})