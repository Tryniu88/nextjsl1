"use client"
import { useState } from "react"
export default function Strona4 (){


    const [BgColor , setBgColor ] = useState("bg-white")
    const [Input, setInput ] = useState("")
    
    

    

function ChangeBgColor(){

    setBgColor(Input)
    
 }




    return(
        
        <div className= {`${BgColor}h-screen w-full text-yellow-400 flex items-center justify-center border-2 gap-5`}>
        
      <input onChange={(e)=> setInput(e.target.value)} className="text-yellow-400" type="text" placeholder="Wpisz klase coloru Tailwind"></input>
      
      <button onClick={ChangeBgColor}>Zmien kolor</button>

        </div>
        
        



    )
}