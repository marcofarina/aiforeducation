import { defineConfig } from 'vitepress'

// Il sito si pubblica su GitHub Pages sotto /aiforeducation/.
// Per un dominio proprio basta lanciare la build con BASE=/
const base = process.env.BASE ?? '/aiforeducation/'

export default defineConfig({
  lang: 'it-IT',
  title: 'AI for Education',
  description: 'Dispense dei corsi di formazione sull’intelligenza artificiale per i docenti dell’I.I.S. J. C. Maxwell',
  base,
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Ripasso', link: '/ripasso/' },
      { text: 'Base', link: '/base/' },
      { text: 'Intermedio', link: '/intermedio/' },
      { text: 'Avanzato', link: '/avanzato/' }
    ],

    sidebar: {
      '/ripasso/': [
        {
          text: 'Ripasso',
          items: [
            { text: 'Introduzione', link: '/ripasso/' },
            { text: 'Che cos’è l’intelligenza artificiale', link: '/ripasso/intelligenza-artificiale' },
            { text: 'I modelli linguistici', link: '/ripasso/modelli-linguistici' },
            { text: 'Prima dell’avanzato', link: '/ripasso/prima-dell-avanzato' }
          ]
        }
      ],
      '/intermedio/': [
        {
          text: 'Corso intermedio',
          items: [
            { text: 'Il corso', link: '/intermedio/' },
            { text: '1 · Gemini dentro il lavoro', link: '/intermedio/incontro-1' },
            { text: '2 · Le proprie fonti', link: '/intermedio/incontro-2' },
            { text: '3 · Laboratorio d’ambito', link: '/intermedio/incontro-3' }
          ]
        },
        {
          text: 'Edizioni',
          items: [
            { text: 'Umanistica', link: '/intermedio/ambiti/umanistico' },
            { text: 'Scientifico-tecnologica', link: '/intermedio/ambiti/scientifico-tecnologico' },
            { text: 'Economico-giuridica', link: '/intermedio/ambiti/economico-giuridico' },
            { text: 'Inclusione', link: '/intermedio/ambiti/inclusione' }
          ]
        },
        {
          text: 'Strumenti',
          items: [
            { text: 'Modelli pronti', link: '/intermedio/modelli' },
            { text: 'Versione da stampare', link: '/intermedio/stampa' },
            {
              text: 'Da stampare per edizione',
              collapsed: true,
              items: [
                { text: 'Umanistica', link: '/intermedio/stampa-umanistico' },
                { text: 'Scientifico-tecnologica', link: '/intermedio/stampa-scientifico-tecnologico' },
                { text: 'Economico-giuridica', link: '/intermedio/stampa-economico-giuridico' },
                { text: 'Inclusione', link: '/intermedio/stampa-inclusione' }
              ]
            }
          ]
        }
      ],
      '/avanzato/': [
        {
          text: 'Corso avanzato',
          items: [
            { text: 'Il corso', link: '/avanzato/' },
            { text: '1 · Dalla chat all’agente', link: '/avanzato/incontro-1' },
            { text: '2 · Insegnare un mestiere all’agente', link: '/avanzato/incontro-2' },
            { text: '3 · Dall’archivio al sistema', link: '/avanzato/incontro-3' }
          ]
        },
        {
          text: 'Strumenti',
          items: [
            { text: 'Modelli pronti', link: '/avanzato/modelli' },
            { text: 'Codex e Claude Code', link: '/avanzato/codex-e-claude-code' },
            { text: 'Versione da stampare', link: '/avanzato/stampa' }
          ]
        }
      ]
    },

    outline: { level: [2, 3], label: 'In questa pagina' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Cerca', buttonAriaLabel: 'Cerca' },
          modal: {
            noResultsText: 'Nessun risultato per',
            resetButtonTitle: 'Cancella la ricerca',
            footer: { selectText: 'per aprire', navigateText: 'per spostarti', closeText: 'per chiudere' }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/marcofarina/aiforeducation' }],
    editLink: {
      pattern: 'https://github.com/marcofarina/aiforeducation/edit/main/docs/:path',
      text: 'Proponi una modifica a questa pagina'
    },
    docFooter: { prev: 'Pagina precedente', next: 'Pagina successiva' },
    lastUpdated: { text: 'Ultimo aggiornamento' },
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Passa al tema chiaro',
    darkModeSwitchTitle: 'Passa al tema scuro',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Torna su',
    langMenuLabel: 'Lingua',
    notFound: {
      title: 'Pagina non trovata',
      quote: 'L’indirizzo non corrisponde a nessuna pagina delle dispense.',
      linkText: 'Torna alla home'
    },
    footer: {
      message: 'Testi rilasciati con licenza MIT. I.I.S. J. C. Maxwell, formazione docenti.'
    }
  },

  markdown: {
    container: {
      tipLabel: 'Suggerimento',
      warningLabel: 'Attenzione',
      dangerLabel: 'Pericolo',
      infoLabel: 'Nota',
      detailsLabel: 'Dettagli'
    }
  }
})
