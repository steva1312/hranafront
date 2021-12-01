import Dish from "./Dish";

const Dishes = ({dishes, user, isAuth}) => {
    return(
        <div className="dishes">
        {dishes.map(dish=><Dish
            isAuth={isAuth}
            user={user}
            dish={dish} 
            key={dish._id}/>)}
        </div>
    )
}

export default Dishes;