// Dati del calendario, con le date e i messaggi di amore
const messages = {
    "9 settembre 2024": "Amore, anche se questi 3 mesi ci terranno lontani, voglio che tu sappia che ti amo tantissimo. Mi mancherai ogni giorno, ma ti auguro solo il meglio da questa esperienza. Sarò sempre con te, anche da lontano..",
    "10 settembre 2024": "Oggi ho ripensato ai nostri ricordi... Non vedo l'ora di crearne altri.",
    "11 settembre 2024": "Sappi che sono con te, anche da lontano. Il nostro legame è più forte di qualsiasi distanza.",
    "12 settembre 2024": "Sappi che sono con te, anche da lontano. Il nostro legame è più forte di qualsiasi distanza.",
    "13 settembre 2024": "Il tuo sorriso è la mia forza. Lo immagino sempre per affrontare ogni giornata.",
    "14 settembre 2024": "Conto i giorni che ci separano, ma conto ancora di più le emozioni che provo per te.",
    "15 settembre 2024": "La tua presenza si sente anche da lontano. Sei nei miei pensieri sempre.",
    "16 settembre 2024": "Anche se non siamo vicini, la mia anima è sempre accanto alla tua.",
    "17 settembre 2024": "Il nostro amore non ha confini. Non vedo l'ora di abbracciarti ancora.",
    "18 settembre 2024": "Ogni giorno senza di te è una lezione di pazienza. Ma so che ne vale la pena.",
    "19 settembre 2024": "C’è una luce nel mio cuore, ed è accesa dal tuo amore. La distanza non potrà spegnerla.",
    "20 settembre 2024": "Mi manchi più di quanto le parole possano esprimere. Ti aspetto con tutto il mio cuore.",
    "21 settembre 2024": "Non vedo l'ora di rivedere il tuo volto e sentire la tua voce dal vivo.",
    "22 settembre 2024": "Se chiudo gli occhi, posso quasi sentirti accanto a me. Sento la tua energia ogni giorno.",
    "23 settembre 2024": "Ogni sacrificio che facciamo ora, ci renderà ancora più forti insieme.",
    "24 settembre 2024": "La distanza è solo un numero. Il nostro amore non conosce distanze né barriere.",
    "25 settembre 2024": "Il mio cuore batte solo per te, ovunque tu sia.",
    "26 settembre 2024": "Mi sento fortunato/a ad avere una persona speciale come te, anche se siamo lontani.",
    "27 settembre 2024": "Penso a noi ogni giorno, immaginando tutte le cose che faremo quando tornerai.",
    "28 settembre 2024": "Mancano sempre meno giorni, e io sono sempre più emozionato/a.",
    "29 settembre 2024": "Sarà bellissimo rivederti e riempire i nostri giorni di momenti magici.",
    "30 settembre 2024": "Un altro giorno è passato, ma ti sento sempre più vicino/a a me.",
    "1 ottobre 2024": "L’attesa sarà lunga, ma l’amore che provo per te la rende più dolce.",
    "2 ottobre 2024": "Le tue parole mi confortano anche da lontano. Sei la mia felicità.",
    "3 ottobre 2024": "Sogno il momento in cui potrò stringerti forte a me. Quel giorno non è lontano.",
    "4 ottobre 2024": "Le cose migliori della vita richiedono pazienza. E tu sei decisamente la cosa migliore.",
    "5 ottobre 2024": "Ogni messaggio, ogni chiamata mi ricordano quanto tu sia importante per me.",
    "6 ottobre 2024": "La nostra storia è unica. La distanza la rende solo più speciale.",
    "7 ottobre 2024": "Il mio cuore è sempre con te, ovunque tu sia.",
    "8 ottobre 2024": "Mi manchi tanto, ma sono felice di sapere che presto saremo di nuovo insieme.",
    "9 ottobre 2024": "Quando tornerai, riempiremo di nuovo il mondo del nostro amore.",
    "10 ottobre 2024": "Ciò che abbiamo è raro, ed è per questo che so che ne vale la pena.",
    "11 ottobre 2024": "La nostra storia è come un viaggio: ogni giorno ci porta più vicini alla nostra meta.",
    "12 ottobre 2024": "Ogni mattina mi sveglio pensando a te. Non vedo l'ora di svegliarmi con te accanto.",
    "13 ottobre 2024": "Anche da lontano, il mio cuore batte solo per te.",
    "14 ottobre 2024": "Conto i giorni che ci separano e sogno il giorno del tuo ritorno.",
    "15 ottobre 2024": "Niente potrà mai spezzare il nostro legame, perché è troppo forte.",
    "16 ottobre 2024": "La distanza può solo farci desiderare ancora di più di stare insieme.",
    "17 ottobre 2024": "Ogni giorno lontani è un passo in più verso il nostro futuro insieme.",
    "18 ottobre 2024": "Ti amo oggi, ti amerò domani e per sempre.",
    "19 ottobre 2024": "Non vedo l'ora di riaverti tra le mie braccia. Quel giorno sarà indimenticabile.",
    "20 ottobre 2024": "Ciò che ci unisce è più forte di ogni ostacolo. Ci aspetta un futuro radioso insieme.",
    "21 ottobre 2024": "Il nostro amore è come una fiamma che arde anche da lontano.",
    "22 ottobre 2024": "Mi manchi tanto, ma so che presto ci riuniremo e sarà magico.",
    "23 ottobre 2024": "Quando tornerai, non ti lascerò mai più andare.",
    "24 ottobre 2024": "La distanza non può mai cambiare ciò che provo per te.",
    "25 ottobre 2024": "Aspetto con ansia il giorno in cui finalmente ti rivedrò.",
    "26 ottobre 2024": "Ogni notte sogno di te e di noi. Non vedo l'ora di vivere quei sogni.",
    "27 ottobre 2024": "La nostra relazione è la cosa più preziosa che ho.",
    "28 ottobre 2024": "Anche a miglia di distanza, il tuo amore mi raggiunge ogni giorno.",
    "29 ottobre 2024": "Ti amo più di ogni altra cosa al mondo. Presto saremo insieme.",
    "30 ottobre 2024": "Ogni sacrificio che facciamo ora ci rende più forti come coppia.",
    "31 ottobre 2024": "Non importa dove siamo, il nostro amore ci lega sempre.",
    "1 novembre 2024": "Sei la persona più importante della mia vita, e non vedo l'ora di rivederti.",
    "2 novembre 2024": "Manca sempre meno! Il pensiero di rivederti mi riempie di gioia.",
    "3 novembre 2024": "Non c'è niente che desideri di più che averti di nuovo accanto.",
    "4 novembre 2024": "Sogno il nostro incontro ogni giorno. Sarà perfetto.",
    "5 novembre 2024": "Anche da lontano, sei la mia ragione di felicità.",
    "6 novembre 2024": "Manca poco al tuo ritorno e ogni giorno è più difficile stare lontano da te.",
    "7 novembre 2024": "Il tuo amore è la mia forza, anche in questi giorni lontani.",
    "8 novembre 2024": "Presto potrò rivederti e il mondo tornerà a brillare.",
    "9 novembre 2024": "La distanza ci ha reso ancora più forti. Non vedo l'ora di riabbracciarti.",
    "10 novembre 2024": "La mia vita è migliore con te. Torna presto, ti amo.",
    "11 novembre 2024": "Ciò che ci aspetta è un futuro pieno di amore e felicità.",
    "12 novembre 2024": "Sei il mio tutto, e sapere che presto tornerai mi riempie il cuore di gioia.",
    "13 novembre 2024": "Il conto alla rovescia è iniziato! Mancano pochi giorni.",
    "14 novembre 2024": "Non vedo l'ora di vederti scendere dall'aereo e correre verso di te.",
    "15 novembre 2024": "Manca pochissimo, amore mio. Sto già preparando l'abbraccio più grande.",
    "16 novembre 2024": "Ogni giorno che passa ci avvicina di più al nostro momento.",
    "17 novembre 2024": "Non vedo l'ora di riempire i giorni del tuo ritorno di felicità.",
    "18 novembre 2024": "Ci aspetta un futuro radioso, e io non vedo l'ora di viverlo con te.",
    "19 novembre 2024": "Il tuo ritorno sarà il regalo più bello che possa ricevere.",
    "20 novembre 2024": "Il nostro amore è eterno, e ora siamo così vicini a rivederci!",
    "21 novembre 2024": "Il mio cuore batte forte al pensiero di vederti di nuovo.",
    "22 novembre 2024": "Presto questa distanza sarà solo un ricordo lontano.",
    "23 novembre 2024": "Sto contando ogni secondo. Non vedo l'ora di rivederti.",
    "24 novembre 2024": "Manca pochissimo. Sarà come se non fossi mai partita.",
    "25 novembre 2024": "Il pensiero di te mi accompagna in ogni momento della giornata.",
    "26 novembre 2024": "Sei la mia luce, e presto brilleremo insieme.",
    "27 novembre 2024": "La nostra attesa è quasi finita, amore mio.",
    "28 novembre 2024": "Ogni volta che ti penso, il mio cuore si riempie di felicità.",
    "29 novembre 2024": "Presto potremo vivere di nuovo i nostri momenti magici.",
    "30 novembre 2024": "Ti amo più di quanto possa esprimere. Non vedo l'ora di riabbracciarti.",
    "1 dicembre 2024": "È il primo giorno di dicembre e presto saremo insieme.",
    "2 dicembre 2024": "Manca davvero poco! Il tuo ritorno è vicino.",
    "3 dicembre 2024": "La felicità che provo al pensiero di vederti è indescrivibile.",
    "4 dicembre 2024": "Ancora pochi giorni e potrò finalmente stringerti.",
    "5 dicembre 2024": "Mi manchi da impazzire, ma so che presto sarai di nuovo qui.",
    "6 dicembre 2024": "Il pensiero di te mi ha sostenuto fino a qui. Il nostro momento è vicino.",
    "7 dicembre 2024": "Presto i giorni lontani saranno solo un ricordo. Ti amo.",
    "8 dicembre 2024": "Siamo così vicini. Non vedo l'ora di riabbracciarti.",
    "9 dicembre 2024": "Ancora pochi giorni, amore mio. Il pensiero di vederti mi emoziona.",
    "10 dicembre 2024": "Il nostro incontro sarà magico. Non vedo l'ora.",
    "11 dicembre 2024": "Domani finalmente tornerai! Sono emozionatissimo/a.",
    "12 dicembre 2024": "Buon compleanno, amore mio! Finalmente sei tornata!"
};


// Funzione per creare il calendario
function createCalendar() {
    const oggi = new Date();

    Object.keys(messages).forEach((dateString, index) => {
        const cell = document.createElement('div');
        cell.classList.add('calendar-cell');
        const date = convertDateString(dateString);
        const monthName = date.toLocaleString('it-IT', { month: 'long' }).toLowerCase();
        const cellId = dateString;
        const previewLength = 5; // Numero di caratteri da mostrare in anteprima

        // Creiamo l'anteprima con "..." se il messaggio è troppo lungo
        const message = messages[dateString];
        const previewMessage = message.length > previewLength ? message.substring(0, previewLength) + '...' : message;

        cell.innerHTML = `
            <div class="front">
                <div class="cell-number">${date.getDate()}</div>
            </div>
            <div class="back">
                <div class="cell-message">${previewMessage}</div>
            </div>
        `;

        // Verifica se la casella è stata aperta in passato
        if (localStorage.getItem(cellId) === 'true') {
            cell.classList.add('open');
        }

        // Se la data è oggi o una data precedente
        if (date <= oggi) {
            cell.addEventListener('click', function () {
                openCell(cell, cellId);
            });
        } else {
            cell.classList.add('locked');
        }

        // Inserisci la casella nel mese corrispondente
        document.getElementById(monthName).appendChild(cell);
    });
}

function openCell(cell, cellId) {
    // Aggiungiamo il box anche se la cella è già aperta
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.innerHTML = messages[cellId]; // Mostra il messaggio completo

    // Aggiungiamo lo sfondo bianco al body
    document.body.appendChild(messageBox);

    // Dopo 5 secondi, rimuoviamo il messaggio
    setTimeout(() => {
        messageBox.remove();
    }, 5000);

    // Salva lo stato solo la prima volta che viene aperta
    if (!cell.classList.contains('open')) {
        cell.classList.add('open');
        localStorage.setItem(cellId, 'true');
    }
}



// Funzione per convertire le date nel formato accettato da JavaScript (italiano -> inglese)
function convertDateString(dateString) {
    const months = {
        "gennaio": "January",
        "febbraio": "February",
        "marzo": "March",
        "aprile": "April",
        "maggio": "May",
        "giugno": "June",
        "luglio": "July",
        "agosto": "August",
        "settembre": "September",
        "ottobre": "October",
        "novembre": "November",
        "dicembre": "December"
    };

    const [day, month, year] = dateString.split(' ');
    const englishMonth = months[month.toLowerCase()];
    return new Date(`${englishMonth} ${day}, ${year}`);
}

// Funzione per scorrere all'inizio della pagina al caricamento
window.onload = function() {
    createCalendar();
    window.scrollTo(0, 0);
};

