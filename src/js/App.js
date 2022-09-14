import logo from '../img/logo.gif'

function App(){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>{"Horário"}</h1>
                <h2>{new Date().toLocaleTimeString()}.</h2>
            </header>
        </div>
    )
}

export default App