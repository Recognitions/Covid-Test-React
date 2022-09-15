import Button from './components/Button'

function Header(){
    return(
        <header>
            <a href="/"><Button title="Home"/></a>
            <a href="/cadastro"><Button title="Cadastro"/></a>
        </header>
    )
}

export default Header