import Input from './components/Input'
import {Modal,openModal} from './components/Modal'
import {Consult,openConsult} from './components/Consult'
import InfoTable from './components/InfoTable'
import submit from './components/Submit'
import render from './components/Render'
import DOMContentLoaded from './components/DOMContentLoaded'

DOMContentLoaded()

function Create(){
    return(
        <div className="patients">
            <div className="formsArea">
                <form method="get" onSubmit={submit} encType="multipart/form-data">
                    <Input type="text" id="nome" placeholder="Nome" maxLength="50" />
                    <Input type="text" id="cpf" placeholder="CPF" minLength="14" maxLength="14"/>
                    <Input type="text" id="wpp" placeholder="Whatsapp" minLength="14" maxLength="14"/>
                    <Input type="date" id="nasc"/>
                    <Input type="submit" id="input" value="Cadastrar"/>
                </form>
                <InfoTable/>
            </div>
            <div className="divPatients">
                <div className="divInputs" id="divInputs">
                    <Input type="button" value="1"/>
                    <Input type="button" value="2"/>
                    <Input type="button" value="3"/>
                    <Input type="button" value="4"/>
                </div>
                <table id="tablePatients">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Idade</th>
                            <th>Estado</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <Modal/>
            <Consult/>
        </div>
    )
}

export default Create