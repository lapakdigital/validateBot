const express = require('express');
const fs = require('fs')
const app = express()

app.get('/', (req, res) => {
    const data = fs.readFileSync('colab.json', 'utf-8')
    const json = JSON.parse(data)
    res.json(json)

})

app.listen(process.env.PORT)
