const express = require('express')
const passport = require('passport')

const router = express.Router()

router.post('/', passport.authenticate("local"), (req, res) => {
    res.json(req.user)
})

router.get('/', (req, res) => {
    if (req.session && req.session.passport && req.session.passport.user) {
        res.json(req.session.passport.user)
    } else {
        res.status(401).json({message: 'No user is logged in'})
    }
})

module.exports = router