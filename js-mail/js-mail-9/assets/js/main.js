// * CONSEGNA:
// * Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// * Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email



// * TODO
// * FAR INSERIRE UN NUMERO DI EMAIL ALL'UTENTE PER FAR CREARE A LUI L'ARRAY DI EMAIL ACCETTATE
    // * TRAMITE PIU CLICK DEL PULSANTE "AGGIUNGI INVITATO"



const acceptedEmails = [];



const btnAccessParty = document.getElementById('accessParty');
btnAccessParty.addEventListener('click', () => {
    console.clear();
    console.table(acceptedEmails);

    console.log("acceptedEmails");
    if (acceptedEmails.length !== 0) {
        const userEmail = prompt("Inserisci la tua email", acceptedEmails[getRandomNumber(0, acceptedEmails.length - 1)]);
        console.debug(`Email inserita dall'utente: ${userEmail}`);
        console.debug("__________");
        let emailFound = acceptedEmails.find((email) => email === userEmail);
        console.debug(emailFound);
        if (emailFound === undefined) {
            console.info("Mi dispiace, non sei stato invitato!");
            alert("Mi dispiace, non sei stato invitato!");
        } else {
            console.info("Puoi venire alla festa!");
            alert("Puoi venire alla festa!");
        };
    } else {
        alert("Non hai ancora creato una lista di invitati. Creala e riprova.")
    };
});
    


const btnAddGuests = document.getElementById('addGuests');
btnAddGuests.addEventListener('click', addGuestsToAcceptedEmails);



function addGuestsToAcceptedEmails () {
    const newGuests = prompt("Aggiungi l'indirizzo e-mail di tutti gli invitati, separandoli con una virgola. Segui l'esempio", "test1@email.it, test2@email.it").replaceAll(" ", "");
    acceptedEmails.length = 0;
    // Se volessimo accertarci che non vengano inseriti altri simboli, come / o altri tra le email, per rimuoverli utilizzerei lo sesso metodo su tutti i simboli che non voglio prima di utilizzare lo split.
    const TmpAcceptedEmails = newGuests.split(',');
    console.debug("TmpAcceptedEmails", TmpAcceptedEmails);
    for (let i = 0; i <= TmpAcceptedEmails.length - 1; i ++) {
        const currentEmail = TmpAcceptedEmails[i];
        if (currentEmail.length !== 0) {
            acceptedEmails.push(currentEmail);
        };
    }
    console.table(acceptedEmails)

    if (btnAccessParty.classList.contains('d-none')) {
        btnAccessParty.classList.remove('d-none');
    };
};



function getRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};