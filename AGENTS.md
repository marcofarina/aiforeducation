# Dispense dei corsi AI per i docenti

Sito delle dispense dei corsi di formazione sull’intelligenza artificiale per i docenti
dell’I.I.S. J. C. Maxwell. È costruito con VitePress e pubblicato su GitHub Pages. Il sito è
anche un esempio del corso avanzato: chi lo legge deve poterlo capire e modificare.

## Dove sta che cosa

- `docs/` contiene le pagine, una per file Markdown. L’indirizzo di una pagina è il suo
  percorso: `docs/avanzato/incontro-1.md` diventa `/avanzato/incontro-1`.
- `docs/.vitepress/config.mts` contiene menu, barra laterale e impostazioni. Una pagina nuova
  va aggiunta anche alla barra laterale della sua sezione.
- `docs/.vitepress/theme/stile.css` contiene colori e caratteri (sistema Marginalia, registro
  accademico, lo stesso delle slide) e le regole per la stampa.
- `docs/avanzato/stampa.md` e `docs/intermedio/stampa.md` raccolgono i capitoli in una pagina
  per il PDF: un capitolo nuovo va incluso anche lì.

## Comandi

```sh
npm install         # una volta sola
npm run dev         # anteprima in locale con aggiornamento automatico
npm run build       # costruisce il sito in docs/.vitepress/dist
```

Ogni push su `main` ripubblica il sito con l’azione `.github/workflows/pages.yml`.

## Regole di scrittura

- Destinatari: docenti di ogni disciplina, non programmatori. Gli esempi vengono da lettere,
  lingue, storia, scienze, sostegno, diritto, con nomi e materiali di fantasia.
- Nessun dato personale di studenti o colleghi, nemmeno negli esempi.
- Tipografia italiana: virgolette « », apostrofo ’, trattino lungo —, puntini …; maiuscola solo
  alla prima parola nei titoli; numeri in lettere fino a dieci.
- Nessuna procedura entra nelle dispense se non è stata eseguita: accanto va la data della
  prova e la versione dell’app.
- Testi di terzi (corsi, post, articoli) si sintetizzano con parole proprie e si citano; non si
  riproducono.
- Nessuna risorsa caricata da server esterni (caratteri, script, immagini): tutto passa dalla
  build. I collegamenti verso altri siti vanno bene.

## Esempi d’ambito (corso intermedio)

Il corso intermedio ha quattro edizioni per ambito disciplinare con gli stessi capitoli. Ogni
punto in cui serve un esempio della disciplina è racchiuso fra due commenti HTML, invisibili
nella pagina:

```md
<!-- ESEMPIO:ambito inc1-gem -->
::: tip Esempio
Esempio neutro, valido per tutte le edizioni.
:::
<!-- /ESEMPIO -->
```

L’identificativo dopo `ESEMPIO:ambito` è unico nel sito e non cambia: le appendici d’ambito
danno un esempio per ogni identificativo. `grep -rn 'ESEMPIO:ambito' docs/intermedio/` li
elenca tutti.
