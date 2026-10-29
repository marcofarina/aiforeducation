# Incontro 3 — Dall’archivio al sistema

Nei primi due incontri l’archivio ha imparato a farsi leggere e l’agente a fare un lavoro
sempre allo stesso modo. In questo l’archivio diventa un sistema: si controlla da sé, ricorda
quello che ha imparato, regge lavori che durano più di una sessione, e una sua parte esce in
rete. Il capitolo segue l’ordine dell’incontro: l’archivio interrogabile e un caso di studio,
come si mantiene, il lavoro lungo diviso in fasi, la revisione a più voci, la pubblicazione,
che cosa resta in mano al docente. In fondo trovi il laboratorio.

Le prove citate qui sono state fatte il 29 ottobre 2026 con Claude Code 2.1.312, sull’archivio
di Laura Bianchi, la docente di storia di fantasia dei capitoli precedenti. La prova con l’app
Codex e la licenza della scuola non è ancora stata fatta, e nemmeno la pubblicazione su
GitHub descritta nel laboratorio: dove il capitolo le descrive, la fonte è la documentazione
ufficiale, citata con la data in cui è stata consultata.

## L’archivio interrogabile

Un archivio diventa **interrogabile** quando un agente sa rispondere a domande come «quali
lezioni non hanno ancora una verifica?» o «dove ho spiegato la separazione dei poteri?» senza
che tu gli indichi i file. In rete lo si chiama spesso *second brain*. Bastano quattro parti:

| Parte | Che cos’è | Nell’archivio del corso |
|---|---|---|
| I materiali | I file su cui si lavora, in testo semplice | `testi/`, con gli originali a parte in `originali/` |
| Le istruzioni | Che cosa contiene l’archivio, come si scrive, che cosa non si fa | `AGENTS.md` e le procedure |
| L’indice | L’elenco dei materiali con il loro stato | `indice.md` |
| Le note di collegamento | I rimandi da un materiale all’altro | Le righe dell’indice, i collegamenti fra lezione, scheda e verifica |

Andrej Karpathy ha descritto, nell’aprile 2026, una variante in cui è l’agente a compilare
le pagine collegate a partire dalle fonti grezze, e a tenerle in ordine con un controllo
periodico ([`llm-wiki`](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)).
Per un archivio di materiali didattici conviene il contrario: le pagine le scrive il docente,
l’agente le legge, le collega e controlla che restino coerenti.

### Un caso di studio

Il sistema che il docente che tiene il corso ha costruito nell’ultimo anno per le proprie
classi di informatica è un archivio di questo tipo, cresciuto con l’uso. È fatto per un’altra
disciplina e contiene parti che a un docente di materia non servono, ma alcune sue scelte si
trasferiscono senza modifiche.

- **Cartelle diverse per cose diverse.** Le sorgenti che non si toccano (manuali, tracce
  d’esame) in una cartella; i materiali su cui si lavora in un’altra; i prodotti (slide,
  verifiche impaginate) in una terza, e si rigenerano invece di ritoccarli; una cartella di
  transito per i file da importare, che dopo ogni importazione resta vuota.
- **Una tabella delle fonti di verità.** Per ogni tipo di contenuto, quale file fa fede.
  Evita la domanda più costosa di un archivio cresciuto: «quale delle due versioni è quella
  giusta?».
- **Gli errori tipici, ciascuno con la sua regola.** Il file di istruzioni contiene 18
  errori che l’agente commetteva per istinto, scritti così: l’errore, perché succede, la
  regola che lo previene. Per esempio: «La lezione con il monte ore dentro. Tenderai a
  scrivere “per la 4A”, “in ventidue ore”. La contestualizzazione resta generica: una lezione
  deve restare riusabile». È la forma matura del file delle lezioni apprese, più avanti.
- **Una barra di qualità per ogni prodotto.** Controlli che passano o non passano, scritti
  una volta per tutte: per una verifica, per esempio, «solo domande già validate dal docente».
- **Un controllo notturno che segnala e non corregge.** Dodici verifiche automatiche girano
  ogni notte e registrano i difetti; il docente li legge la mattina e decide. A luglio 2026
  è stato tolto all’agente anche lo smistamento automatico dei difetti, perché il contenuto
  didattico non si tocca di notte senza il docente.

Il file di istruzioni di quel sistema ha superato le 500 righe, e le procedure lunghe
sono state spostate nelle skill. È l’esito di un anno di uso intenso, non il punto di
partenza: il tuo `AGENTS.md` resta corto, e cresce solo quando una regola si è dimostrata
necessaria.

Che cosa prendere per il proprio archivio:

| Nel caso di studio | Per un docente di lettere, lingue o sostegno |
|---|---|
| Sorgenti, materiali e prodotti in cartelle diverse | Sì: `originali/`, `testi/`, e una cartella per ciò che si stampa o si pubblica |
| Tabella delle fonti di verità | Sì, in tre righe dentro `AGENTS.md` |
| Errori tipici con la regola che li previene | Sì: è il file delle lezioni apprese |
| Barra di qualità | Sì, per i due o tre prodotti che fai più spesso |
| Controllo notturno scritto in un linguaggio di programmazione | No: basta una procedura di controllo lanciata a mano una volta al mese |
| Portale, database, pseudonimi degli studenti | No: i dati degli studenti non entrano nell’archivio |

### Come si mantiene

Un archivio si guasta in silenzio: un file rinominato rompe un collegamento dell’indice, una
nota «da sistemare» resta lì per mesi, una regola di `AGENTS.md` smette di essere rispettata.
Due abitudini lo tengono in ordine.

**Il controllo periodico di coerenza.** Una procedura che l’agente esegue una volta al mese, o
prima di pubblicare qualcosa: controlla indice, collegamenti, corrispondenze fra originali e
testi, regole di `AGENTS.md`, note aperte, e scrive un rapporto **senza correggere niente**.
La procedura è nei [modelli pronti](./modelli#controllo-di-coerenza).

Nella prova, alla richiesta «Mi fai un controllo dell’archivio? Voglio sapere che cosa non
torna prima di pubblicarne una parte», la procedura è partita senza essere nominata e in due
minuti ha trovato problemi veri, che nessuno aveva cercato: cinque collegamenti dell’indice
che puntavano a file inesistenti, quattro schede di ripasso senza classe e durata, e una
regola di `AGENTS.md` sui nomi dei file che nessun file rispettava, e che per di più indicava
la classe sbagliata.

Sull’elenco del lessico della lezione 3, quello che nell’incontro 2 l’agente dichiarava
«interrotto», il controllo ha riaperto il file, ha citato la riga e ha concluso che la nota
dell’indice «dice il vero». Un controllo può confermare un errore: ogni segnalazione si
verifica aprendo il file.

**Il file delle lezioni apprese.** Un file nella radice dell’archivio, `lezioni-apprese.md`,
con una riga per ogni cosa imparata, scritta come regola. L’agente lo legge prima di ogni
lavoro e lo aggiorna alla fine. La sezione da aggiungere in fondo ad `AGENTS.md`:

```markdown
## Lezioni apprese

- Prima di cominciare un lavoro leggi `lezioni-apprese.md`.
- Alla fine di un lavoro aggiungi in fondo a `lezioni-apprese.md` una riga per ogni cosa che
  ti ho corretto o che hai scoperto e che vale anche la prossima volta. Se non c’è niente da
  aggiungere, dillo nel messaggio finale.
```

Abbiamo ripetuto lo stesso controllo dopo aver scritto in `lezioni-apprese.md` una riga sola:
«L’elenco del lessico della lezione 3 finisce con “Dichiarazione” per scelta della docente: è
completo». Questa volta l’agente ha segnalato come sbagliata la nota dell’indice: «Va tolta la
segnalazione dall’indice e dalla scheda prima di pubblicare». Nell’incontro 2 una regola dentro
la procedura di adattamento non era bastata. La differenza sta nel posto: la procedura vale per
un compito, il file delle lezioni apprese l’agente lo rilegge prima di qualunque lavoro.

L’idea di chiudere ogni lavoro con una nota per il successivo viene dal *compound
engineering* di Every ([plugin pubblico](https://github.com/EveryInc/compound-engineering-plugin)),
pensato per chi scrive codice; l’abitudine si trasferisce così com’è.

Il file si sfoltisce come `AGENTS.md`: una riga che si è dimostrata stabile e vale per ogni
lavoro si sposta in `AGENTS.md`; una che riguarda un compito solo va nella sua procedura; una
che non serve più si toglie.

## Il lavoro lungo diviso in fasi

Un compito che tocca molti file, o che non si chiude in una sessione, si governa con quattro
mosse: un’intervista prima del piano, un piano scritto, lo stato che passa da una sessione
all’altra, e una condizione di fine scritta prima di cominciare.

### L’intervista prima del piano

Una richiesta come «mi prepari una verifica sulle lezioni 3 e 4?» lascia all’agente scelte
che spettano al docente. Nella prova l’agente ha scritto una verifica di un’ora, con sei
domande aperte e 16 punti, e in fondo ha elencato con onestà che cosa aveva deciso da
solo: quali eventi chiedere, i punteggi parziali, la conversione in voto. Erano tutte
decisioni della docente.

L’**intervista prima del piano** è una procedura che rovescia l’ordine: prima di
pianificare, l’agente fa domande, **una alla volta**, finché obiettivo, vincoli, casi limite e
condizione di fine sono chiari. Quando una domanda ha poche risposte possibili, le propone con
quella che consiglia. L’idea ha diverse fonti indipendenti: la skill `grill-me` di Matt Pocock
([mattpocock/skills](https://github.com/mattpocock/skills)), lo *spec-driven development*, e
la lezione 14 del workshop di Lydia Hallie su Claude Code, che la usa nello stesso modo. La
procedura del corso è nei [modelli pronti](./modelli#intervista-prima-del-piano).

Nella prova la richiesta è stata «Devo preparare una verifica sulle lezioni 3 e 4 per la mia
quarta. Prima di cominciare intervistami». L’agente ha letto l’archivio, ha riassunto quello
che aveva già trovato, e ha fatto otto domande: lo scopo della verifica, la durata e il
formato, gli argomenti, chi resta fuori, le fonti, il punteggio, la versione per i due studenti
con piano personalizzato. Dalle risposte sono usciti i 50 minuti al posto dell’ora, la
fuga a Varennes esclusa perché solo nominata in classe, la versione semplificata con la linea
del tempo come aiuto. Due cose le ha trovate l’agente: che quella linea del tempo nei file non
c’era, e che la docente non aveva risposto alla domanda sul livello di lingua.

Nella stessa prova, alla prima richiesta, quella senza «intervistami», la procedura non era
partita da sola, benché la descrizione nominasse le verifiche. Per i lavori ampi conviene
chiederla esplicitamente.

### Il piano scritto e lo stato fra le sessioni

Alla fine dell’intervista l’agente scrive il piano in un file, `piani/<nome>.md`, con cinque
sezioni: obiettivo, decisioni prese, fasi, condizione di fine, stato. Poi si ferma. Il lavoro
comincia in una sessione nuova, che legge il piano e parte dalla sezione **Stato**, e ogni
sessione la aggiorna alla fine: che cosa è stato fatto, che cosa resta, la prossima azione.

È lo stesso meccanismo del primo incontro, il contesto che non si porta da una sessione
all’altra, risolto con un file. Nella prova la prima sessione nuova («Il piano va bene. Esegui
la prossima fase») ha svolto la fase 1 e scritto nello stato «Fase 1 svolta. Prossima: fase
2». La seconda, aperta con la sola frase «Continua il lavoro sulla verifica delle lezioni 3 e
4», è ripartita da lì senza altre indicazioni. Ha però svolto le tre fasi rimaste tutte
insieme: se vuoi leggere il lavoro fase per fase, scrivilo nella richiesta.

Lo stesso schema regge lavori di mesi. Il progetto del nuovo regolamento d’istituto, che il
docente del corso sta scrivendo con un agente, è diviso in dieci fasi, descritte ciascuna con
obiettivo, materiali, procedura e criteri di accettazione. Ogni sessione comincia leggendo
l’indice e la pagina dello stato del progetto, e finisce aggiornando lo stato e, se ha deciso
qualcosa di non ovvio, il registro delle decisioni. È un documento della scuola, non un
programma: il metodo non dipende dalla materia.

### La condizione di fine

La condizione di fine dice che cosa vuol dire «finito» in termini che si possono controllare
guardando i file. Si scrive **prima** di cominciare, ed è la parte del piano che conta di più:
dice all’agente quando fermarsi e a te che cosa guardare.

| Vago | Controllabile |
|---|---|
| La verifica è completa | Ha almeno una domanda per ciascun obiettivo delle lezioni 3 e 4 |
| Le soluzioni sono giuste | Ogni soluzione cita la frase della lezione da cui si ricava |
| La durata va bene | La somma dei tempi per domanda non supera i 50 minuti |
| Non hai toccato niente di importante | `git status` non elenca file in `originali/` |

Un controllo funziona solo se l’agente dice **come** l’ha fatto. Nella prova, a fine lavoro,
l’agente ha riportato l’esito di ogni punto e ha ammesso che uno, «nessuna consegna sopra le
20 parole», lo aveva controllato «a occhio, non con un conteggio». Un controllo fatto a
occhio è un punto che resta da verificare. La scheda completa, con altri esempi, è nei
[modelli pronti](./modelli#scheda-la-condizione-di-fine).

Claude Code e Codex hanno anche un comando, `/goal`, che fa lavorare l’agente finché una
condizione regge, con un secondo modello che la giudica a ogni turno. Il corso non lo usa: per
il lavoro di un docente basta scrivere la condizione nel piano e chiedere il controllo alla
fine.

## La revisione a più voci

Il **consiglio** sottopone lo stesso lavoro a più revisori con ruoli diversi, che non si vedono
fra loro. L’idea viene dall’*LLM Council* di Karpathy, dove i revisori sono modelli di famiglie
diverse; qui la diversità viene dai ruoli e dal fatto che ogni revisore parte da zero. Per una
verifica, tre revisori: lo studente, che conosce solo le lezioni e segnala dove si perde; il
collega di materia, che controlla la correttezza; il revisore dell’accessibilità, che
controlla consegne, tempi ed equità.

Le fasi sono tre:

1. **Revisione cieca.** Ogni revisore legge il lavoro con il solo suo mandato e restituisce
   osservazioni in un formato fisso: dove, problema, gravità, proposta.
2. **Contraddittorio.** Le osservazioni si anonimizzano e si rimescolano; ogni revisore giudica
   quelle degli altri: fondata, infondata con il motivo, doppione.
3. **Sintesi.** Si decide osservazione per osservazione, con il motivo scritto di ogni
   respinta. Quelle che cambiano una scelta del docente si propongono, non si applicano.

Con un agente si fa con i **sotto-agenti**: sessioni separate, ciascuna con il proprio
contesto, che restituiscono solo il risultato. Senza, si fa a mano con tre chat nuove, anche di
assistenti diversi. La traccia completa, con il prompt pronto, è nei
[modelli pronti](./modelli#traccia-per-la-revisione-a-piu-voci).

### Quanto rende e quanto costa

Nella prova il consiglio ha rivisto la verifica uscita dal lavoro a fasi. In due minuti e
mezzo, con tre sotto-agenti, ha prodotto 25 osservazioni: 19 accolte, sei
respinte con il motivo. Fra le respinte, una chiave delle soluzioni «mancante» che c’era già in
un altro file, e la fuga a Varennes, che la docente aveva escluso di proposito. L’agente ha
dichiarato anche i propri limiti: i revisori non avevano visto la versione semplificata, che
quindi non era stata rivista.

Sulla stessa verifica abbiamo chiesto anche una revisione singola, con una richiesta normale.
Ha trovato i due problemi più seri, gli stessi del consiglio: le domande chiuse che
suggeriscono le risposte delle aperte, e una domanda sulla Dichiarazione dei diritti a cui la
lezione non dà una risposta verificabile. Non ha trovato due cose che il consiglio aveva
visto: l’opzione giusta di una domanda, molto più lunga delle altre, e la griglia di
valutazione rimasta sul foglio da stampare.

Il consiglio ha letto circa otto volte i testi letti dalla revisione singola e ne ha scritti
cinque volte tanti: al prezzo a consumo, la differenza è di circa cinque a uno. Dentro un
abbonamento non si paga a parte, ma si consuma più in fretta il limite di messaggi. Conviene
per un lavoro che si riusa, come una verifica comune di dipartimento; per una verifica di una
classe basta la revisione singola, seguita dalla tua lettura.

::: warning Da verificare in Codex
La documentazione di Codex descrive sotto-agenti e agenti personalizzati per i piani Plus e
superiori ([sotto-agenti](https://learn.chatgpt.com/docs/agent-configuration/subagents),
consultata il 27 ottobre 2026). Non è ancora stato provato se l’app li lancia con il piano
della scuola, né quanto del limite consuma un consiglio.
:::

## Pubblicare

Un **repository** è una cartella sotto git che vive anche su GitHub, il servizio su cui hai
creato l’account. **GitHub Pages** pubblica come sito i file di un repository così come sono:
è un **hosting statico**, cioè un servizio che consegna pagine già pronte, senza eseguire
niente sul server. Le dispense che stai leggendo sono pubblicate così.

Una pagina statica può fare molto: una linea del tempo da riordinare, un glossario che si
interroga, un esercizio che si corregge da sé. Tutto succede nel browser di chi la apre. Serve
invece un **backend**, un programma che gira sul server, solo quando la pagina deve ricevere o
conservare dati di chi la usa: le risposte degli studenti, un punteggio da raccogliere, un
accesso con password. In quel caso la pagina tratta dati personali, e non è più un lavoro da
laboratorio.

Che cosa si pubblica e che cosa no:

- l’**archivio resta privato**: sul tuo portatile, o in un repository privato;
- la **pagina va in un repository pubblico separato**, che contiene solo lei;
- una pagina pubblicata con Pages è **pubblica anche se il repository è privato**
  ([documentazione di GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site),
  consultata il 29 ottobre 2026): niente dati di studenti, niente voti, niente materiali di cui
  non hai i diritti;
- con l’account gratuito, Pages funziona solo da repository pubblici; dai privati serve un
  piano a pagamento, o GitHub Team, che i docenti verificati possono ottenere con GitHub
  Education.

### La pagina interattiva

Invece di un testo, si può chiedere all’agente una pagina HTML interattiva su un argomento,
da usare con la classe. Karpathy ha proposto nell’ottobre 2026 di chiedere sempre più spesso
l’esito in forme come questa, più leggibili di un testo lungo. La richiesta della prova,
con la condizione di fine scritta dentro:

```text
Voglio pubblicare per la mia quarta una pagina interattiva sul 1789, ricavata da
testi/lezione-3-1789.md: una linea del tempo in cui lo studente mette in ordine gli
eventi e poi controlla. Scrivila in pubblica/index.html.
Il lavoro è finito quando:
- la pagina è un file solo, senza collegamenti a siti esterni, e funziona anche senza
  connessione;
- contiene solo eventi e date presenti nella lezione 3, scritte per esteso;
- c'è un pulsante «Controlla» che dice quanti eventi sono al posto giusto, e uno
  «Ricomincia»;
- si usa anche da telefono, senza scorrere in orizzontale;
- non contiene nomi di studenti, né il mio nome e cognome.
Prima di dirmi che hai finito, controlla ogni punto e dimmi come l'hai controllato.
```

In due minuti l’agente ha scritto un file di sei kilobyte, con sei eventi da riordinare con
due frecce e i due pulsanti. Per ogni punto ha detto come l’aveva controllato, e ha
dichiarato da solo il limite: «non l’ho mai aperta né fatta girare, quindi non so se
funziona». Aveva cercato nel testo del file i collegamenti esterni e i nomi, non aveva premuto
i pulsanti. Abbiamo aperto la pagina in un browser senza rete, alla larghezza di un telefono:
funzionava, senza scorrimento orizzontale e senza richieste verso l’esterno. Due difetti da
correggere a mano: «1 eventi su 6» e gli apostrofi dritti. Il controllo con il browser lo fai
tu.

## Che cosa resta in mano al docente

In tre incontri l’agente ha letto, scritto, convertito, controllato e pubblicato. Ci sono cose
che non ha fatto, e il criterio per sceglierle conviene dichiararlo: **non si delega ciò che
porta una firma**. Il voto e il giudizio, la comunicazione con la famiglia, la decisione su un
piano personalizzato, la scelta di che cosa conta come riuscito in una prova. L’agente può
preparare la griglia, la bozza, il confronto fra due versioni; la decisione resta tua, e resta
tua anche se il testo che firmi l’ha scritto lui.

Tre cose da sapere su costi, licenze e dati.

- **Costi.** Un abbonamento ha un limite di messaggi per finestra di tempo, non un costo per
  messaggio. I lavori che rileggono molto (un consiglio, un controllo su tutto l’archivio, una
  sessione lunga) consumano il limite più in fretta. La licenza del corso è della scuola: a
  fine corso vale quello che l’istituto deciderà.
- **Dati.** Tutto ciò che l’agente legge passa dai server del servizio che usi, compresi i file
  che apre per rispondere a una domanda. Per questo i dati degli studenti non entrano
  nell’archivio, e non solo nei prompt.
- **Formati aperti.** Un archivio in file Markdown, sul tuo portatile e sotto git, resta
  leggibile da qualunque programma e da qualunque agente. Se domani il servizio cambia prezzo,
  condizioni o modello, o un modello viene ritirato all’improvviso, cambi agente e l’archivio
  resta tuo. È la ragione di fondo per cui il corso ha cominciato convertendo i materiali in
  testo semplice.

## Laboratorio: l’archivio che si controlla e una pagina pubblicata

::: warning Procedura non ancora provata con Codex, pubblicazione non ancora eseguita
I passi delle due parti sono stati provati il 29 ottobre 2026 con Claude Code 2.1.312, fino a
`pubblica/index.html` compreso. La pubblicazione su GitHub segue la documentazione di GitHub
consultata il 29 ottobre 2026 e non è ancora stata eseguita; la prova con l’app Codex e la
licenza della scuola non è ancora stata fatta.
:::

**Parte A, l’archivio che si controlla da sé.** Copia nella radice dell’archivio
[`lezioni-apprese.md`](./modelli#lezioni-apprese) e scrivici a mano almeno due righe, prese
dagli errori della settimana, scritte come regole. Aggiungi in fondo ad `AGENTS.md` la sezione
«Lezioni apprese» riportata sopra. Copia la procedura
[controllo di coerenza](./modelli#controllo-di-coerenza) in `.agents/skills/` e chiedi, in una
conversazione nuova, «Mi fai un controllo dell’archivio?». Leggi il rapporto in `controlli/` e
verifica ogni segnalazione aprendo il file indicato; una segnalazione sbagliata diventa una riga
delle lezioni apprese. Scegli una sola correzione, falla o falla fare, e chiudi con un commit.

**Parte B, una pagina dal proprio archivio.**

1. Scegli un tuo materiale che diventi una pagina per la classe: una linea del tempo da
   ordinare, un glossario che si interroga, un esercizio che si corregge da sé. Niente dati di
   studenti, niente testi o immagini di cui non hai i diritti.
2. In una conversazione nuova chiedi: «Voglio pubblicare per la mia classe una pagina
   interattiva ricavata da `<file>`. Prima di cominciare intervistami, al massimo tre domande.
   Poi scrivi il piano con la condizione di fine». Controlla che la condizione contenga almeno
   i punti della richiesta della prova: un file solo senza collegamenti esterni, solo contenuti
   del tuo file, uso da telefono, nessun nome.
3. Approva il piano e chiedi di controllare ogni punto e dire come.
4. Apri `pubblica/index.html` nel browser, prova ogni pulsante, restringi la finestra alla
   larghezza di un telefono. Se qualcosa non va, chiedi la correzione con le parole della
   condizione di fine.
5. Pubblica. Su github.com, **+** › **New repository**, visibilità **Public**. Nella pagina del
   repository vuoto carica `index.html` con il collegamento per caricare un file esistente e
   conferma con **Commit changes**. Poi **Settings** › **Pages**: in *Build and deployment*,
   *Source* **Deploy from a branch**, ramo `main`, cartella `/ (root)`, **Save**. Dopo qualche
   minuto in cima alla stessa pagina compare l’indirizzo, nella forma
   `https://<nome-utente>.github.io/<nome-repository>/`.
6. Apri l’indirizzo dal telefono. Nell’archivio, un commit con la pagina e una riga nelle
   lezioni apprese per il punto della condizione di fine che non reggeva al primo tentativo.

## Dopo il corso

- Lancia il controllo di coerenza una volta al mese, e prima di pubblicare qualunque cosa.
- Rileggi `lezioni-apprese.md` ogni tanto: sposta in `AGENTS.md` le righe diventate stabili e
  togli quelle che non servono più.
- Quando esce un modello nuovo, prova a togliere da `AGENTS.md` le regole che servivano al
  vecchio: alcune non serviranno più.
- Per ogni lavoro che dura più di una sessione: intervista, piano, condizione di fine. Per ogni
  lavoro che si riusa in molte classi: un consiglio.
