import render from './Render'
import {consultNums} from './InfoTable'

function DOMContentLoaded(){
    document.addEventListener("DOMContentLoaded",()=>{
        const url = window.location.href
        if(url.split("/")[3]!="cadastro"){
            // >///<
        }else if(url.split("/")[3]=="cadastro"){
            render(1)
            setInterval(()=>{consultNums()},1000)
        }
    })
}

export default DOMContentLoaded