import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3001"
})

async function submit(e){
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const cpf = document.getElementById("cpf").value
    const wpp = document.getElementById("wpp").value
    const nasc = document.getElementById("nasc").value
    const foto = document.getElementById("foto").value

    const get = await api.get(`/submit/${nome}/${cpf}/${wpp}/${nasc}/${foto}`)
    console.log(get.data)
    render()
}

async function render(){
    const get = await api.get('/patients')
    const patients = get.data
    console.log(patients)
    const tbody = document.querySelector(`table tbody`)
    tbody.innerHTML=""
    patients.forEach((patient)=>{
        const tr = document.createElement("tr")
        tr.innerHTML=`
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
        <div>
            <form method="get" onSubmit={submit}>
                <input type="text" id="nome" placeholder="Nome"/>
                <input type="text" id="cpf" placeholder="Nome"/>
                <input type="text" id="wpp" placeholder="Nome"/>
                <input type="date" id="nasc"/>
                <input type="text" id="foto" placeholder="Nome"/>
                <input type="submit" id="input" value="Cadastrar"/>
            </form>
            <div>
                <label id="lblName"></label>
                <label id="lblEmail"></label>
                <label id="lblPassword"></label>
            </div>
            <table>
                <thead>
                    <tr>
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