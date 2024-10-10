"use client";

import RestCountries from "@/components/RestCountries";
import { useState, useEffect } from "react";

export default function Strona6r() {

const [data, setData] = useState(null)   
const [error, setError] = useState(false) 
const[loading, setLoading]= useState(true)

useEffect(()=>{

const getData = async () => {

    try{

        const response = await fetch('https://restcountries.com/v3.1/all')
        const dataJson = await response.json()
        setData(dataJson)
        console.log(dataJson)

    
    }catch(error){
    console.log(error)
    setError(true)
    
    }
    finally{
    setLoading(false)

    }

}

getData()
},[])

    return(
<div className="flex flex-wrap justify-center items-center h-screen gap-3">


<h1> {error && "Nie udało się pobrac danych."}</h1>

<h1>{loading && "Trwa Ładowanie"}</h1>


{data &&data.map((kraj, idx) => 

<RestCountries key={idx} kraj={kraj}/>

)}

</div>

    )

}