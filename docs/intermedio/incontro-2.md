# Incontro 2 — Le proprie fonti: NotebookLM e AI Studio

Il secondo incontro lavora su due strumenti che rispondono a due bisogni diversi. NotebookLM
serve quando il problema sono le fonti: raccogliere i propri materiali in un posto e
interrogarli ottenendo risposte che rimandano al punto esatto. Google AI Studio serve quando il
problema è il controllo: fissare un’istruzione di sistema, scegliere il modello, regolare
quanto le risposte variano e ottenere risultati confrontabili da una classe all’altra. In
chiusura si costruisce con AI Studio una piccola applicazione web per la classe.

::: warning Da verificare sugli account d’istituto
NotebookLM e AI Studio possono essere attivi o disattivati dall’amministratore di Workspace, e
alcune funzioni di NotebookLM dipendono dall’edizione dell’account. I limiti d’uso di AI
Studio sugli account d’istituto non sono documentati. Prima dell’incontro le procedure vanno
provate da una postazione del laboratorio; quando la prova è fatta, qui compare la data.
:::

## NotebookLM: le fonti prima di tutto

Un taccuino di NotebookLM è un insieme di fonti più una conversazione su di esse. Le fonti
possono essere PDF, documenti e presentazioni di Drive, pagine web, video di YouTube con i
sottotitoli, file audio, testo incollato. Il modello risponde a partire da quelle fonti e, per
ogni affermazione, mostra un rimando numerato: un clic e si vede il passo da cui la frase
viene.

Questa è la differenza che conta rispetto a una chat con un allegato. Una chat può usare
l’allegato, ma può anche completarlo con quello che il modello ricorda; quando lo fa, non lo
dichiara. NotebookLM tiene le risposte ancorate alle fonti e rende visibile da dove arriva
ogni frase. La verifica non sparisce: si sposta dal ricordo del docente al confronto con un
passo che si apre con un clic.

### Costruire un buon taccuino

Il criterio più utile è **un taccuino per un uso**, non un taccuino per materia. Un taccuino che
contiene tutto il programma dell’anno risponde a tutto in modo generico; uno che contiene le
fonti di un modulo, o i materiali di una sola unità, risponde in modo preciso e si controlla in
fretta.

Le fonti si scelgono pensando a che cosa dovrà rispondere il taccuino. Tre controlli prima di
caricarle:

- **Il testo è leggibile?** Una scansione storta o una pagina fotografata con il telefono
  vengono lette, ma con errori. Se il materiale esiste in formato digitale, si carica quello.
- **Le fonti si contraddicono?** Due versioni dello stesso documento, una vecchia e una nuova,
  producono risposte che mescolano le due. Si carica solo la versione in uso.
- **Manca qualcosa?** Se una domanda prevedibile non trova risposta nelle fonti, il taccuino
  risponderà male o dirà di non sapere. È il momento di aggiungere la fonte, non di riscrivere
  la domanda.

<!-- ESEMPIO:ambito inc2-taccuino -->
::: tip Esempio
Un taccuino per un modulo di quattro settimane: il capitolo del manuale, la presentazione
usata in classe, due articoli di approfondimento e la verifica dell’anno scorso con le
soluzioni. Domande che il taccuino regge bene: «quali concetti della verifica non sono trattati
nel capitolo?», «costruisci una cronologia degli argomenti nell’ordine della presentazione»,
«dove i due articoli danno una spiegazione diversa dello stesso punto?».
:::
Nelle edizioni: [umanistica](./ambiti/umanistico#inc2-taccuino) · [scientifico-tecnologica](./ambiti/scientifico-tecnologico#inc2-taccuino) · [economico-giuridica](./ambiti/economico-giuridico#inc2-taccuino) · [inclusione](./ambiti/inclusione#inc2-taccuino).
<!-- /ESEMPIO -->

### Che cosa si produce dalle fonti

Oltre alla conversazione, NotebookLM genera materiali di studio a partire dalle fonti: guide
allo studio, documenti di sintesi, domande frequenti, cronologie, mappe dei concetti, sintesi
audio in forma di dialogo fra due voci e, sugli account che le prevedono, schede di ripasso e
quiz. Ognuno di questi materiali eredita il limite delle fonti: una guida allo studio costruita
su un capitolo incompleto è incompleta, con la stessa sicurezza di tono di una guida completa.

Per questo i materiali generati si leggono come una prima stesura da controllare, mai come un
prodotto finito. Il controllo più rapido è sui rimandi: si aprono tre citazioni a caso e si
verifica che il passo dica davvero quello che la frase sostiene.

### Quando la risposta è sbagliata

Una risposta sbagliata di NotebookLM ha quasi sempre una di tre cause, e ognuna ha un rimedio
diverso.

| Che cosa si vede | Causa probabile | Rimedio |
|---|---|---|
| La risposta è vaga e non cita nulla di preciso | Le fonti non trattano l’argomento | Aggiungere la fonte che manca |
| La risposta cita passi giusti ma li combina male | Fonti in contraddizione o versioni diverse | Togliere la fonte superata |
| Il rimando porta a un passo che dice altro | Testo letto male, spesso da una scansione | Ricaricare la fonte in formato digitale |

Solo quando le fonti sono a posto ha senso lavorare sulla domanda. È la competenza più
trasferibile del corso: **quando lo strumento risponde male, prima si guardano le fonti**.

## NotebookLM con la classe

Un taccuino si può condividere con altri account dell’istituto, compresi quelli degli
studenti, se l’amministratore lo consente. Condiviso con una classe, diventa una base di studio
in cui ogni risposta rimanda al materiale del docente invece che alla memoria del modello.

I limiti vanno messi in chiaro con gli studenti. Il taccuino non sa nulla al di fuori delle
fonti, e uno studente che chiede qualcosa che le fonti non trattano riceve una risposta povera
o un rifiuto. Le sintesi audio e le guide semplificano, e chi studia solo da quelle perde
passaggi. Infine, il taccuino risponde a qualunque domanda sulle fonti, comprese quelle di una
verifica: prima di condividerlo si decide che cosa contiene e che cosa no.

## Google AI Studio

AI Studio è l’ambiente in cui Google mette a disposizione i propri modelli con tutte le
impostazioni visibili. È pensato per chi sviluppa applicazioni, ma tre cose lo rendono utile a
un docente: l’istruzione di sistema, la scelta del modello e la temperatura.

**L’istruzione di sistema** è un testo che il modello riceve prima di ogni richiesta e che ha
la precedenza sulle richieste stesse. Ha la stessa funzione delle istruzioni di un Gem, con due
differenze: è sempre visibile accanto alla conversazione, e la si può tenere identica mentre si
cambiano modello e impostazioni. È lo strumento giusto quando si vuole lo stesso trattamento
per materiali diversi, per esempio la stessa griglia applicata a trenta elaborati o lo stesso
formato di esercizio per tre classi parallele.

**La scelta del modello.** AI Studio elenca più modelli, che differiscono per velocità, costo e
capacità di ragionamento. Il confronto fra modelli si può fare affiancando due risposte alla
stessa richiesta. Per un docente la domanda è pratica: il modello più veloce basta per questo
compito, o serve quello che ragiona più a lungo?

**La temperatura** regola quanto le risposte variano. Bassa, il modello sceglie quasi sempre la
continuazione più probabile e risponde in modo simile a ogni prova: va bene per correggere,
classificare, applicare una griglia. Alta, le risposte variano di più: va bene per generare
idee, esempi, varianti di un esercizio. Non esiste una temperatura giusta in assoluto, esiste
quella adatta al compito.

Le richieste si possono salvare con la loro istruzione di sistema e le loro impostazioni, e
riaprire in seguito. Gli input possono essere multimodali: un’immagine, un PDF, una tabella, la
foto di una pagina, insieme al testo della richiesta.

<!-- ESEMPIO:ambito inc2-istruzione-sistema -->
::: tip Esempio
Istruzione di sistema per la correzione di brevi risposte aperte:

> Sei un assistente alla correzione per una classe seconda. Ricevi una domanda, la risposta
> attesa e la risposta di uno studente. Per ogni risposta restituisci: un giudizio fra
> «completa», «parziale», «errata»; una frase che spiega il giudizio citando la risposta dello
> studente; un suggerimento di una riga per lo studente. Non assegni voti. Se la risposta attesa
> non basta per giudicare, scrivi «serve il docente» e spiega perché.

Con temperatura bassa, la stessa istruzione applicata a risposte di classi diverse produce
giudizi confrontabili, che il docente rilegge e conferma.
:::
Nelle edizioni: [umanistica](./ambiti/umanistico#inc2-istruzione-sistema) · [scientifico-tecnologica](./ambiti/scientifico-tecnologico#inc2-istruzione-sistema) · [economico-giuridica](./ambiti/economico-giuridico#inc2-istruzione-sistema) · [inclusione](./ambiti/inclusione#inc2-istruzione-sistema).
<!-- /ESEMPIO -->

### Un’applicazione web per la classe

AI Studio può costruire una piccola applicazione web a partire da una descrizione scritta: una
pagina interattiva con cui gli studenti fanno qualcosa, non solo leggono. L’applicazione si
prova subito nel browser, si corregge chiedendo modifiche in linguaggio naturale e, quando
funziona, si condivide con un collegamento.

L’uso che ha senso a scuola è quello di uno strumento piccolo, mirato a un argomento, che può
servire anche una volta sola: un esercizio di classificazione con riscontro immediato, una
simulazione con due o tre parametri da muovere, una linea del tempo da riordinare, un quiz di
ripasso che spiega l’errore. Non si costruisce un registro elettronico o una piattaforma.

<!-- ESEMPIO:ambito inc2-app-web -->
::: tip Esempio
«Costruisci una pagina web per studenti di prima. Mostra una alla volta dodici affermazioni
sull’argomento del capitolo allegato; lo studente decide se ciascuna è vera o falsa. Dopo ogni
risposta la pagina spiega in una frase perché, citando il capitolo. Alla fine mostra il numero
di risposte giuste e l’elenco delle affermazioni sbagliate da rivedere. Niente registrazione,
niente dati salvati.»
:::
Nelle edizioni: [umanistica](./ambiti/umanistico#inc2-app-web) · [scientifico-tecnologica](./ambiti/scientifico-tecnologico#inc2-app-web) · [economico-giuridica](./ambiti/economico-giuridico#inc2-app-web) · [inclusione](./ambiti/inclusione#inc2-app-web).
<!-- /ESEMPIO -->

Tre cautele, da ripetere in aula. L’applicazione va provata da cima a fondo prima di darla agli
studenti, perché un errore nel contenuto è più difficile da vedere dentro un’interfaccia curata
che in un testo. Non deve raccogliere dati degli studenti: nella descrizione lo si scrive
esplicitamente. Infine, la disponibilità della funzione e le modalità di condivisione
dipendono dalle impostazioni dell’account d’istituto, e vanno verificate prima di progettare
un’attività che le presuppone.

## Quando serve quale strumento

La scelta fra i tre strumenti dipende dal compito, non dall’abitudine.

| Il compito… | Strumento | Perché |
|---|---|---|
| parte da un file che sto già scrivendo | Gemini nel file | Lavora sul documento aperto, senza copiare nulla |
| torna ogni settimana con le stesse indicazioni | Un Gem | Le istruzioni si scrivono una volta sola |
| richiede di rispondere su molti materiali, citandoli | NotebookLM | Le risposte rimandano alla fonte |
| richiede lo stesso trattamento su molti input | AI Studio | Istruzione di sistema e temperatura fissate |
| richiede che gli studenti facciano qualcosa | Un’app web da AI Studio | Lo studente interagisce, non legge soltanto |

I confini non sono netti, e molti compiti si possono svolgere con più di uno strumento. Il
criterio è scegliere quello che rende il risultato più facile da controllare.

## Laboratorio: un taccuino e un’istruzione di sistema

Il laboratorio ha due parti, una per strumento, e alla fine ognuno ha due oggetti riusabili.

**Parte 1, NotebookLM.**

1. Crea un taccuino per un solo uso: un modulo, un’unità, un gruppo di testi.
2. Carica da tre a sei fonti tra quelle che hai portato, controllando che siano leggibili e
   nella versione in uso.
3. Fai tre domande a cui conosci già la risposta e apri le citazioni: il passo dice quello che
   la risposta sostiene?
4. Fai una domanda a cui le fonti non possono rispondere e guarda che cosa succede.
5. Genera un materiale di studio e controllalo su tre rimandi.

**Parte 2, AI Studio.**

1. Scegli un compito che vorresti applicare allo stesso modo a materiali diversi.
2. Scrivi l’istruzione di sistema partendo dal [modello](./modelli#istruzione-di-sistema).
3. Provala su tre input diversi a temperatura bassa, poi sugli stessi a temperatura alta.
4. Salva la richiesta, con istruzione e impostazioni, per riaprirla la prossima volta.

## Prima del prossimo incontro

Il terzo incontro è un laboratorio sull’ambito della tua edizione. Porta il materiale su cui
vuoi lavorare, indicato nell’appendice della tua edizione, e scegli la classe per cui lo
prepari. Le appendici: [umanistica](./ambiti/umanistico#che-cosa-portare),
[scientifico-tecnologica](./ambiti/scientifico-tecnologico#che-cosa-portare),
[economico-giuridica](./ambiti/economico-giuridico#che-cosa-portare),
[inclusione](./ambiti/inclusione#che-cosa-portare).
