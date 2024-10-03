"use client"


import { useState } from "react"
export default function Strona1 (){
const[licznik, setLicznik] = useState(0)

function handleClick() {
    setLicznik(licznik + 1);
  }

function resumeClick() {
    setLicznik(licznik - 1);
  
}



    return(
        

        <div className="flex items-center justify-center border-2 gap-5">
        <h1>Strona 1</h1>

        <button onClick={handleClick}>Podnieś Licznik</button>

        <button onClick={resumeClick}>Odejmij Licznik</button>

        <p className="flex justify-center border-2">{licznik}</p>

        </div>
        
        



    )
} 