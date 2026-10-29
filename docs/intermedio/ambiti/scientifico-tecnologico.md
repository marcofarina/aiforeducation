# Edizione scientifico-tecnologica

Appendice per matematica, fisica, scienze, informatica e discipline d’indirizzo. Raccoglie gli
esempi d’ambito che nei capitoli comuni compaiono in forma neutra, il laboratorio del terzo
incontro e una libreria di prompt per i compiti che tornano ogni settimana. Ogni sezione
corrisponde a un punto dei capitoli, che rimanda qui.

<!--
Ogni esempio è racchiuso in una regione con l’identificativo del marcatore ESEMPIO:ambito
del capitolo comune: vedi «Esempi d’ambito» in AGENTS.md.
-->

Il filo dell’edizione è il problema con la sua soluzione. Gran parte del lavoro di un docente
di queste discipline consiste nel preparare esercizi, varianti, verifiche e tracce di
laboratorio, e nel controllare procedimenti. I modelli linguistici aiutano molto a produrre
varianti e a impaginare soluzioni; sbagliano in un modo che va conosciuto prima di fidarsi,
perché scrivono un procedimento corretto con un numero sbagliato.

## Che cosa portare

- Dispense ed eserciziari, in formato digitale quando esiste.
- Tre o quattro problemi già usati in classe, con la soluzione svolta da te.
- Verifiche degli anni passati con le soluzioni.
- Per informatica e discipline d’indirizzo: la documentazione della versione del linguaggio, del
  dispositivo o del software che usate in laboratorio, e una traccia di esercitazione.
- Le convenzioni del dipartimento: notazione, unità di misura, cifre significative, formato
  della soluzione.

## Incontro 1

### Chat o file {#inc1-chat-o-file}

<!-- #region inc1-chat-o-file -->
::: tip Esempio scientifico-tecnologico
Nella chat vuota: «Prepara cinque esercizi sul moto uniformemente accelerato.» Il modello
scrive esercizi corretti ma qualunque, con simboli e unità che possono non coincidere con
quelli della classe.

Nel pannello laterale, con aperta la dispensa usata in classe: la stessa richiesta produce
esercizi che usano la notazione della dispensa, partono dagli esempi già svolti e arrivano fino
al punto del programma a cui la classe è arrivata.
:::
<!-- #endregion inc1-chat-o-file -->

### Le tre operazioni {#inc1-tre-operazioni}

<!-- #region inc1-tre-operazioni -->
::: tip Esempio scientifico-tecnologico
- Interrogare: «In questa verifica di chimica, quali obiettivi della programmazione allegata
  non sono valutati da nessun esercizio? Quali esercizi richiedono un calcolo e quali solo la
  conoscenza di una definizione?»
- Trasformare: «Da questa traccia di laboratorio sulla legge di Ohm ricava una scheda per lo
  studente con la tabella dei dati da compilare, le domande prima della misura e quelle dopo.»
- Confrontare: «Metti a confronto le due verifiche di geometria analitica: quali argomenti
  compaiono in una sola, e quale delle due richiede più passaggi di calcolo?»
:::
<!-- #endregion inc1-tre-operazioni -->

### Un Gem per la disciplina {#inc1-gem}

<!-- #region inc1-gem -->
::: tip Esempio scientifico-tecnologico: il Gem «varianti di un problema»
**Compito.** Dato un problema con la sua soluzione svolta, produci varianti dello stesso
problema per una classe seconda, cambiando i dati e lasciando invariato il metodo.

**Contesto.** Gli studenti usano la notazione della dispensa allegata. Le grandezze si scrivono
in unità del Sistema internazionale; i risultati si danno con il numero di cifre significative
dei dati.

**Formato.** Per ogni variante: testo del problema, dati in elenco, soluzione svolta passo per
passo con le unità in ogni passaggio, risultato finale evidenziato. Le soluzioni stanno in una
sezione separata alla fine.

**Limiti.** I dati di ogni variante devono essere coerenti fra loro: se due dati si possono
ricavare l’uno dall’altro, controlla che il risultato torni. Non cambiare il metodo risolutivo.
Se il problema di partenza non ha una soluzione svolta, chiedila prima di cominciare.

File di riferimento: la dispensa con la notazione in uso e un problema già svolto dal docente.
:::

Lo stesso schema regge un Gem «correttore di procedimenti», che riceve la soluzione di uno
studente e indica in quale passaggio la catena si interrompe, prima di guardare il risultato.
<!-- #endregion inc1-gem -->

## Incontro 2

### Un taccuino {#inc2-taccuino}

<!-- #region inc2-taccuino -->
::: tip Esempio scientifico-tecnologico
Un taccuino per il laboratorio di informatica: la documentazione della versione del linguaggio
installata sulle postazioni, la dispensa del corso, le tracce delle esercitazioni dell’anno.
Domande che il taccuino regge bene: «questa funzione esiste nella versione che usiamo?»,
«quali esercitazioni richiedono già i cicli annidati?», «dove la dispensa e la documentazione
descrivono in modo diverso lo stesso comando?». Le risposte si ancorano alla versione in uso,
non a quella che il modello ricorda.

Un secondo uso, per qualunque disciplina: un taccuino con gli eserciziari e le verifiche degli
anni passati, per ritrovare i problemi già assegnati su un argomento ed evitare di riproporli.
:::
<!-- #endregion inc2-taccuino -->

### Un’istruzione di sistema {#inc2-istruzione-sistema}

<!-- #region inc2-istruzione-sistema -->
::: tip Esempio scientifico-tecnologico: soluzioni con le convenzioni del dipartimento
> Sei un assistente per la stesura delle soluzioni di problemi di fisica per una classe terza.
> Ricevi il testo di un problema. Restituisci: l’elenco dei dati con simbolo, valore e unità;
> la grandezza richiesta; la soluzione in passaggi numerati, ciascuno con la formula, la
> sostituzione dei valori e le unità; il risultato con il numero di cifre significative del dato
> meno preciso. Usa le unità del Sistema internazionale e la virgola come separatore decimale.
> Non saltare passaggi. Se i dati sono incoerenti o insufficienti, scrivi «serve il docente» e
> indica quale dato manca o non torna.

Con temperatura bassa la forma delle soluzioni resta la stessa su problemi diversi. I risultati
numerici vanno comunque ricalcolati: la temperatura bassa rende le risposte simili fra loro,
non le rende corrette.
:::
<!-- #endregion inc2-istruzione-sistema -->

### Un’applicazione web {#inc2-app-web}

<!-- #region inc2-app-web -->
::: tip Esempio scientifico-tecnologico
«Costruisci una pagina web per studenti di terza. Mostra la traiettoria di un proiettile
lanciato da terra. Lo studente regola con due cursori la velocità iniziale, da 5 a 30 m/s, e
l’angolo di lancio, da 10 a 80 gradi. La pagina disegna la traiettoria e mostra gittata e
altezza massima, con g = 9,81 m/s² e senza attrito. Un pulsante lascia la traiettoria
precedente sullo sfondo per confrontarla con la nuova. Niente registrazione, niente dati
salvati.»

Prima di darla alla classe si controlla un caso noto: a 10 m/s e 45 gradi la gittata deve
risultare di circa 10,2 m. Se il numero non torna, l’errore è nella formula che la pagina usa,
e va corretto chiedendo la modifica.
:::
<!-- #endregion inc2-app-web -->

## Incontro 3

### Il laboratorio: una batteria di problemi {#inc3-laboratorio}

<!-- #region inc3-laboratorio -->
::: tip Laboratorio dell’edizione scientifico-tecnologica
Ciascun partecipante costruisce **una batteria di problemi con le soluzioni** per una propria
classe:

1. carica in un taccuino, o allega a un Gem, tre problemi già usati con la tua soluzione svolta
   e la dispensa con la notazione in uso;
2. scrive un’istruzione di sistema riusabile che impone notazione, unità, cifre significative e
   formato della soluzione;
3. ricava dodici varianti, le fa risolvere e produce la versione per lo studente e quella per il
   docente;
4. ricalcola con il proprio metodo almeno un risultato per ogni problema di partenza, e controlla
   per ogni variante che i dati siano coerenti fra loro.

Esce con la batteria pronta e con l’istruzione di sistema riutilizzabile.
:::
<!-- #endregion inc3-laboratorio -->

### L’errore tipico: il procedimento giusto con il numero sbagliato {#inc3-avvertenza}

<!-- #region inc3-avvertenza -->
::: warning L’errore tipico dell’ambito
Sui calcoli il modello sbaglia in modo subdolo: il procedimento è corretto, le formule sono
quelle giuste, e il numero finale no. Un fattore ½ si perde nella sostituzione, una potenza di
dieci scivola, un’unità cambia a metà. Nelle varianti c’è un secondo errore, più difficile da
vedere: dati che non stanno insieme, per esempio un’accelerazione, un tempo e una velocità
finale che non rispettano la relazione fra loro. Il problema sembra normale, e chi lo risolve
trova due risultati diversi a seconda dei dati che usa.

Ogni risultato che finisce in una verifica va ricalcolato. Va detto il primo giorno, perché la
fiducia nasce dai primi tre esempi riusciti.
:::
<!-- #endregion inc3-avvertenza -->

## Modelli d’ambito

Esempi per i [modelli pronti](/intermedio/modelli) del corso.

### Compito di un Gem {#modello-gem}

<!-- #region modello-gem -->
::: tip Esempio scientifico-tecnologico di compito
Prepari varianti di un problema di fisica per una classe seconda a partire da un problema con
la soluzione svolta che ti incollo.
:::
<!-- #endregion modello-gem -->

### Domanda che mette insieme due fonti {#modello-taccuino}

<!-- #region modello-taccuino -->
::: tip Esempio scientifico-tecnologico di domanda
In quali punti la dispensa del corso usa simboli o unità diversi da quelli del manuale, e per
quali grandezze?
:::
<!-- #endregion modello-taccuino -->

### Azione dello studente in un’applicazione web {#modello-app-web}

<!-- #region modello-app-web -->
::: tip Esempio scientifico-tecnologico di azione
Lo studente sposta un cursore che cambia un parametro, per esempio la resistenza di un circuito,
e osserva come cambiano le altre grandezze, prima di scrivere la relazione che le lega.
:::
<!-- #endregion modello-app-web -->

## Libreria di prompt

Prompt per i compiti ricorrenti della disciplina, da usare nel pannello laterale con il file
aperto, in un Gem o come punto di partenza di un’istruzione di sistema. Le parti fra parentesi
quadre si sostituiscono.

**Varianti con dati coerenti.**

```text
Dal problema allegato ricava [numero] varianti con dati diversi e lo stesso metodo. Per ogni
variante verifica che i dati siano coerenti fra loro e scrivi la verifica in una riga. Soluzioni
svolte in una sezione separata.
```

**Esercizi graduati.**

```text
Sull’argomento [argomento] prepara per una classe [classe] sei esercizi in ordine di difficoltà:
due di applicazione diretta, due che richiedono di combinare due formule, due di ragionamento
senza calcolo. Usa la notazione della dispensa allegata.
```

**Scheda di laboratorio.**

```text
Dalla traccia di esperienza allegata ricava la scheda per lo studente: obiettivo, materiali,
procedura in passi numerati, tabella dei dati con le unità, tre domande da fare prima della
misura e tre dopo. Non aggiungere passaggi che non sono nella traccia.
```

**Errori frequenti.**

```text
Sull’argomento [argomento], elenca gli errori di procedimento più comuni negli studenti di
[classe]. Per ciascuno scrivi un breve esercizio costruito apposta per farlo emergere, e la
spiegazione da dare in classe.
```

**Commento a un programma.**

```text
Il programma allegato è scritto in [linguaggio, versione]. Spiegalo a uno studente di
[classe], riga per riga, senza modificarlo. Segnala le istruzioni che non esistono nella
versione indicata.
```

**Ricalcolo indipendente.**

```text
Risolvi di nuovo il problema allegato senza guardare la soluzione proposta, poi confronta i due
risultati passaggio per passaggio e indica il primo punto in cui divergono.
```

L’ultimo prompt aiuta a trovare un errore, ma non sostituisce il ricalcolo del docente: due
soluzioni del modello possono sbagliare nello stesso modo.
