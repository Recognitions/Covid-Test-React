import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import logo from '../img/logo.gif'
import Home from './Home'
import Create from './Create'
import { Redirect } from 'react-router';

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