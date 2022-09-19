import Input from './Input'
import api from './Axios'
import {render} from '../Create'
import CPF from './CPF'

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
    const update = await api.get(`/patient/edit/${patient.id}/${patient.name}/${patient.cpf}/${patient.wpp}/${patient.nasc}`)
    if(CPF(editCPF.value)==true){
        if(update.data){
            alert("Paciente editado!")
            render()
        }else{
            alert("Impossível editar paciente!")
        }
    }else{
        alert("CPF inválido!")
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