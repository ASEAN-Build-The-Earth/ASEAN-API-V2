const express = require('express')
const app = express()
const path = require('path')

// JSON Data
const dataAnimePat = require('./data/anime/pat/pat.json')
const dataAnimeDance = require('./data/anime/dance/dance.json')
const dataCat = require('./data/cat/cat.json')
const dataDog = require('./data/dog/dog.json')
const dataBuilds = require('./data/builds/compressed/builds.min.json')
const dataMeme = require('./data/meme/meme.json')
const dataFox = require('./data/fox/fox.json')
const dataBird = require('./data/bird/bird.json')


function randomObject(obj) {
    const arr = Object.values(obj)
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.get('/api/v1/anime/pat', (req, res) => {
    res.json(randomObject(dataAnimePat))
})

app.get('/api/v1/anime/dance', (req, res) => {
    res.json(randomObject(dataAnimeDance))
})

app.get('/api/v1/cat', (req, res) => {
    res.json(randomObject(dataCat))
})

app.get('/api/v1/builds', (req, res) => {
    res.json(randomObject(dataBuilds))
})

app.get('/api/v1/meme', (req, res) => {
    res.json(randomObject(dataMeme))
})

app.get('/api/v1/dog', (req, res) => {
    res.json(randomObject(dataDog))
})

app.get('/api/v1/bird', (req, res) => {
    res.json(randomObject(dataDog))
})

app.get('/api/v1/fox', (req, res) => {
    res.json(randomObject(dataDog))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`The server has started and listening to port ${port}`))
