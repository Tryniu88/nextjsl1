import Image from 'next/image';
export default function Countries({kraj, url}) {

return(

<div className ="p-6 border-2 border-red-800">
    <Image src={url} 
           width={200} 
           height={100} 
           alt={kraj}
           />

<h1 className = "text-center">{kraj}</h1>

</div>





)}