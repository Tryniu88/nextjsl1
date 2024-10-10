"use client";

import Link from 'next/link'; // Importujemy komponent Link z Next.js do nawigacji między stronami
import RestCountries from "@/components/RestCountries"; // Import komponentu RestCountries do wyświetlania informacji o kraju
import { useState, useEffect } from "react"; // Importujemy hooki useState i useEffect z Reacta
import Neighbours from "@/components/Neighbours"; // Importujemy komponent Neighbours (być może do użycia w innym miejscu)

// Tworzymy komponent Strona6r
export default function Strona6r() {

    // Stan na przechowywanie pobranych danych o krajach
    const [data, setData] = useState(null);   
    
    // Stan na obsługę błędów
    const [error, setError] = useState(false); 
    
    // Stan do śledzenia, czy dane są nadal ładowane
    const [loading, setLoading] = useState(true);

    // useEffect zostanie wywołany raz, po załadowaniu komponentu
    useEffect(() => {

        // Definiujemy asynchroniczną funkcję do pobierania danych
        const getData = async () => {

            try {
                // Wysyłamy zapytanie do API RestCountries, aby pobrać wszystkie kraje
                const response = await fetch('https://restcountries.com/v3.1/all');
                
                // Konwertujemy odpowiedź na JSON
                const dataJson = await response.json();
                
                // Aktualizujemy stan z danymi o krajach
                setData(dataJson);
                
                // Wypisujemy dane w konsoli (do celów deweloperskich)
                console.log(dataJson);

            } catch (error) {
                // Jeśli wystąpi błąd, ustawiamy stan błędu na true
                console.log(error);
                setError(true);

            } finally {
                // Po zakończeniu operacji ustawiamy loading na false, niezależnie od tego, czy się powiodła, czy nie
                setLoading(false);
            }
        };

        // Wywołujemy funkcję pobierania danych
        getData();

    }, []); // [] oznacza, że useEffect wykona się tylko raz, po załadowaniu komponentu

    return (
        // Główna struktura strony: flexbox z centrowaniem zawartości na stronie
        <div className="flex flex-wrap justify-center items-center h-screen gap-3">

            {/* Wyświetlanie wiadomości, jeśli nie udało się pobrać danych */}
            <h1> {error && "Nie udało się pobrać danych."}</h1>

            {/* Wyświetlanie wiadomości podczas ładowania danych */}
            <h1>{loading && "Trwa Ładowanie"}</h1>

            {/* Jeśli dane zostały załadowane, wyświetlamy mapę z krajami */}
            {data && data.map((kraj, idx) => (
                // Link do strony szczegółów dla każdego kraju. Używamy `cca2` (dwuliterowego kodu kraju) do generowania URL
                <Link key={idx} href={`/strona6/${kraj.cca2}`}>
                    {/* Komponent RestCountries wyświetla dane każdego kraju */}
                    <RestCountries key={idx} kraj={kraj}/>
                </Link>
            ))}

        </div>
    );
}
