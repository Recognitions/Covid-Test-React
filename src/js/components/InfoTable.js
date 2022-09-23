import api from "./Axios"
import DOMContentLoaded from "./DOMContentLoaded"

export async function consultNums(){
    const patientsNum = document.getElementById("patientsNum")
    const patientsResult = await api.get('/patients')
    patientsNum.innerHTML = (patientsResult.data).length
    
    const consultNum = document.getElementById("consultNum")
    const consultResult = await api.get('/consults')
    consultNum.innerHTML = (consultResult.data).length
}

function InfoTable(){
    return(
        <div className="patientsInfo">
            <table>
                <thead>
                    <tr>
                        <th>Pacientes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th id="patientsNum">0</th>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Atendimentos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th id="consultNum">0</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable