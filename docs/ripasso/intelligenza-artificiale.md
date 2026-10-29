# Che cos’è l’intelligenza artificiale

Con intelligenza artificiale (AI) si indica l’insieme di metodi e strumenti che consentono a un
sistema informatico di svolgere compiti per cui, di solito, servirebbe un essere umano:
comprendere e generare linguaggio, riconoscere immagini o suoni, prendere decisioni sotto
vincoli, apprendere dagli esempi. È un campo di studio, non un singolo programma, e si valuta
per quello che fa: che cosa produce e quanto è adatto al compito e al contesto in cui lo si
usa.

## Alcune tappe

La storia dell’AI alterna slanci e ripensamenti.

- **1936–1950.** Alan Turing formalizza la macchina universale (1936) e propone un criterio
  pratico per giudicare il comportamento intelligente di una macchina (1950), noto come «test
  di Turing».
- **1943–1957.** McCulloch e Pitts descrivono un neurone artificiale (1943); il convegno di
  Dartmouth fonda la disciplina (1956); il percettrone impara semplici classificazioni dagli
  esempi (1957).
- **Anni ’60–’80.** I limiti teorici e pratici producono fasi di rallentamento, gli «inverni
  dell’AI». Intanto si diffondono i sistemi esperti, fondati su regole scritte a mano ed
  efficaci in domini ristretti.
- **1997.** Deep Blue batte Garry Kasparov a scacchi: in un compito chiuso e ben definito una
  macchina supera il miglior giocatore umano.
- **2012–2017.** Le reti neurali profonde superano ogni altro metodo nel riconoscimento delle
  immagini; nel 2017 un’architettura nuova, il *transformer*, cambia il modo di trattare il
  testo.
- **Dal 2018.** I modelli generativi entrano nell’uso quotidiano: assistenti, traduttori,
  strumenti di sintesi e di scrittura.

## Famiglie di metodi

- **Regole scritte a mano.** I sistemi esperti applicano regole esplicite a una base di
  conoscenza. Si può seguire il loro ragionamento passo per passo, ma diventano ingestibili
  quando le regole crescono di numero o cambiano spesso.
- **Apprendimento automatico** (*machine learning*). Invece di scrivere le regole, si
  forniscono esempi da cui il sistema ricava gli schemi utili per classificare o prevedere. Il
  risultato dipende dalla qualità e dalla rappresentatività degli esempi. Si distinguono
  l’apprendimento supervisionato (esempi con la risposta giusta), non supervisionato (esempi
  senza risposta, in cui si cercano regolarità) e per rinforzo (un premio o una penalità a ogni
  tentativo).
- **Apprendimento profondo** (*deep learning*). È apprendimento automatico con reti neurali a
  molti strati: i primi colgono tratti elementari, i successivi li combinano in strutture più
  complesse. Funziona bene su immagini, audio e testo, ma richiede molti dati e molta potenza di
  calcolo, ed è difficile ricostruire perché abbia preso una certa decisione.
- **AI generativa.** Modelli che producono contenuti nuovi (testi, immagini, audio, video)
  coerenti con i dati su cui sono stati addestrati. L’uscita non è un’etichetta ma una bozza da
  valutare.

## Come nasce un sistema

Quasi ogni sistema moderno segue la stessa sequenza: si definisce il compito e si scelgono i
dati; si preparano i dati, pulendoli e anonimizzandoli dove serve; si addestra il modello; lo
si valuta su dati che non ha mai visto, per controllare che generalizzi invece di ricordare a
memoria; infine lo si usa su dati nuovi (l’*inferenza*) e lo si tiene sotto controllo, perché
il contesto cambia.

## Punti di forza e limiti

Un sistema di AI rende quando ha dati affidabili, un obiettivo chiaro e vincoli ben definiti:
lavora in fretta su grandi quantità e trova regolarità che a occhio sfuggono. I limiti
dipendono dalle stesse premesse. La qualità del risultato non supera quella dei dati; molti
modelli sono scatole nere, di cui si vede l’uscita ma non il percorso; i modelli generativi
producono a volte contenuti plausibili e falsi, le *allucinazioni*; addestramento e uso hanno
costi economici ed energetici e sollevano questioni di riservatezza e di diritto d’autore.

Due semplificazioni da evitare. L’AI non sostituisce in blocco una professione complessa: ne
automatizza i compiti più ripetitivi e sposta il valore sulla progettazione, sul giudizio e
sulla responsabilità. E usarla non è di per sé scorretto: contano le regole d’uso, la
trasparenza e la capacità di verificare e argomentare il risultato.

## Glossario

| Termine | Significato |
|---|---|
| Addestramento | La fase in cui il sistema ricava schemi dagli esempi. |
| Inferenza | L’uso del sistema già addestrato su dati nuovi. |
| *Overfitting* | Il modello ricorda gli esempi invece di generalizzare. |
| *Bias* | Una distorsione nei dati o nel modello che sbilancia i risultati in modo sistematico. |
| Spiegabilità | Quanto si riesce a ricostruire e comunicare il perché di una decisione del sistema. |

## Per approfondire

- Ministero dell’Istruzione e del Merito, *Linee guida per l’introduzione dell’intelligenza
  artificiale nelle istituzioni scolastiche* (2025).
- Ray Kurzweil, *How to Create a Mind* (2012), divulgazione sulle architetture ispirate al
  cervello.
