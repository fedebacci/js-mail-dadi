// * CONSEGNA
// * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.



// * INFORMAZIONI COMUNI ALLE DUE VERSIONI DELL'ESERCIZIO
const minNumber = 1; 
const maxNumber = 6;



// * VERSIONE BASE SENZA PULSANTE CHE ESTRAE SUBITO I NUMERI E CHE RICARICA AUTOMATICAMENTE LA PAGINA
// NB: FAREI UNA FUNZIONE DA POTER RIUTILIZZARE PER ENTRAMBI
// const userNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// const computerNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// console.info(`Numero estratto per l'utente: ${userNumber}`);
// console.info(`Numero estratto per il computer: ${computerNumber}`);

// if (userNumber > computerNumber) {
//     console.info(`L'utente ha vinto! (${userNumber} / ${computerNumber})`);
//     alert(`L'utente ha vinto! (${userNumber} / ${computerNumber})`);
// } else if (userNumber < computerNumber) {
//     console.info(`Il computer ha vinto! (${computerNumber} / ${userNumber})`);
//     alert(`Il computer ha vinto! (${computerNumber} / ${userNumber})`);
// } else {
//     // SE NON È MAGGIORE O MINORE ALLORA È NECESSARIAMENTE UGUALE, NON AGGIUNGO CONTROLLO
//     console.info(`Pareggio! (${userNumber} / ${computerNumber})`);
//     alert(`Pareggio! (${userNumber} / ${computerNumber})`);
// }
// window.location.reload();



// * VERSIONE CON PULSANTE PIÚ USER-FRIENDLY
let userScore = 0;
let computerScore = 0;
const scoreToShow = document.getElementById('score');

const btnPlayGame = document.getElementById('playGame');
btnPlayGame.addEventListener('click', () => {
    console.clear()
    console.warn(`Nuova partita, punteggio attuale: user = ${userScore} / computer = ${computerScore}`)
    const userNumber = getRandomNumber(maxNumber, minNumber);
    const computerNumber = getRandomNumber(maxNumber, minNumber);
    
    console.info(`Numero estratto per l'utente: ${userNumber}`);
    console.info(`Numero estratto per il computer: ${computerNumber}`);
    
    if (userNumber > computerNumber) {
        console.info(`L'utente ha vinto! (${userNumber} / ${computerNumber})`);
        alert(`L'utente ha vinto! (${userNumber} / ${computerNumber})`);
        userScore ++
    } else if (userNumber < computerNumber) {
        console.info(`Il computer ha vinto! (${computerNumber} / ${userNumber})`);
        alert(`Il computer ha vinto! (${computerNumber} / ${userNumber})`);
        computerScore ++
    } else {
        // SE NON È MAGGIORE O MINORE ALLORA È NECESSARIAMENTE UGUALE, NON AGGIUNGO CONTROLLO
        console.info(`Pareggio! (${userNumber} / ${computerNumber})`);
        alert(`Pareggio! (${userNumber} / ${computerNumber})`);
    }

    scoreToShow.innerText = `user = ${userScore} / computer = ${computerScore}`
    console.warn(`Nuovo punteggio: user = ${userScore} / computer = ${computerScore}`)
})

function getRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}