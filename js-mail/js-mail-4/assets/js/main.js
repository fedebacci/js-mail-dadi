// * CONSEGNA:
// * Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// * Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email



// * TODO
// * FAR INSERIRE UN NUMERO DI EMAIL ALL'UTENTE PER FAR CREARE A LUI L'ARRAY DI EMAIL ACCETTATE
    // * TRAMITE PIU CLICK DEL PULSANTE "AGGIUNGI INVITATO"
    // * TRAMITE UNA STRINGA SEPARATA DA VIRGOLE, DA TRASFORMARE IN ARRAY
    // * TRAMITE PESCA CASUALE DI N EMAIL (DOVE N E NUMERO INSERITO DA UTENTE) DA UNA LISTA DI NOMI GIA CREATA
    // * TRAMITE PESCA CASUALE DI N EMAIL (DOVE N E NUMERO GENERATO CASUALMENTE) DA UNA LISTA DI NOMI GIA CREATA
        // * GENERATA IN MODO NON LINEARE (NON DALLA PRIMA ALLA N, MA PESCANDO OGNI VOLTA UNA A CASO DALLA LISTA INIZIALE)
    const listOfEmails = [
        "alessia@email.it",
        "bernardo@email.it",
        "camilla@email.it",
        "domenico@email.it",
        "elena@email.it",
        "fabio@email.it",
        "ginevra@email.it",
        "harrison@email.it",
        "immacolata@email.it",
        "leonardo@email.it",
        "marta@email.it",
        "nicola@email.it",
        "olimpia@email.it",
        "paolo@email.it",
        "quincy@email.it",
        "raffaele@email.it",
        "simona@email.it",
        "tommaso@email.it",
        "umberta@email.it",
        "vincenzo@email.it",
        "zoe@email.it"
    ]
    const minNames = 1;
    const maxNames = listOfEmails.length - 1;
    const acceptedEmails = [];
    generateListOfAcceptedEmails();

    

// * VERSIONE CON PULSANTE PIÚ USER-FRIENDLY
// * FATTA UTILIZZANDO METODI ARRAY APPROPRIATI
const btnAccessParty = document.getElementById('accessParty');
btnAccessParty.addEventListener('click', () => {
    console.clear();
    console.table(acceptedEmails);
    
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
});

const btnNewList = document.getElementById('newList');
btnNewList.addEventListener('click', generateListOfAcceptedEmails)



function getRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function generateListOfAcceptedEmails() {
    acceptedEmails.length = 0;
    const numberOfNames = getRandomNumber(maxNames, minNames);
    for (let i = 0; i <= numberOfNames; i ++) {
        const currentName = listOfEmails[i];
        acceptedEmails.push(currentName);
    }
    console.table(acceptedEmails);
};