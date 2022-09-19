import state from "./State"
import { v4 as uuidv4 } from 'uuid';

const sympList = [
    "Febre",
    "Coriza",
    "Nariz entupido",
    "Cansaço",
    "Tosse",
    "Dor de cabeça",
    "Dores no corpo",
    "Mal estar geral",
    "Dor de garganta",
    "Dificuldade de respirar",
    "Falta de paladar",
    "Falta de olfato",
    "Dificuldade de locomoção",
    "Diarréia"
]

function symp(){
    let sympPlus = 0
    let patientSymp = []
    let r
    let result
    const checkArea = document.getElementById("checkArea")
    const resultArea = document.getElementById("resultArea")
    checkArea.innerHTML=""
    resultArea.innerHTML=""
    sympList.forEach((symp)=>{
        const div = document.createElement("div")
        const uuid = uuidv4()
        div.innerHTML=`
            <Input type="checkbox" id="check${uuid}" value="1"/>
            <label>${symp}</label>
        `
        checkArea.appendChild(div)
        const checkbox = document.querySelector(`#check${uuid}`)
        checkbox.addEventListener("click",()=>{
            if(checkbox.checked==true){
                sympPlus+=1
                patientSymp.push(symp)
            }else{
                sympPlus-=1
                patientSymp.splice(patientSymp.indexOf(symp),1)
            }
            
            if(sympPlus>=9){
                r = state[0]
                result = 0
            }else if(sympPlus>=6 && sympPlus<9){
                r = state[1]
                result = 1
            }else if(sympPlus<6){
                r = state[2]
                result = 2
            }
            resultArea.innerHTML=`
                <label>Sintomas: <b>${sympPlus}</b></label><br>
                <label>Resultado: ${r}</label>
            `
            const consultForm = document.getElementById("consultForm")
            consultForm.dataset.result = result
            consultForm.dataset.symp = patientSymp
            consultForm.dataset.sympPlus = sympPlus
        })
    })
}

export default symp