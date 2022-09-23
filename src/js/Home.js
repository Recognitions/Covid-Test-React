import DOMContentLoaded from './components/DOMContentLoaded'

DOMContentLoaded()

function Home(){
    return(
        <section id="home">
            <table>
                <thead>
                    <tr>
                        <th><h1>Pacientes</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th id="qtdPatients"></th>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Home