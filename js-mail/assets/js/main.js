// * CONSEGNA:
// * Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// * Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email

const isDebug = true;
const acceptedEmails = [
    "classe144@email.it",
    "donato@email.it",
    "samuel@email.it",
    "federico@email.it",
    "test@email.it",
    "altraemail@email.it"
];
console.table(acceptedEmails);

const userEmail = prompt("Inserisci la tue email", acceptedEmails[0]);
if (isDebug) {
    console.info(`Email inserita dall'utente: ${userEmail}`)
    console.info("__________")
}
let emailFound = false;

// for (i = 0; i < acceptedEmails.length; i ++) {
// * CONTROLLO NELLE CONDIZIONI DEL FOR ANCHE SI NON AVER TROVATO L'EMAIL, IN CASO LA TROVASSI PRESTO E AVESSI DA CONTROLLARNE UN NUMERO ENORME
// * (ANCHE SE HA DETTO TIZIANO CHE I DATABASE SONO VELOCI ED OTTIMIZZATI PER LA RICERCA E CHE NON SERVIREBBE)
for (i = 0; i < acceptedEmails.length && emailFound === false; i ++) {
    const currentEmailToCheck = acceptedEmails[i];
    if (isDebug) {
        console.log(`Email accettata con cui sto confrontando: ${currentEmailToCheck}`)
        console.log("Corrisponde all'email dell'utente?", userEmail === currentEmailToCheck)
        console.log("__________")
    }
    if (userEmail === currentEmailToCheck) {
        emailFound = true;
    }
}
if (emailFound === true) {
    alert("Puoi venire alla festa!");
} else {
    alert("Mi dispiace, non sei stato invitato!");
}
window.location.reload()