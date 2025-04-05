// * CONSEGNA:
// * Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// * Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email



const acceptedEmails = [
    "classe144@email.it",
    "tiziano@email.it",
    "donato@email.it",
    "samuel@email.it",
    "federico@email.it",
    "test@email.it",
    "altraemail@email.it"
];
console.table(acceptedEmails);



// * VERSIONE BASE SENZA PULSANTE CHE CHIEDE SUBITO L'EMAIL E CHE RICARICA AUTOMATICAMENTE LA PAGINA
const userEmail = prompt("Inserisci la tua email", acceptedEmails[0]);
console.debug(`Email inserita dall'utente: ${userEmail}`)
console.debug("__________")
let emailFound = false;

// for (i = 0; i < acceptedEmails.length; i ++) {
// * CONTROLLO NELLE CONDIZIONI DEL FOR ANCHE SI NON AVER TROVATO L'EMAIL, IN CASO LA TROVASSI PRESTO E AVESSI DA CONTROLLARNE UN NUMERO ENORME
// * (ANCHE SE HA DETTO TIZIANO CHE I DATABASE SONO VELOCI ED OTTIMIZZATI PER LA RICERCA E CHE NON SERVIREBBE)
for (i = 0; i < acceptedEmails.length && emailFound === false; i ++) {
    const currentEmailToCheck = acceptedEmails[i];
    console.debug(`Email accettata con cui sto confrontando: ${currentEmailToCheck}`);
    console.debug("Corrisponde all'email dell'utente?", userEmail === currentEmailToCheck);
    console.debug("__________");
    if (userEmail === currentEmailToCheck) {
        emailFound = true;
    }
}
if (emailFound === true) {
    console.info("Puoi venire alla festa!");
    alert("Puoi venire alla festa!");
} else {
    console.info("Mi dispiace, non sei stato invitato!");
    alert("Mi dispiace, non sei stato invitato!");
}
// <!-- DISABILITATO METODO PER RICARICARE LA PAGINA AUTOMATICAMENTE PER PERMETTERE NAVIGAZIONE DA ESERCIZIO 1 AGLI ALTRI -->
// <!-- SE RIABILITATO, DISABILITARE LA VOCE DI MENU, ALTRIMENTI DALL'ESERCIZIO 1 SARA IMPOSSIBILE NAVIGARE AGLI ALTRI ESERCIZI (ALMENO DI NON TORNARE INDIETRO NEL BROWSER FINO AD UN ESERCIZIO DIVERSO) -->
// window.location.reload()