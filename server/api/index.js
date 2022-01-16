const router = require('express').Router()

module.exports = router

router.use('/test', require('./test'))
router.use('/people', require('./people'))
router.use('/nasa', require('./nasa'))

router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})