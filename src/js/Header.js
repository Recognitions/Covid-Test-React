import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3001"
})

async function yeah(e){
    e.preventDefault()
    const get = await api.get('/gete')
    console.log(get.data)
}

function Header(){
    return(
        <header>
            <form method="get" onSubmit={yeah}>
                <button>Botão 1</button>
            </form>
        </header>
    )
}

export default Header