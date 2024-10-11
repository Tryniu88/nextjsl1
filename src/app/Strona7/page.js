"use client"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function App() {

const [licznik, setLicznik] = useState(0)


function handleClick(){
setLicznik(licznik + 1)
}
function resumeClick(){
setLicznik(licznik - 1)
}



return(

<div className = "flex justify-center items-center h-screen">


  <HoverCard>
    <HoverCardTrigger>
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
{licznik}
</h1>
</HoverCardTrigger>
<HoverCardContent>Licnzik to:{licznik}</HoverCardContent>

</HoverCard>


<Button onClick={handleClick} >+1</Button>
<Button onClick={resumeClick} >-1</Button>

</div>


)}