import axios from 'axios'
const api = axios.create({
    baseURL: "http://127.0.0.1:4000"
})

async function yeah(e){
    e.preventDefault()
    const get = await api.get('/get')
    console.log(get)
}

function Header(){
    return(
        <header>
            <form onSubmit={yeah}>
                <button>Botão 1</button>
            </form>
        </header>
    )
}

export default Header