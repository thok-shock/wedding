function isLoggedIn(req) {
    if (req.session && req.session.passport && req.session.passport.user) {
        return true
    } else {
        return false
    }
}

module.exports = {isLoggedIn}