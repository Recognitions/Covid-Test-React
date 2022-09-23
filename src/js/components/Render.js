import api from './Axios'
import fillInputs from './FillInputs'
import pagination from './Pagination'
import ageFormat from './AgeFormat'
import state from './State'
import {openConsult} from './Consult'
import {openModal} from './Modal'
import del from './Del'

async function render(actual){
    const get = await api.get('/patients')
    const patients = get.data ? (get.data).sort((a,b)=>{return b.id - a.id}) : []
    const limit = 5
    const pagesCount = Math.floor((patients.length)/limit)+1
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
            <td>${ageFormat(patient.nasc)}</td>
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

export default render