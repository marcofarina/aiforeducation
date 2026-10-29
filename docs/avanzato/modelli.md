# Modelli pronti

File da copiare nel proprio archivio e adattare alla propria disciplina. Ogni modello indica
in quale incontro si usa.

::: info In preparazione
I modelli compaiono qui man mano che i capitoli degli incontri vengono scritti. Per ora ci
sono quelli del primo e del secondo incontro.
:::

| Modello | Che cosa serve | Incontro |
|---|---|---|
| File di istruzioni di partenza | Il primo AGENTS.md dell’archivio, da sfoltire a mano | 1 |
| Procedura: intervista prima del piano | L’agente fa domande una alla volta prima di cominciare | 1, 3 |
| Procedura: domande di comprensione | Domande su tre livelli e soluzioni in un file separato | 2 |
| Procedura: adattare un testo | Una lezione riscritta a un livello linguistico più semplice, con glossario | 2 |
| Procedura: revisione della prosa | Un elenco di difetti da evitare che cresce a ogni correzione | 2 |
| Scheda «dove va una regola» | Distinguere ciò che si scrive in un file da ciò che si impone | 2 |
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
[Codex e Claude Code](./codex-e-claude-code)). Le tre procedure qui sotto sono state provate il
29 ottobre 2026 con Claude Code 2.1.312 sulle lezioni di storia della demo: sono partite tutte
e tre da una richiesta che non le nominava. Si usano nell’[incontro 2](./incontro-2#le-procedure-ripetibili).
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
