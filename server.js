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

app.get('/submit/:name/:email/:password',(req,res)=>{
    const name = req.params.name
    const email = req.params.email
    const password = req.params.password

    const user = {
        name: name,
        email: email,
        password, password
    }

    res.send(user)
})


server.listen(3001, () => {
    console.log('Servidor local rodando na porta 3001')
})