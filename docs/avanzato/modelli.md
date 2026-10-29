# Modelli pronti

File da copiare nel proprio archivio e adattare alla propria disciplina. Ogni modello indica
in quale incontro si usa.

| Modello | Che cosa serve | Incontro |
|---|---|---|
| File di istruzioni di partenza | Il primo AGENTS.md dell’archivio, da sfoltire a mano | 1 |
| Procedura: intervista prima del piano | L’agente fa domande una alla volta prima di cominciare | 1, 3 |
| Procedura: domande di comprensione | Domande su tre livelli e soluzioni in un file separato | 2 |
| Procedura: adattare un testo | Una lezione riscritta a un livello linguistico più semplice, con glossario | 2 |
| Procedura: revisione della prosa | Un elenco di difetti da evitare che cresce a ogni correzione | 2 |
| Scheda «dove va una regola» | Distinguere ciò che si scrive in un file da ciò che si impone | 2 |
| Procedura: controllo di coerenza | Un rapporto su che cosa non torna nell’archivio, senza correzioni | 3 |
| File delle lezioni apprese | Una riga per ogni cosa imparata, riletta prima di ogni lavoro | 3 |
| Scheda della condizione di fine | Esempi controllabili e vaghi a confronto | 3 |
| Traccia per la revisione a più voci | Ruoli dei revisori, contraddittorio, sintesi | 3 |

## File di istruzioni di partenza

Si copia nella radice della cartella dell’archivio con il nome `AGENTS.md` e si sostituiscono
le parti fra parentesi quadre. È pensato per un docente di materia non tecnica e resta sotto
le trenta righe: ogni regola che aggiungi dovrebbe cambiare il risultato in un modo che puoi
controllare. Il modo migliore per adattarlo è l’intervista qui sotto, seguita da una
sfoltitura a mano. Si usa nell’[incontro 1](./incontro-1#il-file-di-istruzioni-agents-md).

```markdown
# Archivio di [nome e cognome], [disciplina]

Insegno [disciplina] all’I.I.S. J. C. Maxwell, nelle classi [prime, terze…] di [indirizzo].
Questa cartella contiene i miei materiali didattici: lezioni, verifiche, schede, griglie.

## Com’è fatta la cartella

- `originali/`: i file come li ho scritti io (Word, PDF, presentazioni). Non si modificano.
- `testi/`: le versioni in Markdown degli originali, con lo stesso nome. Si lavora su queste.
- Un file per argomento; il nome comincia con la classe: `3-[argomento].md`.

## Come scrivere

- Italiano, registro adatto a studenti di [età] anni; frasi brevi, niente gergo non spiegato.
- Ogni scheda o verifica comincia con classe, argomento e durata prevista.
- [Una regola della tua disciplina: per esempio, «le date sempre per esteso», «le citazioni
  sempre con autore e opera», «le formule sempre con unità di misura».]

## Che cosa non fare mai

- Non inserire nomi, voti o informazioni su studenti reali, nemmeno come esempio.
- Non modificare né cancellare i file in `originali/`.
- Non inventare fonti, date o citazioni: se un dato non è nei miei file, scrivi «da
  verificare».

## Quando un lavoro è finito

- Elenca i file che hai creato o modificato.
- Dimmi che cosa non sei riuscito a fare e perché.
- Segnala ciò che devo controllare io prima di usarlo in classe.
```

## Intervista per il primo file di istruzioni

Da incollare in una conversazione nuova sulla cartella dell’archivio. È la prima forma
dell’intervista prima del piano, che nel terzo incontro diventa una procedura.

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

## Procedure ripetibili

Ogni procedura è una cartella con dentro un file `SKILL.md`. Si copia in `.agents/skills/`
nella radice dell’archivio per Codex, in `.claude/skills/` per Claude Code (vedi
[Codex e Claude Code](./codex-e-claude-code)). Le prime tre procedure qui sotto sono state provate il
29 ottobre 2026 con Claude Code 2.1.312 sulle lezioni di storia della demo: sono partite tutte
e tre da una richiesta che non le nominava. Si usano nell’[incontro 2](./incontro-2#le-procedure-ripetibili);
le ultime due nell’[incontro 3](./incontro-3).
Prima di adottarne una, sostituisci gli esempi con i tuoi e togli quello che non ti serve.

### Domande di comprensione

`.agents/skills/domande-di-comprensione/SKILL.md`. La riga sull’opzione corretta che
riformula il testo è stata aggiunta dopo la prima prova, in cui una risposta giusta ripeteva
parola per parola la lezione.

````markdown
---
name: domande-di-comprensione
description: Prepara una batteria di domande di comprensione, con le soluzioni in un file separato, a partire da un testo dell’archivio (lettura, lezione, brano d’antologia). Usala quando il docente chiede domande, esercizi o una verifica di comprensione su un testo preciso.
---

# Domande di comprensione su un testo

Procedura per passare da un testo a una batteria di domande di comprensione pronta per la
classe, con le soluzioni a parte.

## Prima di cominciare

- Il testo di partenza è un file della cartella: se il docente non dice quale, chiediglielo.
- Se il docente non indica classe e numero di domande, ricavali dall’intestazione del testo;
  se non ci sono, chiedili con una sola domanda.
- Lavora solo sul contenuto del testo. Non aggiungere informazioni che il testo non contiene.

## Le domande

Prepara dieci domande, salvo indicazione diversa, divise in tre livelli e in quest’ordine:

1. **Informazioni esplicite** (quattro domande): la risposta si trova scritta nel testo.
2. **Inferenze** (quattro domande): la risposta richiede di collegare due punti del testo o
   di ricavare qualcosa che non è detto in modo diretto.
3. **Valutazione e lessico** (due domande): il significato di una parola nel contesto, lo
   scopo di un passaggio, un giudizio motivato a partire dal testo.

Regole per ogni domanda:

- una sola richiesta per domanda, formulata in modo che si possa rispondere in due o tre righe;
- almeno tre domande a scelta multipla con quattro opzioni, una sola corretta, e distrattori
  plausibili ricavati dal testo; l’opzione corretta riformula il testo con parole diverse,
  perché un’opzione copiata alla lettera si riconosce senza aver capito;
- nessuna domanda a cui si può rispondere senza aver letto il testo;
- accanto a ogni domanda, fra parentesi, il paragrafo del testo a cui si riferisce.

## I file da scrivere

- `domande/<nome-del-testo>-domande.md`: intestazione con classe, testo di partenza e tempo
  previsto, poi le domande numerate, divise per livello. Nessuna soluzione in questo file.
- `domande/<nome-del-testo>-soluzioni.md`: per ogni domanda la risposta attesa e il passo del
  testo che la giustifica, citato fra virgolette; per le domande aperte, che cosa deve
  contenere una risposta sufficiente.

Non modificare il testo di partenza.

## Prima di dire che hai finito

Controlla, e scrivi nel messaggio finale l’esito di ogni punto:

- le domande sono quante richieste e i livelli sono nell’ordine giusto;
- ogni soluzione cita un passo che esiste davvero nel testo (rileggilo, non andare a memoria);
- nessuna soluzione compare nel file delle domande.

Se un controllo non passa, correggi i file prima di rispondere.
````

### Adattare un testo

`.agents/skills/adattare-un-testo/SKILL.md`. La regola sul glossario e l’ultimo controllo
sono stati aggiunti dopo la prima prova: la prima riuscita correggeva il glossario, la
seconda non ha eliminato un’osservazione sbagliata sull’originale (vedi
[Come sbaglia un agente](./incontro-2#come-sbaglia-un-agente)).

````markdown
---
name: adattare-un-testo
description: Riscrive un testo dell’archivio a un livello linguistico più semplice (per esempio A2 o B1 per studenti con italiano come seconda lingua, o per un piano didattico personalizzato) senza togliere i contenuti essenziali. Usala quando il docente chiede di semplificare, facilitare o adattare un testo o una lezione.
---

# Adattare un testo a un livello linguistico diverso

Procedura per riscrivere un testo in una versione più accessibile, che conservi i contenuti
che la classe deve imparare.

## Prima di cominciare

- Servono il file di partenza e il livello di arrivo (A2, B1 o una descrizione del bisogno).
  Se manca uno dei due, chiedilo con una sola domanda.
- Leggi tutto il testo e fai l’elenco dei **contenuti essenziali**: fatti, date, nomi,
  concetti e termini di disciplina che compaiono negli obiettivi o nel lessico del testo.
  Questi devono esserci anche nella versione adattata.

## Come riscrivere

- Frasi brevi, di norma una sola informazione per frase, soggetto espresso.
- Ordine cronologico o logico esplicito; connettivi semplici (prima, poi, perché, quindi).
- Presente e passato prossimo dove il livello lo richiede; niente congiuntivi per A2.
- Parole di uso comune; i **termini di disciplina restano**, in grassetto alla prima
  occorrenza, e vanno nel glossario.
- Titoletti brevi ogni tre o quattro frasi.
- Niente esempi, aneddoti o informazioni che il testo originale non contiene.

## Il file da scrivere

`adattati/<nome-del-testo>-<livello>.md`, con:

1. un’intestazione: testo di partenza, livello, data;
2. il testo adattato;
3. un glossario dei termini in grassetto, una riga ciascuno, con una definizione semplice
   che spiega che cosa è il termine, non quando compare nel testo. Se il testo di partenza
   non basta a definirlo, scrivi una definizione breve di uso scolastico e segnala la voce
   con «(definizione aggiunta, da verificare)»;
4. in fondo, sotto il titolo «Per il docente», l’elenco dei contenuti essenziali con
   accanto, per ciascuno, il paragrafo del testo adattato in cui compare, e l’elenco di
   ciò che hai tolto.

Non modificare il testo di partenza.

## Prima di dire che hai finito

- Ogni contenuto essenziale compare nel testo adattato: controllalo voce per voce.
- Date, nomi e numeri sono identici a quelli dell’originale.
- Il testo adattato non contiene informazioni assenti dall’originale, a parte le
  definizioni del glossario segnalate come aggiunte.
- Se segnali che l’originale è incompleto o tagliato, cita la riga esatta in cui si
  interrompe: rileggila nel file prima di scriverlo.

Nel messaggio finale riporta l’esito dei tre controlli e quello che il docente deve
rileggere prima di usare il testo in classe.
````

### Revisione della prosa

`.agents/skills/revisione-della-prosa/SKILL.md`, con accanto `difetti.md`. L’elenco di
partenza ha cinque voci: aggiungi le tue, e lascia che l’agente aggiunga quelle che segnali
mentre lavora.

````markdown
---
name: revisione-della-prosa
description: Rivede un testo scritto dal docente o generato dall’agente (consegna, circolare, scheda, comunicazione alle famiglie) cercando i difetti elencati in difetti.md, e aggiunge all’elenco ogni nuovo difetto che il docente segnala. Usala quando il docente chiede di rivedere, rileggere o correggere la prosa di un file.
---

# Revisione della prosa con un elenco di difetti che cresce

Procedura per rivedere un testo contro un elenco di difetti da evitare, scritto dal docente.
L’elenco sta in `difetti.md`, nella stessa cartella di questo file, e cresce a ogni
correzione.

## Come lavorare

1. Leggi `difetti.md` per intero prima del testo da rivedere.
2. Leggi il testo e segna ogni punto in cui compare uno dei difetti dell’elenco.
3. Correggi il testo nel file, cambiando solo i punti segnati. Non riscrivere ciò che non
   contiene difetti dell’elenco, anche se lo scriveresti in un altro modo.
4. Nel messaggio finale fai una tabella: riga del testo, difetto (con il suo numero in
   `difetti.md`), prima, dopo.

## Quando il docente segnala un difetto nuovo

Se il docente corregge qualcosa che l’elenco non prevede, o dice «questo non mi piace»:

1. riformula il difetto come regola generale, in una riga, con un esempio breve di
   prima e dopo;
2. aggiungila in fondo a `difetti.md` con il numero successivo;
3. mostra al docente la riga aggiunta.

Non togliere né riscrivere le voci già presenti: le cambia solo il docente.
````

`.agents/skills/revisione-della-prosa/difetti.md`:

```markdown
# Difetti da evitare

Elenco del docente. Una riga per difetto, con un esempio. Le voci si aggiungono in fondo.

1. **Frasi che si aprono con una premessa inutile.** «È importante sottolineare che la
   verifica è lunedì» → «La verifica è lunedì».
2. **Tre aggettivi dove ne basta uno.** «Un percorso ricco, stimolante e coinvolgente» →
   «Un percorso stimolante», o meglio quello che il percorso fa.
3. **Burocratese.** «Si provvederà a effettuare la consegna» → «Consegneremo».
4. **Elenchi per tutto.** Tre frasi collegate non diventano tre punti elenco.
5. **Domande retoriche in apertura.** «Vi siete mai chiesti perché…?» → si dice subito il
   perché.
```

### Trasformare un lavoro in una procedura

Da incollare alla fine di una conversazione in cui l’agente ha svolto il compito e tu lo hai
corretto fino al risultato giusto. Poi si legge il file e si sfoltisce.

```text
Trasforma quello che abbiamo appena fatto in una procedura ripetibile, comprese le
correzioni che ti ho chiesto. Scrivila in .agents/skills/<nome-breve>/SKILL.md, con
in cima name e description. La descrizione deve dire che cosa fa la procedura e
quando usarla, con le parole che userei io per chiederla. Alla fine della procedura
metti i controlli che devi superare prima di dire che hai finito. Non modificare
nient’altro.
```

### Intervista prima del piano

`.agents/skills/intervista-prima-del-piano/SKILL.md`. Nella prova del 29 ottobre 2026 non è
partita da sola alla richiesta «Mi prepari una verifica sulle lezioni 3 e 4?»; è partita
aggiungendo «Prima di cominciare intervistami». Per i lavori ampi conviene chiederla così. Si
usa nell’[incontro 3](./incontro-3#l-intervista-prima-del-piano).

````markdown
---
name: intervista-prima-del-piano
description: Prima di un lavoro lungo o che tocca più file (una verifica, un’unità didattica, una pagina da pubblicare, il riordino di una cartella), intervista il docente con una domanda alla volta finché obiettivo, vincoli e condizione di fine sono chiari, poi scrive il piano in un file. Usala quando il docente chiede di preparare, progettare o organizzare qualcosa di ampio, o dice «intervistami prima».
---

# Intervista prima del piano

Procedura per non cominciare un lavoro ampio da una richiesta vaga. Le scelte che spettano al
docente (classe, durata, che cosa conta come riuscito) si chiedono prima, non si indovinano.

## Prima delle domande

- Leggi `AGENTS.md`, `lezioni-apprese.md` se c’è, e i file che il lavoro riguarda.
- Non chiedere ciò che trovi scritto nei file: classe, durata, argomenti già svolti. Se
  un’informazione c’è, dilla nella domanda successiva perché il docente la confermi.

## L’intervista

1. Fai **una domanda per messaggio** e aspetta la risposta. Quando la domanda ha poche
   risposte possibili, proponile come scelta (a, b, c) e indica quella che consiglieresti.
2. Copri, in quest’ordine e solo se non è già chiaro:
   - lo scopo: per chi è il lavoro e che cosa deve permettere di fare;
   - i vincoli: tempi, formato, materiali da usare e da non usare;
   - i casi limite: chi resta fuori (assenti, studenti con piano personalizzato), che cosa
     succede se un materiale manca;
   - la condizione di fine: come capiremo che il lavoro è finito, in termini che si possono
     controllare guardando i file.
3. Al massimo otto domande. Se dopo otto restano dubbi, scrivili nel piano come «da
   decidere».
4. Non cominciare il lavoro durante l’intervista, nemmeno in parte.

## Il piano

Scrivi `piani/<nome-breve>.md` con queste sezioni:

- **Obiettivo**, in due righe.
- **Decisioni prese**, una riga per risposta del docente.
- **Fasi**, numerate: per ognuna che cosa si fa e quali file produce. Una fase deve poter
  finire in una sessione.
- **Condizione di fine**, come elenco di controlli: ciascuno si verifica guardando un file
  o contando qualcosa (vedi gli esempi in fondo).
- **Stato**, che all’inizio dice «Nessuna fase svolta». Chi lavora a una fase lo aggiorna
  alla fine: che cosa è stato fatto, che cosa resta, la prossima azione.

Poi mostra il piano al docente e fermati. Il lavoro comincia solo quando il docente lo
approva, di solito in una sessione nuova che parte dalla sezione Stato.

## Prima di dire che hai finito

- Il piano è in `piani/` e ha tutte e cinque le sezioni.
- Ogni controllo della condizione di fine si verifica guardando un file, non con un giudizio
  («chiara», «adeguata», «ben fatta» non sono controlli).
- Nessun file fuori da `piani/` è stato creato o modificato.

## Esempi di controlli

| Vago | Controllabile |
|---|---|
| La verifica è completa | La verifica ha una domanda per ogni obiettivo delle lezioni 3 e 4 |
| Le soluzioni sono corrette | Ogni soluzione cita la riga della lezione da cui si ricava |
| La durata è adeguata | Il totale dei tempi indicati per domanda non supera i 50 minuti |
| La pagina funziona | La pagina si apre senza connessione e ogni pulsante mostra un testo |
````

### Controllo di coerenza

`.agents/skills/controllo-di-coerenza/SKILL.md`. Nella prova è partita senza essere nominata,
alla richiesta «Mi fai un controllo dell’archivio?», e ha trovato collegamenti rotti, schede
senza intestazione e una regola di `AGENTS.md` che nessun file rispettava. Si usa
nell’[incontro 3](./incontro-3#come-si-mantiene).

````markdown
---
name: controllo-di-coerenza
description: Controlla che l’archivio sia coerente con sé stesso (indice, collegamenti, nomi dei file, regole di AGENTS.md, note rimaste aperte) e scrive un rapporto senza correggere niente. Usala quando il docente chiede un controllo, una visita, una pulizia o un riordino dell’archivio, o vuole sapere che cosa non torna.
---

# Controllo di coerenza dell’archivio

Procedura per una visita periodica dell’archivio, per esempio una volta al mese o prima di
pubblicarne una parte. Il controllo **segnala, non corregge**: ogni correzione la decide il
docente dopo aver letto il rapporto.

## Che cosa controllare

1. **Indice.** Ogni file elencato in `indice.md` esiste, al percorso indicato; ogni file di
   `testi/` e di `ripasso/` compare nell’indice.
2. **Collegamenti.** Ogni collegamento interno nei file Markdown porta a un file che esiste.
3. **Corrispondenze.** Ogni file di `originali/` ha la sua versione in `testi/`, con lo
   stesso nome; ogni scheda di `ripasso/` corrisponde a una lezione di `testi/`.
4. **Regole di `AGENTS.md`.** Per ogni regola che si può controllare guardando i file (nomi
   dei file, intestazioni, date, dati personali), elenca i file che non la rispettano.
5. **Note aperte.** Le frasi come «da verificare», «da aggiungere», «da sistemare»: dove sono
   e da quanto, se il file lo dice.
6. **Affermazioni dell’indice o delle note.** Se l’indice o una nota dice qualcosa di un
   file («la lezione 4 è incompleta», «l’elenco si interrompe»), riapri il file e controlla
   che sia vero, citando la riga.

## Il rapporto

Scrivi `controlli/<anno>-<mese>-<giorno>.md` con una tabella per ogni punto: file, che cosa
non torna, riga o percorso esatto. In fondo, al massimo cinque proposte di correzione in
ordine di importanza, ciascuna con il file da cambiare. Se un punto non ha problemi, scrivi
«nessun problema» e quanti file hai controllato.

## Prima di dire che hai finito

- Nessun file fuori da `controlli/` è stato creato o modificato.
- Ogni problema segnalato ha il percorso del file e, quando c’è, il numero di riga.
- Ogni affermazione del tipo «il file è tagliato» o «manca una parte» cita la riga esatta,
  dopo averla riletta.
- Il messaggio finale dice quanti file sono stati controllati per ciascun punto.
````

## Scheda: dove va una regola

Per ogni regola che ti trovi a ripetere all’agente, tre domande nell’ordine:

1. **Se l’agente la dimentica una volta, perdo qualcosa che non recupero?** Allora non si
   chiede, si impone: un permesso più stretto, una cartella che l’agente non può modificare,
   un commit prima di ogni compito ampio.
2. **Vale per ogni lavoro su questa cartella?** Allora va in `AGENTS.md`, in una riga sola,
   scritta in modo che si possa controllare nel risultato.
3. **Vale per un compito preciso?** Allora va nella procedura di quel compito, fra i passi o
   fra i controlli finali.

| Regola | Dove va |
|---|---|
| Gli originali non si modificano | Imposta: permessi e commit; ripetuta in `AGENTS.md` come promemoria |
| Le date sempre per esteso | `AGENTS.md` |
| Niente dati di studenti | `AGENTS.md`, e prima ancora non metterli nella cartella |
| Le soluzioni in un file separato dalle domande | Procedura delle domande di comprensione |
| Nessun congiuntivo nei testi per il livello A2 | Procedura di adattamento |
| «In data» si scrive «il» | `difetti.md` della revisione della prosa |

## Lezioni apprese

Il file `lezioni-apprese.md` va nella radice dell’archivio, accanto ad `AGENTS.md`. Si comincia
con due o tre righe scritte a mano, prese dagli errori che l’agente ha già fatto; poi le
aggiunge l’agente alla fine di ogni lavoro. Si usa nell’[incontro 3](./incontro-3#come-si-mantiene).

````markdown
# Lezioni apprese

Una riga per ogni cosa imparata lavorando su questo archivio, scritta come regola che vale
anche la prossima volta. Le aggiunge l’agente alla fine di ogni lavoro, le controlla e le
sfoltisce il docente. Si leggono prima di cominciare un lavoro nuovo.

| Data | Lavoro | Che cosa abbiamo imparato |
|---|---|---|
| [giorno mese anno] | [il lavoro appena chiuso] | [la regola, in una riga: che cosa fare o evitare la prossima volta] |
````

La sezione da aggiungere in fondo ad `AGENTS.md`, perché l’agente lo legga e lo aggiorni:

```markdown
## Lezioni apprese

- Prima di cominciare un lavoro leggi `lezioni-apprese.md`.
- Alla fine di un lavoro aggiungi in fondo a `lezioni-apprese.md` una riga per ogni cosa che
  ti ho corretto o che hai scoperto e che vale anche la prossima volta. Se non c’è niente da
  aggiungere, dillo nel messaggio finale.
```

## Scheda: la condizione di fine

Prima di affidare a un agente un lavoro lungo si scrive che cosa vuol dire «finito», in
termini che si possono controllare guardando i file. Serve tre volte: all’agente, che sa
quando fermarsi; al docente, che sa che cosa guardare; alla sessione successiva, che sa da
dove ripartire.

### Tre domande per scrivere un controllo

1. **Si vede in un file?** «La verifica è chiara» non si vede; «ogni domanda ha il tempo
   previsto accanto» sì.
2. **Si conta o si cerca?** I controlli migliori hanno un numero («una domanda per ogni
   obiettivo», «al massimo 50 minuti in tutto») o una parola da cercare («“Varennes” non
   compare»).
3. **Lo controllerebbe allo stesso modo un collega?** Se due persone possono dare risposte
   diverse, è un giudizio, non un controllo: va bene averlo, ma fra le cose che restano al
   docente.

### Vaghi e controllabili a confronto

| Lavoro | Vago | Controllabile |
|---|---|---|
| Verifica | È completa | Ha almeno una domanda per ciascun obiettivo delle lezioni indicate |
| Verifica | Le soluzioni sono giuste | Ogni soluzione cita la frase della lezione da cui si ricava |
| Verifica | La durata va bene | La somma dei tempi per domanda non supera i 50 minuti |
| Versione semplificata | È più facile | Ha meno domande; ognuna corrisponde a una della versione per la classe; nessuna consegna supera le venti parole |
| Riordino dell’archivio | L’archivio è in ordine | Ogni file di `testi/` compare in `indice.md` e ogni collegamento dell’indice porta a un file che esiste |
| Schede di ripasso | Sono fatte bene | Una scheda per ogni lezione; ognuna comincia con classe, argomento e durata |
| Pagina da pubblicare | Funziona | È un file solo, senza collegamenti a siti esterni; i pulsanti «Controlla» e «Ricomincia» rispondono; a 360 pixel di larghezza non si scorre in orizzontale |
| Pagina da pubblicare | È sicura | Non contiene nomi di studenti né il nome del docente |
| Qualunque lavoro | Non hai toccato niente di importante | `git status` non elenca file in `originali/` |

### Che cosa l’agente deve dire alla fine

Una condizione di fine funziona solo se l’agente dice, per ogni controllo, **come** l’ha
verificato. Da aggiungere alla richiesta:

```text
Prima di dirmi che hai finito, controlla ogni punto della condizione di fine e dimmi come
l’hai controllato. Se un punto non sei riuscito a controllarlo, dillo.
```

Un controllo «fatto a occhio» o «nel codice, ma senza aprirlo» non è un controllo fatto: è un
punto che resta da verificare, al docente o in una sessione successiva.

### Che cosa non entra nella condizione di fine

Il giudizio didattico: se la verifica è adatta alla classe, se la pagina interessa, se il
tono è quello giusto. Resta al docente, che lo esercita meglio quando i controlli meccanici
li ha già fatti l’agente.

## Traccia per la revisione a più voci

Il «consiglio» sottopone lo stesso lavoro a più revisori con ruoli diversi, che non si
vedono fra loro; poi ognuno giudica le osservazioni degli altri, e alla fine una sintesi
decide che cosa accogliere. L’idea viene dall’*LLM Council* di Andrej Karpathy, dove i
revisori sono modelli di famiglie diverse; qui la diversità viene dai ruoli e dal fatto che
ogni revisore parte da zero, senza aver visto come il lavoro è nato.

Serve per i lavori che contano e che si riusano: una verifica comune di dipartimento, una
scheda che va a tutte le classi, una pagina da pubblicare. Per una scheda di ripasso basta
una rilettura.

### I tre revisori per una verifica

Si adattano al lavoro da rivedere. Ogni revisore ha **un mandato solo** e lo dichiara: se
nel suo campo non trova niente, scrive «nessuna osservazione».

**Lo studente.** Sei uno studente della classe che conosce solo le lezioni indicate. Leggi
la verifica dall’inizio alla fine come se dovessi svolgerla. Segnala il punto esatto in cui
non capisci che cosa ti si chiede, ogni parola che non è nelle lezioni, ogni domanda a cui
si risponde senza aver studiato (per esempio perché l’opzione giusta si riconosce dalla
forma), ogni domanda che richiede qualcosa che le lezioni non dicono. Non usi conoscenze
tue per colmare i buchi.

**Il collega di materia.** Sei un docente della stessa disciplina. Controlli la
correttezza: ogni domanda e ogni soluzione corrispondono al testo delle lezioni, ogni
opzione sbagliata è davvero sbagliata, le domande coprono gli obiettivi dichiarati, la
griglia permette di distinguere una risposta sufficiente da una buona. Non ti occupi di
stile.

**Il revisore dell’accessibilità.** Controlli che la verifica sia equa e leggibile: consegne
di una frase sola dove possibile, una richiesta per domanda, tempi realistici, nessuna
doppia negazione, impaginazione che non confonde. Se c’è una versione per studenti con
piano personalizzato, controlli che verifichi gli stessi obiettivi e non solo che sia più
corta.

### Il formato delle osservazioni

Uguale per tutti i revisori, così la sintesi si può fare:

```text
- id: S1                (iniziale del ruolo e numero)
  gravità: bloccante | importante | minore
  dove: domanda o riga
  problema: una frase
  proposta: la correzione, con il testo pronto quando si può
```

In fondo, tre righe di giudizio complessivo. Niente lodi, niente riscritture intere.

### Le tre fasi

1. **Revisione cieca.** Ogni revisore legge solo il lavoro, le fonti indicate e il proprio
   mandato. Non sa chi sono gli altri.
2. **Contraddittorio.** Si raccolgono tutte le osservazioni, si tolgono il ruolo e l’id e si
   rinumerano in ordine sparso (O1, O2…). Ogni revisore riceve quelle **degli altri** e per
   ciascuna risponde solo «fondata», «infondata» con il motivo in una frase, o «doppione
   di O__». In questa fase non si aggiungono osservazioni nuove.
3. **Sintesi.** Chi conduce il lavoro decide osservazione per osservazione: accolta se la
   maggioranza la ritiene fondata o se regge nel merito; respinta, con il motivo scritto, se
   la maggioranza la ritiene infondata o se il contesto che solo il docente conosce la
   smentisce. Le osservazioni che cambiano le scelte del docente (togliere un argomento,
   cambiare il tipo di prova) non si applicano: si propongono.

### Con un agente che ha i sotto-agenti

Codex e Claude Code possono lanciare **sotto-agenti**: sessioni separate, ognuna con il suo
contesto, che restituiscono solo il risultato. Sono il modo naturale di fare la revisione
cieca. Da incollare in una conversazione nuova sulla cartella dell’archivio:

```text
Voglio una revisione a più voci di testi/<file da rivedere>, con le fonti in
testi/<lezioni>. Segui la traccia in modelli/consiglio.md (oppure: i tre revisori, il
formato e le tre fasi che ti incollo qui sotto).
1. Lancia tre sotto-agenti, uno per revisore, in parallelo. Ciascuno riceve solo il
   suo mandato, il formato delle osservazioni e i percorsi del file e delle fonti. Non
   devono modificare nessun file.
2. Raccogli le osservazioni, anonimizzale e rinumerale in ordine sparso. Manda a ogni
   revisore quelle degli altri due e chiedi il giudizio secco.
3. Fai la sintesi e scrivi revisioni/<nome-del-file>.md con la tabella: osservazione,
   chi l'ha fatta, giudizi, decisione, motivo di ogni respinta.
Non modificare il file rivisto: le correzioni le decido io dopo aver letto la sintesi.
```

Se l’agente non riesce a mandare messaggi ai sotto-agenti già lanciati, la fase 2 si fa
lanciando tre sotto-agenti nuovi, ciascuno con le osservazioni degli altri.

### A mano, su più chat

Senza sotto-agenti si fa lo stesso con tre conversazioni nuove nella chat dell’assistente,
una per revisore, più quella di partenza.

1. In ogni conversazione nuova incolla il mandato di un revisore, il formato delle
   osservazioni e il testo del lavoro con le fonti.
2. Copia le osservazioni dei tre in un documento, togli i nomi dei ruoli e rinumerale.
3. In ognuna delle tre conversazioni incolla le osservazioni degli altri due e chiedi il
   giudizio secco.
4. La sintesi la fai tu, oppure la chiedi in una quarta conversazione incollando tutto.

È più lento, ma ha un vantaggio: si possono usare assistenti diversi (ChatGPT, Gemini,
Claude), che è la versione originale dell’idea.

### Quanto costa

Ogni revisore riparte da zero e rilegge tutto, e nel contraddittorio rilegge le
osservazioni degli altri. Con tre revisori una revisione a più voci consuma diverse volte
una revisione singola: dentro un abbonamento non si paga a parte, ma si consuma più in
fretta il limite di messaggi della finestra di cinque ore. Vale la pena per un lavoro che si
riusa; per uno che si usa una volta, no. I numeri della prova sono nel [capitolo 3](./incontro-3#quanto-rende-e-quanto-costa).
