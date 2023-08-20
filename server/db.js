const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DB
})

module.exports = db