// * CONSEGNA:
// * Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// * Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email



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
btnAddGuests.addEventListener('click', addGuestToAcceptedEmails);
const btnSortGuestsList = document.getElementById('sortGuestsList');
btnSortGuestsList.addEventListener('click', sortGuests);



const addedGuests = document.getElementById('addedGuests');
console.debug("addedGuests", addedGuests);
const addedGuestsList = document.getElementById('addedGuestsList');
console.debug("addedGuestsList", addedGuestsList);



function addGuestToAcceptedEmails () {
    const newGuest = prompt("Aggiungi l'indirizzo e-mail dell'invitato");
    console.debug("newGuest", newGuest);
    const isDuplicate = acceptedEmails.find((email) => email === newGuest);

    switch (true) {
        case newGuest === null:
            console.info("L'utente ha deciso di non aggiungere un altro invitato.");
            break;
        case newGuest.length === 0:
            alert("Inserisci l'indirizzo email dell'invitato!");
            addGuestToAcceptedEmails();
            break;
        case isDuplicate !== undefined:
            alert("Hai già invitato questa persona!");
            addGuestToAcceptedEmails();
            break;
        default:
            acceptedEmails.push(newGuest);
            if (btnAccessParty.classList.contains('d-none')) {
                btnAccessParty.classList.remove('d-none');
            };
            if (btnSortGuestsList.classList.contains('d-none')) {
                btnSortGuestsList.classList.remove('d-none');
            };
            if (addedGuests.classList.contains('d-none')) {
                addedGuests.classList.remove('d-none');
            };
            const newListElement = document.createElement('li');
            newListElement.innerText = newGuest;
            addedGuestsList.appendChild(newListElement);
    };
};



function sortGuests () {
    const arrayToSort = [...addedGuestsList.children];
    console.debug("arrayToSort", arrayToSort);
    
    arrayToSort.sort((listElement1, listElement2) => listElement1.innerText > listElement2.innerText);
    console.debug("arrayToSort", arrayToSort);

    arrayToSort.forEach((listItem) => {
        addedGuestsList.appendChild(listItem);
    })
}



function getRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};