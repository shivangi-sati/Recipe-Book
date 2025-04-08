import {BrowserRouter, Link,Route,Routes,useNavigate} from "react-router-dom"
import { useState } from 'react'
import FoodDetail from './FoodDetail.jsx';
import Search from "./Search.jsx"
import Nav from './Nav.jsx';
import styles from "./global.module.css"
import Foodlist from "./Foodlist.jsx"

function App() {
   const [foodData,setFooddata]=useState([]);
       const [foodId,setFoodId]=useState("658615")


  return (
    <div>
      <Nav/>
      <BrowserRouter>
      <Search foodData={foodData} setFooddata={setFooddata}/>
      <Routes>
      <Route path="/" element={<Foodlist setFoodId={setFoodId} foodData={foodData}/>}/>
      <Route path="/fooddetails" element={<FoodDetail foodId={foodId} setFoodId={setFoodId}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
