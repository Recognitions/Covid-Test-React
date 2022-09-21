import api from "./Axios"

async function consultNums(){
    const patientsNum = document.getElementById("patientsNum")
    const consultNum = document.getElementById("consultNum")

    const patientsResult = await api.get('/patients')
    patientsNum.innerHTML=(patientsResult.data).length

    const consultResult = await api.get('/patients/consults')
    consultResult.innerHTML=(consultResult.data).length
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{consultNums()},1000)
})

function InfoTable(){
    return(
        <div className="patientsInfo">
            <table>
                <thead>
                    <tr>
                        <th>Pacientes</th>
                        <th>Atendimentos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th id="patientsNum">0</th>
                        <th id="consultNum">0</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable