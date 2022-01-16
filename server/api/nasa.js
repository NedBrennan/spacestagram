const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router
const axios = require('axios')
const NASA_API_KEY = process.env.NASA_API_KEY   
const cors = require('cors')

router.use(
    cors({
        origin: 'http://localhost:8080' 
    })
)

router.get('/', async (req, res) => {

    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`, headers)

    res.send(data)
})

router.get('/range', async (req, res) => {

    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${req.query.start_date}&end_date=${req.query.end_date}`, headers)

    res.send(data)
})