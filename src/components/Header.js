import { Link } from 'react-router-dom';
import {FaUserCheck} from 'react-icons/fa'

import '../css/Header.css';
import logo from '../img/logo.png'

const Header= ({isAuth, user}) =>{
    return(
        <header >
            <div className="heder">
                <img src={logo} alt="logo"/>
                <h1 className="imesajta">ФавФоод</h1>
            </div>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Почетна</li>
                    </Link>
                    <Link to="/about">
                        <li>О нама</li>
                    </Link>
                    <Link to="/contact">
                        <li>Контакт</li>
                    </Link>
                    {isAuth
                        ?   <li><FaUserCheck /> {user.username}</li>
                        :   <Link to="/login">
                                <li><button>Пријави се</button></li>
                            </Link>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
