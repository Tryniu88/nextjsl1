"use client" // Oznacza, że komponent działa po stronie klienta (wymagane w Next.js dla komponentów z dynamicznym stanem)

import { useState } from "react" // Importowanie hooka `useState` z React, który umożliwia zarządzanie stanem w komponencie

export default function Strona2 () {

  // Definiowanie stanu `status`, który kontroluje aktualny status (początkowo ustawiony na "start")
  const [status, setStatus] = useState("start")

  // Funkcja `changestatus`, która zmienia stan `status` między "start" a "stop"
  function changestatus() {
    // Jeśli obecny `status` to "stop", zmień na "start", w przeciwnym razie ustaw na "stop"
    if (status == "stop")
      setStatus("start")
    else 
      setStatus("stop")
  }

  return (
    <div className="flex items-center justify-center border-2 gap-5">
      {/* Wyświetlanie aktualnego statusu */}
      <h1>{status}</h1>

      {/* Przycisk, który po kliknięciu wywołuje funkcję `changestatus`, zmieniając status */}
      <button onClick={changestatus}>Zmień status</button>
    </div>
  )
}
