# Codex e Claude Code

Il corso lavora con Codex, ma il metodo vale anche per altri agenti. Questa tabella mette a
confronto i concetti del corso con il nome e il posto che hanno in Claude Code.

::: warning In compilazione
La tabella si riempie un incontro alla volta. Una voce segnata «doc.» viene dalla
documentazione ufficiale e non è ancora stata provata; la colonna «Provato il» riporta la data
e la versione dell’app quando la prova c’è stata. Una cella vuota riguarda un incontro non
ancora scritto.
:::

| Concetto | Codex | Claude Code | Provato il |
|---|---|---|---|
| File di istruzioni del progetto | `AGENTS.md` nella cartella del progetto; uno globale in `~/.codex` (doc.) | `CLAUDE.md`; non legge `AGENTS.md` da solo, ma `CLAUDE.md` può importarlo con la riga `@AGENTS.md` (doc.) | Claude Code: il repository di queste dispense usa l’importazione, 29/10/2026 |
| Istruzioni annidate per cartella | Dalla radice del progetto alla cartella di lavoro, al massimo un file per cartella, fino a 32 KiB in tutto (doc.) | `CLAUDE.md` nelle sottocartelle, letti quando l’agente lavora lì (doc.) | — |
| Memorie scritte dall’agente | Memorie di Codex, spente per impostazione predefinita; Impostazioni › Personalizzazione (doc.) | Memoria automatica (doc.) | — |
| Procedure ripetibili (skill) | | | |
| Modalità di approvazione e sandbox | Selettore dei permessi sotto il campo di scrittura; cartella non versionata in sola lettura, versionata con modifica dei file al suo interno; rete spenta (doc.) | Modalità di permesso: chiede prima di modificare, accetta le modifiche, solo piano, nessuna domanda; i comandi si autorizzano uno per uno | Claude Code: «accetta le modifiche» con e senza permesso di eseguire `pandoc`, 29/10/2026, versione 2.1.312 da riga di comando |
| Piano prima dell’esecuzione | | | |
| Ritorno a uno stato precedente | | | |
| Riassunto del contesto | Comando `/compact`, documentato per la riga di comando e per l’estensione degli editor; nell’app da verificare | Comando `/compact`, anche con l’indicazione di che cosa tenere (doc.) | — |
| Scelta del modello e dello sforzo | Selettori del modello e dello sforzo nell’app (doc.) | Comando `/model`; sforzo regolabile a parte (doc.) | — |
| Connettori (MCP) | | | |
