"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Neighbours({ borders }) {


const[kraje, setKraje] = useState([])
const[pobieranie, setPobieranie] = useState(true)
const[error, setError] = useState(false)



useEffect(()=>{

const getData = async() => {


try{

const krajeData=[];

for (const border of borders) {


const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
const data = await response.json()
krajeData.push(data)
}
setKraje(krajeData)

}
catch(error){
console.log(error)
setError(true)
}

finally{
setPobieranie(false)
}


}
getData()
},[borders])


return(


<div>

{kraje && kraje.map((kraj, idx)=>
<h2>{}</h2>
)}


</div>


)


}