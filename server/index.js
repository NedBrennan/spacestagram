const express = require('express')
const path = require('path')
const morgan = require('morgan')
const db = require('./db')
require('dotenv').config()
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app
const bodyParser = require('body-parser')


const createApp = () => {

    app.use(morgan('dev'))

    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", `${process.env.PUBLIC_URL}`); 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      

    app.use('/api', require('./api'))

    app.use(express.static(path.join(__dirname, '..', 'public')))

    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../', 'public/index.html'))
    })

    app.use((err, req, res, next) => {
        console.error(err)
        console.error(err.stack)
        res.status(err.status || 500).send(err.message || "internal server error")
    })
}
const syncDb = () => db.sync()


const startListening = () => {
    const server = app.listen(3000, () => 
        console.log(`Hanging out on port ${3000}`))
}


async function bootApp() {
    await syncDb()
    await createApp()
    await startListening()
}

bootApp()