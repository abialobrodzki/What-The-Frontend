//Przykład zastosowania alarmu
// alert('Hola, wędrowcze! Przed wyruszeniem w drogę należy zebrać drużynę.');

//NOTATKI
// dodanie zmiennych
const firstName = 'Adrian';
const age = 31; // liczby nie wymagają apostrofów

// kroki w kodzie wykonowane po kolei - z góry do dołu
// przykładowe wywołanie funkcji "alert" - wyświetlenie okna alertu przy załadowaniu strony
// alert('WTF! - znacznik');
// alert("WTF! - cudzysłów"); //można używać podwójnych apostrofów

// przykładowe wywołanie funkcji "console.log" - komunikat wyświetlany w zakładce Konsola (DevTools)
console.log('Siema!');
// console.log('ok');
// wywołanie funkcji z użyciem zmiennych
// console.log(firstName);
// console.log(age);

// tworzenie dłuższych ciągów znaków z użyciem ` (patrz tylda)
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

// wyświetlenie zawartości elementu h1
const header = document.querySelector('.page-header__heading--js');

console.log(header);

// przykład operacji na elemencie
console.log(header.innerHTML);

header.innerHTML = 'Hej';

header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat`;

// lista opracji na stylach
console.log(header.style);

header.style.color = 'yellow';