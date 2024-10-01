import Namelist from "@/components/namelist";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
    <Namelist imie="Dawid Trynkiewicz"     color="text-yellow-400" ok/>
    <Namelist imie="Maksymilian Samobrski" color="text-yellow-400" ok/>
    <Namelist imie="Maksymilian Samobrski" color="text-yellow-400" ok/>
    <Namelist imie="Mateusz Pogoda" color="text-red-700"/>
    </div>


  );
}
