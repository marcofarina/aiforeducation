# Incontro 1 — Dalla chat all’agente

Il capitolo riprende i temi del primo incontro: che cosa cambia quando il modello può lavorare
sui file, com’è fatto un agente, come si apre una cartella in Codex e con quali permessi, che
cos’è una pagina web, come si revisiona e come si pubblica. Seguono la traccia del laboratorio,
in cui ognuno costruisce e pubblica una pagina di esercizi per la propria materia, e le
attività da svolgere prima del secondo incontro.

## La demo: una chat e due agenti

In aula abbiamo affidato lo stesso compito a tre strumenti: ChatGPT, Codex e Claude Code. Nella
cartella c’erano gli appunti di una lezione di storia sul 1789 per una quarta, in Markdown, e
una vecchia verifica sullo stesso argomento in Word, entrambi di fantasia. La richiesta era
ricavarne una pagina web di esercizi interattivi:

```text
In questa cartella c’è il materiale di una mia lezione di storia per una classe quarta sul
1789 in Francia: gli appunti e una vecchia verifica. Ricava da questo materiale una pagina
web di esercizi interattivi per gli studenti, in un solo file index.html, senza risorse
esterne:

- un esercizio di ordinamento: gli eventi del 1789 da mettere in ordine cronologico;
- un esercizio di abbinamento: i termini della lezione con il loro significato;
- un esercizio di completamento: un breve testo con alcune parole mancanti.

Ogni esercizio ha un pulsante «Controlla» che segnala le risposte sbagliate e spiega l’errore
con una frase presa dagli appunti. Usa solo informazioni presenti nel materiale. La pagina
deve funzionare anche da telefono: niente trascinamento, usa menu a tendina o pulsanti. Non
modificare i file che ci sono già. Alla fine dimmi che cosa hai creato e da quali file hai
preso le informazioni.
```

Con ChatGPT i file vanno allegati alla conversazione, e la pagina torna come codice nella
risposta: per usarla bisogna copiarla in un file, salvarlo con il nome giusto e aprirlo. Con un
agente la richiesta si scrive nella cartella stessa. L’agente apre i file, ne estrae il testo,
scrive `index.html` nella cartella e alla fine riferisce che cosa ha fatto.

::: warning Da completare dopo la demo
Qui compariranno la data della demo, le versioni delle app e che cosa è uscito da ciascuno
strumento, compresi gli errori trovati confrontando la pagina con gli appunti.
:::

Il modello può essere lo stesso nei tre strumenti; cambiano le azioni che ha il permesso di
compiere. Un agente **legge i file, li scrive ed esegue comandi**: il docente non deve più
copiare e salvare il risultato, ma deve controllarlo. In una prova con Claude Code del 29
ottobre 2026, su un compito simile (schede di ripasso ricavate da quattro lezioni), l’agente ha
affermato con sicurezza che un elenco della lezione 3 «si interrompe a metà». L’affermazione
era falsa, e si poteva scoprirlo solo aprendo il file originale.

## Che cos’è un agente

### Modello, strumenti, ciclo di esecuzione

Un agente è fatto di tre parti. Il **modello** è lo stesso tipo di modello linguistico che
risponde in una chat. Gli **strumenti** sono le azioni che può chiedere di compiere: leggere un
file, scriverne uno, eseguire un comando, cercare in rete. Il **ciclo** li tiene insieme: il
modello riceve la richiesta e decide il passo successivo; se il passo richiede uno strumento,
lo chiede; lo strumento viene eseguito e il risultato torna al modello, che decide il passo
dopo. Il giro si ripete finché il modello non risponde con solo testo: è il segnale che per lui
il lavoro è finito.

Il modello non apre file e non esegue comandi: decide il passo successivo e chiede di
compierlo. Le azioni le esegue un altro programma, l’*harness* (in inglese, imbracatura), che
collega il modello ai file e ai comandi e stabilisce che cosa gli è permesso. Codex e Claude
Code sono due harness.

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
lezione 1, che qui riprendiamo con parole nostre. Ha due conseguenze pratiche, su cui torna il
secondo incontro. La prima: tutto quello che l’agente «sa» di una sessione sta in queste
informazioni, che non vengono conservate quando la sessione si chiude. La seconda: le
informazioni rimandate crescono a ogni giro, fino a un limite.

### Perché a parità di modello due agenti lavorano in modo diverso

Se l’harness scrive le istruzioni di sistema, sceglie gli strumenti e decide che cosa
rispedire, allora due harness diversi con lo stesso modello producono risultati diversi. Nella
demo Codex e Claude Code ricevono la stessa richiesta: dove le due pagine differiscono, la
differenza viene dall’harness, cioè da come ciascuno legge i file, da quando chiede i permessi
e da quali istruzioni di sistema dà al modello.

Il metodo del corso (una cartella di file di testo, un file di istruzioni, procedure scritte,
permessi stretti) si applica a qualsiasi harness. Cambiano i nomi e i menu, e la tabella [Codex
e Claude Code](./codex-e-claude-code) li mette a confronto.

## L’app Codex

Codex è una modalità dell’app desktop di ChatGPT: si sceglie dal selettore in alto, e da lì si
lavora su una cartella del proprio computer invece che in una conversazione sola. Su macOS
l’app è disponibile solo per i Mac con processore Apple; su Windows si installa dal Microsoft
Store. Fonte: documentazione di Codex, consultata il 27 ottobre 2026.

Nel corso si usano queste parti dell’app:

| Parte | A che cosa serve |
|---|---|
| la cartella aperta | il progetto su cui l’agente lavora; il resto del computer resta escluso |
| il campo di scrittura | la richiesta, come in una chat |
| la scelta del modello e dello sforzo | un modello veloce per i lavori semplici, uno più capace e con più ragionamento per quelli difficili |
| il selettore dei permessi | sotto il campo di scrittura: che cosa l’agente può fare senza chiedere |
| il registro delle azioni | i file letti, i comandi eseguiti, i file scritti, in ordine |
| la sessione nuova | per ogni compito nuovo si apre una sessione nuova |

::: warning Da verificare in aula
I nomi e la posizione di queste voci vengono dalla documentazione e cambiano da una versione
all’altra dell’app. Con la licenza della scuola non sono ancora stati provati: quando lo
saranno, qui compariranno la data e la versione.
:::

## Le basi informatiche del lavoro agentico

### File, cartelle e percorsi

Un agente lavora dentro una cartella e ragiona per **percorsi**. Il percorso di un file è
l’elenco delle cartelle che lo contengono, separate da una barra:
`Documenti/archivio/testi/3-illuminismo.md` su un Mac,
`Documenti\archivio\testi\3-illuminismo.md` su Windows. Un percorso **relativo** parte dalla
cartella aperta (`testi/3-illuminismo.md`), uno **assoluto** dalla radice del disco. Quando
l’agente scrive «ho creato `ripasso/lezione-1.md`» intende un percorso relativo alla cartella
che gli hai aperto.

Ne seguono due abitudini. Nomi di file senza spazi né accenti, con un ordine riconoscibile
(`3-illuminismo.md`, non `Lezione Illuminismo DEFINITIVA (2).docx`), perché l’agente li cita,
li cerca e li confronta per nome. E una cartella per progetto, perché l’agente vede solo la
cartella aperta.

### Testo semplice e formati chiusi

Un file `.md` o `.txt` è **testo semplice**: aprendolo con qualsiasi programma si leggono le
parole così come sono state scritte. Un `.docx`, un `.pptx` o un `.pages` sono **formati
chiusi**, almeno dal punto di vista di un agente: archivi compressi che contengono il testo
insieme a impaginazione, stili e immagini, e che servono programmi appositi per essere letti.
Un PDF si legge, ma è pensato per la stampa e si modifica con difficoltà.

Nella prova con Claude Code del 29 ottobre l’agente ha letto subito il Markdown, il testo e il
PDF. Per i due file Word ha dovuto eseguire un programma di conversione, e quando non aveva il
permesso di farlo si è fermato: tre schede su quattro, con la quarta segnata «da fare». Per
questo, quando un materiale si usa spesso con l’agente, conviene tenerne una copia in Markdown
accanto all’originale.

### Il Markdown

Il Markdown è testo semplice con pochi segni convenzionali, che un programma sa trasformare in
una pagina formattata. I modelli lo producono spontaneamente e lo leggono senza conversioni, e
i segni da imparare sono pochi.

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

## Permessi e sandbox

Un agente che può scrivere ed eseguire può anche sbagliare sui tuoi file. Per questo ogni
harness ha due protezioni. La **sandbox** stabilisce che cosa l’agente può fare senza chiedere,
di solito leggere e modificare i file della cartella aperta ed eseguire comandi che restano lì
dentro, senza rete. I **permessi** stabiliscono quando l’agente si ferma e chiede: per uscire
dalla cartella, per andare in rete, per eseguire un comando non previsto.

Secondo la documentazione di Codex (consultata il 29 ottobre 2026), una cartella sotto
controllo di versione (git, che vediamo nel secondo incontro) si apre con il permesso di
modificare i file al suo interno, mentre una cartella qualsiasi si apre in **sola lettura**
finché non le si dà fiducia. Il permesso si cambia dal selettore sotto il campo di scrittura;
l’accesso completo, senza sandbox e senza richieste di permesso, esiste ma non serve per
nessuna attività del corso. Fonte: [sandbox](https://learn.chatgpt.com/docs/sandboxing) e
[approvazioni](https://learn.chatgpt.com/docs/agent-approvals-security).

::: warning Da verificare in aula
I nomi delle voci del selettore cambiano da una versione all’altra dell’app, e con la licenza
della scuola non sono ancora stati provati. Prima di scegliere, leggi le voci che vedi.
:::

La prova con Claude Code del 29 ottobre mostra a che cosa servono i permessi anche quando il
lavoro va a buon fine. Con il solo permesso di modificare i file l’agente non ha potuto
eseguire il programma che legge i `.docx`: invece di inventarne il contenuto si è fermato e lo
ha detto. Con il permesso in più di eseguire quel programma ha finito il lavoro. Un permesso
stretto ferma l’agente prima delle azioni che vuoi controllare.

## Che cos’è una pagina HTML

Una pagina web è un file di testo con l’estensione `.html`. Il browser lo legge e lo trasforma
in quello che si vede: titoli, paragrafi, menu, pulsanti. Dentro il file convivono tre
linguaggi, ciascuno con un compito.

| Linguaggio | Che cosa descrive | Nella pagina di esercizi |
|---|---|---|
| HTML | la struttura | le consegne, i menu a tendina, il pulsante «Controlla» |
| CSS | l’aspetto | colori, caratteri, impaginazione su schermo largo e stretto |
| JavaScript | il comportamento | che cosa succede quando si preme «Controlla» |

Nella pagina del laboratorio i tre linguaggi stanno nello stesso file, `index.html`. Per questo
basta un doppio clic per aprirla, e c’è un solo file da pubblicare. Con la richiesta «senza
risorse esterne» la pagina non scarica niente da altri siti, quindi funziona anche senza rete.

Per usare l’agente non serve saper scrivere HTML, ma conviene aprire almeno una volta il file
come testo, con un editor o dal browser con «Visualizza sorgente», e riconoscere dove stanno le
consegne e le soluzioni. Le soluzioni sono scritte nel file, e uno studente che apre il
sorgente le legge: la pagina è adatta all’autoverifica, non a una prova valutata.

## Come si revisiona una pagina generata

Gli errori da cercare in una pagina generata riguardano il contenuto più che l’aspetto: una
soluzione sbagliata, una spiegazione dell’errore che il materiale non contiene, una correzione
che rifiuta la risposta giusta perché scritta con la maiuscola.

La revisione si fa in tre passi.

1. **Leggere quello che l’agente dichiara.** Alla fine del lavoro Codex dice che cosa ha creato
   e da quali file ha preso le informazioni. La dichiarazione va verificata, e indica dove
   controllare.
2. **Svolgere gli esercizi come uno studente, sbagliando apposta.** Ogni esercizio va provato
   con una risposta giusta, una sbagliata e una giusta scritta in modo diverso.
3. **Confrontare ogni soluzione con il materiale originale.** È il passo più lungo, e spetta al
   docente.

Le correzioni si chiedono una alla volta, indicando il punto esatto: «nel secondo esercizio la
risposta corretta alla domanda 3 è “Assemblea nazionale”, non “Stati generali”». A una
richiesta generica come «controlla che le soluzioni siano giuste» l’agente risponde con
un’altra dichiarazione di correttezza, che non sostituisce il confronto con il materiale. Dopo
ogni correzione si ricarica la pagina nel browser e si ricontrolla il punto corretto, e anche
quelli vicini: l’agente riscrive il file, e a volte cambia più di quanto gli si è chiesto.

La lista di controllo completa è nella traccia del laboratorio, in fondo al capitolo.

## Pubblicare con GitHub Pages

GitHub è un servizio che conserva **repository**: cartelle di file con la loro storia. È nato
per il codice, ma un repository può contenere qualsiasi file, e queste dispense ne sono un
esempio. Le **GitHub Pages** sono il servizio di GitHub che prende i file di un repository e li
pubblica come sito, a un indirizzo nella forma
`https://nome-utente.github.io/nome-repository/`. La pagina d’ingresso è il file `index.html`
nella radice del repository.

Per il corso contano due caratteristiche del servizio. Con l’account gratuito, Pages pubblica
solo da un repository **pubblico**: chiunque può leggere non solo la pagina ma tutti i file del
repository. E per pubblicare git non serve: il file si carica trascinandolo nel browser, e
Pages lo mette in rete entro qualche minuto (GitHub dichiara fino a dieci). Git serve a tenere
la storia delle modifiche e si introduce nel secondo incontro, quando la pagina esiste già.
Fonte: [documentazione di GitHub
Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site),
consultata il 3 novembre 2026.

### Che cosa si può pubblicare

Una pagina su GitHub Pages la trova chiunque abbia l’indirizzo, e i motori di ricerca possono
indicizzarla. Prima di caricarla:

- **nessun dato personale**: niente nomi di studenti, foto, voti o classi riconoscibili,
  nemmeno dentro un esempio;
- **solo materiale proprio**, o con una licenza che ne permette la pubblicazione: una breve
  citazione con la fonte è in genere ammessa, un capitolo di manuale copiato no, e lo stesso
  vale per le immagini;
- **il nome utente compare nell’indirizzo**: conviene sceglierne uno che si è disposti a
  mostrare a studenti e famiglie;
- **tutto il repository è leggibile**, oltre alla pagina: va caricato solo quello che serve.

## Laboratorio: la pagina di esercizi

::: warning Procedura non ancora provata
I passi vengono dalla documentazione di Codex (27 ottobre 2026) e di GitHub (3 novembre 2026).
La prova con l’app Codex, la licenza della scuola e un account GitHub non è ancora stata fatta:
quando lo sarà, qui compariranno la data e le versioni.
:::

È lo stesso lavoro dell’ultimo incontro dell’intermedio in Google AI Studio, con due
differenze: i file restano sul tuo computer, e la pagina si pubblica su GitHub, senza i limiti
degli account gratuiti di AI Studio.

**Parte A, la cartella.** Crea nei Documenti una cartella `pagina` e copiaci (non spostare) due
o tre tuoi materiali su un solo argomento: una lettura, gli appunti di una lezione, un vecchio
esercizio, senza dati di studenti. Apri `pagina` in Codex. Siccome la cartella non è sotto git,
Codex la apre in sola lettura: dal selettore dei permessi scegli la voce che permette di
modificare i file della cartella. Poi chiedi all’agente di elencare i file con il formato e
l’argomento di ciascuno.

**Parte B, la pagina.** Scegli il tipo di esercizio più adatto al tuo materiale: completamento
(un testo con le parole chiave mancanti), abbinamento (termini e definizioni, opere e autori),
ordinamento (le fasi di un processo, gli eventi di un periodo), classificazione (parole da
assegnare a una categoria), scelta con spiegazione (un caso con tre soluzioni commentate).
Adatta e lancia il prompt:

```text
In questa cartella c’è il materiale di una mia lezione di [materia] per una classe [classe]
su [argomento]. Ricava da questo materiale una pagina web di esercizi interattivi per gli
studenti, in un solo file index.html, senza risorse esterne:

- [primo esercizio: tipo e contenuto, per esempio «un esercizio di abbinamento fra i termini
  della lezione e il loro significato»];
- [secondo esercizio, se serve].

Ogni esercizio ha un pulsante «Controlla» che segnala le risposte sbagliate e spiega l’errore
con una frase presa dal materiale. Usa solo informazioni presenti nel materiale. La pagina
deve funzionare anche da telefono: niente trascinamento, usa menu a tendina o pulsanti. Non
modificare i file che ci sono già. Alla fine dimmi che cosa hai creato e da quali file hai
preso le informazioni.
```

Apri `index.html` nel browser con un doppio clic e svolgi gli esercizi, sbagliando apposta
almeno una risposta.

**Parte C, la revisione.** Passa la lista di controllo e chiedi a Codex le correzioni una alla
volta, come nella sezione sulla revisione:

- ogni consegna è chiara per uno studente della classe indicata;
- ogni soluzione è corretta, verificata sul materiale originale;
- la correzione accetta le risposte giuste scritte in modo diverso (maiuscole, accenti, spazi),
  oppure l’esercizio non chiede di scrivere;
- le spiegazioni degli errori sono corrette e prese dal materiale;
- nella pagina non compaiono dati personali;
- nessun testo di terzi è riprodotto per intero;
- con la finestra del browser stretta come un telefono la pagina si legge e gli esercizi si
  svolgono.

**Parte D, la pubblicazione.**

1. Su github.com crea un repository nuovo (icona **+** in alto a destra, **New repository**):
   nome breve senza spazi né accenti, per esempio `esercizi-storia`; visibilità **Public**;
   **Add README** attivo; poi **Create repository**.
2. Dal menu **Add file** scegli **Upload files**, trascina `index.html` dalla cartella `pagina`
   e conferma sul ramo `main`.
3. Apri **Settings**, poi **Pages**. Sotto **Build and deployment**, in **Source** scegli
   **Deploy from a branch**; come ramo `main`, come cartella la radice; poi **Save**.
4. Aspetta che in cima alla pagina **Pages** compaia l’indirizzo del sito, con il pulsante
   **Visit site**. Se risponde con un errore 404, aspetta qualche minuto e ricarica.
5. Apri l’indirizzo dal telefono e svolgi un esercizio.

| Se succede… | Probabilmente… | Allora… |
|---|---|---|
| Codex dice che non può scrivere il file | la cartella è aperta in sola lettura | cambia il permesso dal selettore sotto il campo di scrittura |
| l’indirizzo risponde 404 anche dopo dieci minuti | il file non si chiama esattamente `index.html`, o è in una sottocartella | rinominalo o spostalo nella radice del repository |
| in **Pages** non compare la scelta del ramo | il repository è privato | rendilo pubblico da **Settings**, o creane uno nuovo pubblico |
| dal telefono gli esercizi non rispondono al tocco | la pagina usa il trascinamento | chiedi a Codex menu a tendina o pulsanti al posto del trascinamento |
| dopo una correzione la pagina online è ancora la vecchia | il file nuovo non è stato caricato, o il browser mostra la copia precedente | carica di nuovo `index.html` e ricarica la pagina dopo qualche minuto |

## Prima del prossimo incontro

- Se non hai pubblicato in aula, pubblica la pagina seguendo la parte D e manda l’indirizzo.
- Fai provare la pagina a un collega e annota che cosa cambieresti: nel secondo incontro le
  modifiche le fa l’agente, e git ne registra le versioni.
- Ritrova il compito ripetitivo che hai descritto nella mail prima del corso: nel secondo
  incontro diventa una procedura che l’agente esegue sempre allo stesso modo.
