import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import logo from '../img/logo.gif'
import Home from './Home'
import Create from './Create'

function App(){
    return(
        <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/teste' element={<Teste />} />
        </Routes>
        </Router>
    )
}

export default App