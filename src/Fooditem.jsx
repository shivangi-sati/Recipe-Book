
import {useNavigate} from "react-router-dom"
import styles from './fooditem.module.css'

export default function Fooditem({food, setFoodId}){
    const navigate= useNavigate();

    return(
        <div className={styles.container}>

            <img className={styles.img} src={food.image}/>
            <div className={styles.content}>
                <h1>{food.title}</h1>
            </div>
            <div className={styles.buttonContainer}>
            <button onClick={()=>{
            setFoodId(food.id)
            navigate("/fooddetails");

            console.log(food.id)}} className={styles.button}>View Recipe</button>
            
            </div>
            
            
        </div>
    )
}