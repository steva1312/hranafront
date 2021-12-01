import '../css/Dish.css';
import unlikedIcon from '../img/unliked.png' 
import likedIcon from '../img/liked.png' 
import axios from 'axios'
import {useEffect, useState} from 'react'
const Dish = ({dish, user, isAuth}) => {
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        if(isAuth) {
            user.liked.forEach(dishId => {
                if(dishId === dish._id) setLiked(true)
            });
        }
        
    }, [])

    const like = () => {
        if(!isAuth) return
        if(liked) {
            axios.delete(`https://favfood.herokuapp.com/liked/${user._id}`, {id: user._id}).then(res => console.log(res))
            axios.delete(`https://favfood.herokuapp.com/api/dish/like/${dish._id}`).then(res => console.log(res))
            setLiked(false)
        } else {
            axios.put(`https://favfood.herokuapp.com/liked/${user._id}`, {id: user._id}).then(res => console.log(res))
            axios.put(`https://favfood.herokuapp.com/api/dish/like/${dish._id}`).then(res => console.log(res))
            setLiked(true)
        }
        
    }

    return(
        <div className="dish">
            <div className="likecon">
                <img onClick={like} src={liked ? likedIcon : unlikedIcon}></img>
                <h2 className="like">{dish.likes}</h2>
            </div>
            <div className="content">
                <h2 className="imejela">{dish.name}</h2>
                <h3 className="imerestorana">{dish.place}</h3>
                <p className="komentar">{dish.comment}</p>
                <p className ="date">{dish.date}</p>
            </div>
        </div>
    )
}
export default Dish;