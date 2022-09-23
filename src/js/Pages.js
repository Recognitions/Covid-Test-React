import Input from './components/Input'

const pagesArray = [
    {
        url: '/',
        name: 'Home',
        file: 'Home'
    },
    {
        url: '/cadastro',
        name: 'Cadastro',
        file: 'Create'
    }

]

export function pages(){
    const populate = document.querySelector("header div")
    populate.innerHTML=""
    pagesArray.forEach((page)=>{
        const a = document.createElement("a")
        a.href=page.url
        a.innerHTML=`<Input type="button" value=${page.name}>`
        populate.appendChild(a)
    })
}