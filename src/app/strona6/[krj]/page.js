"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import Neighbours from "@/components/Neighbours" // Importujemy komponent Neighbours do wyświetlania krajów sąsiednich

// Tworzymy komponent KrjInfo
export default function KrjInfo({ params }) {

    // Stan na przechowywanie danych o wybranym kraju
    const [kraj, setKraj] = useState({})
    
    // Stan do obsługi błędów
    const [error, setError] = useState(false)
    
    // Stan do śledzenia, czy dane są w trakcie ładowania
    const [pobieranie, setPobieranie] = useState(true)

    useEffect(() => {
        // Definiujemy asynchroniczną funkcję do pobierania danych o kraju
        const getData = async () => {
            try {
                // Wysyłamy zapytanie do API RestCountries, aby pobrać dane o kraju, którego kod przekazano w params
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.krj}`)
                const jsonData = await response.json()
                
                // Wypisujemy odpowiedź i dane w konsoli (do celów deweloperskich)
                console.log(response)
                console.log(jsonData)
                
                // Ustawiamy dane o kraju w stanie
                setKraj(jsonData[0])

                // Jeśli status odpowiedzi sugeruje błąd (404 lub inne błędy klienta), ustawiamy stan błędu
                if (/40[4|0]/.test(response.status)) {
                    setError(true)
                }

            } catch (error) {
                // Jeśli wystąpił błąd podczas pobierania danych, ustawiamy stan błędu
                setError(true)
                console.log(error)
            } finally {
                // Niezależnie od wyniku, kończymy proces ładowania
                setPobieranie(false)
            }
        }

        // Wywołujemy funkcję pobierania danych
        getData()
    }, [params.krj]) // useEffect uruchomi się za każdym razem, gdy zmienią się params.krj (kod kraju)

    return (
        // Główna struktura: elastyczny kontener z centrowaniem
        <div className="font-bold flex justify-center p-8">
            
            {/* Jeśli dane są ładowane, wyświetlamy komunikat */}
            {pobieranie && <h1>Trwa pobieranie danych...</h1>}
            
            {/* Jeśli wystąpił błąd, wyświetlamy komunikat */}
            {error && <h1>Nie udało się pobrać danych.</h1>}

            {/* Sprawdzamy, czy kraj ma kod cca2 (jeśli dane zostały poprawnie pobrane) */}
            {kraj.cca2 != null && (
                <div className="text-bold flex justify-center flex-col border-4 p-8">
                    
                    {/* Wyświetlamy flagę kraju, jeśli jest dostępna */}
                    <Image 
                        src={kraj.flags.png}
                        width={300}
                        height={150}
                        alt={kraj.name.common}
                        className="w-[100px], h-[100px]"
                    />

                    {/* Wyświetlamy informacje o kraju */}
                    <h2>Informacje o kraju: {kraj.name.common}</h2>
                    <h2>Stolica Państwa: {kraj.capital}</h2>
                    <h2>Populacja: {kraj.population}</h2>
                </div>
            )}

            {/* Wyświetlamy komponent Neighbours (kraje sąsiednie) przekazując mu granice (borders) */}
            <Neighbours borders={kraj.borders} />

        </div>
    )
}
