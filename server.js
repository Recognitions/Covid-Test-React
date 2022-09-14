const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/gete',(req,res)=>{
    res.send('Hello Sir')
})

server.listen(4000, () => {
    console.log('Servidor local rodando na porta 4000')
})