"use client" // Informacja, że komponent działa po stronie klienta (konieczne w Next.js w przypadku komponentów korzystających ze stanu)

import { useState } from "react" // Importowanie hooka `useState` z React, który umożliwia zarządzanie stanem w komponencie

export default function Strona4 (){

  // Definiowanie stanu `Items` jako tablicy (początkowo pusty string w tablicy)
  const [Items, setItems] = useState([""])
  // Definiowanie stanu `Input`, który przechowuje aktualną wartość wpisaną w pole tekstowe
  const [Input, setInput] = useState("")

  // Funkcja `dodaj`, która dodaje nową wartość (Input) do listy `Items`
  const dodaj = () => {
    setItems([...Items, Input]) // Dodawanie nowego elementu do istniejącej listy za pomocą operatora spread
    setInput("") // Czyszczenie pola tekstowego po dodaniu elementu
  }

  return (
    <div className={"h-screen w-full text-yellow-400 flex items-center justify-center border-2 gap-5"}>   
      {/* Pole tekstowe, którego wartość jest powiązana z `Input`, a każda zmiana aktualizuje stan */}
      <input type="text" value={Input} onChange={(e) => setInput(e.target.value)}></input>

      {/* Przycisk, który po kliknięciu wywołuje funkcję `dodaj` */}
      <button onClick={dodaj}>Dodaj do listy</button>

      {/* Lista nieuporządkowana, w której wyświetlane są elementy z tablicy `Items` */}
      <ul>
        {
          Items.map((item, idx) => 
            <li key={idx}>{item}</li>  // Iterowanie przez każdy element w `Items` i wyświetlanie go jako element <li>, z kluczem opartym na indeksie
          )
        }
      </ul>

    </div>
  )
}
