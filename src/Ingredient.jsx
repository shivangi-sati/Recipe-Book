import Item from "./Item.jsx"
import styles from "./ingredient.module.css"
export default function Ingredient({food,isloading}){
    
return(
    <div className={styles.ingredientContainer}>
        {isloading?<p>loading...</p>:(food.extendedIngredients.map((item)=>
        <Item item={item}/>))}

        
    </div>

)

}