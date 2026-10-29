# Incontro 1 — Dalla chat all’agente

Questo capitolo riprende il primo incontro: che cosa cambia quando il modello può lavorare sui
file, com’è fatto un agente, perché dimentica e come gli si danno istruzioni che durano. In
fondo trovi la traccia del laboratorio e che cosa preparare per il secondo incontro.

## Lo stesso compito a una chat e a un agente

In aula abbiamo affidato lo stesso compito a tre strumenti. Nella cartella c’erano quattro
lezioni di storia per una quarta sulla Rivoluzione francese, in formati diversi (un file
Word, un PDF, un file Markdown, degli appunti in testo semplice) e una verifica. La richiesta
era sempre la stessa:

```text
In questa cartella ci sono le mie lezioni di storia per una classe quarta sulla Rivoluzione
francese, in formati diversi, e una verifica. Per ogni lezione prepara una scheda di ripasso
in Markdown nella cartella ripasso/: al massimo una pagina, con i concetti chiave, le date da
ricordare e tre domande di autoverifica. Poi scrivi indice.md con l’elenco delle lezioni e
delle schede, e segnala quali lezioni non hanno ancora una verifica. Non modificare i file
originali.
```

Con ChatGPT i file vanno caricati uno per uno, e le schede tornano come testo nella
conversazione: la cartella `ripasso/` non esiste finché qualcuno non la crea e non ci salva
dentro le schede. Con un agente, Codex o Claude Code, la richiesta si scrive nella cartella
stessa. L’agente apre i file, ne estrae il testo, scrive le schede e l’indice, e alla fine
dice che cosa ha fatto. Quando il lavoro finisce i file sono già al loro posto.

La differenza non sta nel modello, che può essere lo stesso, ma in quello che il modello ha
il permesso di fare. Una chat risponde; un agente **legge, scrive ed esegue**, e quindi
sposta il lavoro del docente: meno copia e incolla, più controllo. Il controllo resta
necessario. Nella prova con Claude Code del 29 ottobre 2026 l’agente ha segnalato, sicuro,
che un elenco della lezione 3 «si interrompe a metà». Non era vero, e lo si scopre solo
aprendo il file originale.

## Che cos’è un agente

### Modello, strumenti, ciclo di esecuzione

Un agente è fatto di tre parti. Il **modello** è lo stesso tipo di modello linguistico che
risponde in una chat. Gli **strumenti** sono le azioni che può chiedere di compiere: leggere
un file, scriverne uno, eseguire un comando, cercare in rete. Il **ciclo** li tiene insieme:
il modello riceve la richiesta e decide il passo successivo; se il passo richiede uno
strumento, lo chiede; lo strumento viene eseguito e il risultato torna al modello, che decide
il passo dopo. Il giro si ripete finché il modello non risponde con solo testo: è il segnale
che per lui il lavoro è finito.

Il modello, da solo, non tocca niente. Ragiona e chiede. Chi apre davvero i file ed esegue i
comandi è un altro programma, che si chiama *harness*: in inglese è l’imbracatura, e rende
bene l’idea di qualcosa che tiene il modello, lo collega al mondo e decide fin dove può
arrivare. Codex e Claude Code sono due harness.

### Che cosa riceve il modello a ogni giro

Il modello non ha memoria fra una chiamata e l’altra. Per questo a ogni giro del ciclo
l’harness gli rispedisce tutto quello che serve:

- le istruzioni di sistema, scritte da chi ha fatto l’harness;
- la descrizione degli strumenti disponibili;
- alcune informazioni sull’ambiente, come la cartella aperta;
- i file di istruzioni del progetto, come `AGENTS.md`;
- l’elenco delle procedure disponibili, di cui parliamo nel secondo incontro;
- l’intera conversazione, compresi i risultati di ogni strumento usato fin lì.

Lo schema viene dal workshop di Lydia Hallie (Anthropic) su Claude Code, primavera 2026,
lezione 1, che qui riprendiamo con parole nostre. Ha due conseguenze pratiche, su cui torna
il resto del capitolo. La prima: tutto quello che l’agente «sa» di una sessione sta in quel
pacchetto, e quando la sessione si chiude il pacchetto se ne va. La seconda: il pacchetto
cresce a ogni giro, e ha un limite.

### Perché a parità di modello due agenti lavorano in modo diverso

Se l’harness scrive le istruzioni di sistema, sceglie gli strumenti e decide che cosa
rispedire, allora due harness diversi con lo stesso modello producono risultati diversi.
Nella demo Codex e Claude Code hanno ricevuto la stessa richiesta e hanno prodotto schede
simili ma non uguali: hanno letto i file con strumenti diversi, hanno chiesto permessi in
momenti diversi, hanno scritto indici con colonne diverse.

Per chi impara conta una cosa: il metodo del corso (una cartella di file di testo, un file di
istruzioni, procedure scritte, permessi stretti) vale per qualsiasi harness. Cambiano i nomi
e i menu, e la tabella [Codex e Claude Code](./codex-e-claude-code) li mette a confronto.

## Le basi informatiche del lavoro agentico

### File, cartelle e percorsi

Un agente lavora dentro una cartella e ragiona per **percorsi**. Il percorso di un file è
l’elenco delle cartelle che lo contengono, separate da una barra:
`Documenti/archivio/testi/3-illuminismo.md` su un Mac, `Documenti\archivio\testi\3-illuminismo.md`
su Windows. Un percorso **relativo** parte dalla cartella aperta (`testi/3-illuminismo.md`),
uno **assoluto** dalla radice del disco. Quando l’agente scrive «ho creato `ripasso/lezione-1.md`»
intende un percorso relativo alla cartella che gli hai aperto.

Ne seguono due abitudini. Nomi di file senza spazi né accenti, con un ordine riconoscibile
(`3-illuminismo.md`, non `Lezione Illuminismo DEFINITIVA (2).docx`), perché l’agente li
cita, li cerca e li confronta per nome. E una cartella per progetto: l’agente vede la cartella
aperta, non il resto del computer, ed è un bene.

### Testo semplice e formati chiusi

Un file `.md` o `.txt` è **testo semplice**: aprendolo con qualsiasi programma si leggono le
parole così come sono state scritte. Un `.docx`, un `.pptx` o un `.pages` sono **formati
chiusi**, almeno dal punto di vista di un agente: archivi compressi che contengono il testo
insieme a impaginazione, stili e immagini, e che servono programmi appositi per essere letti.
Un PDF sta nel mezzo: si legge, ma è fatto per essere stampato, non modificato.

Nella prova con Claude Code l’agente ha letto subito il Markdown, il testo e il PDF. Per i
due file Word ha dovuto eseguire un programma di conversione, e quando non aveva il permesso
di farlo si è fermato: tre schede su quattro, con la quarta segnata «da fare». Per questo il
laboratorio converte in testo i materiali più usati. L’originale resta dov’è, e l’agente
lavora sulla copia in Markdown.

### Il Markdown

Il Markdown è testo semplice con pochi segni convenzionali, che un programma sa trasformare in
una pagina formattata. È la lingua comune fra chi scrive e il modello: i modelli lo
producono spontaneamente, lo leggono senza conversioni, e un docente lo impara in un quarto
d’ora.

| Si scrive | Diventa |
|---|---|
| `# Titolo` e `## Sottotitolo` | titoli di primo e secondo livello |
| `- voce` oppure `1. voce` | elenco puntato o numerato |
| `**parola**` | **parola** in grassetto |
| `*parola*` | *parola* in corsivo |
| `[testo](indirizzo)` | un collegamento |
| `\| a \| b \|` su più righe | una tabella |

Queste dispense sono scritte in Markdown: il pulsante in fondo a ogni pagina apre il file
sorgente.

## Il contesto come risorsa finita

Il pacchetto che l’harness rispedisce a ogni giro ha un limite, la **finestra di contesto**,
che si misura in *token* (pezzi di parola). I modelli recenti ne accettano moltissimi, ma
non conviene riempirli: oltre una certa soglia le risposte peggiorano, perché il modello
deve tenere insieme troppe cose e le istruzioni iniziali pesano sempre meno. Quando la
finestra si riempie l’harness riassume la conversazione per fare spazio, e nel riassunto
qualcosa si perde.

Quindi un agente dimentica in due modi. Dimentica tutto alla fine della sessione, perché il
modello non ha memoria. E dimentica pezzi durante una sessione lunga, perché il contesto si
riempie e viene riassunto. In tutti e due i casi le regole dette a voce all’inizio sono le
prime a perdersi.

### Il file di istruzioni: AGENTS.md

La soluzione è scrivere le istruzioni stabili in un file che l’harness carica all’inizio di
ogni sessione. In Codex si chiama `AGENTS.md` e si mette nella cartella del progetto. È lo
stesso principio delle istruzioni permanenti di un Gem o di un progetto in ChatGPT, con due
differenze: il file è tuo, sta fra i tuoi materiali, e funziona anche con altri agenti.

Una regola sola governa il file: ci va **quello che altrimenti ripeteresti a ogni sessione**.
Siccome viene caricato sempre, pesa su ogni giro del ciclo e sui limiti del piano: meglio
corto. Non servono le regole che l’agente seguirebbe comunque («scrivi in modo chiaro») né
quelle troppo vaghe per controllarle («cura la qualità»). Servono quelle che cambiano il
risultato: com’è fatta la cartella, quali file non si toccano, il registro adatto alla
classe, che cosa riferire alla fine. Quando esce un modello nuovo conviene rileggerlo e
togliere quello che non serve più (anche questo suggerimento viene dal workshop di Hallie,
lezione 2).

I file si possono **annidare**. Codex legge l’`AGENTS.md` della radice del progetto e poi
quelli delle sottocartelle, fino alla cartella in cui lavora, e li mette in fila dal
generale al particolare: le regole più vicine al lavoro vengono per ultime e prevalgono.
Così `archivio/AGENTS.md` dice chi sei e come scrivi, e `archivio/verifiche/AGENTS.md`
aggiunge solo le regole delle verifiche. Il totale caricato ha un limite, 32 KiB per
impostazione predefinita, cioè una decina di pagine: un motivo in più per scrivere corto.
Fonte: [documentazione di Codex su AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md),
consultata il 29 ottobre 2026.

Un modello di partenza per un docente di materia non tecnica è nei
[modelli pronti](./modelli#file-di-istruzioni-di-partenza).

### Chi scrive la memoria

Esiste anche una memoria scritta dall’agente. Codex può prendere appunti da solo sulle
sessioni passate e rileggerli nelle successive; nell’app la funzione è spenta per
impostazione predefinita e si accende dalle impostazioni di personalizzazione. La
documentazione stessa la presenta come un aiuto al ricordo, non come un posto affidabile per
le regole. Fonte: [memorie di Codex](https://learn.chatgpt.com/docs/customization/memories),
consultata il 29 ottobre 2026.

La distinzione da tenere è questa. In `AGENTS.md` scrive il docente: sa che cosa c’è, lo
rilegge, lo corregge. Le memorie automatiche le scrive l’agente: comode, ma non si sa bene
che cosa contengano né quando cambino. Le regole che contano vanno nel file.

## Il contesto consuma il piano

Ogni giro del ciclo rispedisce tutto il contesto, quindi una sessione lunga costa più di una
corta, e il costo cresce più in fretta della durata. Con un abbonamento il costo non si
paga in euro ma in limiti d’uso: i messaggi disponibili in una finestra di alcune ore
finiscono prima. Tre situazioni pesano più delle altre:

- **la sessione lunga**, che accumula file letti e risultati di comandi;
- **la ripresa dopo una pausa**: gli harness tengono per un po’ una copia pronta del contesto
  (la *cache*), e quando scade il modello deve rileggere tutto da capo;
- **il cambio di modello a metà**, che fa ripartire da zero anche la cache.

Le abitudini che ne derivano sono semplici. Una sessione per compito, e una nuova quando il
compito cambia. Quando una sessione si allunga ma il lavoro non è finito, chiedere all’agente
un riassunto di che cosa è stato fatto e che cosa resta, e ripartire da lì in una sessione
nuova. Scegliere il modello in base al compito: un modello veloce per convertire file o
riordinare una cartella, uno più capace, con più sforzo di ragionamento, per progettare una
verifica. La scelta del modello e quella dello sforzo sono due leve diverse, e nell’app si
regolano separatamente.

## Permessi e sandbox

Un agente che può scrivere ed eseguire può anche sbagliare sui tuoi file. Per questo ogni
harness ha due protezioni. La **sandbox** è il recinto: stabilisce che cosa l’agente può fare
senza chiedere, di solito leggere e modificare i file della cartella aperta ed eseguire
comandi che restano lì dentro, senza rete. I **permessi** stabiliscono quando l’agente si
ferma e chiede: per uscire dalla cartella, per andare in rete, per eseguire un comando
non previsto.

Secondo la documentazione di Codex (consultata il 29 ottobre 2026), una cartella sotto
controllo di versione si apre con il permesso di modificare i file al suo interno, mentre una
cartella qualsiasi si apre in **sola lettura** finché non le si dà fiducia. Il permesso si
cambia dal selettore sotto il campo di scrittura; l’accesso completo, senza recinto e senza
domande, esiste ma non serve a niente di quello che facciamo nel corso. Fonte:
[sandbox](https://learn.chatgpt.com/docs/sandboxing) e
[approvazioni](https://learn.chatgpt.com/docs/agent-approvals-security).

::: warning Da verificare in aula
I nomi delle voci del selettore cambiano da una versione all’altra dell’app, e con la licenza
della scuola non sono ancora stati provati. Prima di scegliere, leggi le voci che vedi.
:::

La prova con Claude Code mostra perché i permessi contano anche quando tutto va bene. Con il
solo permesso di modificare i file l’agente non ha potuto eseguire il programma che legge i
`.docx`: invece di inventarne il contenuto si è fermato e lo ha detto. Con il permesso in più
di eseguire quel programma ha finito il lavoro. Un permesso stretto non impedisce di
lavorare: dà un punto in cui decidi tu.

## Laboratorio: la cartella dell’archivio e il primo file di istruzioni

::: warning Procedura non ancora provata con Codex
I passi sono stati scritti a partire dalla documentazione e dalla prova con Claude Code del
29 ottobre 2026. La prova con l’app Codex e la licenza della scuola non è ancora stata fatta:
quando lo sarà, qui compariranno la data e la versione dell’app.
:::

**Parte A, la cartella.** Crea una cartella `archivio` con dentro `originali`, e copiaci (non
spostare) una decina di tuoi materiali, senza dati di studenti. Apri `archivio` in Codex e
controlla il permesso: se è in sola lettura, scegli quello che consente di modificare i file
della cartella. Chiedi all’agente di elencare i file con formato e argomento, poi di
convertire in Markdown, nella cartella `testi`, i tre che usi più spesso, senza toccare gli
originali e dicendo che cosa non è riuscito a convertire. Confronta un file convertito con il
suo originale.

**Parte B, il primo file di istruzioni.** In una conversazione nuova, chiedi all’agente di
intervistarti prima di scrivere `AGENTS.md`:

```text
Voglio scrivere il file AGENTS.md di questa cartella, con le istruzioni che dovrai
seguire ogni volta che lavori qui. Prima intervistami: fammi una domanda alla volta e
aspetta la mia risposta, al massimo dieci domande. Chiedimi che cosa insegno e a quali
classi, che cosa contiene la cartella e come è organizzata, come voglio i testi che
produci, che cosa non devi fare mai, come capisco che un lavoro è finito. Guarda i file
della cartella prima di fare domande a cui puoi rispondere da solo. Alla fine scrivi
AGENTS.md nella radice della cartella, al massimo trenta righe, e non modificare
nient’altro.
```

Poi apri il file e sfoltiscilo a mano: via le righe che l’agente seguirebbe comunque, quelle
troppo vaghe per controllarle, quelle ripetute. Aggiungi almeno una regola che si vede subito
nel risultato, per esempio «ogni scheda comincia con classe e argomento». Infine prova il file
in una conversazione nuova: chiedi all’agente che cosa sa della cartella, poi un compito
piccolo che metta alla prova quella regola. Se non la rispetta, correggi il file, non la
richiesta.

L’intervista prima del lavoro è un’idea che torna nel terzo incontro, e che usano anche gli
autori degli strumenti: farsi fare domande una alla volta fa emergere quello che non si era
pensato di dire.

## Prima del prossimo incontro

- Usa l’agente sulla tua cartella almeno due volte, in due giorni diversi, e annota ogni
  regola che ti sei trovato a ripetere: probabilmente va in `AGENTS.md`.
- Converti in Markdown altri materiali che usi spesso.
- Scegli il compito ripetitivo che hai descritto nella mail prima del corso: nel secondo
  incontro diventa una procedura che l’agente esegue sempre allo stesso modo.
