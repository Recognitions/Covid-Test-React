import Input from './Input'

function close(){
    const alert = document.querySelector(".alert")
    alert.classList.remove("visible")
}

function Alert(props){
    return(
        <div className={props.class}>
            <div>
                <h1>{props.text}</h1>
                <Input type="button" onClick={close} value="OK"/>
            </div>
        </div>
    )
}

export default Alert