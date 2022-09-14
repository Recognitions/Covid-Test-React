const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const http = require('http')
const server = http.createServer(app)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/gete',(req,res)=>{
    res.send('Hello Sir')
})


server.listen(3001, () => {
    console.log('Servidor local rodando na porta 3001')
})