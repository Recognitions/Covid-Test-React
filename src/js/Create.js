import axios from 'axios'
import Input from './components/Input'

const api = axios.create({
    baseURL: "http://localhost:3001"
})

async function submit(e){
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const cpf = document.getElementById("cpf").value
    const wpp = document.getElementById("wpp").value
    const nasc = document.getElementById("nasc").value

    const get = await api.get(`/submit/${nome}/${cpf}/${wpp}/${nasc}`)
    render()
}

async function render(){
    const get = await api.get('/patients')
    const patients = get.data
    const tbody = document.querySelector(`#tablePatients tbody`)
    tbody.innerHTML=""
    patients.forEach((patient)=>{
        const tr = document.createElement("tr")
        tr.innerHTML=`
            <td><img src="../img/patients/none.jpg" width="30"></td>
            <td>${patient.nome}</td>
            <td>${patient.cpf}</td>
            <td>${patient.wpp}</td>
        `
        tbody.appendChild(tr)
    })
}

document.addEventListener("DOMContentLoaded",render)

function Create(){
    return(
        <div className="patients">
            <form method="get" onSubmit={submit} encType="multipart/form-data">
                <Input type="text" id="nome" placeholder="Nome"/>
                <Input type="text" id="cpf" placeholder="CPF"/>
                <Input type="text" id="wpp" placeholder="Whatsapp"/>
                <Input type="date" id="nasc"/>
                <Input type="submit" id="input" value="Cadastrar"/>
            </form>
            <div>
                <label id="lblName"></label>
                <label id="lblEmail"></label>
                <label id="lblPassword"></label>
            </div>
            <table id="tablePatients">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Create