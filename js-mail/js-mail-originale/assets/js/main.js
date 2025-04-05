// * CONSEGNA:
// * Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// * Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email



// * TODO
// * USARE CONSOLE.DEBUG() INVECE DI ISDEBUG



// * TODO
// * FAR INSERIRE UN NUMERO DI EMAIL ALL'UTENTE PER FAR CREARE A LUI L'ARRAY DI EMAIL ACCETTATE
    // * TRAMITE PIU CLICK DEL PULSANTE "AGGIUNGI INVITATO"
    // * TRAMITE UNA STRINGA SEPARATA DA VIRGOLE, DA TRASFORMARE IN ARRAY
    // * TRAMITE PESCA CASUALE DI N EMAIL (DOVE N E NUMERO INSERITO DA UTENTE) DA UNA LISTA DI NOMI GIA CREATA
    // FATTO IN PIU VERSIONI
    // * TRAMITE PESCA CASUALE DI N EMAIL (DOVE N E NUMERO GENERATO CASUALMENTE) DA UNA LISTA DI NOMI GIA CREATA
    // FATTO IN PIU VERSIONI
    const listOfNames = [
        "Alessia",
        "Bernardo",
        "Camilla",
        "Domenico",
        "Elena",
        "Fabio",
        "Ginevra",
        "Harrison",
        "Immacolata",
        "Leonardo",
        "Marta",
        "Nicola",
        "Olimpia",
        "Paolo",
        "Quincy",
        "Raffaele",
        "Simona",
        "Tommaso",
        "Umberta",
        "Vincenzo",
        "Zoe"
    ]
    const minNames = 1;
    const maxNames = listOfNames.length - 1;
    const numberOfNames = Math.floor(Math.random() * (maxNames - minNames + 1)) + minNames;
    const acceptedEmails = [];
    for (let i = 0; i <= numberOfNames; i ++) {
        const currentName = listOfNames[i];
        acceptedEmails.push(currentName)
    }
    console.table(acceptedEmails)



// * TODO 
// * MOSTRARE SU SCHERMO LISTA INVITATI 



// * INFORMAZIONI COMUNI ALLE DUE VERSIONI INIZIALI DELL'ESERCIZIO
const isDebug = true;
// const acceptedEmails = [
//     "classe144@email.it",
//     "tiziano@email.it",
//     "donato@email.it",
//     "samuel@email.it",
//     "federico@email.it",
//     "test@email.it",
//     "altraemail@email.it"
// ];



// // * VERSIONE BASE SENZA PULSANTE CHE CHIEDE SUBITO L'EMAIL E CHE RICARICA AUTOMATICAMENTE LA PAGINA
// const userEmail = prompt("Inserisci la tua email", acceptedEmails[0]);
// if (isDebug) {
//     console.info(`Email inserita dall'utente: ${userEmail}`)
//     console.info("__________")
// }
// let emailFound = false;

// // for (i = 0; i < acceptedEmails.length; i ++) {
// // * CONTROLLO NELLE CONDIZIONI DEL FOR ANCHE SI NON AVER TROVATO L'EMAIL, IN CASO LA TROVASSI PRESTO E AVESSI DA CONTROLLARNE UN NUMERO ENORME
// // * (ANCHE SE HA DETTO TIZIANO CHE I DATABASE SONO VELOCI ED OTTIMIZZATI PER LA RICERCA E CHE NON SERVIREBBE)
// for (i = 0; i < acceptedEmails.length && emailFound === false; i ++) {
//     const currentEmailToCheck = acceptedEmails[i];
//     if (isDebug) {
//         console.log(`Email accettata con cui sto confrontando: ${currentEmailToCheck}`);
//         console.log("Corrisponde all'email dell'utente?", userEmail === currentEmailToCheck);
//         console.log("__________");
//     }
//     if (userEmail === currentEmailToCheck) {
//         emailFound = true;
//     }
// }
// if (emailFound === true) {
//     console.info("Puoi venire alla festa!");
//     alert("Puoi venire alla festa!");
// } else {
//     console.info("Mi dispiace, non sei stato invitato!");
//     alert("Mi dispiace, non sei stato invitato!");
// }
// window.location.reload()



// * VERSIONE CON PULSANTE PIÚ USER-FRIENDLY
// * FATTA SEMPRE UTILIZZANDO CICLO FOR
// const btnAccessParty = document.getElementById('accessParty');
// btnAccessParty.addEventListener('click', () => {
//     console.clear();
//     console.table(acceptedEmails);
    
//     const userEmail = prompt("Inserisci la tua email", acceptedEmails[0]);
//     if (isDebug) {
//         console.info(`Email inserita dall'utente: ${userEmail}`)
//         console.info("__________")
//     }
//     let emailFound = false;
    
//     // for (i = 0; i < acceptedEmails.length; i ++) {
//     // * CONTROLLO NELLE CONDIZIONI DEL FOR ANCHE DI NON AVER TROVATO L'EMAIL, IN CASO LA TROVASSI PRESTO E AVESSI DA CONTROLLARNE UN NUMERO ENORME
//     // * (ANCHE SE HA DETTO TIZIANO CHE I DATABASE SONO VELOCI ED OTTIMIZZATI PER LA RICERCA E CHE NON SERVIREBBE)
//     for (i = 0; i < acceptedEmails.length && emailFound === false; i ++) {
//         const currentEmailToCheck = acceptedEmails[i];
//         if (isDebug) {
//             console.log(`Email accettata con cui sto confrontando: ${currentEmailToCheck}`);
//             console.log("Corrisponde all'email dell'utente?", userEmail === currentEmailToCheck);
//             console.log("__________");
//         }
//         if (userEmail === currentEmailToCheck) {
//             emailFound = true;
//         }
//     }
//     if (emailFound === true) {
//         console.info("Puoi venire alla festa!");
//         alert("Puoi venire alla festa!");
//     } else {
//         console.info("Mi dispiace, non sei stato invitato!");
//         alert("Mi dispiace, non sei stato invitato!");
//     }
// })



// * VERSIONE CON PULSANTE PIÚ USER-FRIENDLY
// * FATTA UTILIZZANDO METODI ARRAY APPROPRIATI
const btnAccessParty = document.getElementById('accessParty');
btnAccessParty.addEventListener('click', () => {
    console.clear();
    console.table(acceptedEmails);
    
    const userEmail = prompt("Inserisci la tua email", acceptedEmails[0]);
    if (isDebug) {
        console.info(`Email inserita dall'utente: ${userEmail}`)
        console.info("__________")
    }
    let emailFound = acceptedEmails.find((email) => email === userEmail);
    if (isDebug) {
        console.log(emailFound);
    }
    if (emailFound === undefined) {
        console.info("Mi dispiace, non sei stato invitato!");
        alert("Mi dispiace, non sei stato invitato!");
    } else {
        console.info("Puoi venire alla festa!");
        alert("Puoi venire alla festa!");
    }
})