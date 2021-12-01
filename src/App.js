import { useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'

import './css/App.css';


const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({})
    
    return (
        <Router>
            <Header isAuth={isAuth} user={user} />
            <Routes>
                <Route path="/" exact element={ <Home user={user} isAuth={isAuth} /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/login" element={ <Login updateAuth={(prda) => {
                    setIsAuth(true)
                    setUser(prda)
                }} /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
        </Router>
    );
}

export default App;
