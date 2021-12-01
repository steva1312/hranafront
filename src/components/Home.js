import Dishes from "./Dishes"
import axios from "axios";
import { useEffect, useState } from "react";
import '../css/layout.css';
import CreateDish from "./CreateDish";

const Home = ({isAuth, user}) => {
    const [dishes, setDishes] = useState([])
    
    const sortDishes = (method) => {
        let sorted
        if(method === '1a') {
            sorted = [...dishes].sort((a,b) => b.likes - a.likes)
        } else if(method === '1b') {
            sorted = [...dishes].sort((a,b) => a.likes - b.likes)
        } else if(method === '2a') {
            sorted = [...dishes].sort((a,b) => a.date < b.date)
        } else if(method === '2b') {
            sorted = [...dishes].sort((a,b) => a.date > b.date)
        }
        setDishes(sorted)
    }

    useEffect(() => {
        axios.get('https://favfood.herokuapp.com/api/dish')
        .then(res => {
            setDishes(res.data.sort((a,b) => b.likes - a.likes))
        })
    }, [])

    const selChange = (e) => {
        sortDishes(e.target.value)
    }

    return(
        <section>
            {isAuth ? <CreateDish /> : null}
            <label htmlFor="sort">Сортирај по:</label>
            <select name="sort" id="sort" onChange={selChange}>
                <option value="1a">Свиђањима (опадајуће)</option>
                <option value="1b">Свиђањима (растуће)</option>
                <option value="2a">Датуму (опадајуће)</option>
                <option value="2b">Датуму (растуће)</option>
            </select> 
            
            <Dishes isAuth={isAuth} user={user} dishes={dishes}/>
        </section>
    )
}

export default Home