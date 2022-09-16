import axios from 'axios'
import Input from './components/Input'

const api = axios.create({
    baseURL: "http://localhost:3001"
})

async function info(){
    const get = await api.get('/patients')
    const patients = get.data

    document.querySelector("#qtdPatients").innerHTML=patients.length
}

document.addEventListener("DOMContentLoaded",()=>{
    const url = window.location.href
    if(url.split("/")[3]!="cadastro"){
        info()
        setInterval(()=>{
            info() //Atualiza o número de pacientes em tempo real
        },1000)
    }
})

function Home(){
    return(
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Pacientes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th id="qtdPatients"></th>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Home