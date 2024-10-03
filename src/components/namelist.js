export default function Namelist({imie, color, ok}) {  // Eksportowanie komponentu Namelist i destrukturyzacja propsów: `imie`, `color` oraz `ok`

    // // Możliwy warunek wstrzymujący renderowanie, jeśli `ok` jest fałszywe
    // if(!ok) return null;
  
    var classnames = ""  // Zmienna, która będzie przechowywać klasy CSS dla div'a
  
    // Sprawdzanie, czy `ok` jest true, wówczas nadawanie klas CSS dla elementu z tłem zielonym
    if(ok){
      classnames = "border w-1/2 bg-green-700"
    } else { 
      // Jeśli `ok` jest false, nadawanie klas CSS dla elementu z tłem czerwonym
      classnames = "border w-1/2 bg-red-600"
    }
  
    // Zwracanie JSX z odpowiednimi klasami CSS i dynamicznie przekazanym imieniem oraz kolorem
    return(
      <div className={classnames}>  {/* Dynamicznie ustawione klasy CSS na podstawie wartości `ok` */}
        <h1 className={color}>{imie}</h1>  {/* Imię wyświetlane w nagłówku H1 z dynamicznie przekazanym kolorem */}
      </div>
    )
  }
  