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
        // LA COMMENTO PER NON CHIEDERE ALL'UTENTE UN PROMPT AL CARCAMENTO DELLA PAGINA
        // VOGLIO CHIEDERGLIELO SOLO AL CLICK DEL PULSANTE APPROPRIATO
        // * TODO
        // * FARE 2 VERSIONI PER VIA DI ASSENZA DI LISTA DI EMAIL AL CARICAMENTO INIZIALE DELLA PAGINA
            // * VOGLIO CONTROLLARE, QUANDO VIENE CLICCATO IL PULSANTE ACCEDI ALLA FESTA, LA PRESENZA DI INVITATI
            // * VOGLIO NASCONDERE IL PULSANTE ACCEDI ALLA FESTA FINCHE NON VIENE GENERATA LA LISTA DI INVITATI
        // generateListOfAcceptedEmails();
    
        
    

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
    

    // * TODO
    // * DECIDERE SE VOGLIO NASCONDERE IL PULSANTE ACCEDI ALLA FESTA OPPURE SE VOGLIO CONTROLLARE, QUANDO VIENE CLICCATO, LA PRESENZA DI INVITATI
    const btnNewList = document.getElementById('newList');
    btnNewList.addEventListener('click', () => {
        // NB: ORA CHE NON LA ESEGUO PIU AL CARICAMENTO DELLA PAGINA NON SERVE AVERLA COME FUNZIONE generateListOfAcceptedEmails(), QUINDI LA SCRIVO DIRETTAMENTE DENTRO L'EVENT LISTENER DEL PULSANTE
        console.clear();
        acceptedEmails.length = 0;
        const userInput = prompt(`Quante persone vuoi invitare? (ricorda che la tua lista di email contiene ${listOfEmails.length} indirizzi)`, 1);
        const numberOfNames = parseInt(userInput);
        console.debug("______ userInput", userInput);
        console.debug("______ numberOfNames", numberOfNames);

        
        if (numberOfNames === 0 || userInput === null || (isNaN(numberOfNames) && userInput.length === 0)) {
            alert("Devi invitare qualcuno per fare una festa!");
        } else if (userInput.length !== numberOfNames.toString().length || isNaN(numberOfNames)) {
            alert("È stato inserito qualcosa che non è un numero dentro l'input, riprova");
        } else if (numberOfNames > listOfEmails.length) {
            alert(`Non puoi invitare più di ${listOfEmails.length} persone perchè non hai abbastanza indirizzi a disposizione`);
        } else {
            while (acceptedEmails.length < numberOfNames) {
                const currentName = listOfEmails[getRandomNumber(listOfEmails.length - 1, 0)];
                if (acceptedEmails.find((email) => email === currentName) === undefined) {
                    acceptedEmails.push(currentName);
                };
            }
            acceptedEmails.sort();
            alert(`La lista di ${numberOfNames} invitati è stata generata`);
            console.table(acceptedEmails);
            console.debug("acceptedEmails.length", acceptedEmails.length);
            console.debug("Il numero di email accettate è uguale al numero randomico estratto?", acceptedEmails.length === numberOfNames);
        }
    });
    
    
    
    function getRandomNumber (max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };