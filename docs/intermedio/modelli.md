# Modelli pronti

Testi da copiare e adattare alla propria disciplina. Ogni modello indica in quale incontro si
usa. Le parti fra parentesi quadre si sostituiscono; il resto si può tenere o togliere.

## Istruzioni di un Gem

Incontro 1. Le quattro parti del Gem, con le domande a cui ciascuna risponde.

```text
COMPITO
Prepari [che cosa] per [quale classe, quale disciplina] a partire da [quale materiale].

CONTESTO
[Che cosa sanno già gli studenti. Quale manuale o quali materiali usano. Quale lessico è
quello giusto. Che cosa è già stato fatto in classe.]

FORMATO
[Quante parti, in che ordine, quanto lunghe. Sezioni fisse dell'output. Dove vanno le
soluzioni.]

LIMITI
Non introdurre contenuti che non compaiono nel materiale di partenza o nei file allegati.
[Altro che il Gem non deve fare.]
Se il materiale non basta per svolgere il compito, fermati e dimmi che cosa manca.
```

<!-- ESEMPIO:ambito modello-gem -->
::: tip Esempio di compito
Prepari esercizi di ripasso per una classe terza a partire da un materiale che ti incollo o ti
indico.
:::
<!-- /ESEMPIO -->

## Scheda di prova di un Gem

Incontro 1. Da compilare durante le tre prove.

| Prova | Materiale usato | Formato rispettato? | Registro giusto? | Contenuti inventati? | Correzione da fare |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

## Domande di controllo per un taccuino

Incontro 2. Da porre a un taccuino appena costruito, prima di usarlo.

1. Tre domande di cui conosci già la risposta: le citazioni portano al passo giusto?
2. Una domanda a cui le fonti non possono rispondere: il taccuino lo dice o inventa?
3. Una domanda che richiede di mettere insieme due fonti: le combina correttamente?

<!-- ESEMPIO:ambito modello-taccuino -->
::: tip Esempio di domanda che mette insieme due fonti
Dove il capitolo del manuale e l’articolo di approfondimento spiegano in modo diverso lo stesso
concetto?
:::
<!-- /ESEMPIO -->

## Istruzione di sistema

Incontro 2. Struttura per AI Studio, da applicare allo stesso modo a input diversi.

```text
Sei [ruolo] per [quale classe, quale disciplina].

Ricevi [che cosa riceve a ogni richiesta, in che forma].

Per ogni input restituisci:
1. [prima parte dell'output, con il formato]
2. [seconda parte]
3. [terza parte]

Regole:
- [notazione, lessico, convenzioni da rispettare]
- Non [che cosa non fa].
- Se l'input non basta per rispondere, scrivi «serve il docente» e spiega perché.
```

Temperatura consigliata: bassa per correggere, classificare e applicare una griglia; più alta
per generare varianti ed esempi.

## Descrizione di un’applicazione web

Incontro 2. Struttura della richiesta ad AI Studio per una pagina interattiva.

```text
Costruisci una pagina web per [quale classe].

Che cosa fa lo studente: [l'azione, passo per passo].
Che cosa vede dopo ogni azione: [il riscontro].
Che cosa vede alla fine: [il riepilogo].

Contenuti: usa solo [il materiale allegato o incollato].
Niente registrazione, niente dati degli studenti salvati o inviati.
Testo in italiano, caratteri leggibili, funziona anche da telefono.
```

<!-- ESEMPIO:ambito modello-app-web -->
::: tip Esempio di azione
Lo studente legge un’affermazione sull’argomento e decide se è vera o falsa.
:::
<!-- /ESEMPIO -->

## Scheda per la libreria condivisa

Incontro 3. Accompagna ogni strumento versato nella libreria d’istituto.

```text
Nome:
Che cosa fa (una riga):
Per quale classe e disciplina:
Strumento: Gem | taccuino NotebookLM | istruzione di sistema AI Studio | app web
Dove si trova (collegamento):
Che cosa va sempre controllato nel risultato:
Autore e anno scolastico:
```
