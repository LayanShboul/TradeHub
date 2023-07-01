import Slideshow from "../Components/slideshow";
import Card from "../Components/card";
import { useState , useEffect } from "react";


function HomePage()
{

      
      const [items,setItems] = useState([])
      const [category, setCategory] = useState([])
      
      useEffect(() => {
      ( async () => {
      const response = await fetch('http://localhost:3002/api/data');
      const data = await response.json()
      if(data){
      setItems(data[1])
      setCategory(data[0])
      }
      } )()
      },[])
      
    
      
     
     
return <div>
       <Slideshow/>
       <Card/>

      </div>
}

export default HomePage;

