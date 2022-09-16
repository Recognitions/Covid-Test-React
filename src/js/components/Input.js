function format(input){
    const inputId = input.target.id
    const inputVal = input.target
    if(inputId=="cpf"){
        if((inputVal.value).length==3 || (inputVal.value).length==7){
            inputVal.value+="."
        }else if((inputVal.value).length==11){
            inputVal.value+="-"
        }else if(input.code=="Backspace"){
            inputVal.value=""
        }
    }else if(inputId=="wpp"){
        if((inputVal.value).length==0){
            inputVal.value+="("
        }else if((inputVal.value).length==3){
            inputVal.value+=")"
        }else if((inputVal.value).length==9){
            inputVal.value+="-"
        }else if(input.code=="Backspace"){
            inputVal.value=""
        }
    }
}

function Input(props){
    return(
        <input onKeyDown={format} type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} minLength={props.minLength} maxLength={props.maxLength}/>
    )
}

export default Input