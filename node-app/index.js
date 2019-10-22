const express = require('express')
const { Client } = require('pg')

const PORT = process.env.PORT || 3000

const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
})

const app = express()

app.get('/ping', async (req, res) => {
    const database = await client
        .query('SELECT NOW()')
        .then(res => res || 'online')
        .catch(() => 'Postgres failed to connect')

    res.send({
        environment: process.env.NODE_ENV,
        database
    })

    client.end()
})
;(async () => {
    await client.connect()

    app.listen(PORT, () => {
        console.log('Node app started at http://localhost:%d', PORT)
    })
})()

// TODO: setup express server
// TODO: connect to postgres
// TODO: add two endpoints to turn comics from Postgres into basic HTML page:
// 1. get specific comic with num
// 2. get all comics

// TODO: show comics:

// return image, with alt text
// return h1 with title
// return description
// return time and date
// add any link if it exists

// If all should be returned, simply loop through responses.
