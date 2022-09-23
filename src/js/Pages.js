import Input from './components/Input'

const pages = [
    {
        url: '/',
        name: 'Home'
    },
    {
        url: '/cadastro',
        name: 'Cadastro'
    }

]

function p(){
    pages.forEach((page)=>{
        document.getElementById("populate").innerHTML+=`
            <a><Input type="button" title="${page.name}"/></a>
        `
    })
}

document.addEventListener("DOMContentLoaded",p)

function Pages(props){
    return(
        <div id="populate">
        </div>
    )
}

export default Pages