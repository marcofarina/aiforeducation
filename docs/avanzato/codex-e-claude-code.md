# Codex e Claude Code

Il corso lavora con Codex, ma il metodo vale anche per altri agenti. Questa tabella mette a
confronto i concetti del corso con il nome e il posto che hanno in Claude Code.

::: warning Da completare con le prove in Codex
Una voce segnata «doc.» viene dalla documentazione ufficiale e non è ancora stata provata; la
colonna «Provato il» riporta la data e la versione dell’app quando la prova c’è stata. Le prove
con l’app Codex e la licenza della scuola non sono ancora state fatte.
:::

| Concetto | Codex | Claude Code | Provato il |
|---|---|---|---|
| File di istruzioni del progetto | `AGENTS.md` nella cartella del progetto; uno globale in `~/.codex` (doc.) | `CLAUDE.md`; non legge `AGENTS.md` da solo, ma `CLAUDE.md` può importarlo con la riga `@AGENTS.md` (doc.) | Claude Code: il repository di queste dispense usa l’importazione, 29/10/2026 |
| Istruzioni annidate per cartella | Dalla radice del progetto alla cartella di lavoro, al massimo un file per cartella, fino a 32 KiB in tutto (doc.) | `CLAUDE.md` nelle sottocartelle, letti quando l’agente lavora lì (doc.) | — |
| Memorie scritte dall’agente | Memorie di Codex, spente per impostazione predefinita; Impostazioni › Personalizzazione (doc.) | Memoria automatica (doc.) | — |
| Procedure ripetibili (skill) | `SKILL.md` con `name` e `description`, in `.agents/skills/` nel progetto o nella cartella personale; scelte in base alla descrizione o chiamate con `$nome`; voce Skills nella barra laterale dell’app (doc.) | `SKILL.md` nello stesso formato, in `.claude/skills/`; non legge `.agents/skills/`, ma basta un collegamento fra le due cartelle | Claude Code: tre procedure partite senza essere nominate, `.agents/skills/` ignorata e collegamento funzionante, 29/10/2026, versione 2.1.312 |
| Modalità di approvazione e sandbox | Selettore dei permessi sotto il campo di scrittura; cartella non versionata in sola lettura, versionata con modifica dei file al suo interno; rete spenta (doc.) | Modalità di permesso: chiede prima di modificare, accetta le modifiche, solo piano, nessuna domanda; i comandi si autorizzano uno per uno | Claude Code: «accetta le modifiche» con e senza permesso di eseguire `pandoc`, 29/10/2026, versione 2.1.312 da riga di comando |
| Piano prima dell’esecuzione | Si chiede a parole («dimmi che cosa intendi fare, non modificare niente»); modalità piano da verificare | Modalità di permesso «solo piano», oppure a parole (doc.) | — |
| Ritorno a uno stato precedente | Git, chiesto a parole all’agente; pannello delle differenze e annullamento nell’app da verificare; su Windows git va installato a parte | Git, chiesto a parole; in più il riavvolgimento della conversazione con le modifiche (doc.) | Claude Code: primo commit, modifica su tre file, differenza e ripristino con git chiesti a parole, 29/10/2026, versione 2.1.312 |
| Riassunto del contesto | Comando `/compact`, documentato per la riga di comando e per l’estensione degli editor; nell’app da verificare | Comando `/compact`, anche con l’indicazione di che cosa tenere (doc.) | — |
| Scelta del modello e dello sforzo | Selettori del modello e dello sforzo nell’app (doc.) | Comando `/model`; sforzo regolabile a parte (doc.) | — |
| Connettori (MCP) | Impostazioni › MCP servers nell’app, oppure `config.toml`, condiviso con la riga di comando; se i connettori di ChatGPT valgono anche in Codex non è documentato (doc.) | File `.mcp.json` nel progetto o comando `claude mcp add`; ogni strumento del connettore si autorizza o si vieta a parte | Claude Code: connettore a una cartella del dipartimento con i soli strumenti di lettura, 29/10/2026, versione 2.1.312 |
| Domande a scelta durante il lavoro | L’agente le scrive come testo nella conversazione; se l’app le mostra come pulsanti è da verificare | Le scrive come testo, oppure con uno strumento di domande a scelta (doc.) | Claude Code: intervista di otto domande con opzioni e scelta consigliata, scritte come testo, 29/10/2026, versione 2.1.312 da riga di comando |
| Lavoro ripreso in una sessione nuova | Un file di piano con la sezione dello stato, letto a parole («continua il lavoro su…») | Lo stesso | Claude Code: piano scritto in una sessione, eseguito in altre due ripartendo dallo stato, 29/10/2026, versione 2.1.312 |
| Obiettivo con condizione di fine | Comando `/goal`; disponibilità nell’app riportata solo da fonti secondarie (doc.) | Comando `/goal`, con un secondo modello che giudica la condizione (doc.) | — (il corso usa la condizione scritta nel piano) |
| Sotto-agenti | Sotto-agenti e agenti personalizzati in `.codex/agents/`, su Plus e piani superiori (doc.) | Sotto-agenti lanciati dall’agente principale, anche in parallelo | Claude Code: tre revisori in parallelo per la revisione a più voci, 29/10/2026, versione 2.1.312 |
| Pubblicare su GitHub | Da verificare: se l’app pubblica con git e come si autentica su GitHub | Con git, chiesto a parole, se sul computer git è collegato a GitHub (doc.) | — (nel laboratorio la pagina si carica dal browser) |
