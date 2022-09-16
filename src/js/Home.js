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

document.addEventListener("DOMContentLoaded",info)

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