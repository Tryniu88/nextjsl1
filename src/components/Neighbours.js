"use client"

import { useState, useEffect } from "react"

export default function Neighbours({ borders }) {
  // Tworzymy stan dla przechowywania danych o krajach (kraje)
  const [kraje, setKraje] = useState([])

  // Tworzymy stan do śledzenia, czy dane są w trakcie pobierania
  const [pobieranie, setPobieranie] = useState(true)

  // Tworzymy stan do obsługi ewentualnych błędów
  const [error, setError] = useState(false)

  // Używamy useEffect do wykonania efektu ubocznego, jakim jest pobranie danych
  useEffect(() => {
    const getData = async () => {
      try {
        // Tworzymy tablicę na dane dotyczące krajów
        const krajeData = []

        // Iterujemy po każdej granicy (border) przekazanej w propsach
        for (const border of borders) {
          // Pobieramy dane o kraju, używając jego kodu granicznego
          const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          const data = await response.json()

          // `data` jest tablicą, więc dodajemy pierwszy element z niej (dane o kraju)
          krajeData.push(data[0]) 
        }

        // Po zakończeniu iteracji aktualizujemy stan z danymi o krajach
        setKraje(krajeData)
      } catch (error) {
        // Obsługujemy błędy i aktualizujemy stan błędu
        console.log(error)
        setError(true)
      } finally {
        // Niezależnie od wyniku, kończymy proces ładowania
        setPobieranie(false)
      }
    }

    // Wywołujemy funkcję pobierania danych
    getData()
  }, [borders]) // Użycie granic jako zależności (jeśli się zmienią, efekt uruchomi się ponownie)

  // Jeśli dane są nadal ładowane, wyświetlamy komunikat
  if (pobieranie) {
    return <div>Ładowanie danych...</div>
  }

  // Jeśli wystąpił błąd, wyświetlamy odpowiedni komunikat
  if (error) {
    return <div>Wystąpił błąd podczas ładowania danych.</div>
  }

  // Gdy dane są załadowane, wyświetlamy informacje o krajach
  return (
    <div>
      {kraje && kraje.map((kraj, idx) => (
        // Wyświetlamy informacje o każdym kraju; używamy idx jako klucza
        <div key={idx}>
          {/* Wyświetlanie nazwy kraju */}
          <h2>Informacje o kraju: {kraj.name.common}</h2>
          
          {/* Jeśli kraj ma flagę, wyświetlamy ją */}
          {kraj.flags && (
            <Image 
              src={kraj.flags.png} 
              alt={`Flaga ${kraj.name.common}`} 
              width={50} 
              height={30} 
            />
          )}
        </div>
      ))}
    </div>
  )
}
