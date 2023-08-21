const express = require('express')
const db = require('../../db')

const router = express.Router()

router.get('/', (req, res) => {
    const last_name = req.query.lastName
    const last_four = req.query.lastFour
    if (!last_name || !last_four) {
        res.status(400).json({err: 'Missing last name or last 4 digits of phone number in request'})
    } else {
        db.query('SELECT * FROM guest WHERE last_name = ? AND last_four = ?', [last_name, last_four], (err, rows) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            } else {
                res.json(rows)
            }
        })
    }
})

router.get('/all', (req, res) => {
    db.query('SELECT * FROM guest;', [], (err, rows) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.json(rows)
        }
    })
})

module.exports = router