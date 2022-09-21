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
    const select = "SELECT * FROM pacientes"
    con.query(select,(err,rows,fields)=>{
        res.send(rows)
    })
})
app.get('/consults',(req,res)=>{
    const select = "SELECT * FROM atendimentos"
    con.query(select,(err,rows,field)=>{
        res.send(rows)
    })
})

app.get('/patient/:id',(req,res)=>{
    const id = req.params.id
    const select = `SELECT * FROM pacientes WHERE id=${id}`
    con.query(select,(err,rows,field)=>{
        res.send(rows)
    })
})

app.get('/patient/delete/:id',(req,res)=>{
    const id = req.params.id
    const deletePatient = `DELETE FROM pacientes WHERE id=${id}`
    con.query(deletePatient,(err,rows,field)=>{
        const deleteConsult = `DELETE FROM atendimentos WHERE idPaciente=${id}`
        con.query(deleteConsult,(err,rows,field)=>{
            res.send(rows)
        })
    })
})

app.get('/patient/edit/:id/:nome/:cpf/:wpp/:nasc',(req,res)=>{
    const id = req.params.id
    const nome = req.params.nome
    const cpf = req.params.cpf
    const wpp = req.params.wpp
    const nasc = req.params.nasc
    const select = `SELECT * FROM pacientes WHERE cpf='${cpf}'`
    con.query(select,(err,rows,field)=>{
        if(rows){
            const update = `UPDATE pacientes SET nome='${nome}',cpf='${cpf}',wpp='${wpp}',nasc='${nasc}' WHERE id=${id}`
            con.query(update,(err,rows,field)=>{
                res.send(rows)
                console.log(rows)
            })
        }
    })
})

app.get('/submit/:nome/:cpf/:wpp/:nasc',(req,res)=>{
    const nome = req.params.nome
    const cpf = req.params.cpf
    const wpp = req.params.wpp
    const nasc = req.params.nasc
    const foto = "foto.png"
    const select = `SELECT * FROM pacientes WHERE cpf='${cpf}'`
    con.query(select,(err,rows,fields)=>{
        if(rows==0){
            const insert = `INSERT INTO pacientes(nome,cpf,wpp,nasc,foto,estado) VALUES('${nome}','${cpf}','${wpp}','${nasc}','${foto}',3)`
            con.query(insert)
        }
        res.send(rows)
        console.log(rows)
    })
})

app.get('/patient/consult/:id/:result/:symp/:sympPlus',(req,res)=>{
    const id = req.params.id
    const result = req.params.result
    const symp = req.params.symp
    const sympPlus = req.params.sympPlus
    
    const select = `SELECT * FROM atendimentos WHERE idPaciente=${id}`
    con.query(select,(err,rows,field)=>{
        let sql
        if(rows==0){
            sql = `INSERT INTO atendimentos(idPaciente,resultado,lista,sintomas) VALUES(${id},${result},'${symp}',${sympPlus})`
        }else{
            sql = `UPDATE atendimentos SET resultado=${result},lista='${symp}',sintomas=${sympPlus} WHERE idPaciente=${id}`
        }
        con.query(sql,(err,rows,field)=>{
            const update = `UPDATE pacientes SET estado=${result} WHERE id=${id}`
            con.query(update)
            res.send(rows)
            console.log(rows)
        })
    })
})

server.listen(3001, () => {
    console.log('Servidor local rodando na porta 3001')
})