import Namelist from "@/components/namelist"; // Importowanie komponentu Namelist z lokalnego folderu components
import Link from 'next/link'; // Importowanie komponentu Link z Next.js do obsługi nawigacji po stronie klienta

export default function Home() {

  // Definiowanie tablicy `lista`, która zawiera obiekty z właściwościami `imie` (imię) i `status` (czy ok, czy nie).
  const lista = [
    { imie: "Oskar Podrucki", status: true },   // Pierwszy wpis z imieniem i statusem ok (true)
    { imie: "Oskar Podrucki", status: false },  // Drugi wpis z tym samym imieniem, ale statusem false (nieok)
    { imie: "TestTest", status: false }         // Trzeci wpis z innym imieniem i statusem false (nieok)
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      
      {/* Wywołania komponentu Namelist z różnymi imionami i statusami */}
      <Namelist imie="Dawid Trynkiewicz"     color="text-yellow-400" ok /> 
      <Namelist imie="Maksymilian Samobrski" color="text-yellow-400" ok />
      <Namelist imie="Maksymilian Samobrski" color="text-yellow-400" ok />
      <Namelist imie="Mateusz Pogoda"        color="text-yellow-400" />

      {/* Iteracja po tablicy `lista` i generowanie komponentów Namelist dla każdej osoby */}
      {
        lista.map((osoba, idx) => (
          <Namelist 
            key={idx}             // Używanie indeksu jako unikalnego klucza dla każdego elementu
            imie={osoba.imie}     // Przekazywanie imienia
            ok={osoba.status}     // Przekazywanie statusu (ok lub nieok)
            color="text-yellow-400" // Przekazywanie koloru tekstu
          />
        ))
      }

      {/* Link do strony o nazwie Strona1 */}
      <Link href="/Strona1">Strona1</Link>

    </div>
  );
}
