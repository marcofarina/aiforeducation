# Prima dell’avanzato

Il corso avanzato non ritorna su quattro temi che il base e l’intermedio trattano per esteso.
Questa pagina li riassume, perché chi arriva all’avanzato possa controllare di averli
presenti.

## La struttura di un prompt

Un prompt efficace dichiara cinque cose: il **ruolo** che il modello deve assumere, il
**compito**, il **contesto** che serve a svolgerlo, i **vincoli** da rispettare e il
**formato** della risposta. Il ruolo orienta tono e priorità; il contesto evita le ambiguità;
il formato rende la risposta facile da valutare e da riusare. Quando serve un formato preciso,
un esempio della risposta attesa vale più di una descrizione.

```text
Ruolo: sei un docente di storia del biennio.
Compito: prepara cinque domande di comprensione sul brano allegato.
Contesto: classe seconda, il brano tratta la crisi del Trecento.
Vincoli: lessico adatto a quindici anni; nessuna domanda a cui si risponde con sì o no.
Formato: elenco numerato, con la risposta attesa sotto ogni domanda.
```

## La verifica di una risposta

Ogni contenuto generato è una bozza finché qualcuno non lo controlla. Si confrontano date,
nomi e numeri con una fonte indipendente; si aprono le citazioni e i riferimenti, che sono la
prima cosa che un modello inventa; si rilegge il testo chiedendosi se è adatto alla classe a
cui è destinato. Il controllo cresce con le conseguenze: una traccia per la discussione chiede
meno verifiche di una griglia di valutazione.

## I dati che non entrano mai

Nomi, voti, certificazioni, situazioni familiari e ogni altra informazione che permetta di
riconoscere uno studente o un collega non entrano in una conversazione con un assistente, né
in un file che un agente può leggere. Gli esempi si scrivono con nomi di fantasia; i casi reali
si anonimizzano prima, a mano. La regola vale anche quando l’account è quello d’istituto.

## Istruzioni permanenti e fonti caricate

Gli assistenti permettono di scrivere istruzioni una volta sola e di riusarle in ogni
conversazione: i Gem in Gemini, i progetti in ChatGPT. Le istruzioni permanenti fissano ruolo,
stile e vincoli, e liberano dal ripeterli a ogni richiesta.

Strumenti come NotebookLM lavorano invece su un insieme di fonti caricate dall’utente e
rispondono a partire da quelle, indicando da dove viene ogni affermazione. È il modo più
semplice di ridurre le allucinazioni: il modello cita un documento che si può aprire, invece di
ricordare.

Il corso avanzato parte da qui. Un file di istruzioni in una cartella fa lo stesso lavoro delle
istruzioni permanenti, ma sta nei file del docente, si può versionare e funziona con agenti
diversi.
