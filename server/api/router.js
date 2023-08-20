const express = require('express')
const userRouter = require('./user/router')
const loginRouter = require('./login/router')
const { isLoggedIn } = require('./apiFunctions')

const router = express.Router()

router.use('/login', loginRouter)
router.use((req, res, next) => {
    if (isLoggedIn(req)) {
        next()
    } else {
        res.redirect('/login')
    }
})
router.use('/user', userRouter)


router.get('/', (req, res) => {
    res.send('hello')
})




module.exports = router
