import Input from './Input'
import api from './Axios'
import {render} from '../Create'
import symp from './Symp'

async function consult(e){
    e.preventDefault()
    
    const consultForm = document.getElementById("consultForm").dataset.id
    const result = document.getElementById("consultForm").dataset.result
    const patientSymp = document.getElementById("consultForm").dataset.symp
    const sympPlus = document.getElementById("consultForm").dataset.sympPlus

    console.log(consultForm,result,patientSymp,sympPlus)

    const consult = await api.get(`/patient/consult/${consultForm}/${result}/${patientSymp}/${sympPlus}`)
    console.log(consult.data)
    render()
}

export function openConsult(){
    document.querySelector(".modal2").style.visibility="visible"
    symp()
}
export function closeConsult(){
    document.querySelector(".modal2").style.visibility="hidden"
}

export function Consult(props){
    return(
        <section className="modal2">
            <form id="consultForm" onSubmit={consult}>
                <div id="checkArea"></div><br/>
                <div id="resultArea"></div>
                <Input type="submit"/>
                <Input type="reset" onClick={closeConsult} id="closeModal" value="Cancelar"/>
            </form>
        </section>
    )
}