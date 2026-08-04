export const officina = {
  nome: 'Officina Aversa',
  telefono: '366 233 2576',
  telefonoHref: 'tel:+393662332576',
  indirizzo: ['SP89, 12', '83025 Piazza di Pandola (AV)'],
  orari: ['Lun–Ven 08:30–18:30', 'Sab su appuntamento'],
  social: [
    { rete: 'Instagram', handle: '@aversa_luigi_', url: 'https://instagram.com/aversa_luigi_' },
    { rete: 'TikTok', handle: '@luigi_aversa', url: 'https://tiktok.com/@luigi_aversa' }
  ],
  // coordinate della località: da affinare sul civico esatto se serve più precisione
  mappa: {
    lat: 40.8064791,
    lon: 14.7720486,
    zoom: 15,
    indicazioni:
      'https://www.google.com/maps/dir/?api=1&destination=' +
      encodeURIComponent('SP89 12, 83025 Piazza di Pandola AV, Italia')
  }
}

export const nav = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#progetti', label: 'Progetti' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#processo', label: 'Processo' },
  { href: '#officina', label: 'Officina' },
  { href: '#contatti', label: 'Contatti' }
]

export const marquee = [
  'Rimappature',
  'Preparazioni motore',
  'Telaio e sospensioni',
  'Pezzi su misura',
  'Impianti frenanti',
  'Restauri',
  'Preparazioni moto'
]

export const numeri = [
  { valore: '18', label: 'anni in officina' },
  { valore: '900+', label: 'auto e moto elaborate' },
  { valore: '640', label: 'CV, record interno', accent: true },
  { valore: '42', label: 'progetti one-off' }
]

export const servizi = [
  {
    num: '01',
    titolo: 'Rimappatura centralina',
    testo:
      'Mappe scritte su misura al banco, non file scaricati. Stage 1, 2, custom, hardware dedicato.'
  },
  {
    num: '02',
    titolo: 'Preparazioni motore',
    testo:
      'Smontaggio completo, lavorazioni testa, alberi, pistoni, sovralimentazione. Assemblaggio a coppie controllate.'
  },
  {
    num: '03',
    titolo: 'Telaio e sospensioni',
    testo:
      'Assetti regolabili, rinforzi, barre, geometrie impostate sui tuoi obiettivi di guida.'
  },
  {
    num: '04',
    titolo: 'Pezzi su misura',
    testo:
      'Tornio e TIG in casa: collettori, staffe, airbox, scarichi. Se non esiste, lo costruiamo.'
  },
  {
    num: '05',
    titolo: 'Impianti frenanti',
    testo:
      'Dimensionamento pinze e dischi, linee in treccia, bilanciamento per strada o pista.'
  },
  {
    num: '06',
    titolo: 'Progetti one-off',
    testo:
      'Auto pensate da zero insieme al proprietario. Un progetto alla volta, seguito fino al collaudo.'
  },
  {
    num: '07',
    titolo: 'Restauri',
    testo:
      'Recupero conservativo o integrale, con ricerca ricambi e documentazione fotografica di ogni fase.'
  },
  {
    num: '08',
    titolo: 'Moto e due ruote',
    testo:
      'Preparazioni, scarichi su misura, sospensioni e carburazione per stradali, café racer e moto da pista.'
  }
]

export const progetti = [
  {
    img: '/img/progetto-dt125.jpg',
    alt: 'Yamaha DT 125 trasformata in supermotard, finita e su strada',
    titolo: 'Yamaha DT 125',
    specifica: 'Moto · supermotard · telaio e ciclistica',
    testo:
      'Trasformazione supermotard completa: telaio rifatto e riverniciato, ruote e ciclistica ricostruite pezzo per pezzo, motore aperto e revisionato in officina.',
    didascalia: 'Consegnata · lavorazione interamente in casa'
  },
  {
    img: '/img/progetto-cagiva.jpg',
    alt: 'Telaio della Cagiva Raptor a nudo con motore rimosso',
    titolo: 'Cagiva Raptor',
    specifica: 'Moto · smontaggio integrale · motore',
    testo:
      'Motore calato fuori dal telaio e portato al banco, ciclistica lasciata a nudo per revisione, controllo e rimontaggio.',
    didascalia: 'Telaio a nudo · revisione motore al banco'
  },
  {
    img: '/img/progetto-fantic.jpg',
    alt: 'Fantic XMF 125 in lavorazione sul cavalletto in officina',
    titolo: 'Fantic XMF 125',
    specifica: 'Moto · restauro · ciclistica',
    testo:
      'Recupero completo: telaio e sospensioni rimessi in ordine, componenti smontati e rifatti uno alla volta prima del rimontaggio.',
    didascalia: 'Lavorazione in corso · reparto due ruote'
  },
  {
    img: '/img/progetto-husqvarna.jpg',
    alt: 'Husqvarna SM 510 R in preparazione in officina',
    titolo: 'Husqvarna SM 510 R',
    specifica: 'Moto · preparazione · messa a punto',
    testo:
      'Preparazione completa con revisione della ciclistica e messa a punto del monocilindrico, seguita fino alla prova su strada.',
    didascalia: 'Monocilindrico · preparazione completa'
  },
  {
    img: '/img/progetto-r125.jpg',
    alt: 'Telaio della Yamaha R125 visto dall’alto durante il rimontaggio',
    titolo: 'Yamaha R125',
    specifica: 'Moto · telaio · rimontaggio',
    testo:
      'Ripartita dal telaio nudo: impianto elettrico, comandi e sovrastrutture rimontati pezzo per pezzo dopo la revisione.',
    didascalia: 'Rimontaggio dal telaio · un pezzo alla volta'
  }
]

export const galleria = [
  {
    img: '/img/g-saldatura-telaio.jpg',
    alt: 'Saldatura di un telaio moto in officina, scintille',
    titolo: 'Saldatura telaio',
    tag: 'Fabbricazione'
  },
  {
    img: '/img/g-motore-esploso.jpg',
    alt: 'Cilindro e pistone danneggiati di un motore aperto',
    titolo: 'Motore aperto',
    tag: 'Diagnosi'
  },
  {
    img: '/img/g-cerchi-verniciati.jpg',
    alt: 'Mozzi, corona e cerchi verniciati in blu ad asciugare',
    titolo: 'Ciclistica riverniciata',
    tag: 'Ricostruzione'
  },
  {
    img: '/img/g-carter-yamaha.jpg',
    alt: 'Carter motore Yamaha rimontato e verniciato sul banco',
    titolo: 'Carter rimontato',
    tag: 'Reparto motori'
  },
  {
    img: '/img/g-cagiva-motore.jpg',
    alt: 'Motore della Cagiva sul banco di lavoro',
    titolo: 'Motore al banco',
    tag: 'Revisione'
  },
  {
    img: '/img/g-motore-smontato.jpg',
    alt: 'Componenti di un motore smontati e disposti a terra',
    titolo: 'Tutto smontato',
    tag: 'Reparto motori'
  },
  {
    img: '/img/g-cambio-smontato.jpg',
    alt: 'Ingranaggi e alberi del cambio disposti in ordine su un panno',
    titolo: 'Cambio smontato',
    tag: 'Reparto motori'
  },
  {
    img: '/img/g-squadra-sera.jpg',
    alt: 'La squadra al lavoro su una moto in officina di sera',
    titolo: 'Si lavora anche la sera',
    tag: 'Squadra'
  },
  {
    img: '/img/g-a-lavoro-finito.jpg',
    alt: 'In officina accanto alla Yamaha DT 125 finita',
    titolo: 'A lavoro finito',
    tag: 'Officina'
  },
  {
    img: '/img/g-officina-strada.jpg',
    alt: 'Controllo di una moto davanti all’officina',
    titolo: 'Prova e controllo',
    tag: 'Consegna'
  }
]

export const processo = [
  {
    num: '01',
    titolo: 'Si parla',
    testo:
      'Ci racconti come usi la tua auto o la tua moto e dove vuoi arrivare. Da qui capiamo se il progetto ha senso.'
  },
  {
    num: '02',
    titolo: 'Si misura',
    testo:
      'Diagnosi, compressioni, prova al banco. Fotografiamo lo stato di fatto prima di promettere numeri.'
  },
  {
    num: '03',
    titolo: 'Si progetta',
    testo:
      'Preventivo per fasi, con le parti scelte una per una e i tempi reali di officina.'
  },
  {
    num: '04',
    titolo: 'Si mette a punto',
    testo:
      'Montaggio, rodaggio, taratura. Consegniamo con i dati del banco in mano e un tagliando di controllo.'
  }
]

export const testimonianze = [
  {
    testo:
      'Mi è esploso il motore e pensavo di aver buttato la moto. Loro l’hanno smontata fino al telaio e me l’hanno rifatta da zero, pezzo per pezzo. Oggi va meglio di quando l’ho comprata.',
    autore: 'Antonio D. — Yamaha R125'
  },
  {
    testo:
      'Era partito come un problema al cambio, poi è saltato tutto quanto. Non hanno provato a tapparlo: hanno aperto, fatto vedere cosa c’era dentro e rimesso a posto come si deve.',
    autore: 'Dario De P. — Fantic XMF 125'
  },
  {
    testo:
      'Lo tormento praticamente ogni giorno, un problema diverso ogni volta, moto o macchina che sia. Trova sempre il tempo e per i controlli al volo non mi ha mai fatto pagare niente.',
    autore: 'Roberto P. — cliente abituale'
  }
]
