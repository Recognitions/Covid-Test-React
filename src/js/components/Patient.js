function Patient(props){
    return(
        <tr>
            <td>{props.nome}</td>
            <td>{props.cpf}</td>
            <td>{props.wpp}</td>
        </tr>
    )
}

export default Patient