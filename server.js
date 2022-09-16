var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "covid"
});
con.connect(()=>{console.log("Conectado ao banco de dados!");})
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const http = require('http')
const server = http.createServer(app)
var formidable = require('formidable');
var fs = require('fs')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/patients',(req,res)=>{
    const sql = `SELECT * FROM pacientes`
    con.query(sql,(err,rows,fields)=>{
        res.send(rows)
        return rows
    })
})

app.get('/patient/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM pacientes WHERE id=${id}`
    con.query(sql,(err,rows,field)=>{
        res.send(rows)
        return rows
    })
})

app.get('/submit/:nome/:cpf/:wpp/:nasc',(req,res)=>{
    const nome = req.params.nome
    const cpf = req.params.cpf
    const wpp = req.params.wpp
    const nasc = req.params.nasc
    const foto = "foto.png"

    const sql = `INSERT INTO pacientes(nome,cpf,wpp,nasc,foto,estado) VALUES('${nome}','${cpf}','${wpp}','${nasc}','${foto}',0)`
    con.query(sql,(err,rows,fields)=>{
        res.send(rows)
        return rows
    })

})

server.listen(3001, () => {
    console.log('Servidor local rodando na porta 3001')
})