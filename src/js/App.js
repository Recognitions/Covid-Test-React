import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home'
import Create from './Create'
import Style from '../style.css'

function App(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/cadastro' element={<Create />} />
            </Routes>
        </Router>
    )
}

export default App