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



// * VERSIONE CON PULSANTE PIÚ USER-FRIENDLY
// * FATTA UTILIZZANDO METODI ARRAY APPROPRIATI
const btnAccessParty = document.getElementById('accessParty');
btnAccessParty.addEventListener('click', () => {
    console.clear();
    console.table(acceptedEmails);
    
    const userEmail = prompt("Inserisci la tua email", acceptedEmails[0]);
    console.debug(`Email inserita dall'utente: ${userEmail}`)
    console.debug("__________")
    let emailFound = acceptedEmails.find((email) => email === userEmail);
    console.debug(emailFound);
    if (emailFound === undefined) {
        console.info("Mi dispiace, non sei stato invitato!");
        alert("Mi dispiace, non sei stato invitato!");
    } else {
        console.info("Puoi venire alla festa!");
        alert("Puoi venire alla festa!");
    };
});