import axios from "axios"
import { useRef, useState } from "react"


const CreateDish = () => {
    const nameRef = useRef()
    const placeRef = useRef()
    const comRef = useRef()

    const [message, setMessage] = useState(null)

    const create = () => {
        axios.post('https://favfood.herokuapp.com/api/dish', {
            name: nameRef.current.value,
            place: placeRef.current.value,
            comment: comRef.current.value
        })
        .then(res => {
            if(res.data.msg) {
                setMessage(res.data.msg)
            } else {
                setMessage('Јело успешно додато.')
            }
        })
    }

    return (
        <div>
            <div>
                <label for="name">Име јела:</label>
                <input type="text" name="name" id="name" ref={nameRef} />
            </div>
            <div>
                <label for="place">Име места:</label>
                <input type="text" name="place" id="place" ref={placeRef} />
            </div>
            <div>
                <label for="com">Коментар:</label>
                <input type="text" name="com" id="com" ref={comRef} />
            </div>
            <button onClick={create}>Додај јело</button>
            <p className="msg">{message}</p>
        </div>
    )
}

export default CreateDish