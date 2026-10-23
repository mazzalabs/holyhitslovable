/**
 * Site content configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * ALL visible copy and structured data for the page lives here.
 * Change text, images, pricing, testimonials, FAQs, etc. in this file.
 *
 * Image paths beginning with "/" are resolved relative to the /public folder.
 * External URLs are used as-is.
 */

// ── Hero ────────────────────────────────────────────────────────────────────

export const heroContent = {
  /**
   * Hero background image.
   * Observed: /__l5e/assets-v1/…/hero.jpg  (Lovable CDN – not redistributable)
   * Replace with your own image in /public/images/hero.jpg
   */
  backgroundImage: '/images/hero.jpg',
  backgroundAlt: 'Julia Coronetti com chapéu sob o holofote',

  /**
   * Logo image used as a CSS mask so the gradient shines through.
   * Replace with your own PNG (white silhouette on transparent background).
   */
  logoImage: '/images/logo.png',
  logoAlt: 'Julia Coronetti',
  /** Aspect ratio of the logo image in the format width/height */
  logoAspectRatio: '1278/542',
} as const

// ── Gallery ─────────────────────────────────────────────────────────────────

export interface GalleryItem {
  src: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  { src: '/images/gallery/g1.jpg',           alt: 'Julia Coronetti no palco' },
  { src: '/images/gallery/julia-microfone.jpg', alt: 'Julia Coronetti ao microfone' },
  { src: '/images/gallery/julia-acordeon.jpg',  alt: 'Julia Coronetti com seu acordeon' },
  { src: '/images/gallery/g4.jpg',           alt: 'Julia Coronetti ao vivo' },
  { src: '/images/gallery/julia-estudio.jpg',   alt: 'Julia Coronetti no estúdio' },
  { src: '/images/gallery/g6.jpg',           alt: 'Julia Coronetti em show' },
]

// ── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  /** Single capital letter shown in the avatar circle */
  initials: string
  name: string
  event: string
  message: string
  /** WhatsApp-style "sent at" time shown at bottom-right of bubble */
  time: string
}

export const testimonials: Testimonial[] = [
  {
    initials: 'M',
    name: 'Mariana & Lucas',
    event: 'Casamento',
    time: '21:47',
    message:
      'Julia, ainda estamos emocionados! Contratar você para o nosso casamento foi a melhor escolha que fizemos. A sanfona na entrada, a pista lotada até o fim… os convidados não param de comentar. Obrigada por tornar nosso dia inesquecível! ❤️',
  },
  {
    initials: 'R',
    name: 'Ricardo M.',
    event: 'Confraternização da empresa',
    time: '10:12',
    message:
      'Bom dia, Julia! O show na nossa confraternização foi um sucesso absoluto, a equipe inteira amou. Já quero deixar fechada a data da próxima, pode reservar pra gente! 👏',
  },
  {
    initials: 'F',
    name: 'Fernanda S.',
    event: 'Fã',
    time: '19:30',
    message:
      'Julia, não vejo a hora de ter outro show seu aqui na cidade! Me avisa assim que tiver data que eu quero garantir meu ingresso primeiro 😍🎶',
  },
]

// ── About / Release ──────────────────────────────────────────────────────────

export const aboutContent = {
  image: '/images/gallery/julia-acordeon.jpg',
  imageAlt: 'Julia Coronetti com seu acordeon',
  sectionLabel: 'Release',
  name: 'Julia Coronetti',
  subtitle: 'Cantora e Acordeonista',
  paragraphs: [
    'Com 10 anos de carreira, Julia Coronetti vem construindo uma trajetória marcada pela paixão pela música sertaneja, pelo talento e por uma presença de palco que conquista o público por onde passa.',
    'Sua história na música começou muito cedo: aos 10 anos de idade, lançou seu primeiro CD, intitulado "Julia Bem Sertanejo", dando os primeiros passos de uma carreira que hoje a leva a se apresentar em palcos por todo o Brasil, acompanhada de sua banda.',
    'Ao longo de sua trajetória, Júlia também integrou bandas de baile, experiência que contribuiu para ampliar seu repertório musical, desenvolver sua versatilidade artística e conquistar um público cada vez mais diverso.',
    /**
     * Paragraphs can contain a single highlighted segment wrapped in a
     * `<highlight>` pseudo-tag. The component renders it as <span class="text-foreground">.
     */
    'Entre os destaques de sua carreira está a vitória no quadro <highlight>"10 ou 1000", do Programa do Ratinho</highlight>, onde encantou o público com seu talento ao cantar e tocar sanfona. Além disso, participou de diversos programas de televisão, ampliando sua visibilidade e consolidando seu nome no cenário musical.',
    'Unindo voz, sanfona, carisma e autenticidade, Julia Coronetti transforma cada apresentação em uma experiência de música e entretenimento, levando energia, emoção e alegria ao público. Com sua identidade sertaneja e uma presença de palco marcante, segue conquistando novos espaços e fortalecendo sua carreira no cenário musical brasileiro.',
  ],
} as const

// ── Videos ───────────────────────────────────────────────────────────────────

export interface VideoItem {
  /** YouTube video ID (the part after ?v= or /shorts/) */
  youtubeId: string
  label: string
}

export const videoItems: VideoItem[] = [
  { youtubeId: '3iJ1RFJ_2G4', label: 'Julia Coronetti – vídeo 1' },
  { youtubeId: 'pjOecEDO86Q', label: 'Julia Coronetti – vídeo 2' },
  { youtubeId: 'PDvtyOEOgZA', label: 'Julia Coronetti – vídeo 3' },
]

// ── Pricing Plans ─────────────────────────────────────────────────────────────

export interface PlanFeatureGroup {
  label: string
  items: string[]
}

export interface ShowPlan {
  id: 'A' | 'B' | 'C'
  label: string
  title: string
  recommended: string
  /** Extra CSS class applied to the card (e.g. ring for the featured card) */
  featured?: boolean
  /** Text for the "most chosen" badge – only shown when featured is true */
  badge?: string
  featureGroups: PlanFeatureGroup[]
  duration: string
  soundInfo: string
  previewVideoUrl: string
  price: string
  priceNote: string
  disclaimers: string[]
  /** WhatsApp message pre-filled for this plan */
  whatsappMessage: string
}

export const showPlans: ShowPlan[] = [
  {
    id: 'A',
    label: 'PLANO A',
    title: 'Show Acústico',
    recommended: 'Bares e eventos de pequeno porte.',
    featured: false,
    featureGroups: [
      {
        label: 'Músicos',
        items: ['Sanfona', 'Violão', 'Cajón'],
      },
      {
        label: 'Backline',
        items: [
          'Mesa de som digital Soundcraft Ui24',
          'Monitores de retorno in-ear sem fio',
          'Instrumentos com sistema sem fio',
          'Microfones com sistema sem fio',
        ],
      },
    ],
    duration: '2 horas de apresentação',
    soundInfo: '2 caixas de som ativas JBL, instaladas em pedestais.',
    previewVideoUrl: 'https://youtube.com/shorts/llge72W9taQ',
    price: 'R$ 1.200,00',
    priceNote: '',
    disclaimers: [
      'O valor é válido para eventos realizados em um raio de até 60 km. Para distâncias superiores, necessidade de estrutura de som adicional ou tempo extra de apresentação, os valores poderão ser ajustados mediante negociação prévia.',
      'O valor não inclui alimentação e, quando necessário, hospedagem da equipe, ficando esses custos sob responsabilidade do contratante.',
    ],
    whatsappMessage: 'Olá, gostei do PLANO A',
  },
  {
    id: 'B',
    label: 'PLANO B',
    title: 'Show com Banda',
    recommended:
      'Pubs, baladas, eventos corporativos, aniversários, casamentos e formaturas.',
    featured: true,
    badge: '★ MAIS ESCOLHIDO',
    featureGroups: [
      {
        label: 'Equipe musical e técnica',
        items: [
          'Cantora e sanfoneira',
          'Segundo sanfoneiro',
          'Violeiro e vocalista',
          'Baterista',
          'Contrabaixista e vocalista',
          'Técnica de som',
          'Roadie (apoio técnico e montagem de equipamentos)',
        ],
      },
      {
        label: 'Backline',
        items: [
          'Mesa de som digital Soundcraft Ui24',
          'Monitores de retorno in-ear sem fio',
          'Instrumentos com sistema sem fio',
          'Microfones com sistema sem fio',
        ],
      },
    ],
    duration: '2 horas de apresentação',
    soundInfo:
      'A estrutura de som deverá ser fornecida pelo contratante. Caso necessário, podemos indicar fornecedores parceiros com condições e custos mais acessíveis.',
    previewVideoUrl: 'https://youtube.com/shorts/pjOecEDO86Q',
    price: 'R$ 4.800,00',
    priceNote: 'Valor válido para eventos realizados em um raio de até 60 km.',
    disclaimers: [
      'Para eventos em distâncias superiores a 60 km, necessidade de estrutura de som adicional ou tempo extra de apresentação, os valores poderão ser ajustados mediante negociação prévia.',
      'Também é possível adaptar a formação da equipe, com a redução do número de integrantes, para adequar o investimento às necessidades e ao orçamento do contratante.',
      'O valor não inclui alimentação e, quando necessário, hospedagem da equipe, ficando esses custos sob responsabilidade do contratante.',
    ],
    whatsappMessage: 'Olá, gostei do PLANO B',
  },
  {
    id: 'C',
    label: 'PLANO C',
    title: 'Grandes Eventos',
    recommended:
      'Grandes eventos, feiras, festividades e comemorações político-administrativas de municípios.',
    featured: false,
    featureGroups: [
      {
        label: 'Equipe musical e técnica',
        items: [
          'Cantora e sanfoneira',
          'Segundo sanfoneiro',
          'Violeiro e vocalista',
          'Baterista',
          'Contrabaixista e vocalista',
          'Guitarrista',
          'Tecladista',
          'Percussionista',
          'Técnico de som',
          'Técnico de iluminação',
          'Roadie (apoio técnico e montagem de equipamentos)',
        ],
      },
      {
        label: 'Backline',
        items: [
          'Estrutura de backline a ser contratada conforme as necessidades técnicas da apresentação.',
        ],
      },
    ],
    duration: '2 horas de apresentação',
    soundInfo:
      'Estrutura de sonorização e iluminação a ser contratada pelo contratante, de acordo com as especificações técnicas do evento.',
    previewVideoUrl: 'https://youtube.com/shorts/WrIIcUWlcpc',
    price: 'R$ 12.800,00',
    priceNote: 'Valor válido para eventos realizados em um raio de até 300 km.',
    disclaimers: [
      'Para eventos realizados a distâncias superiores a 300 km ou que necessitem de tempo adicional de apresentação, as condições e os valores poderão ser ajustados mediante negociação prévia.',
      'O valor não inclui alimentação e, quando necessário, hospedagem da equipe, ficando esses custos sob responsabilidade do contratante.',
    ],
    whatsappMessage: 'Olá, gostei do PLANO C',
  },
]

// ── Footer ───────────────────────────────────────────────────────────────────

export const footerContent = {
  socialHeading: 'Siga Julia',
} as const
