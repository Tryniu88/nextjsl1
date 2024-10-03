"use client" // Wskazuje, że komponent działa po stronie klienta (wymagane w Next.js dla komponentów z dynamicznym stanem)

import { useState } from "react" // Importowanie hooka `useState` z React, który umożliwia zarządzanie stanem w komponencie

export default function Strona1() {
  
  // Definiowanie stanu `licznik`, który przechowuje wartość licznika (domyślnie ustawiony na 0)
  const [licznik, setLicznik] = useState(0)

  // Funkcja `handleClick` zwiększa wartość licznika o 1
  function handleClick() {
    setLicznik(licznik + 1); // Zmiana stanu `licznik` na jego aktualną wartość plus 1
  }

  // Funkcja `resumeClick` zmniejsza wartość licznika o 1
  function resumeClick() {
    setLicznik(licznik - 1); // Zmiana stanu `licznik` na jego aktualną wartość minus 1
  }

  return (
    <div className="flex items-center justify-center border-2 gap-5">
      {/* Nagłówek strony */}
      <h1>Strona 1</h1>
      
      {/* Przycisk, który po kliknięciu zwiększa licznik */}
      <button onClick={handleClick}>Podnieś Licznik</button>

      {/* Przycisk, który po kliknięciu zmniejsza licznik */}
      <button onClick={resumeClick}>Odejmij Licznik</button>

      {/* Wyświetlanie aktualnej wartości licznika */}
      <p className="flex justify-center border-2">{licznik}</p>
    </div>
  )
}
