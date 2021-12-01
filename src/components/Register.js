import {useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../css/layout.css';
import '../css/logreg.css';
const Register = () => {
    const usernameRef = useRef()
    const passRef = useRef()
    const pass2Ref = useRef()

    const navigate = useNavigate()

    const [messages, setMessages] = useState([])

    const register = () => {
        axios.post('https://favfood.herokuapp.com/register', {
            username: usernameRef.current.value,
            password: passRef.current.value,
            password2: pass2Ref.current.value
        })
        .then(res => {
            if(res.data.msg === undefined) {
                navigate('/login')
            } else {
                setMessages(res.data.msg)
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
            <div className="divac">
                <label for="password2">Поново унеси шифру:</label>
                <input type="text" name="password2" id="password2" ref={pass2Ref} />
            </div>
            <button className="prijava" onClick={register}>Направи налог</button>
            <div>
                {messages.map(msg => <p className="msg">{msg}</p> )}
            </div>
            <Link to="/login">
                <p className="kareg">Ако већ имаш налог, пријави се овде.</p>
            </Link>
        </section>
    )
}

export default Register