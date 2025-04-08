import styles from "./fooddetail.module.css"
import Ingredient from "./Ingredient.jsx"
import { useEffect, useState } from "react";
const API_Key="208ea255c1114db5bd49ef83001e7554";
export default function FoodDetail({foodId,setFoodId}){
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const [food,setFood]=useState({});
    const [isloading,setIsloading]=useState(true);
    useEffect(()=>{
    
            async function fetchFood(){
                const res= await fetch(`${URL}?apiKey=${API_Key}`);
                const data=await res.json();
                setFood(data)
                setIsloading(false)
                console.log(data)
    
            }
            fetchFood();
        },[foodId])
    return(
        <div>
        <div className={styles.flexbox}>
        <div className={styles.container}>
        <div className={styles.imgcontainer}>
            <h1 className={styles.name}>{food.title}</h1>
            <img className={styles.img}src={food.image}/>

        </div>
        <div className={styles.properties}>
        <span> <strong>Time:{food.readyInMinutes}</strong></span>
        <span><strong>{food.vegetarian? "🥕Vegetarian":"Non-vegetarian"}</strong></span>
        <span><strong>Serves:{food.servings}</strong></span>
        <span><strong>{food.glutenFree?"Gluten Free":"Gluten"}</strong></span>
        <span><strong>💲{food.pricePerServing}</strong></span>
        </div></div>
        <div className={styles.ingredientBox}>
            <br/>
            <h1 className={styles.ingredientHeader}>Ingredients</h1>
            <br/>
            <Ingredient food={food} isloading={isloading}/>
        </div>
        
        
        
        </div>
        <div>
            <ul>
                <br/>
            <h1>Instructons</h1>
            <br/>
            <div className={styles.instruction}>
            { isloading?(<p>loading..</p>):(food.analyzedInstructions[0].steps.map((step)=><li className={styles.list}>{step.step}</li>))}

            
            </div>
            </ul>
        </div>
        </div>
    )
}