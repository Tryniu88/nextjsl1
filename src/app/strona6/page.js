"use client";

import { useState, useEffect } from "react";

export default function Strona6r() {

const [data, setData] = useState(null)    

useEffect(()=>{

const getData = async () => {

    try{

        const response = await fetch('https://restcountries.com/v3.1/all')
        const dataJson = await response.json()
        setData(dataJson)
        console.log(dataJson)

    
    }catch(error){
    console.log(error)
    
    }
    finally{
    
    }

}

getData()
},[])

    return(
<div className="flex flex-col justify-center items-center h-screen gap-3">

<h1>{data && data[0].name.common}</h1>

</div>

    )

}