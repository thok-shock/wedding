const express = require('express')
const db = require('../../db')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (username && password) {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                res.status(500).json({message: 'Error occurred while generating password'})
            } else {
                db.query('INSERT INTO user (username, password) VALUES (?, ?);', [username, hash], (err, rows) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json({message: 'Error occurred while creating user account with username and password'})
                    } else {
                        res.status(201).json({id: rows.insertId})
                    }
                })
            }
        })
    } else {
        res.status(400).json({message: 'No username or password was included in the body of the request.'})
    }
})

module.exports = router