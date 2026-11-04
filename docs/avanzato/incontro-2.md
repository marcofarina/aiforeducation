# Incontro 2 — Insegnare un mestiere all’agente

Nel primo incontro l’agente ha costruito una pagina a partire dai tuoi materiali e l’hai
pubblicata. In questo l’agente impara a lavorare sempre allo stesso modo sulla tua pagina.
Prima servono due cose: un file di istruzioni che l’agente rilegge a ogni sessione, perché da
solo non ricorda, e una rete di sicurezza, perché un agente che modifica molte parti di una
pagina può sbagliare in molti punti. Il capitolo segue l’ordine dell’incontro: il contesto e
il file di istruzioni, le versioni e il collegamento con la pagina in rete, dove va una regola,
le procedure ripetibili, come sbaglia un agente e come si corregge, i connettori. In fondo
trovi il laboratorio e che cosa fare prima del terzo incontro.

Le prove citate nel capitolo sono state fatte il 29 ottobre 2026 con Claude Code 2.1.312,
sull’archivio di una docente di storia di fantasia, Laura Bianchi: le stesse lezioni sulla
Rivoluzione francese del primo incontro. Le procedure descritte sono le stesse che userai sulla
tua pagina, ma i passi sulla pagina e sul repository di GitHub, e la prova con l’app Codex e la
licenza della scuola, non sono ancora stati fatti: dove il capitolo descrive Codex, la fonte è
la documentazione ufficiale, citata con la data in cui è stata consultata.

## Il contesto come risorsa finita

Il pacchetto che l’harness rispedisce al modello a ogni giro, visto nel primo incontro, ha un
limite, la **finestra di contesto**,
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
Così `AGENTS.md` nella radice dice chi sei e come scrivi, e `verifiche/AGENTS.md` aggiunge
solo le regole delle verifiche. Il totale caricato ha un limite, 32 KiB per
impostazione predefinita, cioè una decina di pagine: un motivo in più per scrivere corto.
Fonte: [documentazione di Codex su AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md),
consultata il 29 ottobre 2026.

Un modello di partenza per un docente di materia non tecnica è nei
[modelli pronti](./modelli#file-di-istruzioni-di-partenza).

Un’avvertenza che vale per la tua pagina: il repository che hai creato nel primo incontro è
**pubblico**, quindi `AGENTS.md` lo diventa quando lo carichi. Non ci vanno nomi di studenti,
classi riconoscibili né altri dati personali.

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

### Dalla cartella alla pagina in rete: clone e push

La pagina del primo incontro vive in due posti: il repository su GitHub, che Pages pubblica, e,
da oggi, una cartella sul tuo computer. Due parole bastano a collegarli:

- **clonare** un repository vuol dire portarne una copia completa sul computer, con tutta la
  storia dei commit; la cartella che ne nasce sa da dove viene;
- il **push** carica sul repository di GitHub i commit fatti sul computer. Appena il push è
  arrivato, Pages ripubblica la pagina: dopo uno o due minuti l’indirizzo in rete mostra la
  versione nuova.

Il ciclo di lavoro diventa quindi: modifica con l’agente, leggi la differenza, commit, push.
Per l’agente, clone e push sono comandi che hanno bisogno della rete, e la sandbox di Codex
la tiene spenta per impostazione predefinita: l’app chiede il permesso di eseguirli, e tu lo
concedi per quel comando. Fonte:
[documentazione di Codex sui permessi](https://learn.chatgpt.com/docs/agent-approvals-security),
consultata il 4 novembre 2026. Come il computer si accredita presso GitHub per il push
(credenziali già presenti, interfaccia a riga di comando di GitHub, GitHub Desktop) dipende
dal sistema e va provato su macOS e su Windows: la strada giusta per il corso sarà scritta nel
laboratorio dopo le prove.

I comandi git di questo capitolo (clone, ripristino, commit, annullamento di un commit, push)
sono stati eseguiti il 4 novembre 2026 con git 2.54 su macOS contro un repository di prova.

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
pagina/
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
  file separato, a partire da un testo della cartella (lettura, lezione, brano
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
aperto: lo leggono Codex, Claude Code e altri agenti. Una procedura scritta per la tua pagina
funziona anche nel repository di un collega, e un dipartimento può tenere una libreria comune
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

## Laboratorio

::: warning Procedura non ancora provata con Codex
I comandi git sono stati eseguiti il 4 novembre 2026 su un repository di prova. L’accesso a
GitHub dal portatile, il comportamento di Codex sulla cartella versionata e le due procedure
in Codex non sono ancora stati provati: quando lo saranno, qui compariranno la data e la
versione dell’app.
:::

Il laboratorio ha quattro parti, sulla pagina che hai pubblicato nel primo incontro.

**Parte 1, il repository e il primo ripristino.** Clona sul computer il repository della
pagina (dal pulsante verde **Code** di GitHub, scheda HTTPS, copia l’indirizzo) chiedendo a
Codex di clonarlo in Documenti, e concedi il permesso di rete quando lo chiede. Controlla che
il nome dei commit sia il tuo. Chiedi una modifica ampia alla pagina, ma prima chiedi il piano
e leggilo («dimmi quali parti pensi di modificare e come, non modificare niente finché non ti
rispondo»). Guarda la differenza, apri la pagina nel browser, poi annulla tutto. Ripeti con una
modifica piccola e salvala con un commit.

**Parte 2, il file di istruzioni.** In una conversazione nuova, chiedi all’agente di
intervistarti prima di scrivere `AGENTS.md`:

```text
Voglio scrivere il file AGENTS.md di questa cartella, con le istruzioni che dovrai
seguire ogni volta che lavori qui. Prima intervistami: fammi una domanda alla volta e
aspetta la mia risposta, al massimo dieci domande. Chiedimi che cosa insegno e a quali
classi, che cosa contiene la cartella e come è organizzata, come voglio le pagine di
esercizi che produci, che cosa non devi fare mai, come capisco che un lavoro è finito.
Guarda i file della cartella prima di fare domande a cui puoi rispondere da solo. Alla fine
scrivi AGENTS.md nella radice della cartella, al massimo trenta righe, e non modificare
nient’altro.
```

Poi apri il file e sfoltiscilo a mano: via le righe che l’agente seguirebbe comunque, quelle
troppo vaghe per controllarle, quelle ripetute. Ricorda che il repository è pubblico. Aggiungi
almeno una regola che si vede subito nel risultato, per esempio «ogni esercizio ha un titolo che
dice che cosa si deve fare». Infine prova il file in una conversazione nuova: chiedi
all’agente che cosa sa della cartella, poi un compito piccolo che metta alla prova quella
regola. Se non la rispetta, correggi il file, non la richiesta. Fai un commit.

L’intervista prima del lavoro è un’idea che torna nel terzo incontro, e che usano anche gli
autori degli strumenti: farsi fare domande una alla volta fa emergere quello che non si era
pensato di dire.

**Parte 3, una procedura per il tuo compito.** In una conversazione nuova fai svolgere
all’agente, una volta, il compito ripetitivo che hai portato, su un file vero, e correggilo a
voce finché il risultato non ti soddisfa. Poi chiedigli di trasformarlo in una procedura con il
prompt della sezione [Farsi scrivere la procedura dall’agente](#farsi-scrivere-la-procedura-dall-agente).
Leggi il `SKILL.md`, sfoltiscilo, controlla che finisca con almeno un controllo verificabile.
Provalo in una conversazione nuova chiedendo lo stesso compito su un altro file, senza nominare
la procedura. Se non parte, correggi la descrizione; se parte ma sbaglia, correggi la
procedura. Se non hai un compito, parti da una delle procedure dei
[modelli pronti](./modelli#procedure-ripetibili): `nuova-pagina-di-esercizi` o
`adattare-un-testo`. Fai un commit.

**Parte 4, la pagina aggiornata in rete.** Usa la procedura per migliorare la pagina, controlla
la differenza, fai il commit e il push (concedendo di nuovo il permesso di rete). Dopo uno o
due minuti l’indirizzo mostra la versione nuova: aprila dal telefono.

La traccia passo per passo, con il piano B e gli errori più frequenti, è nel laboratorio
dell’incontro 2 del repository dei corsi.

## Prima del prossimo incontro

- Usa la tua procedura almeno una volta su un file diverso. Ogni volta che sbaglia, correggi
  la procedura e fai un commit con un messaggio che dica che cosa hai cambiato.
- Porta in aula, per il terzo incontro, i materiali che vuoi riunire nell’archivio personale:
  una cartella con una decina di file, nessun dato di studenti.
- Se non l’hai ancora fatto, completa il push della pagina aggiornata e manda l’indirizzo a
  Marco.
