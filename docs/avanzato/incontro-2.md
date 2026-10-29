# Incontro 2 — Insegnare un mestiere all’agente

Nel primo incontro l’agente ha imparato com’è fatta la tua cartella. In questo impara a fare
un lavoro sempre allo stesso modo. Prima però serve una rete di sicurezza, perché un agente
che lavora su molti file può sbagliare su molti file. Il capitolo segue l’ordine
dell’incontro: le versioni, dove va una regola, le procedure ripetibili, come sbaglia un
agente e come si corregge, i connettori. In fondo trovi il laboratorio e che cosa fare prima
del terzo incontro.

Le prove citate qui sono state fatte il 29 ottobre 2026 con Claude Code 2.1.312, sull’archivio
di una docente di storia di fantasia, Laura Bianchi: le stesse lezioni sulla Rivoluzione
francese del primo incontro. La prova con l’app Codex e la licenza della scuola non è ancora
stata fatta. Dove il capitolo descrive Codex, la fonte è la documentazione ufficiale, citata
con la data in cui è stata consultata.

## Le versioni: git e i commit

Git è un programma che tiene la storia di una cartella. Bastano tre parole per usarlo:

- un **repository** è una cartella di cui git tiene la storia;
- un **commit** è una fotografia della cartella in un momento preciso, con un messaggio che
  dice che cosa contiene;
- il **ripristino** riporta un file, o tutta la cartella, a com’era in un commit.

Fra un commit e l’altro git sa dire esattamente che cosa è cambiato, riga per riga: è la
**differenza** (in inglese *diff*), con le righe tolte in rosso e quelle aggiunte in verde.
Questo cambia il modo di lavorare con un agente. Senza git, dopo un compito che tocca dieci
file bisogna aprirli tutti e ricordarsi com’erano. Con git basta leggere la differenza, e se
non convince si annulla.

Non serve imparare i comandi. L’agente sa usare git, e glielo si chiede a parole:

```text
Voglio poter tornare indietro se qualcosa va storto. Metti questa cartella sotto
controllo di versione con git e fai un primo commit, con un messaggio in italiano che
dica che cosa contiene.
```

Nella prova l’agente ha creato il repository e il primo commit in una ventina di secondi,
con un messaggio che elencava le parti della cartella. Ha anche segnalato che il commit
risultava a nome di un’identità già configurata sul computer, non della docente: se succede
anche a te, chiedigli di impostare il tuo nome per quella cartella.

Poi gli abbiamo chiesto di applicare a tutti i file la regola di `AGENTS.md` sulle date per
esteso. Lo stesso prompt, sulla stessa cartella, ha dato due esiti diversi. La prima volta
l’agente ha completato le date e, dove i file davano solo il mese, ha scritto «giorno da
verificare» dentro il testo delle lezioni: un appunto per la docente finito in un testo per
la classe. La seconda volta ha completato le stesse date e ha messo i dubbi solo nel
messaggio finale. In tutti e due i casi la differenza mostrava subito che cosa era cambiato,
e una richiesta come questa ha riportato la cartella all’ultimo commit:

```text
Non mi convince. Annulla tutte le modifiche e riporta la cartella all’ultimo commit.
```

Due regole pratiche. Il commit si fa **prima** di un compito ampio, non dopo: è la rete che
si stende sotto, non la foto ricordo. E una modifica che non è mai entrata in un commit, una
volta annullata, non si recupera più: l’agente stesso lo ha ricordato nella prova.

::: warning Da verificare in aula
La documentazione di Codex dice che una cartella sotto git si apre con il permesso di
modificare i file al suo interno, mentre una cartella qualsiasi si apre in sola lettura
(vedi il [capitolo 1](./incontro-1#permessi-e-sandbox)). Non è ancora stato provato se l’app
installa git da sola o lo richiede, né come si chiamano il pannello delle differenze e il
pulsante per annullare nella versione in uso. Su Windows git va di solito installato a parte.
:::

## Dove va una regola

Durante la settimana fra un incontro e l’altro ti sarai trovato a ripetere qualcosa
all’agente. Ogni regola ripetuta ha un posto, e sceglierlo bene è metà del lavoro:

| Che regola è | Dove va | Esempio |
|---|---|---|
| Vale sempre, in ogni lavoro su questa cartella | Nel file di istruzioni, `AGENTS.md` | «Le date sempre per esteso» |
| Vale per un compito preciso | In una procedura ripetibile | «Le soluzioni in un file separato dalle domande» |
| Deve succedere sempre, anche se l’agente se ne dimentica | Imposta: permessi, sandbox, una cartella protetta | «Gli originali non si modificano» |

La terza riga è la più importante. Quello che si ripete va in un file; **quello che deve
succedere sempre non si chiede, si impone**. Un’istruzione scritta l’agente la segue quasi
sempre, ma il modello può sbagliare, e «quasi sempre» non basta per i file che non vuoi
perdere. Un permesso invece tiene anche se l’agente decide il contrario. L’idea viene dal
workshop di Lydia Hallie (Anthropic) su Claude Code, primavera 2026, lezioni 7 e 10, che qui
riprendiamo con parole nostre. Con gli strumenti del corso, imporre significa soprattutto
scegliere bene il permesso e tenere sotto git tutto quello che conta.

La scheda «dove va una regola» è anche nei [modelli pronti](./modelli#scheda-dove-va-una-regola).

## Le procedure ripetibili

Una **procedura ripetibile**, che gli agenti chiamano *skill*, è un file di testo con le
istruzioni per un compito che altrimenti rispiegheresti ogni volta: preparare domande di
comprensione su un testo, adattare una lezione a un livello linguistico diverso, rivedere la
prosa di una comunicazione alle famiglie. Sta in una cartella con il suo nome e si chiama
sempre `SKILL.md`:

```text
archivio/
└── .agents/
    └── skills/
        └── domande-di-comprensione/
            └── SKILL.md
```

Il file comincia con un’intestazione di due righe, il **nome** e la **descrizione**, seguita
dai passi della procedura e dai controlli finali:

```markdown
---
name: domande-di-comprensione
description: Prepara una batteria di domande di comprensione, con le soluzioni in un
  file separato, a partire da un testo dell’archivio (lettura, lezione, brano
  d’antologia). Usala quando il docente chiede domande, esercizi o una verifica di
  comprensione su un testo preciso.
---

# Domande di comprensione su un testo
…
```

La differenza con `AGENTS.md` sta in quando l’agente la legge. Il file di istruzioni lo
carica sempre, intero. Di una procedura, all’inizio di ogni sessione, l’agente vede solo il
nome e la descrizione; il resto lo legge quando decide di usarla. Per questo le procedure
possono essere lunghe e numerose senza appesantire ogni conversazione, e per questo
`AGENTS.md` deve restare corto. È lo schema del «che cosa riceve il modello a ogni giro» del
[capitolo 1](./incontro-1#che-cosa-riceve-il-modello-a-ogni-giro): l’elenco delle procedure
era una delle voci del pacchetto.

### La descrizione decide quando la procedura parte

Siccome all’inizio l’agente vede solo la descrizione, è la descrizione a decidere se la
procedura parte. Deve dire due cose: **che cosa fa** e **quando usarla**, con le parole che
useresti davvero per chiederla. Nella prova abbiamo scritto «Mi prepari delle domande di
comprensione sulla lezione 2 dell’Illuminismo, per la mia quarta?», senza nominare la
procedura: l’agente l’ha scelta da solo, ha scritto domande e soluzioni in due file separati
e ha riportato l’esito dei controlli finali, in un minuto e mezzo. Lo stesso è successo con
la procedura di adattamento («Ho in classe due ragazzi arrivati da poco, con un italiano di
livello A2. Puoi adattare per loro la lezione 3?») e con quella di revisione della prosa.

Se una procedura non parte, quasi sempre la descrizione è troppo vaga («aiuta con i testi») o
usa parole diverse da quelle della richiesta. Se parte quando non serve, è troppo larga.

In Codex le procedure si possono anche chiamare per nome, scrivendo `$` seguito dal nome, e
l’app desktop le elenca nella voce Skills della barra laterale. Fonte:
[documentazione di Codex sulle skill](https://learn.chatgpt.com/docs/build-skills),
consultata il 29 ottobre 2026, non ancora provata con la licenza della scuola.

### Farsi scrivere la procedura dall’agente

Scrivere una procedura a mano si può, ma conviene un’altra strada: fare il lavoro una volta
con l’agente, correggerlo a voce finché va bene, e poi chiedergli di trasformare quello che è
successo in una procedura.

```text
Trasforma quello che abbiamo appena fatto in una procedura ripetibile, comprese le
correzioni che ti ho chiesto. Scrivila in .agents/skills/<nome-breve>/SKILL.md, con
in cima name e description. La descrizione deve dire che cosa fa la procedura e
quando usarla, con le parole che userei io per chiederla. Alla fine della procedura
metti i controlli che devi superare prima di dire che hai finito. Non modificare
nient’altro.
```

Nella prova abbiamo chiesto un esercizio di completamento sulla lezione 1, poi due
correzioni (soluzioni in un file a parte, solo termini del lessico come parole da togliere),
poi la procedura. L’agente ha scritto un `SKILL.md` di 68 righe che conteneva entrambe le
correzioni e undici controlli finali. In una sessione nuova, alla richiesta «Mi fai un testo
con le parole da riempire sulla lezione 2?», la procedura è partita da sola. Sessantotto
righe sono troppe: il passo successivo è leggerla e sfoltirla, con lo stesso criterio usato
per `AGENTS.md` (via quello che l’agente farebbe comunque e quello che vale solo per il file
di oggi).

Codex ha anche una procedura apposta per scrivere procedure, `$skill-creator`, secondo la
documentazione citata sopra. Non l’abbiamo ancora provata.

## Leggere il piano, correggere il sistema

Prima di un compito che tocca molti file conviene chiedere all’agente che cosa intende fare,
e leggerlo, prima di lasciarlo lavorare: «Prima di cominciare dimmi quali file pensi di
modificare e come. Non modificare niente finché non ti rispondo». Leggere un piano di dieci
righe costa meno che leggere dieci file cambiati, e gli errori di interpretazione si vedono
subito.

Quando poi il risultato non va, la tentazione è riscrivere la richiesta più lunga e più
precisa. Ma la richiesta vale per una volta sola. Se l’errore può ripetersi, si corregge **il
sistema**: la procedura, se l’errore riguarda quel compito; `AGENTS.md`, se riguarda ogni
lavoro. Due casi delle prove:

- **Il glossario che non spiegava niente.** La prima versione della procedura di adattamento
  vietava ogni informazione assente dall’originale. L’agente l’ha rispettata alla lettera e
  ha scritto definizioni come «diritti feudali: diritti che l’Assemblea abolisce nella notte
  del 4 agosto». Abbiamo cambiato una riga della procedura (la definizione dice che cosa è il
  termine; se il testo non basta, si scrive una definizione di uso scolastico segnata «da
  verificare») e la seconda prova ha prodotto «diritti feudali: diritti e obblighi che legano
  i contadini ai nobili proprietari della terra», con il segnale.
- **L’opzione copiata dal testo.** Nella prima batteria di domande la risposta corretta di
  una domanda a scelta multipla ripeteva parola per parola una frase della lezione: si
  riconosceva senza aver capito. Una riga in più nella procedura (l’opzione corretta
  riformula il testo con parole diverse) e nella seconda prova l’opzione giusta diceva «chi
  fa le leggi, chi le applica e chi giudica sono organi distinti».

Il passo successivo è smettere di rileggere tutto e **progettare un controllo**: una
condizione che l’agente deve verificare prima di dire che ha finito, scritta in fondo alla
procedura. «Ogni soluzione cita un passo che esiste davvero nel testo» è un controllo; «fai
attenzione alle soluzioni» no. Nella prova delle domande l’agente ha riletto il testo e
riportato l’esito di ogni controllo, e le citazioni delle soluzioni, verificate una per una
dopo la prova, erano tutte vere. Un controllo non sostituisce la tua lettura finale, ma la sposta dove serve.

## Come sbaglia un agente

Una chat sbaglia soprattutto inventando: un dato, una citazione, una fonte. Un agente può
inventare allo stesso modo, ma in più agisce sui file, e questo gli dà tre modi di sbagliare
che una chat non ha.

- **Azioni irreversibili.** Cancellare, sovrascrivere, riconvertire un file su cui avevi
  lavorato a mano. Se la cartella è sotto git e l’ultimo commit è recente, nessuna è davvero
  irreversibile.
- **Lavoro finito a metà e dichiarato completo.** Su venti file ne fa diciassette e il
  messaggio finale dice «fatto». Lo intercettano i controlli finali con un numero dentro
  («le schede sono tante quante le lezioni») e la differenza di git, che dice quanti file
  sono cambiati.
- **Sicurezza convincente.** Un’affermazione sbagliata detta con lo stesso tono di quelle
  giuste, dentro un resoconto per il resto accurato.

Nelle prove del 29 ottobre abbiamo cercato di provocare i primi due errori, e non ci siamo
riusciti. Alla richiesta di cancellare i doppioni l’agente non ha cancellato niente: ha
osservato che `AGENTS.md` protegge gli originali e che le schede di ripasso non sono copie,
e ha chiesto come procedere. Alla richiesta di riconvertire tutti gli originali ha lasciato
fermo l’unico file in cui la docente aveva aggiunto delle note a mano, spiegando perché. È un
buon segno, ma vale per quel modello e quel giorno: la rete di sicurezza si stende comunque.

Il terzo errore invece è comparso da solo, e con una costanza istruttiva. L’elenco del lessico
della lezione 3 finisce con la parola «Dichiarazione», scritta così di proposito. In sei prove
diverse, con richieste diverse (schede di ripasso, adattamento, scheda di valutazione),
l’agente ha segnalato che l’elenco «si interrompe» o «è tagliato». Abbiamo aggiunto alla
procedura di adattamento una regola apposta: se segnali che l’originale è tagliato, cita la
riga esatta e rileggila prima di scriverlo. L’agente ha citato la riga giusta, «riga 28, …
diritti feudali, Dichiarazione», e ha confermato che era tagliata. La regola ha reso l’errore
più facile da controllare, non lo ha eliminato. Per gli errori di giudizio non basta
un’istruzione: serve che tu controlli, e i controlli finali servono a dirti dove guardare.

## Le procedure si condividono

Il formato `SKILL.md`, con nome e descrizione in cima e istruzioni in Markdown, è uno standard
aperto: lo leggono Codex, Claude Code e altri agenti. Una procedura scritta per il tuo archivio
funziona anche nell’archivio di un collega, e un dipartimento può tenere una libreria comune
di procedure (le domande di comprensione, la griglia di correzione, l’adattamento per i piani
personalizzati) che ognuno copia e adatta.

Cambia solo la cartella in cui l’agente le cerca. Codex le legge in `.agents/skills/` dentro il
progetto, e in `.agents/skills/` nella cartella personale per quelle che valgono ovunque
(documentazione citata sopra). Claude Code le legge in `.claude/skills/`: nella prova del 29
ottobre non ha visto le procedure in `.agents/skills/`, e le ha viste subito dopo aver creato
`.claude/skills` come collegamento a quella cartella. Il contenuto dei file era lo stesso.

Le procedure dell’incontro sono nei [modelli pronti](./modelli#procedure-ripetibili).

## I connettori

Un agente lavora dentro una cartella. Per raggiungere qualcosa fuori, un servizio in rete, un
calendario, i file condivisi del dipartimento, usa un **connettore**. Lo standard con cui oggi
si scrivono i connettori si chiama MCP (*Model Context Protocol*): un connettore espone
all’agente alcuni strumenti, ciascuno con nome, descrizione e azione, che si aggiungono a
quelli per leggere e scrivere i file. Il modello li sceglie come sceglie le procedure,
leggendo la descrizione.

Per un docente, il connettore che conta di più è quello verso i file della scuola: la cartella
condivisa del dipartimento, il Drive dell’istituto. Valgono due regole già viste. Un
connettore si apre con **i permessi più stretti** che bastano al compito: se serve leggere la
griglia comune, il connettore non deve poterla modificare. E tutto quello che l’agente legge
attraverso un connettore passa dai server del servizio che usi, come nel resto del corso:
niente dati di studenti.

::: warning Dimostrazione su Claude Code
I connettori dell’app Codex con il piano della scuola non sono ancora stati provati. Secondo
la documentazione (consultata il 29 ottobre 2026) l’app li aggiunge da Impostazioni › MCP
servers, oppure dal file `config.toml`, condiviso con la riga di comando; la documentazione
non dice se i connettori di ChatGPT, come Google Drive, si usano anche in Codex. Fonte:
[MCP in Codex](https://learn.chatgpt.com/docs/extend/mcp). L’esempio qui sotto è stato fatto
con Claude Code.
:::

Nella prova abbiamo collegato all’archivio di Laura Bianchi un connettore verso una cartella
del dipartimento di storia, fuori dall’archivio, che contiene una griglia comune per le
interrogazioni. All’agente abbiamo concesso solo gli strumenti per elencare e leggere: quelli
per scrivere, spostare e cancellare erano vietati. Poi la richiesta:

```text
Il dipartimento ha una griglia comune per le interrogazioni: la trovi nel connettore
del dipartimento. Leggila e scrivi in ripasso/ una scheda per gli studenti, «Come verrò
valutato all’interrogazione sul 1789», che traduca ogni indicatore in una cosa concreta
da saper fare su questa lezione.
```

La prima volta il connettore non vedeva la cartella del dipartimento: Claude Code gli passava
come unica cartella consentita quella dell’archivio. L’agente non ha aggirato il blocco e non
ha inventato una griglia «tipica»: ha detto che cosa non riusciva a leggere e perché, e ha
chiesto come procedere. Dopo aver aggiunto la cartella del dipartimento fra quelle consentite,
l’agente ha letto la griglia attraverso il connettore e ha scritto la scheda, con i quattro
indicatori tradotti in cose da saper fare sulla lezione e la durata dell’interrogazione segnata
«da verificare». È un esempio di connettore in sola lettura, ed è anche un esempio di come si
configura per tentativi: la prima prova serve a capire che cosa il connettore vede.

## Laboratorio: due procedure sul proprio archivio

::: warning Procedura non ancora provata con Codex
I passi sono stati provati il 29 ottobre 2026 con Claude Code 2.1.312. La prova con l’app
Codex e la licenza della scuola non è ancora stata fatta: quando lo sarà, qui compariranno la
data e la versione dell’app.
:::

**Parte A, la rete di sicurezza.** Apri `archivio` e chiedi all’agente di metterlo sotto git
con un primo commit, con il prompt della prima sezione. Controlla che il commit sia a tuo nome.
Chiedi una piccola modifica a due o tre file, poi «mostrami le differenze rispetto all’ultimo
commit», poi annullala e controlla che i file siano tornati com’erano.

**Parte B, la procedura del tuo compito ripetitivo.** In una conversazione nuova fai svolgere
all’agente, una volta, il compito che hai portato, su un file vero dell’archivio, e correggilo
a voce finché il risultato non ti soddisfa. Poi chiedigli di trasformarlo in una procedura con
il prompt della sezione [Farsi scrivere la procedura dall’agente](#farsi-scrivere-la-procedura-dall-agente).
Leggi il `SKILL.md`, sfoltiscilo, controlla che finisca con almeno un controllo verificabile.
Provalo in una conversazione nuova chiedendo lo stesso compito su un altro file, senza nominare
la procedura. Se non parte, correggi la descrizione; se parte ma sbaglia, correggi la
procedura. Alla fine un commit.

**Parte C, la revisione della prosa.** Copia nell’archivio la procedura
[revisione della prosa](./modelli#revisione-della-prosa) con il suo elenco di difetti. Aggiungi
a mano un difetto tuo. Falla girare su un tuo testo per studenti o famiglie, poi segnala un
difetto che l’elenco non prevede e chiedi all’agente di fare in modo che non succeda più.
Controlla che l’elenco sia cresciuto di una voce scritta come regola generale. Nella prova, alla
segnalazione «“Nell’ambito del percorso di storia” è un giro di parole, basta “Per storia”»,
l’agente ha corretto la frase e aggiunto la voce «Giri di parole al posto di una preposizione o
di una parola sola», con l’esempio. Alla fine un commit.

## Prima del prossimo incontro

- Usa le tue due procedure almeno una volta ciascuna su materiali diversi. Ogni volta che
  sbagliano, correggi la procedura e fai un commit con un messaggio che dica che cosa hai
  cambiato.
- Aggiungi a `difetti.md` ogni difetto che ti trovi a correggere a mano.
- Crea l’account GitHub, se non l’hai ancora fatto: nel terzo incontro pubblichiamo una parte
  dell’archivio.
