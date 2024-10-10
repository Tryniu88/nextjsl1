"use client"

import { useState, useEffect } from "react"

export default function Neighbours({ borders }) {
  const [kraje, setKraje] = useState([])
  const [pobieranie, setPobieranie] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const krajeData = []

        for (const border of borders) {
          const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          const data = await response.json()

          // `data` to tablica, więc musisz dodać pierwszy element
          krajeData.push(data[0]) 
        }

        setKraje(krajeData)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setPobieranie(false)
      }
    }

    getData()
  }, [borders])

  if (pobieranie) {
    return <div>Ładowanie danych...</div>
  }

  if (error) {
    return <div>Wystąpił błąd podczas ładowania danych.</div>
  }

  return (
    <div>
      {kraje && kraje.map((kraj, idx) => (
        <div key={idx}>
          {/* Wyświetlanie nazwy kraju */}
          <h2>Informacje o kraju: {kraj.name.common}</h2>
          
          {/* Opcjonalnie dodanie flagi kraju */}
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
