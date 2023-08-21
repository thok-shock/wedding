const express = require('express')
const guestRouter = require('./guest/router')

const router = express.Router()

router.use('/guest', guestRouter )

router.get('/', (req, res) => {
    res.send('hello')
})




module.exports = router
