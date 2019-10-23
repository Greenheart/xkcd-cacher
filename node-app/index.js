const express = require('express')
const { Pool } = require('pg')
const pug = require('pug')

const PORT = process.env.PORT || 3000
const pool = new Pool()

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
    const result = await pool
        .query('SELECT num, safe_title, year, img, alt from xkcd')
        .catch(err => console.error(err))

    res.render('index', { comics: result.rows })
})

app.get('/ping', async (req, res) => {
    const database = await pool
        .query('SELECT NOW()')
        .then(res => res || 'online')
        .catch(() => 'Postgres failed to connect')

    res.send({
        environment: process.env.NODE_ENV,
        database
    })
})
;(async () => {
    await pool.connect()

    app.listen(PORT, () => {
        console.log('Node app started at http://localhost:%d', PORT)
    })
})()
