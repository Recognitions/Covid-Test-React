import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3001"
})

async function submit(e){
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const get = await api.get(`/submit/${name}/${email}/${password}`)
    console.log(get.data)
    document.getElementById("lblName").innerHTML=get.data.name
}

async function render(){
    const get = await api.get('/patients')
    const patients = get.data

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
                <input type="text" id="name" placeholder="Nome"/>
                <input type="email" id="email" placeholder="Email"/>
                <input type="password" id="password" placeholder="Senha"/>
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