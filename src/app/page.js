import Namelist from "@/components/namelist";
import Link from 'next/link';

export default function Home() {

const lista = [{imie:"Oskar Podrucki", status:true}, 
               {imie:"Oskar Podrucki",status:false}, 
               {imie:"TestTest", status:false}]


  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <Namelist imie="Dawid Trynkiewicz"     color="text-yellow-400" ok/>
      <Namelist imie="Maksymilian Samobrski" color="text-yellow-400" ok/>
      <Namelist imie="Maksymilian Samobrski" color="text-yellow-400" ok/>
      <Namelist imie="Mateusz Pogoda"        color="text-yellow-400"   />
    {
    lista.map((osoba, idx)=> (
      <Namelist key={idx} imie={osoba.imie} ok={osoba.status} color="text-yellow-400"/>
    ))}
   
   <Link href="/Strona1">Strona1</Link>

    </div>

 

  );
}
