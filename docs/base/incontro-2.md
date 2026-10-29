# Incontro 2 — Produrre materiale

Il secondo incontro è dedicato al lavoro che un assistente fa meglio per un docente: preparare
una prima versione di un materiale che poi si corregge. Il punto non è scrivere il prompt
perfetto al primo colpo, ma condurre una conversazione che porta il testo dove serve.

## Il dialogo come metodo

Una conversazione con un assistente è una revisione a più mani. La prima risposta è una bozza;
le successive la migliorano se dici con precisione che cosa non va. Tre mosse coprono quasi
tutti i casi.

**Correggere il tiro.** Indica il problema e la direzione, non solo il giudizio. «Non va bene»
non aiuta; «troppo lungo, e usa termini che in prima non hanno ancora visto: togli
*cloroplasto* e *ATP*» sì.

**Chiedere alternative.** Quando una parte non convince, chiedi più versioni e scegli: «dammi tre
attacchi diversi per questa spiegazione, uno con una domanda, uno con un esempio quotidiano, uno
con un dato sorprendente».

**Far criticare il testo al modello.** Chiedi di rileggere il proprio testo da un punto di vista
preciso: «rileggi la spiegazione come la leggerebbe uno studente di quattordici anni: quali
passaggi non capirebbe?». Il modello trova spesso problemi reali nel proprio testo, purché il
punto di vista sia definito.

Quando la conversazione si allunga e il modello comincia a perdere le indicazioni date
all’inizio, chiedi un riassunto dei punti fermi, aprine una nuova e incollalo come primo
messaggio.

## Gli schemi della prosa generata

Il testo generato ha alcune abitudini ricorrenti. Conoscerle serve a rivedere i propri
materiali prima di consegnarli: un testo che ne è pieno suona generico, e gli studenti se ne
accorgono.

- **L’apertura che ripete la domanda**: «La fotosintesi è un processo fondamentale e affascinante
  che…».
- **Le terne**: tre aggettivi, tre esempi, tre motivi, anche quando ne basterebbe uno.
- **L’elenco al posto del ragionamento**: punti separati dove servirebbe spiegare come un fatto
  porta all’altro.
- **La chiusura che riassume**: «In conclusione, la fotosintesi è…» subito dopo averla spiegata.
- **Le frasi a effetto senza contenuto**: «un viaggio affascinante», «un mondo tutto da
  scoprire», «non è solo X, è anche Y».
- **Il grassetto ovunque**, che non fa più distinguere ciò che conta.
- **La cautela di maniera**: «è importante notare che», «va sottolineato come».

La lista serve per i *tuoi* materiali, non per giudicare i compiti degli studenti. Gli stessi
schemi compaiono nella prosa scritta da persone, e nessuno strumento sa dire con affidabilità se
un testo è stato generato: un sospetto basato sullo stile non è una prova.

## Testi per la didattica

Quattro compiti ricorrenti, con il prompt corrispondente nella [libreria](./prompt).

**Lo stesso concetto a due livelli.** Chiedi due versioni nella stessa risposta, una per chi
incontra l’argomento per la prima volta e una per chi deve approfondirlo, con la stessa
struttura: è più facile confrontarle e usarle insieme nella stessa classe.

**Esercizi.** Dichiara quanti, di che tipo, in che ordine di difficoltà, e chiedi le soluzioni
separate. Controlla sempre le soluzioni: nei calcoli e nei problemi a più passaggi gli errori
sono frequenti.

**Griglie di valutazione.** Dichiara i criteri che contano per te e il numero di livelli; il
modello scrive i descrittori. Una griglia generata va letta con attenzione, perché tende a
descrittori vaghi («adeguato», «parzialmente adeguato»): chiedi che ogni livello descriva che
cosa si vede nel lavoro dello studente.

**Comunicazioni alle famiglie.** Dichiara il registro (cordiale ma formale), le informazioni
obbligatorie (data, orario, costo, scadenze) e la lunghezza. Scrivi tu i dati: il modello non sa
quando parte la gita, e se non glielo dici li inventa.

## Adattare invece di riscrivere

Spesso il materiale esiste già e va solo adattato. Tre operazioni:

- **semplificare**: frasi più brevi, lessico di base, un concetto per paragrafo;
- **cambiare registro**: da testo di manuale a scheda per lo studente, da relazione a
  comunicazione;
- **ridurre la densità**: meno informazioni per pagina, più spazio, esempi al posto delle
  definizioni.

Dopo ogni adattamento, confronta il testo con l’originale. La semplificazione toglie spesso
proprio l’informazione che serviva, e lo fa senza segnalarlo.

### Un testo per provare

Il testo seguente è scritto per l’esercizio. Prova a semplificarlo per una classe prima, poi a
trasformarlo in una scheda con cinque domande, e confronta le due versioni con l’originale.

> Il ciclo dell’acqua descrive il movimento continuo dell’acqua tra l’atmosfera, la superficie
> terrestre e il sottosuolo. L’energia del Sole riscalda gli oceani, i laghi e il suolo, e una
> parte dell’acqua passa allo stato di vapore per evaporazione; anche le piante cedono vapore
> all’atmosfera attraverso la traspirazione. Salendo, il vapore si raffredda e condensa in
> minuscole goccioline che formano le nuvole. Quando le goccioline si uniscono e diventano
> abbastanza pesanti, ricadono al suolo come precipitazioni: pioggia, neve o grandine. Una parte
> dell’acqua scorre in superficie e raggiunge fiumi e mari, un’altra si infiltra nel terreno e
> alimenta le falde, da cui può riemergere nelle sorgenti anche dopo molti anni. La quantità
> totale d’acqua sulla Terra resta quasi costante: cambia lo stato in cui si trova e il luogo in
> cui si accumula.

## Immagini generate

I generatori di immagini lavorano con lo stesso principio dei modelli linguistici: producono
l’immagine più plausibile per la descrizione ricevuta. Un prompt visivo efficace dichiara:

- il **soggetto**, con i dettagli che contano;
- lo **stile**: illustrazione, acquerello, fotografia, disegno al tratto;
- l’**inquadratura**: primo piano, vista dall’alto, sezione;
- che cosa **escludere**: testo, persone, sfondi affollati.

Dove funzionano bene: illustrazioni per aprire una lezione, ambientazioni storiche o letterarie
da discutere, immagini per una presentazione. Dove falliscono, e conviene saperlo prima:

- **il testo dentro l’immagine**: scritte, etichette, didascalie escono spesso storpiate;
- **gli schemi con le etichette**: un ciclo cellulare o una mappa con nomi sono quasi sempre
  sbagliati nei dettagli;
- **la coerenza fra immagini della stessa serie**: lo stesso personaggio cambia volto e vestiti da
  un’immagine all’altra;
- **le persone reali e i fatti storici precisi**: l’immagine è verosimile, non documentaria, e va
  dichiarata come generata.

Per uno schema con le etichette resta più affidabile un disegno fatto con gli strumenti di
Documenti o Presentazioni, magari partendo da un’immagine generata senza testo.

## Laboratorio: un materiale per la classe

1. Decidi che cosa vuoi ottenere e per quale classe, e scrivilo in una riga in cima a un nuovo
   documento.
2. Scegli nella [libreria](./prompt) il prompt più vicino al tuo compito e completa tutte le parti
   fra parentesi quadre.
3. Se parti da un tuo materiale, incollalo o allegalo. Prima controlla che non contenga nomi,
   voti o altri dati di studenti.
4. Conduci almeno tre turni di revisione con le tre mosse: correggere il tiro, chiedere
   un’alternativa, far criticare il testo dal punto di vista di uno studente della tua classe.
5. Copia la versione migliore nel documento e rivedila con la lista degli schemi qui sopra.
6. Controlla ogni dato, data, definizione e soluzione. Ciò che non sai verificare, toglilo.
7. In fondo al documento annota il prompt finale: la prossima volta riparti da lì.

## Prima del prossimo incontro

Prova il materiale in classe, o almeno fallo leggere a un collega, e annota che cosa ha
funzionato e che cosa no. All’incontro 3 si parte da lì.
