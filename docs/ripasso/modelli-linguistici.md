# I modelli linguistici

Un modello linguistico di grandi dimensioni (LLM, *large language model*) è un sistema
addestrato su enormi raccolte di testi per prevedere il pezzo successivo di una sequenza. Da
questa capacità elementare discendono comportamenti che sembrano molto più ricchi: seguire
istruzioni, adattarsi a un formato, riassumere, tradurre, spiegare. La risposta non viene
recuperata da un archivio: viene generata un pezzo alla volta, in base a quello che il modello
ha davanti in quel momento.

## Il meccanismo, in breve

I modelli attuali si basano sul *transformer*, un’architettura il cui cuore è il meccanismo di
attenzione: mentre elabora un pezzo di testo, il modello pesa le parti più rilevanti di quello
che ha già letto e le usa per scegliere come continuare. Non serve conoscerne la matematica per
usarlo bene; serve sapere che il modello lavora sul testo che gli viene dato e su niente
altro.

## Token e finestra di contesto

Il modello non legge caratteri ma *token*: parole intere, pezzi di parola, segni di
punteggiatura. La lunghezza di una richiesta e di una risposta si misura in token, e le parole
lunghe o rare, i termini tecnici e le lingue diverse dall’inglese ne consumano di più.

La finestra di contesto è la quantità massima di token che il modello considera insieme:
istruzioni, conversazione, documenti allegati e la risposta che sta scrivendo. Quello che
esce dalla finestra, per il modello, non esiste. È la ragione per cui una conversazione molto
lunga perde i dettagli dell’inizio, e il corso avanzato ci torna parlando del contesto come
risorsa finita.

## Allucinazioni

Un’allucinazione è una risposta plausibile ma falsa o non sostenuta da fonti. Non è un guasto
occasionale: discende dal modo in cui il modello genera testo. Quando il contesto non contiene
l’informazione richiesta, il modello tende comunque a completare la frase nel modo più
verosimile. Le forme più comuni sono fatti inventati, citazioni e riferimenti bibliografici
inesistenti, contraddizioni fra parti della stessa risposta.

Le difese stanno su tre livelli: istruzioni che autorizzano il modello a dire che non sa e
chiedono un formato controllabile, per esempio la fonte di ogni affermazione; fonti fornite
dall’utente, da cui il modello attinge invece di ricordare; e la verifica umana, che resta
indispensabile.

## Glossario

| Termine | Significato |
|---|---|
| Token | L’unità di testo con cui il modello legge e scrive. |
| Finestra di contesto | Quanti token il modello considera insieme, fra ingresso e uscita. |
| Prompt | La richiesta rivolta al modello. |
| Temperatura | Il parametro che regola quanto la risposta è prevedibile o varia. |
| Allucinazione | Una risposta plausibile ma falsa o non sostenuta da fonti. |
| Multimodalità | La capacità di trattare, oltre al testo, immagini, audio e altri segnali. |
| RAG (*retrieval-augmented generation*) | La tecnica che recupera documenti pertinenti e li mette nel contesto prima di generare la risposta. |
