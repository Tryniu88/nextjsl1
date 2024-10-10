"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import Neighbours from "@/components/Neighbours"


export default function KrjInfo({params}){

const [kraj, setKraj] = useState({})
const [error, setError] = useState(false)
const [pobieranie, setPobieranie] = useState(true)
// const[status, setStatus] = useState("404")


useEffect(()=>{

    

const getData = async ()=>{

try{
const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.krj}`)
const jsonData = await response.json()
console.log(response)
console.log(jsonData)
setKraj(jsonData[0])

if(/40[4|0]/.test(response.status))
setError(true)

}
catch(error){
setError(true)
console.log(error)
}
finally{
setPobieranie(false)
}





}
getData()
},[])




    return(

<div className = "font-bold flex justify-center p-8">
    {pobieranie && <h1>"Trwa pobieranie danych..."</h1>}
    {error && <h1>Nie udało się pobrać danych.</h1>}
   





{kraj.cca2 !=null && <div className="text-bold flex justify-center flex-col border-4 p-8">
<Image 
src={kraj.flags.png}
width={300}
height={150}
alt={kraj.name.common}
className="w-[100px], h-[100px] "
/>

<h2>Informacje o kraju: {kraj.name.common}</h2>
<h2>Stolica Państwa: {kraj.capital}</h2>
<h2>Populacja: {kraj.population}</h2>

</div>
}

<Neighbours borders={kraj.borders}/>

</div>



    )


}