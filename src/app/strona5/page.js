"use client"
import { useState } from "react"
export default function Strona4 (){


    const [Items , setItems ] = useState([""])
    const [Input, setInput ] = useState("")
    
    

    

const  dodaj = ()=>{

    setItems([...Items, Input])
    setInput("")
    
 }




    return(
        
        <div className= {"h-screen w-full text-yellow-400 flex items-center justify-center border-2 gap-5"}>
        
      <input type="text" value={Input} onChange={(e)=> setInput(e.target.value)}></input>
      
      <button onClick={dodaj}>Dodaj do listy</button>

<ul>{
    
    
    
    Items.map((item,idx)=>
    <li key ={idx}>{item}</li>
    )}

</ul>



        </div>
        
        



    )
}