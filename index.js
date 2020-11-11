const express = require('express')
const app = express()
const database = require('./database')
const routes = require('./routes')

const db = Promise.resolve(database.connect())

app.use(express.json())
app.use(routes)

app.listen(8080, () => {
    console.log('serveur connect')
})