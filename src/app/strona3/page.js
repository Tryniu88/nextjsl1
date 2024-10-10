"use client" // Wskazuje, że ten komponent działa po stronie klienta (Next.js wymaga tego dla komponentów z dynamicznym stanem)

import { useState } from "react" // Importowanie hooka `useState` z React, aby zarządzać stanem w komponencie

export default function Strona3() {

  // Definiowanie stanu `color`, który będzie kontrolował klasę tła (domyślnie ustawiony na `bg-white`)
  const [color, setColor] = useState("bg-yellow-400")

  // Funkcja `changecolor`, która zmienia wartość `color` między `bg-black` a `bg-white`
  function changecolor() {
    setColor(color === "bg-yellow-400" ? "bg-orange-700" : "bg-yellow-400") // Zmienia kolor: jeśli obecny to czarny, ustawia biały, w przeciwnym razie ustawia czarny
  }

  return (
    <div className={`${color} h-screen w-full text-black flex items-center justify-center gap-5`}>
      {/* Dynamicznie ustawione tło elementu div, w zależności od wartości `color` */}
      
      {/* Przycisk, który po kliknięciu wywołuje funkcję `changecolor`, zmieniając kolor tła */}
      <button onClick={changecolor}>Zmień color</button>
    </div>
  )
}
