const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router
const axios = require('axios')
const NASA_API_KEY = process.env.NASA_API_KEY

router.get('/', async (req, res) => {
    console.log(NASA_API_KEY)

    const headers = {
        'Access-Control-Allow-Origin': '*'
    }

    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`, headers)

    res.set('Access-Control-Allow-Origin', ['*'])
    res.send(data)
})

router.get('/:start_date?:end_date', async (req, res) => {

    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}?start_date=${req.params.start_date}?end_date=${req.params.end_date}`)

    res.send(data)
})