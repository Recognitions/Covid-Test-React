import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './js/Header'
import App from './js/App'
import Footer from './js/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
function Tick(){
  root.render(
    <React.StrictMode>
      <Header/>
      <App/>
      <Footer/>
    </React.StrictMode>
  )
}

setInterval(Tick, 1000);