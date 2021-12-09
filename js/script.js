// Costante che definisce il rezzo per chilometro
const priceForKm = 0.21;
// creo la variabile collegata all'id html
const outputHtml = document.getElementById('output');

// chiedo all'utenete il numero di chilometri che vuole percorrere
let km = parseInt(prompt('Inserisci qui il numero di km da percorre.'));
document.getElementById('user-km').innerHTML = `${km}`;

// chiedo all'utente l'età del passeggero
let age = parseInt(prompt("Inersici qui l'eta del passeggero."));
document.getElementById('user-age').innerHTML = `${age}`;

// prezzo del biglietto
let price = km * priceForKm;

// definisco gli eventuali sconti
let discount20 = price * 0.20;
let discount40 = price * 0.40;

// definisco la variabile del prezzo finale
let finalPrice;

// dichiaro la variabile del button che permetterà all'utente il calcolo del prezzo
const button = document.getElementById("button");

// aggiungo l'evento al click del bottone
button.addEventListener("click", function() {
     // discount
    if (age < 18) {
        finalPrice = price - discount20;
    } else if (age > 65) {
        finalPrice = price - discount40;
    } else {
        finalPrice = price;
    }

    // dichiaro la variabile del prezzo arrotondato a due cifre decimali
    let finalPriceRounded = parseFloat(finalPrice.toFixed(2));

    // stampo il risultato
    outputHtml.innerHTML += `${finalPriceRounded} &euro;`;
})


// definisco la data di validazione del ticket
const dateHtml = document.getElementById('validation-date');

const now = new Date();
let day = now.getDate();
let month = now.getMonth() +1;
let year = now.getFullYear();

dateHtml.innerHTML = `Validation Date: ${day} / ${month} / ${year}`;