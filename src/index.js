import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './js/Header'
import App from './js/App'
import Footer from './js/Footer'
import Teste from './js/Teste'

const root = ReactDOM.createRoot(document.getElementById('root'))
function Render(){
    root.render(
        <React.StrictMode>
            <Header/>
            <App/>
            <Footer/>
        </React.StrictMode>
    )
}

setInterval(Render, 1000);