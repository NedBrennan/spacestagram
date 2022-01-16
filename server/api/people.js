const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
    try {
        const person = await User.create({
            username: req.body.name
        })
        res.send(person)
    } catch (err) {
        console.error(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        res.send('hello')
    } catch (err) {
        console.error(err)
    }
})