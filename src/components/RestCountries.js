import Image from 'next/image';
export default function Countries({kraj}) {

return(

<div className ="p-6 border-2 border-red-800">
    <Image src={kraj.flags.png} 
           width={200} 
           height={100} 
           alt={kraj}
           className="w-[100px] , h-[100px]"  />


         


<h1 className = "text-center">{kraj.name.common}</h1>

</div>
)}
