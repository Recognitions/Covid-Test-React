import api from './Axios'
import CPF from './CPF'
import render from './Render'

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

export default submit