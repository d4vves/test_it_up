const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Nick is Cool')
})

app.listen(3000, () => console.log('Nick is cool'))