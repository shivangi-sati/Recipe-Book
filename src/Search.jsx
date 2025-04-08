import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './search.module.css'
const API_Key="208ea255c1114db5bd49ef83001e7554";
const URL="https://api.spoonacular.com/recipes/complexSearch";
export default function Search({foodData,setFooddata}){
    const [query,setQuery]=useState("pizza");
    const navigate= useNavigate();
    useEffect(()=>{ 
        async function fetchApi(){
            navigate("/");
            const res=await fetch(`${URL}?query=${query}&apiKey=${API_Key}`)
            const data=await res.json();
            console.log(data.results)
            setFooddata(data.results)
        }
        fetchApi();


    },[query])

    return(
        <div className={styles.container}>
            <input className={styles.input}
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
                      
            
            />
        </div>
    )
}