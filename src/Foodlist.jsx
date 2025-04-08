import Fooditem from "./Fooditem";
import styles from "./foodlist.module.css"
export default function Foodlist({foodData, setFoodId}){

    return(
        <div className={styles.container}>
            {foodData.map((food) => (
                <Fooditem key={food.id} setFoodId={setFoodId} food={food}/>
                
                ))}


        </div>
    )
}