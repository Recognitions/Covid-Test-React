import Input from './Input'

async function edit(e){
    e.preventDefault()
    const editName = document.getElementById("editName")
    const editCPF = document.getElementById("editCPF")
    const editWPP = document.getElementById("editWPP")
}

export function openModal(){
    document.querySelector(".modal").style.visibility="visible"
}
export function closeModal(){
    document.querySelector(".modal").style.visibility="hidden"
}


export function Modal(props){
    return(
        <section className="modal">
            <form onSubmit={edit}>
                <b>Nome completo</b>
                <Input type="text" id="editName"/><br/>
                <b>CPF</b>
                <Input type="text" id="editCPF" minLength="14" maxLength="14"/><br/>
                <b>Contato</b>
                <Input type="text" id="editWPP" minLength="14" maxLength="14"/><br/>
                <b>Data de nascimento</b>
                <Input type="date" id="editDate"/><br/>
                <Input type="submit"/>
                <Input type="reset" onClick={closeModal} id="closeModal" value="Cancelar"/>
            </form>
        </section>
    )
}