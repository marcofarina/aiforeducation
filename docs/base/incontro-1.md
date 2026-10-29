# Incontro 1 — Che cosa hai davanti

Il primo incontro risponde a due domande: che cosa fa davvero un assistente come Gemini o
ChatGPT quando risponde, e come si scrive una richiesta che produce un risultato utilizzabile.
La prima domanda serve a prevedere gli errori, la seconda a ridurli.

## Come funziona un modello linguistico

Dietro un assistente c’è un modello linguistico di grandi dimensioni (LLM, *large language
model*). Il modello è stato addestrato su un’enorme raccolta di testi (pagine web, libri,
articoli, codice) con un compito solo in apparenza semplice: dato un pezzo di testo, prevedere
come continua. Ripetuto miliardi di volte, questo esercizio produce un sistema che ha
assorbito la grammatica, lo stile, molte informazioni sul mondo e i modi tipici in cui le
persone spiegano, argomentano, riassumono.

Quando scrivi una domanda, il modello non la cerca in un archivio. Genera la risposta un pezzo
alla volta, scegliendo ogni volta una continuazione probabile di tutto quello che ha davanti:
la tua domanda, la conversazione precedente, gli eventuali allegati.

### Token

Il modello non legge lettere né parole, ma *token*: parole intere, pezzi di parola, segni di
punteggiatura. «Fotosintesi» può essere spezzata in due o tre token, «il» è un token solo. La
lunghezza di una richiesta e di una risposta si misura in token, ed è il motivo per cui i
servizi gratuiti pongono limiti di uso che non coincidono con il numero di messaggi.

### La finestra di contesto

La finestra di contesto è la quantità di testo che il modello considera insieme: le istruzioni,
la conversazione, i documenti allegati e la risposta che sta scrivendo. Quello che resta fuori
dalla finestra, per il modello, non esiste. Due conseguenze pratiche:

- in una conversazione molto lunga i dettagli dell’inizio si perdono, e conviene ricominciare
  in una conversazione nuova riassumendo i punti fermi;
- il modello sa della tua classe solo quello che gli scrivi. Se non dici che è una seconda di
  un istituto tecnico, scriverà per uno studente medio che non esiste.

### Plausibile non vuol dire vero

Il modello sceglie la continuazione più probabile, non quella verificata. Quando conosce bene
l’argomento le due coincidono quasi sempre; quando l’argomento è di nicchia, recente o locale,
il modello produce comunque un testo scorrevole e sicuro di sé, che può essere falso. Il tono
non cambia: una risposta inventata è scritta con la stessa sicurezza di una corretta. Si
chiama allucinazione, e non è un guasto occasionale ma una conseguenza del modo in cui il testo
viene generato. Ci torniamo nell’incontro 3, con il metodo per controllare.

## Gli strumenti

| Strumento | Di chi è | A che cosa serve meglio |
|---|---|---|
| Gemini | Google | Lavoro quotidiano con l’account d’istituto, integrato con Documenti, Gmail e Drive |
| ChatGPT | OpenAI | Uso generale; il più diffuso, anche fra gli studenti |
| Claude | Anthropic | Testi lunghi e documenti, scrittura accurata |
| Grok | xAI | Integrato nel social network X; poco diffuso nell’uso scolastico |
| Perplexity | Perplexity AI | Ricerca con le fonti citate accanto alla risposta |

Tutti hanno un piano gratuito e uno o più piani a pagamento. Il piano gratuito di solito dà
accesso a un modello meno potente, o a quello migliore con un numero limitato di messaggi, e
riduce allegati, immagini e funzioni avanzate. Per i compiti del corso base il piano gratuito
basta.

### Che fine fanno i dati che scrivi

Questa è la differenza che conta di più per un docente.

- **Gemini con l’account d’istituto** è regolato dal contratto fra la scuola e Google per
  Workspace for Education. Secondo Google, le conversazioni fatte con gli account Workspace non
  vengono lette da revisori umani né usate per addestrare i modelli. È l’account da usare per il
  lavoro di scuola.
- **Gli account personali gratuiti** (ChatGPT, Gemini con un indirizzo Gmail privato e gli
  altri) possono usare le conversazioni per migliorare i modelli, se non si cambia
  l’impostazione. In ChatGPT la voce si trova nelle impostazioni, alla sezione sui controlli dei
  dati: «Migliora il modello per tutti».

In nessuno dei due casi entrano in una conversazione nomi, voti, certificazioni o altri dati che
permettono di riconoscere uno studente. La regola, con le alternative, è nella
[scheda sui dati e sulle norme](./scheda).

## Primo contatto

1. Apri il browser ed entra in Gemini con l’account Google d’istituto. Se sei già entrato in un
   account personale, controlla in alto a destra quale account è attivo.
2. Scrivi una richiesta semplice e leggi la risposta.
3. Nella barra laterale trovi la cronologia: ogni conversazione resta salvata con un titolo. Puoi
   rinominarla, fissarla in alto o cancellarla dal menu accanto al titolo.
4. Avvia una nuova conversazione: il modello non ricorda quella precedente.
5. Allega un documento (l’icona per aggiungere file sta accanto alla casella di testo) e chiedi di
   riassumerlo in tre righe. Usa un documento senza dati personali: una circolare, una pagina di
   un manuale, un testo tuo.

## Anatomia di un prompt

Un prompt efficace dice al modello sei cose. Non servono tutte ogni volta, ma più ne mancano,
più il modello riempie i vuoti con la scelta più generica.

| Parte | Che cosa dice | Esempio |
|---|---|---|
| Ruolo | Da quale punto di vista scrivere | Sei un docente di matematica del biennio di un istituto tecnico. |
| Compito | Che cosa produrre, con un verbo preciso | Prepara otto esercizi sulle frazioni equivalenti. |
| Contesto | Per chi, a che punto del programma, perché | Classe prima; hanno appena visto la semplificazione; serve per un ripasso prima della verifica. |
| Vincoli | Che cosa evitare o rispettare | Solo numeri sotto il cento; niente problemi con le percentuali. |
| Formato | Come deve essere la risposta | Elenco numerato, difficoltà crescente, soluzioni in fondo e separate. |
| Esempi | Un modello della risposta attesa | Un esercizio scritto come vorresti, che il modello imita. |

Lo stesso compito, scritto in due modi:

```text
Fammi degli esercizi sulle frazioni.
```

```text
Sei un docente di matematica del biennio di un istituto tecnico.
Prepara otto esercizi sulle frazioni equivalenti per una classe prima che ha appena
visto la semplificazione: servono per il ripasso prima della verifica.
Usa solo numeri sotto il cento e non inserire problemi con le percentuali.
Scrivili come elenco numerato, in ordine di difficoltà crescente, e metti le soluzioni
in fondo, separate dagli esercizi.
```

Il primo produce un elenco di esercizi qualunque, di livello incerto, spesso senza soluzioni. Il
secondo produce qualcosa che si può stampare, dopo un controllo. La differenza non sta nella
lunghezza ma nelle informazioni: contesto e formato pesano più del ruolo.

## Laboratorio: riscrivere i prompt

Il laboratorio si può rifare a casa in mezz’ora.

1. Scegli due prompt dall’elenco qui sotto, vicini alla tua disciplina.
2. Incolla il primo così com’è in una nuova conversazione e leggi la risposta.
3. Riscrivilo con le sei parti della tabella.
4. Incolla il prompt riscritto in **una nuova conversazione**: nella stessa, il modello
   partirebbe dalla risposta precedente e il confronto non varrebbe.
5. Metti le due risposte una accanto all’altra e annota quale parte del prompt ha cambiato di
   più il risultato.
6. Ripeti con il secondo prompt, poi con un compito tuo.

I prompt da riscrivere:

1. «Fammi una verifica sulla Rivoluzione francese.»
2. «Spiega la fotosintesi.»
3. «Scrivi una mail ai genitori per la gita.»
4. «Dammi qualche idea per una lezione di inglese.»
5. «Fai una griglia per l’interrogazione.»
6. «Semplifica questo testo per uno studente in difficoltà.» (con un testo allegato)

Per l’ultimo, nota una cosa: per ottenere un buon adattamento non serve scrivere la diagnosi di
nessuno. Basta descrivere il bisogno: frasi brevi, lessico di base, un concetto per paragrafo,
parole chiave in grassetto.

## Prima del prossimo incontro

- Usa il prompt riscritto per il tuo compito almeno una volta, in una situazione reale.
- Scegli un materiale tuo da portare all’incontro 2, in formato digitale: una spiegazione, una
  verifica, un testo da adattare. Prima di portarlo, togli qualsiasi dato di studenti.
