import React from 'react'
import ReactDOM from 'react-dom/client'
import Input from './Input'
import api from './Axios'
import render from './Render'
import CPF from './CPF'
import Alert from './Alert'

async function edit(e){
    e.preventDefault()
    const editForm = document.getElementById("editForm").dataset.id
    const editName = document.getElementById("editName")
    const editCPF = document.getElementById("editCPF")
    const editWPP = document.getElementById("editWPP")
    const editData = document.getElementById("editData")
    const patient = {
        id: editForm,
        name: editName.value,
        cpf: editCPF.value,
        wpp: editWPP.value,
        nasc: editData.value,
    }
    if(CPF(editCPF.value)==true){
        const update = await api.get(`/patient/edit/${patient.id}/${patient.name}/${patient.cpf}/${patient.wpp}/${patient.nasc}`)
        if(update.data){
            alert("Paciente editado!")
            render(1)
        }else{
            alert("Impossível editar paciente!")
        }
    }else{
        const alert = <Alert class="alert visible" text="CPF Inválido!"/>
        
    }

}

export function openModal(){
    document.querySelector(".modal").style.visibility="visible"
}
export function closeModal(){
    document.querySelector(".modal").style.visibility="hidden"
}


export function Modal(props){
    return(
        <section className="modal">
            <form id="editForm" onSubmit={edit}>
                <b>Nome completo</b>
                <Input type="text" id="editName"/><br/>
                <b>CPF</b>
                <Input type="text" id="editCPF" minLength="14" maxLength="14"/><br/>
                <b>Contato</b>
                <Input type="text" id="editWPP" minLength="14" maxLength="14"/><br/>
                <b>Data de nascimento</b>
                <Input type="date" id="editData"/><br/>
                <Input type="submit"/>
                <Input type="reset" onClick={closeModal} id="closeModal" value="Cancelar"/>
            </form>
        </section>
    )
}