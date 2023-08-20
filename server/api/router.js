const express = require('express')

const router = express.Router()

// router.use('/login', loginRouter)

router.get('/', (req, res) => {
    res.send('hello')
})




module.exports = router
