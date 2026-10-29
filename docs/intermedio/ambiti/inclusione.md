# Edizione inclusione

Appendice per il dipartimento di sostegno. Raccoglie gli esempi d’ambito che nei capitoli comuni
compaiono in forma neutra, il laboratorio del terzo incontro e una libreria di prompt per i
compiti che tornano ogni settimana. Ogni sezione corrisponde a un punto dei capitoli, che
rimanda qui.

<!--
Ogni esempio è racchiuso in una regione con l’identificativo del marcatore ESEMPIO:ambito
del capitolo comune: vedi «Esempi d’ambito» in AGENTS.md.
-->

Il compito attorno a cui ruota l’edizione è uno: rendere accessibile un materiale nato per
un’altra soglia di lettura, senza perdere quello che deve restare. Un docente di sostegno lo
fa ogni settimana, per discipline diverse e spesso con poco preavviso. I modelli linguistici
semplificano in fretta; il punto è che semplificano anche dove non dovrebbero, e tagliano i
passaggi logici insieme alle parole difficili.

::: danger Dati personali
È l’edizione con il rischio più alto: i documenti di questo ambito contengono nomi, diagnosi e
situazioni familiari. Nei prompt, nei Gem e nei taccuini entrano i testi da adattare, mai i
documenti che riguardano una persona. Un profilo di adattamento descrive un modo di scrivere,
non uno studente: «frasi brevi, un concetto per paragrafo», non «per Luca, che ha una
dislessia». Il modello di PDP o di PEI si porta in aula vuoto.
:::

## Che cosa portare

- Capitoli del manuale in uso nelle classi che segui, in formato digitale quando esiste.
- Materiali già adattati negli anni passati, da usare come esempio di adattamento ben fatto.
- Una verifica da trasformare in una versione con richieste di lettura diverse.
- Le indicazioni di scrittura che usi già: lunghezza delle frasi, lessico, impaginazione.
- Modelli di PDP e PEI **vuoti**, senza alcun dato.

## Incontro 1

### Chat o file {#inc1-chat-o-file}

<!-- #region inc1-chat-o-file -->
::: tip Esempio di inclusione
Nella chat vuota: «Semplifica il capitolo sulla cellula per uno studente con difficoltà di
lettura.» Il modello scrive un testo semplice sulla cellula in generale, che non segue il
manuale della classe: lo studente si trova con due testi diversi sullo stesso argomento.

Nel pannello laterale, con aperto il capitolo del manuale: la stessa richiesta produce una
versione che segue i paragrafi del capitolo, mantiene i termini che il docente di disciplina
userà in classe e si può affiancare al testo originale pagina per pagina.
:::
<!-- #endregion inc1-chat-o-file -->

### Le tre operazioni {#inc1-tre-operazioni}

<!-- #region inc1-tre-operazioni -->
::: tip Esempio di inclusione
- Interrogare: «In questo capitolo di storia, quali termini specifici compaiono senza essere
  spiegati? Quali frasi superano le venticinque parole?»
- Trasformare: «Da questo paragrafo ricava una mappa dei concetti: il concetto principale, i
  tre che ne dipendono e il legame fra ciascuno, scritto con un verbo.»
- Confrontare: «Metti a confronto la verifica originale e la versione semplificata: valutano gli
  stessi obiettivi? Quale domanda della versione semplificata non corrisponde a nessuna
  dell’originale?»
:::
<!-- #endregion inc1-tre-operazioni -->

### Un Gem per la disciplina {#inc1-gem}

<!-- #region inc1-gem -->
::: tip Esempio di inclusione: il Gem «adattamento»
**Compito.** Riscrivi un testo di studio in una versione ad alta leggibilità che uno studente
della secondaria possa usare accanto all’originale.

**Contesto.** Il testo viene da un manuale di classe. Lo studente studierà sulla tua versione,
ma la lezione e la verifica seguono l’originale: i contenuti e i termini della disciplina devono
restare gli stessi.

**Formato.** Frasi di non più di quindici parole, un concetto per paragrafo, un titolo breve per
ogni paragrafo. I termini specifici restano nel testo in grassetto e sono spiegati in un
glossario finale. Lo stesso ordine dei paragrafi dell’originale.

**Limiti.** Non togli nessun passaggio che spiega una causa o una conseguenza: se una frase
contiene «perché», «quindi», «ma», il legame deve restare. Non aggiungi esempi o informazioni
che non sono nel testo. Se un passaggio non si può semplificare senza cambiarne il senso,
lascialo com’è e segnalalo.

File di riferimento: un materiale già adattato da te, come esempio del risultato atteso.
:::

Lo stesso schema regge un Gem «glossario», che estrae da un capitolo i termini da spiegare e ne
scrive la definizione nel registro concordato, con un esempio d’uso preso dal testo.
<!-- #endregion inc1-gem -->

## Incontro 2

### Un taccuino {#inc2-taccuino}

<!-- #region inc2-taccuino -->
::: tip Esempio di inclusione
Un taccuino per una disciplina seguita con uno studente: i capitoli del manuale del
quadrimestre, le versioni adattate già preparate, il glossario della materia. Domande che il
taccuino regge bene: «quali termini del capitolo quattro non sono ancora nel glossario?», «in
quale paragrafo del manuale si spiega questo concetto?», «dove la versione adattata dice
qualcosa che il capitolo non dice?». Condiviso con lo studente, il taccuino diventa una base di
studio in cui ogni risposta rimanda al punto del testo: lo studente ritrova la fonte invece di
fidarsi.

Le sintesi audio di NotebookLM offrono un canale alternativo alla lettura. Vanno ascoltate prima
di proporle: sono in forma di dialogo, semplificano e a volte cambiano l’ordine degli argomenti.
:::
<!-- #endregion inc2-taccuino -->

### Un’istruzione di sistema {#inc2-istruzione-sistema}

<!-- #region inc2-istruzione-sistema -->
::: tip Esempio di inclusione: un profilo di leggibilità costante
> Sei un assistente per l’adattamento di testi di studio della scuola secondaria. Ricevi un
> paragrafo di un manuale. Restituisci: la versione adattata, con frasi di non più di quindici
> parole e un concetto per frase; l’elenco dei termini specifici mantenuti, con una definizione
> di una riga; l’elenco dei legami logici dell’originale (cause, conseguenze, contrapposizioni)
> e la frase della versione adattata in cui ciascuno si ritrova. Non aggiungi contenuti. Se un
> legame logico non si può mantenere, scrivi «serve il docente» e indica quale.

Con temperatura bassa, lo stesso profilo resta costante su tutti i materiali dell’anno, invece
di essere rinegoziato a ogni capitolo. La terza parte dell’output rende visibile proprio ciò che
il modello tende a perdere.
:::
<!-- #endregion inc2-istruzione-sistema -->

### Un’applicazione web {#inc2-app-web}

<!-- #region inc2-app-web -->
::: tip Esempio di inclusione
«Costruisci una pagina web per uno studente della secondaria. Mostra le sei fasi del ciclo
dell’acqua descritte nel testo allegato, una per scheda, in ordine casuale. Lo studente le mette
in ordine toccandole una alla volta. Dopo ogni scelta la pagina dice se è giusta e, se non lo è,
rilegge la frase del testo che spiega quella fase. Caratteri grandi, un’azione per schermata,
nessun limite di tempo, nessun punteggio. Niente registrazione, niente dati salvati.»

Prima di darla allo studente si prova da telefono e da tablet, e si controlla che ogni frase
mostrata venga dal testo.
:::
<!-- #endregion inc2-app-web -->

## Incontro 3

### Il laboratorio: un capitolo in versione multilivello {#inc3-laboratorio}

<!-- #region inc3-laboratorio -->
::: tip Laboratorio dell’edizione inclusione
Ciascun partecipante produce **un capitolo in versione multilivello**:

1. carica il testo di partenza, e come esempio un materiale già adattato da te;
2. definisce due profili di adattamento, per esempio uno con frasi brevi e glossario e uno con
   testo ridotto e mappa, e li scrive come istruzioni riusabili;
3. genera le due versioni, il glossario e una mappa dei concetti;
4. confronta ogni versione con l’originale, paragrafo per paragrafo: ogni causa, conseguenza e
   contrapposizione dell’originale c’è ancora? Corregge a mano quello che il modello ha
   appiattito.

Esce con il materiale pronto e con i due profili riutilizzabili sugli altri capitoli.
:::
<!-- #endregion inc3-laboratorio -->

### L’errore tipico: semplificare togliendo il perché {#inc3-avvertenza}

<!-- #region inc3-avvertenza -->
::: warning L’errore tipico dell’ambito
Un modello che semplifica taglia anche i passaggi logici, non solo le parole difficili. «Il
ghiaccio galleggia perché è meno denso dell’acqua» diventa «Il ghiaccio galleggia perché è
leggero»: la frase è più semplice, e ora insegna una cosa sbagliata. In un testo storico, una
catena di cause diventa un elenco di fatti, e lo studente impara che cosa è successo senza
capire perché.

Il controllo del punto 4 si fa con l’originale accanto. Le frasi con «perché», «quindi»,
«ma», «invece» sono quelle da cercare per prime: se il legame è sparito, il testo è più facile
ma non dice più la stessa cosa.
:::
<!-- #endregion inc3-avvertenza -->

## Modelli d’ambito

Esempi per i [modelli pronti](/intermedio/modelli) del corso.

### Compito di un Gem {#modello-gem}

<!-- #region modello-gem -->
::: tip Esempio di compito per l’inclusione
Prepari la versione ad alta leggibilità di un paragrafo del manuale che ti incollo, per uno
studente della secondaria che la userà accanto all’originale.
:::
<!-- #endregion modello-gem -->

### Domanda che mette insieme due fonti {#modello-taccuino}

<!-- #region modello-taccuino -->
::: tip Esempio di domanda per l’inclusione
Quali concetti del capitolo originale non compaiono nella versione adattata, e in quale
paragrafo dell’originale si trovano?
:::
<!-- #endregion modello-taccuino -->

### Azione dello studente in un’applicazione web {#modello-app-web}

<!-- #region modello-app-web -->
::: tip Esempio di azione per l’inclusione
Lo studente abbina ciascun termine del glossario alla sua definizione, uno alla volta, e dopo
ogni abbinamento rilegge la frase del testo in cui il termine compare.
:::
<!-- #endregion modello-app-web -->

## Libreria di prompt

Prompt per i compiti ricorrenti, da usare nel pannello laterale con il file aperto, in un Gem o
come punto di partenza di un’istruzione di sistema. Le parti fra parentesi quadre si
sostituiscono. In nessuno entra un dato che riguarda uno studente.

**Glossario di un capitolo.**

```text
Dal capitolo allegato estrai i termini specifici che uno studente di [classe] deve conoscere per
seguire la lezione. Per ciascuno: definizione in una frase di non più di quindici parole ed
esempio d’uso preso dal capitolo, con il numero di pagina.
```

**Mappa dei concetti.**

```text
Dal paragrafo allegato ricava la struttura dei concetti: il concetto principale, quelli che ne
dipendono e il legame fra ciascuno, scritto con un verbo. Presentala come elenco rientrato, da
ridisegnare a mano o in uno strumento per mappe.
```

**Verifica in due versioni.**

```text
La verifica allegata valuta questi obiettivi: [elenco]. Prepara una seconda versione che valuti
gli stessi obiettivi con richieste di lettura diverse: consegne brevi, una richiesta per
consegna, esempi dove servono. Per ogni esercizio indica l’obiettivo e l’esercizio
corrispondente dell’originale.
```

**Consegna scomposta.**

```text
Scomponi la consegna allegata in passi numerati, uno per azione, ciascuno di una sola frase.
Non cambiare che cosa si chiede: cambia solo come è scritto.
```

**Controllo dei legami logici.**

```text
Metti a confronto il testo originale e la versione adattata allegati. Elenca ogni causa,
conseguenza e contrapposizione dell’originale e indica se nella versione adattata c’è ancora, e
in quale frase.
```

**Testo per la sintesi vocale.**

```text
Riscrivi il paragrafo allegato perché funzioni letto ad alta voce da una sintesi vocale:
niente tabelle, niente simboli, sigle scritte per esteso, numeri in lettere fino a cento, un
concetto per frase.
```

Il carattere, la dimensione e l’interlinea del materiale finale non dipendono dal modello: si
impostano in Documenti, secondo le indicazioni che il dipartimento usa già.
