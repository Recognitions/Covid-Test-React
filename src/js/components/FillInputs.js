import {v4 as uuidv4} from 'uuid'
import {render} from '../Create'
function fillInputs(pagesCount,limit){
    const divInputs = document.querySelector("#divInputs")
    divInputs.innerHTML=""
    for(let i=1; i<=pagesCount; i++){
        const id = uuidv4()
        
        const input = document.createElement("input")
        input.type="button"
        input.id=`PAGE${id}`
        input.value=i
        divInputs.appendChild(input)
        document.querySelector(`#PAGE${id}`).addEventListener("click",()=>{
            render(i*Math.floor(limit/5))
        })

    }
}

export default fillInputs