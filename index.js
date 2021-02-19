const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Dave is Cool')
})

app.listen(3000, () => console.log('Dave is cool'))