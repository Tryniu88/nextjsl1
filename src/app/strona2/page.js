"use client"


import { useState } from "react"
export default function Strona2 (){

const [status, setStatus] = useState("start")



function changestatus(){

if(status =="stop")
setStatus("start")
else 
setStatus("stop")


}

    return(
        





        <div className="flex items-center justify-center border-2 gap-5">
        
        <h1>{status}</h1>

        <button onClick={changestatus}>Zmień status</button>
        </div>
        
        



    )
} 