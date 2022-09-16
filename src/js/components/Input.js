function format(input){
    const inputId = input.target.id
    
}

function Input(props){
    return(
        <input onKeyDown={format} type={props.type} id={props.id} placeholder={props.placeholder} value={props.value}/>
    )
}

export default Input