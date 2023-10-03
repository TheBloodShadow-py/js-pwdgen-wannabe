// # Password generator
// - #### Chiedere il nome dell'utente:
//     - Assegnarlo ad una variabile
// - #### Chiedere il cognome dell'utente:
//     - Assegnarlo ad una variabile
// - #### Chiedere il colore preferito dell'utente:
//     - Assegnarlo ad una variabile
// - #### Genera randomicamenta 3 numeri:
//     - Utilizzare il metodo math random
//     - Assegnarlo ad una variabile
// - #### Stampa i risultati sulla pagina
//     - Concatenare i valori e stamparli tramite una funzione

"use strict;";

let generatedPassword = document.getElementById("generatedPassword");

function numbersGenerator(maxNumbers) {
  return Math.floor(Math.random() * maxNumbers);
}

function passwordGenerator() {
  let name = prompt("Ciao, Inserisci il tuo nome:");
  let surname = prompt("Inserisci il tuo cognome:");
  let favoriteColor = prompt("Inserisci il tuo colore preferito:");
  if (name.length === 0 || surname.length === 0 || favoriteColor.length === 0) {
    generatedPassword.innerHTML = "Errore, non puoi inserire un valore vuoto";
    return;
  } else if (
    name.match(/\d/) !== null ||
    surname.match(/\d/) !== null ||
    favoriteColor.match(/\d/) !== null
  ) {
    generatedPassword.innerHTML = "Errore, devi inserire del testo";
    return;
  }
  let randomNumbers = numbersGenerator(999);
  generatedPassword.innerHTML =
    name.trim() + surname.trim() + favoriteColor.trim() + randomNumbers;
  return;
}
