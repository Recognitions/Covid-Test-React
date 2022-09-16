import axios from 'axios'
import Input from './components/Input'

const api = axios.create({
    baseURL: "http://localhost:3001"
})

async function submit(e){
    e.preventDefault()
    const nome = document.getElementById("nome")
    const cpf = document.getElementById("cpf")
    const wpp = document.getElementById("wpp")
    const nasc = document.getElementById("nasc")


    const get = await api.get(`/submit/${nome.value}/${cpf.value}/${wpp.value}/${nasc.value}`)
    document.querySelector(".patients form").reset()
    render()
}

async function del(id){
    const get = await api.get(`/patient/delete/${id}`)
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
            <td>
                <Input type="button" id="DEL${patient.id}" value="Deletar"/>
            </td>
        `
        tbody.appendChild(tr)
        document.querySelector(`#DEL${patient.id}`).addEventListener("click",()=>{
            del(patient.id)
            render()
        })
    })
}


document.addEventListener("DOMContentLoaded",()=>{
    const url = window.location.href
    if(url.split("/")[3]=="cadastro"){
        render()
    }
})

function Create(){
    return(
        <div className="patients">
            <form method="get" onSubmit={submit} encType="multipart/form-data">
                <Input type="text" id="nome" placeholder="Nome" maxLength="50" />
                <Input type="text" id="cpf" placeholder="CPF" minLength="14" maxLength="14"/>
                <Input type="text" id="wpp" placeholder="Whatsapp" minLength="14" maxLength="14"/>
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
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Create