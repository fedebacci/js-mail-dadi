// * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const minNumber = 1; 
const maxNumber = 6;

// NB: FAREI UNA FUNZIONE DA POTER RIUTILIZZARE PER ENTRAMBI
const userNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
const computerNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

console.info(`Numero estratto per l'utente: ${userNumber}`);
console.info(`Numero estratto per il computer: ${computerNumber}`);

if (userNumber > computerNumber) {
    console.info(`L'utente ha vinto! (${userNumber} / ${computerNumber})`);
    alert(`L'utente ha vinto! (${userNumber} / ${computerNumber})`);
} else if (userNumber < computerNumber) {
    console.info(`Il computer ha vinto! (${computerNumber} / ${userNumber})`);
    alert(`Il computer ha vinto! (${computerNumber} / ${userNumber})`);
} else {
    // SE NON È MAGGIORE O MINORE ALLORA È NECESSARIAMENTE UGUALE, NON AGGIUNGO CONTROLLO
    console.info(`Pareggio! (${userNumber} / ${computerNumber})`);
    alert(`Pareggio! (${userNumber} / ${computerNumber})`);
}
window.location.reload();