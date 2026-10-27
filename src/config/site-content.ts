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
  backgroundAlt: 'Holy Hits',

  /**
   * Logo image used as a CSS mask so the gradient shines through.
   * Replace with your own PNG (white silhouette on transparent background).
   */
  logoImage: '/images/logo.png',
  logoAlt: 'Holy Hits',
  /** Aspect ratio of the logo image in the format width/height */
  logoAspectRatio: '1278/542',
} as const

// ── Gallery ─────────────────────────────────────────────────────────────────

export interface GalleryItem {
  src: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  { src: '/images/anaclara.jpg',           alt: 'Holy Hits no palco' },
  { src: '/images/will.jpg', alt: 'Holy Hits ao microfone' },
  { src: '/images/bruno.jpg',  alt: 'Holy Hits com seu acordeon' },
  { src: '/images/gaza.jpg',           alt: 'Holy Hits ao vivo' },
  { src: '/images/ale.jpg',   alt: 'Holy Hits no estúdio' },
  // { src: '/images/gallery/g6.jpg',           alt: 'Holy Hits em show' },
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
    initials: 'AG',
    name: 'Ana & Gabriel',
    event: 'Casamento',
    time: '21:47',
    message:
      'Ainda estamos emocionados! Contratar vocês para o nosso casamento foi a melhor escolha que fizemos. A musica do Elvis na entrada, a pista lotada até o fim… os convidados não param de comentar. Obrigada por tornar nosso dia inesquecível! ❤️',
  },
  {
    initials: 'R',
    name: 'Reynaldo',
    event: 'Confraternização da faculdade',
    time: '10:12',
    message:
      'Bom dia, Ana! O show na nossa confraternização foi um sucesso absoluto, a turma inteira amou. Já quero deixar fechada a data da próxima, pode reservar pra gente! 👏',
  },
  {
    initials: 'F',
    name: 'Fernanda S.',
    event: 'Fã',
    time: '19:30',
    message:
      'Pessoal, não vejo a hora de ter outro show seu aqui na cidade! Me avisa assim que tiver data que eu quero garantir meu ingresso primeiro 😍🎶',
  },
]

// ── About / Release ──────────────────────────────────────────────────────────

export const aboutContent = {
  image: '/images/bandastage.jpg',
  imageAlt: 'Holy Hits com seu acordeon',
  sectionLabel: 'Release',
  nameImage: '/images/logohorizontal.png',
  nameImageAlt: 'Holy Hits',
  paragraphs: [
    'Somos fãs dos clássicos do <highlight>Pop/Rock dos anos 80, 90 e 2000</highlight>. Mas também não abrimos mão de <highlight>"riffs"</highlight> pesados, guitarras marcantes e solos eletrizantes.',
    '<highlight>Então, por que não juntar tudo isso?</highlight>',
    'Foi dessa ideia que nasceu a <highlight>Holy Hits</highlight>: uma banda que mistura grandes hits com uma pegada Rock n Roll, transformando músicas que todo mundo conhece em versões com identidade própria, arranjos modernos e muita atitude.',
    'Já imaginou, <highlight>Tears for Fears, Depeche Mode, Erasure</highlight> e até mesmo <highlight>Haddaway</highlight> com guitarras distorcidas e solos de tirar o fôlego?',
    '<highlight>A gente imaginou - Hits que você conhece, com uma pegada que talvez você nunca tenha ouvido antes!</highlight>',
    'Assista aos nossos vídeos e confira essa mistura!',
    // 'Adoramos os clássicos do <highlight>Pop/Rock Anos 80, 90 e 2000</highlight>, mas adoramos os <highlight>"riffs" de guitarra</highlight> mais pesados também.',
    // '- E agora, o que vamos tocar ?',
    // '- Por quê não juntar os dois ?',
    /**
     * Paragraphs can contain a single highlighted segment wrapped in a
     * `<highlight>` pseudo-tag. The component renders it as <span class="text-foreground">.
     */
    // 'Dessa idéia, nasceu a banda <highlight>Holy Hits</highlight>, onde buscamos tocar os maiores clássicos porém em versões totalmente inovadoras e diferentes, trazendo versões mais modernas.',
    // 'Já imaginou, <highlight>Tears for Fears, Depeche Mode, Erasure</highlight> e até mesmo <highlight>Haddaway</highlight> com guitarras e solos eletrizantes? Assita nossos videos e confira !',
  ],
} as const

// ── Videos ───────────────────────────────────────────────────────────────────

export type VideoItem =
  | {
      type: 'youtube'
      /** YouTube video ID (the part after ?v= or /shorts/) */
      youtubeId: string
      label: string
    }
  | {
      type: 'instagram'
      /** Full Instagram post / reel URL */
      instagramUrl: string
      label: string
    }
  | {
      type: 'local'
      /** Path relative to /public, e.g. '/images/video.mp4' */
      src: string
      /** Optional poster image path relative to /public */
      poster?: string
      label: string
    }

export const videoItems: VideoItem[] = [
  { type: 'local', src: '/images/motorock2024.mp4', label: 'Holy Hits – video 1' },
  { type: 'local', src: '/images/polocerv2024.mp4', label: 'Holy Hits – video 2' },
  // { type: 'instagram', instagramUrl: 'https://www.instagram.com/reel/C_EEY05xXpP?cr=1&v=14', label: 'Holy Hits – reel 1' },
  { type: 'local', src: '/images/ebpvma2025.mp4', label: 'Holy Hits – video 3' },
  { type: 'youtube', youtubeId: 'Ysg79AKPqMs', label: 'Holy Hits – vídeo 4' },
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
    title: 'Show Eletro-Acústico',
    recommended: 'Bares e eventos de pequeno porte.',
    featured: false,
    featureGroups: [
      {
        label: 'Músicos',
        items: ['Vocalista', 'Violão/Guitarra', 'Cajón (Opcional)'],
      },
      {
        label: 'Backline',
        items: [
          'Mesa de som analogica Yamaha Emx312c',
          'Monitores de retorno in-ear sem fio',
          'Instrumentos com sistema sem fio',
          'Microfones e pedestais',
        ],
      },
    ],
    duration: '2 horas de apresentação',
    soundInfo: '2 caixas de som ativas Laney, instaladas em pedestais.',
    previewVideoUrl: 'https://youtube.com/shorts/6RCHStmLNAw',
    price: 'R$ 900,00',
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
        label: 'Musicos e técnica',
        items: [
          'Vocalista',
          'Guitarra Solo e vocalista',
          'Contra-Baixista e vocalista',
          'Baterista e vocalista',
          'Técnico de som',
          // 'Roadie (apoio técnico e montagem de equipamentos)',
        ],
      },
      {
        label: 'Backline',
        items: [
          'Mesa de som digital Soundcraft Ui24',
          'Monitores de retorno in-ear sem fio',
          'Instrumentos com sistema sem fio',
          'Microfones e pedestais',
          '1 Microfones sistema sem fio',
        ],
      },
    ],
    duration: '2 horas de apresentação',
    soundInfo:
      'A estrutura de som deverá ser fornecida pelo contratante. Caso necessário, podemos indicar fornecedores parceiros com condições e custos mais acessíveis.',
    previewVideoUrl: 'https://youtu.be/ODHtKTcLbKQ',
    price: 'R$ 1.800,00',
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
          'Vocalista',
          'Guitarra Solo e vocalista',
          'Contra-Baixista e vocalista',
          'Baterista e vocalista',
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
    previewVideoUrl: 'https://youtube.com/shorts/c7ckahPWPzk',
    price: 'R$ 6.400,00',
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
  socialHeading: 'Siga Holy Hits',
} as const
