// Dati del calendario, con le date e i messaggi di amore
const messages = {
    "9 settembre 2024": "Amore, anche se questi 3 mesi ci terranno lontani, voglio che tu sappia che ti amo tantissimo. Mi mancherai ogni giorno, ma ti auguro solo il meglio da questa esperienza. Sarò sempre con te, anche da lontano..",
    "10 settembre 2024": "Morcitino, so che questa prima notte lontana da casa non è facile, ma sono sicuro che la tua forza ti guiderà in questa nuova avventura. Sono con te, anche a distanza, e so che ce la farai alla grande. Sei più forte di quanto pensi. Ti amo",
    "11 settembre 2024": `La nostra prima canzone che abbiamo cantato: <a href="https://open.spotify.com/track/7LSBkEm5LQSkhe6yqqqBPs?si=cxnPYbW_SEe8wMVbYk3CDg" target="_blank">ascoltala qui</a>.`,
    "12 settembre 2024": "Il compleanno della nostra micetta! Per questi mesetti penso io a cockina!",
    "13 settembre 2024": "Sei il primo mio pensiero che al mattino mi sveglia",
    "14 settembre 2024": "L'ultimo mio desiderio che la notte mi culla",
    "15 settembre 2024": `<a href="https://open.spotify.com/intl-it/track/5rrA6cOx1iwh8ovh5QKmmI?si=14d3b924c3b04b8a" target="_blank">La storia più incredibile che conosco!</a>.`,
    "16 settembre 2024": `<a href="https://www.instagram.com/reel/C-nYdW7sMYI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">AHAHAHAHAHA</a>.`,
    "17 settembre 2024": "Un anno fa eravamo a Venezia, tra gondole e le nostre vibes. Che bei ricordi insieme!",
    "18 settembre 2024": "Ogni giorno senza di te mi sembra una giornata persa, menomale che domani mattina ho il volo per venire da te e vivere!",
    "19 settembre 2024": "Sono Qui",
    "20 settembre 2024": "Sono Qui",
    "21 settembre 2024": "Sono Qui",
    "22 settembre 2024": "Sono Qui",
    "23 settembre 2024": "Sono Qui",
    "24 settembre 2024": "Un anno e 2 mesi di noi e di momenti speciali che non vedo l'ora di rivivere con te!",
    "25 settembre 2024": "Ti Amo",
    "26 settembre 2024": `<a href="https://open.spotify.com/intl-it/track/0Dn8ErAb94kGhQmEb6WgRP?si=8f545894291c475c" target="_blank">song del taco bell</a>.`,
    "27 settembre 2024": "Quando torni bibotta mia?",
    "28 settembre 2024": "Una settimana dal Bar&Beyond e dai drink marci fatti da noi a norwich ahahah",
    "29 settembre 2024": "Oggi è la mia prima partita di campionato, augurami buona fortuna",
    "30 settembre 2024": "Inizia un'altra settimana senza di te :(",
    "1 ottobre 2024": "Tra 4 giorni ti riabbraccio finalmente, che torni da Londonnnn.",
    "2 ottobre 2024": "Ieri sera non volevo andare in pale, ma mi sono ricordato che sei un 10/10...",
    "3 ottobre 2024": "Manca pochissimo a fare i gattoniiii.",
    "4 ottobre 2024": "Posso aprire un pacchettino prima che arriviiii??",
    "5 ottobre 2024": "Finalmente posso sentire la tua voceee <3",
    "6 ottobre 2024": "",
    "7 ottobre 2024": "",
    "8 ottobre 2024": "",
    "9 ottobre 2024": "sono gia finiti i tuoi giorni in Italia :(",
    "10 ottobre 2024": "Ciò che abbiamo è raro, ed è per questo che so che ne vale la pena.",
    "11 ottobre 2024": "Inglesina miaaaa",
    "12 ottobre 2024": "La vuoi sapere una cosina?",
    "13 ottobre 2024": "A",
    "14 ottobre 2024": "M",
    "15 ottobre 2024": "O",
    "16 ottobre 2024": "R",
    "17 ottobre 2024": "Ogni mattina mi sveglio pensando a te. Non vedo l'ora di svegliarmi con te accanto.",
    "18 ottobre 2024": "Ti amo oggi, ti amerò domani e per sempre.",
    "19 ottobre 2024": "Non vedo l'ora di riaverti tra le mie braccia.",
    "20 ottobre 2024": "Apro una bustina, ecco",
    "21 ottobre 2024": "Mi manchi tanto, ma so che manca sempre meno.",
    "22 ottobre 2024": "Oggi esame zio pera ahahah",
    "23 ottobre 2024": "Tra 2 settimane ci vediamo",
    "24 ottobre 2024": "Troppo lunghi questi mesetti eh",
    "25 ottobre 2024": "La distanza ci sta rendendo ancora più forti. Non vedo l'ora di baciarti.",
    "26 ottobre 2024": "La mia vita è migliore con te. Ti amo.",
    "27 ottobre 2024": "Non vedo l'ora di scoprire il futuro con te.",
    "28 ottobre 2024": "Sei il mio tutto, e sapere che presto ci rivedremo mi riempie il cuore di gioia.",
    "29 ottobre 2024": "Non vedo l'ora di vederti scendere dall'aereo e prenderti al volo.",
    "30 ottobre 2024": "Il mio cuore va in tachicardia pensiero di vederti di nuovo ahahah",
    "31 ottobre 2024": "Presto questa distanza sarà annullata per 4 giorni.",
    "1 novembre 2024": "Sei la persona più importante della mia vita, e non vedo l'ora di rivederti.",
    "2 novembre 2024": "Manca sempre meno! Il pensiero di rivederti mi riempie di gioia.",
    "3 novembre 2024": "Non c'è niente che desideri di più che averti di nuovo accanto.",
    "4 novembre 2024": "Sogno il nostro incontro ogni giorno. Sarà perfetto.",
    "5 novembre 2024": "Anche da lontano, sei la mia ragione di felicità.",
    "6 novembre 2024": "Manca poco al tuo ritorno e ogni giorno è più difficile stare lontano da te.",
    "7 novembre 2024": "Il tuo amore è la mia forza, anche in questi giorni lontani.",
    "8 novembre 2024": "Presto potrò rivederti e il mondo tornerà a brillare.",
    "9 novembre 2024": "",
    "10 novembre 2024": "",
    "11 novembre 2024": "",
    "12 novembre 2024": "",
    "13 novembre 2024": "",
    "14 novembre 2024": "Il conto alla rovescia è iniziato! Mancano pochi giorni.",
    "15 novembre 2024": "Manca pochissimo, amore mio. Sto già preparando l'abbraccio più grande.",
    "16 novembre 2024": "Ogni giorno che passa ci avvicina di più al nostro momento.",
    "17 novembre 2024": "Non vedo l'ora di riempire i giorni del tuo ritorno di felicità.",
    "18 novembre 2024": "Ci aspetta un futuro radioso, e io non vedo l'ora di viverlo con te.",
    "19 novembre 2024": "Il tuo ritorno sarà il regalo più bello che possa ricevere.",
    "20 novembre 2024": "Il nostro amore è eterno, e ora siamo così vicini a rivederci!",
    "21 novembre 2024": "",
    "22 novembre 2024": "",
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

