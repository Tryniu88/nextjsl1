"use client" // Wskazuje, że ten komponent działa po stronie klienta (Next.js wymaga tego dla komponentów z dynamicznym stanem)

import { useState } from "react" // Importowanie hooka `useState` z React, aby zarządzać stanem w komponencie

export default function Strona3() {

  // Definiowanie stanu `color`, który będzie kontrolował klasę tła (domyślnie ustawiony na `bg-white`)
  const [color, setColor] = useState("bg-white")

  // Funkcja `changecolor`, która zmienia wartość `color` między `bg-black` a `bg-white`
  function changecolor() {
    setColor(color === "bg-black" ? "bg-white" : "bg-black") // Zmienia kolor: jeśli obecny to czarny, ustawia biały, w przeciwnym razie ustawia czarny
  }

  return (
    <div className={`${color} h-screen w-full text-yellow-400 flex items-center justify-center border-2 gap-5`}>
      {/* Dynamicznie ustawione tło elementu div, w zależności od wartości `color` */}
      
      {/* Przycisk, który po kliknięciu wywołuje funkcję `changecolor`, zmieniając kolor tła */}
      <button onClick={changecolor}>Zmień color</button>
    </div>
  )
}
