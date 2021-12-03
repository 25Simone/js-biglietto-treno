// creo la variabile collegata all'id html
const outputHtml = document.getElementById('output');

// chiedo all'utenete il numero di chilometri che vuole percorrere
let km = prompt('Inserisci qui il numero di km da percorre.');

// chiedo all'utente l'età del passeggero
let age = prompt("Inersici qui l'eta del passeggero.");

// prezzo del biglietto
let price = km * 0.21;

// definisco gli eventuali sconti
let discount20 = price * 0.20;
let discount40 = price * 0.40;

// definisco la variabile del prezzo finale
let finalPrice;

// discount 20% per minorenni
if (age < 18) {
    finalPrice = price - discount20;
} else if (age > 65) {
    finalPrice = price - discount40;
} else {
    finalPrice = price;
}

// dichiaro la variabile del prezzo arrotondato a due cifre decimali
let finalPriceRounded = Math.round((finalPrice + Number.EPSILON) * 100) / 100;

// stampo il risultato
outputHtml.innerHTML += `${finalPriceRounded} &euro;`;