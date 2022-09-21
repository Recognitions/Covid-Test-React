import api from './components/Axios'
import Input from './components/Input'
import {Modal,openModal} from './components/Modal'
import state from './components/State'
import {Consult,openConsult} from './components/Consult'
import CPF from './components/CPF'
import pagination from './components/Pagination'
import fillInputs from './components/FillInputs'

async function submit(e){
    e.preventDefault()
    const nome = document.getElementById("nome")
    const cpf = document.getElementById("cpf")
    const wpp = document.getElementById("wpp")
    const nasc = document.getElementById("nasc")
    if(nome.value!=""&&cpf.value!=""&&wpp.value!=""&&nasc.value!=""){
        if(CPF(cpf.value)==true){
            const get = await api.get(`/submit/${nome.value}/${cpf.value}/${wpp.value}/${nasc.value}`)
            if((get.data).length==0){
                document.querySelector(".patients form").reset()
                render(1)
            }else{
                alert("Impossível cadastrar paciente")
            }
        }else{
            alert("CPF inválido!")
        }

    }
}

async function del(id){
    const get = await api.get(`/patient/delete/${id}`)
}

export async function render(actual){
    const get = await api.get('/patients')
    const patients = get.data ? (get.data).sort((a,b)=>{return b.id - a.id}) : []
    const limit = 5
    const actualPage = 1
    const pagesCount = Math.floor((patients.length)/limit)+1
    console.log(pagesCount, patients.length, actual)
    
    fillInputs(pagesCount,limit)
    
    const tbody = document.querySelector(`#tablePatients tbody`)
    tbody.innerHTML=""
    const page = pagination(patients,actual,limit)
    page.forEach((patient)=>{
        const tr = document.createElement("tr")
        tr.title=patient.nome
        tr.innerHTML=`
            <td><img src="../img/patients/none.jpg" width="30"></td>
            <td>${(patient.nome).substr(0,((patient.nome).indexOf(" ")))}</td>
            <td>${patient.cpf}</td>
            <td>${patient.wpp}</td>
            <td>${patient.nasc}</td>
            <td>${state[patient.estado]}</td>
            <td class="inputArea">
                <Input type="button" id="ATEN${patient.id}" value="Atender"/>
                <Input type="button" id="EDIT${patient.id}" value="Editar"/>
                <Input type="button" id="DEL${patient.id}" value="Deletar"/>
            </td>
        `
        tbody.appendChild(tr)
        document.querySelector(`#ATEN${patient.id}`).addEventListener("click",()=>{
            const consultForm = document.getElementById("consultForm")
            consultForm.dataset.id = patient.id
            consultForm.dataset.result = ""
            consultForm.dataset.symp = ""
            consultForm.dataset.sympPlus = ""
            openConsult()
        })
        document.querySelector(`#DEL${patient.id}`).addEventListener("click",()=>{
            del(patient.id)
            render(1)
        })
        document.querySelector(`#EDIT${patient.id}`).addEventListener("click",()=>{
            const editForm = document.getElementById("editForm")
            const editName = document.getElementById("editName")
            const editCPF = document.getElementById("editCPF")
            const editWPP = document.getElementById("editWPP")
            const editData = document.getElementById("editData")

            editName.value = patient.nome
            editCPF.value = patient.cpf
            editWPP.value = patient.wpp
            editData.value = patient.nasc
            editForm.dataset.id = patient.id

            openModal()
        })
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    const url = window.location.href
    if(url.split("/")[3]=="cadastro"){
        render(1)
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
            <div className="divPatients">
                <div className="divInputs" id="divInputs">
                    <Input type="button" value="1"/>
                    <Input type="button" value="2"/>
                    <Input type="button" value="3"/>
                    <Input type="button" value="4"/>
                </div>
                <table id="tablePatients">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Idade</th>
                            <th>Estado</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <Modal/>
            <Consult/>
        </div>
    )
}

export default Create