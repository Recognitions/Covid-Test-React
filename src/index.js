import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './js/Header'
import Footer from './js/Footer'
import App from './js/App'

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
Render()
//setInterval(Render, 1000);