import {useState, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import '../css/layout.css';
import '../css/logreg.css';
const Login = ({updateAuth}) => {
    const usernameRef = useRef()
    const passRef = useRef()

    const navigate = useNavigate()

    const [message, setMessage] = useState()

    const login = () => {
        axios.post('https://favfood.herokuapp.com/login', {
            username: usernameRef.current.value,
            password: passRef.current.value,
        })
        .then(res => {
            if(res.data.msg === undefined) {
                updateAuth(res.data)
                navigate('/')
            } else {
                setMessage(res.data.msg)
            }
        })
    }

    return (
        <section>
            <div className="divac">
                <label for="username">Корисничко име:</label>
                <input type="text" name="username" id="username" ref={usernameRef} />
            </div>
            <div className="divac">
                <label for="password">Унеси шифру:</label>
                <input type="text" name="password" id="password" ref={passRef} />
            </div>
            <button className="prijava" onClick={login}>Пријави се</button>
            <p className="msg">{message}</p>
            <Link to="/register">
                <p className="kareg">Ако немаш налог, направи га овде.</p>
            </Link>
        </section>
    )
}

export default Login