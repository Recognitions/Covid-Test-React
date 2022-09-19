import api from './components/Axios'
import Input from './components/Input'

async function info(){
    const get = await api.get('/patients')
    const patients = get.data

    document.querySelector("#qtdPatients").innerHTML=`<h2>${patients.length}</h2>`
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
        <section id="home">
            <table>
                <thead>
                    <tr>
                        <th><h1>Pacientes</h1></th>
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