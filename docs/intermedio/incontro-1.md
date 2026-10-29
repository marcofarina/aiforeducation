# Incontro 1 — Gemini dentro il lavoro

Il primo incontro sposta Gemini dalla finestra di chat ai file su cui un docente lavora già:
documenti, presentazioni, posta, cartelle di Drive. Poi introduce il Gem, cioè un assistente
configurato una volta sola con le proprie istruzioni e i propri materiali. All’uscita ognuno ha
un Gem per la propria materia, già messo alla prova su un compito della settimana.

::: warning Da verificare sugli account d’istituto
Le indicazioni su dove si trovano le funzioni seguono la documentazione di Google e vanno
provate sugli account dell’istituto prima dell’incontro. Quando la prova è fatta, qui compare
la data.
:::

## Gemini nell’account d’istituto

Con l’account della scuola Gemini si incontra in due forme. La prima è l’app Gemini, la chat
che si apre dal browser: è il posto per le conversazioni lunghe, per i Gem e per i compiti che
non partono da un file preciso. La seconda è il pannello laterale che compare dentro
Documenti, Presentazioni, Fogli, Gmail e Drive: lavora sul file aperto e, quando serve, può
attingere ad altri file del proprio Drive.

Le due forme usano lo stesso modello, ma ricevono informazioni diverse. Nell’app il modello sa
solo quello che gli si scrive o si allega. Nel pannello laterale riceve anche il contenuto del
documento aperto, e spesso la richiesta si accorcia a una riga: «riassumi la seconda sezione»,
«trasforma questo elenco in una tabella», «scrivi una risposta cortese a questa mail
proponendo giovedì».

Sull’account d’istituto vale una cautela in più rispetto a un account personale. Google
dichiara che, per le edizioni Workspace for Education, i contenuti delle conversazioni non
servono ad addestrare i modelli e non vengono letti da revisori umani. È una garanzia sul
trattamento dei dati da parte del fornitore, non un permesso di caricare qualunque cosa: la
regola sui documenti che riguardano persone resta la stessa del corso base.

## Perché lavorare dentro un file cambia il risultato

Un modello linguistico produce la risposta più plausibile dato quello che riceve. Se riceve
soltanto la richiesta, la risposta è plausibile in generale: un riassunto di un argomento come
lo trattano in media i testi su cui il modello è stato addestrato. Se riceve anche il documento
del docente, la risposta è plausibile rispetto a quel documento, con il suo lessico, il suo
ordine e i suoi tagli.

La differenza si vede subito mettendo a confronto due richieste identiche.

<!-- ESEMPIO:ambito inc1-chat-o-file -->
::: tip Esempio
Nella chat vuota: «Prepara cinque domande di comprensione sul secondo capitolo del manuale.»
Il modello non conosce il manuale e scrive domande generiche sull’argomento che immagina.

Nel pannello laterale, con il capitolo aperto in Documenti: la stessa richiesta produce domande
che citano i paragrafi, usano i termini del testo e seguono l’ordine in cui gli argomenti sono
presentati.
:::
Nelle edizioni: [umanistica](./ambiti/umanistico#inc1-chat-o-file) · [scientifico-tecnologica](./ambiti/scientifico-tecnologico#inc1-chat-o-file) · [economico-giuridica](./ambiti/economico-giuridico#inc1-chat-o-file) · [inclusione](./ambiti/inclusione#inc1-chat-o-file).
<!-- /ESEMPIO -->

Il secondo risultato non è automaticamente migliore. È però **controllabile**: il docente
conosce il testo di partenza e vede subito se una domanda lo tradisce. Il primo risultato,
invece, va confrontato con un testo che non c’è.

## Partire dai propri materiali

Quasi tutti i compiti ricorrenti di un docente partono da un materiale che esiste già: una
verifica dell’anno scorso, una scaletta di lezione, una presentazione da aggiornare, una
circolare a cui rispondere. Chiedere al modello di generare da zero butta via quel materiale e
costringe a ricontrollare tutto. Conviene invece partire dal file e chiedere una di tre
operazioni.

**Interrogare.** Il file resta com’è e il modello risponde su di esso: che cosa manca in questa
verifica rispetto al programma, quali argomenti tratta la presentazione, dove la scaletta è
sbilanciata.

**Trasformare.** Il file diventa un altro materiale: la scaletta diventa una traccia di
esercitazione, l’elenco di argomenti diventa una griglia, la presentazione diventa una scheda
di ripasso.

**Confrontare.** Due file messi uno accanto all’altro: la verifica di quest’anno e quella
dell’anno scorso, il programma svolto e quello dichiarato, due versioni dello stesso testo.

<!-- ESEMPIO:ambito inc1-tre-operazioni -->
::: tip Esempio
- Interrogare: «In questa verifica, quali obiettivi del programma allegato non sono valutati da
  nessun esercizio?»
- Trasformare: «Da questa scaletta di lezione ricava una traccia di esercitazione da svolgere
  in coppia, con i tempi.»
- Confrontare: «Metti a confronto le due verifiche: quali argomenti compaiono in una sola, e
  quale delle due è più lunga da svolgere?»
:::
Nelle edizioni: [umanistica](./ambiti/umanistico#inc1-tre-operazioni) · [scientifico-tecnologica](./ambiti/scientifico-tecnologico#inc1-tre-operazioni) · [economico-giuridica](./ambiti/economico-giuridico#inc1-tre-operazioni) · [inclusione](./ambiti/inclusione#inc1-tre-operazioni).
<!-- /ESEMPIO -->

Dall’app Gemini si può far riferimento a un file del proprio Drive anche senza aprirlo,
nominandolo nella richiesta; nel pannello laterale di Drive si può interrogare una cartella
intera. In entrambi i casi il modello lavora su quello che riesce a leggere: un PDF scansionato
male, una tabella incollata come immagine o una presentazione fatta solo di figure danno
risposte povere, e la causa è il file, non la richiesta.

## I Gem

Un Gem è un assistente con istruzioni permanenti. Si scrivono una volta sola, insieme ai file
di riferimento, e valgono per ogni conversazione aperta con quel Gem. È la forma che serve
quando lo stesso compito torna ogni settimana e ogni volta si riscrive lo stesso preambolo:
chi sono gli studenti, che formato voglio, che cosa il modello non deve fare.

Un Gem ben costruito ha quattro parti.

| Parte | Che cosa dice | Che cosa succede se manca |
|---|---|---|
| Compito | Che cosa fa il Gem, in una frase, e per chi | Il Gem fa un po’ di tutto e niente bene |
| Contesto | Classe, livello, disciplina, materiali in uso | Il registro oscilla da una risposta all’altra |
| Formato | Lunghezza, struttura, sezioni fisse dell’output | Ogni risposta va riformattata a mano |
| Limiti | Che cosa il Gem non fa, e che cosa fa quando non sa | Il Gem riempie i vuoti inventando |

I **file di riferimento** sono la parte che distingue un Gem da un prompt salvato: una griglia
di valutazione, un esempio di consegna ben fatta, il programma della classe. Il modello li
consulta a ogni conversazione. Conviene caricarne pochi e mirati: un file che serve a ogni
risposta, non l’archivio di tutto l’anno. Per l’archivio c’è NotebookLM, nel secondo
incontro.

<!-- ESEMPIO:ambito inc1-gem -->
::: tip Esempio
**Compito.** Prepari esercizi di ripasso per una classe terza a partire da un materiale che ti
incollo o ti indico.

**Contesto.** Gli studenti hanno già visto l’argomento in classe. Usano il manuale allegato
come riferimento: lessico e definizioni sono quelli del manuale.

**Formato.** Sei esercizi, dal più semplice al più impegnativo. Per ciascuno: consegna, tempo
stimato, soluzione in una sezione separata alla fine.

**Limiti.** Non introdurre argomenti che non compaiono nel materiale di partenza. Se il
materiale non basta per sei esercizi, fermati e dimmi quanti ne puoi fare.
:::
Nelle edizioni: [umanistica](./ambiti/umanistico#inc1-gem) · [scientifico-tecnologica](./ambiti/scientifico-tecnologico#inc1-gem) · [economico-giuridica](./ambiti/economico-giuridico#inc1-gem) · [inclusione](./ambiti/inclusione#inc1-gem).
<!-- /ESEMPIO -->

### Mettere alla prova un Gem

Un Gem si giudica su un compito vero, non su una domanda di prova. La regola pratica è fargli
fare tre volte lo stesso tipo di compito su materiali diversi e guardare che cosa cambia fra le
tre risposte. Le differenze di contenuto sono attese; le differenze di formato, di lunghezza e
di registro indicano un’istruzione che manca o che è scritta in modo ambiguo.

### Correggere un Gem

Quando il Gem sbaglia, la tentazione è correggerlo nella conversazione: «più breve», «meno
formale». Funziona per quella risposta e si perde alla successiva. La correzione va riportata
nelle istruzioni del Gem, nella parte che le compete.

| Il Gem… | Si corregge in |
|---|---|
| sbaglia registro o lessico | Contesto, con un esempio di frase giusta |
| produce output di lunghezza o struttura diverse | Formato, con lo schema esatto delle sezioni |
| inventa contenuti che non stanno nei materiali | Limiti, dicendo che cosa fare quando non sa |
| fa bene il compito sbagliato | Compito, riscritto in una frase più stretta |

Dopo ogni correzione si rifà la prova sullo stesso materiale, per vedere se l’errore è sparito
e se ne sono comparsi altri.

### Condividere un Gem

Un Gem si può condividere con i colleghi dell’istituto, come si condivide un file di Drive: chi
lo riceve può usarlo e, se ha i permessi, modificarlo. I file di riferimento seguono le regole
di condivisione di Drive, quindi un collega a cui manca l’accesso a un file usa il Gem senza
quel file. È il modo più semplice per costruire, all’interno di un dipartimento, un piccolo
insieme di strumenti comuni.

## Laboratorio: il primo Gem

Ognuno costruisce un Gem per un compito ricorrente della propria materia e lo mette alla prova
su un materiale vero della settimana.

1. Scegli il compito: uno che fai almeno una volta ogni due settimane e per cui riscrivi ogni
   volta le stesse indicazioni.
2. Scrivi le istruzioni nelle quattro parti, partendo dal [modello](./modelli#istruzioni-di-un-gem).
3. Carica al massimo tre file di riferimento.
4. Fai tre prove su tre materiali diversi e annota che cosa cambia fra le risposte.
5. Correggi le istruzioni, non la conversazione, e rifai la prova peggiore.

Il risultato è un Gem che dà tre risposte confrontabili nel formato, e che sai correggere
quando sbaglia.

## Prima del prossimo incontro

Usa il Gem su un compito reale prima del secondo incontro e annota l’errore che ti ha fatto
perdere più tempo. Porta in aula, su Drive o su una chiavetta, i materiali che vuoi raccogliere
in un taccuino: dispense, capitoli, documenti, verifiche degli anni passati, senza dati
personali di studenti.
