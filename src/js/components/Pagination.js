import { render } from "../Create"

function pagination(array,actual,limit){
    let result = []
    let total = Math.ceil(array.length/limit)
    let count = (actual*limit)-limit
    let delimit = count+limit

    if(actual<=total){
        for(let i=count; i<delimit; i++){
            result.push(array[i])
            count++
        }
    }
    console.log(result)
    return result
}

export default pagination