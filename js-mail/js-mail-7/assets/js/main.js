// * CONSEGNA:
// * Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// * Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email



// * TODO
// * FAR INSERIRE UN NUMERO DI EMAIL ALL'UTENTE PER FAR CREARE A LUI L'ARRAY DI EMAIL ACCETTATE
    // * TRAMITE PIU CLICK DEL PULSANTE "AGGIUNGI INVITATO"
    // * TRAMITE UNA STRINGA SEPARATA DA VIRGOLE, DA TRASFORMARE IN ARRAY
    // * TRAMITE PESCA CASUALE DI N EMAIL (DOVE N E NUMERO INSERITO DA UTENTE) DA UNA LISTA DI NOMI GIA CREATA



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

    
        
    

const btnNewList = document.getElementById('newList');
btnNewList.addEventListener('click', generateListOfAcceptedEmails);




function getRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



// DIVERSAMENTE DA SFIDA PRECEDENTE LA RIMETTO COME FUNZIONE PER RICHIEDERE AUTOMATICAMENTE L'INPUT ALL'UTENTE IN CASO DI INPUT ERRATO
function generateListOfAcceptedEmails() {
    console.clear();
    acceptedEmails.length = 0;
    const userInput = prompt(`Quante persone vuoi invitare? (ricorda che la tua lista di email contiene ${listOfEmails.length} indirizzi)`, 1);
    const numberOfNames = parseInt(userInput);
    console.debug("______ userInput", userInput);
    console.debug("______ numberOfNames", numberOfNames);

    if (userInput === null) {
        alert("Devi invitare qualcuno per fare una festa!");
    } else if (numberOfNames === 0 || (isNaN(numberOfNames) && userInput.length === 0)) {
        alert("Devi invitare qualcuno per fare una festa!");
        generateListOfAcceptedEmails();
    } else if (userInput.length !== numberOfNames.toString().length || isNaN(numberOfNames)) {
        alert("È stato inserito qualcosa che non è un numero dentro l'input, riprova");
        generateListOfAcceptedEmails();
    } else if (numberOfNames > listOfEmails.length) {
        alert(`Non puoi invitare più di ${listOfEmails.length} persone perchè non hai abbastanza indirizzi a disposizione`);
        generateListOfAcceptedEmails();
    } else {
        while (acceptedEmails.length < numberOfNames) {
            const currentName = listOfEmails[getRandomNumber(listOfEmails.length - 1, 0)];
            if (acceptedEmails.find((email) => email === currentName) === undefined) {
                acceptedEmails.push(currentName);
            };
        }
        acceptedEmails.sort();
        alert(`La lista di ${numberOfNames} invitati è stata generata`);

        if (document.getElementById('accessParty') === null) {
            const btnAccessPartyPlaceholder = document.getElementById('btnAccessPartyPlaceholder');
            const btnAccessParty = document.createElement('button');
            btnAccessParty.classList.add('btn', 'btn-primary');
            btnAccessParty.id = "accessParty";
            btnAccessParty.innerText = "Accedi alla festa";
            console.log("btnAccessPartyPlaceholder", btnAccessPartyPlaceholder);
            console.log("btnAccessParty", btnAccessParty);

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

            btnAccessPartyPlaceholder.appendChild(btnAccessParty);
        }

        console.table(acceptedEmails);
        console.debug("acceptedEmails.length", acceptedEmails.length);
        console.debug("Il numero di email accettate è uguale al numero randomico estratto?", acceptedEmails.length === numberOfNames);
    };
};