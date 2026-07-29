export type Lang = "fr" | "en"

export interface Project {
  id: string
  title: string
  images: string[]
  description: string
  tools: string[]
}

const projectsFr: Project[] = [
  {
    id: "1",
    title: "KIMI NAILS",
    images: ["/Free_Key_Chain_Mockup_2FULL 1.png"],
    description:
        "Ce logo a été conçu pour refléter l'élégance et la créativité de l'univers de la prothésie ongulaire. Le violet, couleur de la féminité et de la sophistication, est au cœur de l'identité visuelle. Les papillons apportent une touche de légèreté et symbolisent la transformation, en écho à l'art de sublimer les mains. L'ensemble vise à transmettre douceur, raffinement et professionnalisme.",
    tools: ["Adobe Illustrator", "Banque d'image", "Du papier pour les sketchs", "Une tablette graphique"],
  },
  {
    id: "2",
    title: "INTERFACE GESAFRIC",
    images: ["/file cover - 3.png"],
    description:
        "Cette interface ERP dédiée à la gestion comptable mise sur une palette de verts inspirés de la nature pour instaurer une atmosphère calme et propice à la concentration. Les différentes nuances de vert, associées à un design épuré, facilitent la hiérarchisation des informations et renforcent la lisibilité des données complexes. Ce choix chromatique symbolise également la stabilité, la croissance et la transparence — des valeurs étroitement liées à l'univers de la comptabilité. L'objectif : offrir une expérience utilisateur fluide, intuitive et visuellement apaisante.",
    tools: ["Figma", "Du papier pour les Wireframe", "Banque d'image"],
  },
  {
    id: "3",
    title: "ILLUSTRATION EVANGY",
    images: ["/3.png"],
    description:
        "Ce personnage arbore une palette de roses doux qui reflète une apparence tendre et délicate. Son style visuel joue sur les contrastes, entre innocence apparente et profondeur intérieure. Derrière son sourire calme se cache une personnalité complexe, affirmée et parfois tranchante. L'illustration cherche à capturer cette dualité entre façade et vraie nature.",
    tools: ["Clip studio paint", "Du papier pour les sketchs", "Une tablette graphique"],
  },
  {
    id: "4",
    title: "COUVERTURE",
    images: ["/cover vericale.png"],
    description:
        "Cette couverture met en lumière un personnage à la fois déterminé et noble. Les jeux d'ombre accentuent la force de son regard, tandis que les teintes choisies révèlent subtilement l'éclat de ses cheveux, symbole de sa singularité et de sa puissance intérieure.",
    tools: ["Clip studio paint", "Du papier pour les sketchs", "Une tablette graphique"],
  },
  {
    id: "5",
    title: "COZY PLAY",
    images: ["/cozyplay-1.png", "/cozyplay-2.png", "/cozyplay-3.png"],
    description:
        "Cozy Play est une application de lecture musicale conçue pour offrir une expérience utilisateur à la fois intuitive, organisée et esthétique. L'enjeu principal était de faciliter la gestion et la navigation au sein d'une large bibliothèque musicale, en proposant une organisation claire et fluide des playlists, albums et morceaux. Pour répondre à une identité visuelle douce et moderne, j'ai intégré une palette centrée sur des nuances de rose, apportant une touche féminine subtile sans compromettre la lisibilité ni la sobriété de l'interface. L'ergonomie a été au cœur du design : chaque élément est pensé pour maximiser l'efficacité et la simplicité d'usage, avec une hiérarchie visuelle claire, des boutons bien dimensionnés, et une navigation fluide.",
    tools: ["Figma", "UX/UI Design", "Design Thinking", "Wireframing"],
  },
  {
    id: "6",
    title: "@FRIC FINANCE",
    images: ["/fricfinance-1.png", "/fricfinance-2.png", "/fricfinance-3.png"],
    description:
        "J'ai conçu les interfaces utilisateur de l'application mobile @fric Finance, une plateforme de microfinance destinée à simplifier la gestion des opérations financières au quotidien. L'objectif était de proposer une expérience utilisateur fluide, intuitive et sécurisée à travers des écrans dédiés à l'envoi et à la réception d'argent, au paiement de factures et de services, aux transferts internationaux, aux paiements institutionnels, aux retraits d'argent, ainsi qu'à la consultation du solde et de l'historique des transactions. L'ensemble des interfaces a été conçu sous Figma en appliquant les principes de l'UX/UI Design, avec une attention particulière portée à l'ergonomie, à l'accessibilité, à la cohérence visuelle et à la simplicité des parcours utilisateurs afin de rendre les services financiers plus accessibles et efficaces.",
    tools: ["Figma", "UX/UI Design", "Prototypage", "Design System"],
  },
  {
    id: "7",
    title: "@FRIC ÉNERGIES",
    images: ["/fricenergies-1.jpg", "/fricenergies-2.png", "/fricenergies-3.png"],
    description:
        "J'ai conçu les interfaces du site web @fric Énergies, une plateforme dédiée à la promotion de solutions énergétiques durables et innovantes. Le projet avait pour objectif de présenter de manière claire et engageante les services de l'entreprise tout en facilitant l'accès aux informations essentielles. Les interfaces comprennent une page d'accueil mettant en avant la vision et les engagements de l'entreprise, une section présentant les domaines d'expertise (énergies renouvelables, efficacité énergétique et e-mobilité) ainsi qu'une page de contact intégrant un formulaire intuitif et des informations de communication facilement accessibles. Réalisées sous Figma, ces interfaces ont été pensées selon les principes du design centré utilisateur, avec une attention particulière portée à la hiérarchie visuelle, à la lisibilité, au responsive design et à une navigation fluide afin d'offrir une expérience utilisateur moderne, cohérente et accessible.",
    tools: ["Figma", "UX/UI Design", "Responsive Design", "Design centré utilisateur"],
  },
]

const projectsEn: Project[] = [
  {
    id: "1",
    title: "KIMI NAILS",
    images: ["/Free_Key_Chain_Mockup_2FULL 1.png"],
    description:
        "This logo was designed to reflect the elegance and creativity of the nail-art world. Purple, a colour of femininity and sophistication, sits at the heart of the visual identity. The butterflies bring a touch of lightness and symbolise transformation, echoing the art of enhancing hands. The overall look aims to convey softness, refinement and professionalism.",
    tools: ["Adobe Illustrator", "Stock imagery", "Sketch paper", "Graphics tablet"],
  },
  {
    id: "2",
    title: "GESAFRIC INTERFACE",
    images: ["/file cover - 3.png"],
    description:
        "This ERP interface for accounting management relies on a palette of nature-inspired greens to create a calm atmosphere conducive to focus. The different shades of green, combined with a clean design, make it easier to prioritise information and improve the readability of complex data. This colour choice also symbolises stability, growth and transparency — values closely tied to the world of accounting. The goal: a smooth, intuitive and visually soothing user experience.",
    tools: ["Figma", "Wireframe paper sketches", "Stock imagery"],
  },
  {
    id: "3",
    title: "EVANGY ILLUSTRATION",
    images: ["/3.png"],
    description:
        "This character wears a soft pink palette that reflects a tender, delicate appearance. Its visual style plays on contrast, between apparent innocence and inner depth. Behind her calm smile lies a complex personality, assertive and at times sharp. The illustration seeks to capture this duality between facade and true nature.",
    tools: ["Clip Studio Paint", "Sketch paper", "Graphics tablet"],
  },
  {
    id: "4",
    title: "COVER ART",
    images: ["/cover vericale.png"],
    description:
        "This cover highlights a character who is both determined and noble. The play of shadows accentuates the intensity of her gaze, while the chosen tones subtly reveal the shine of her hair, a symbol of her singularity and inner strength.",
    tools: ["Clip Studio Paint", "Sketch paper", "Graphics tablet"],
  },
  {
    id: "5",
    title: "COZY PLAY",
    images: ["/cozyplay-1.png", "/cozyplay-2.png", "/cozyplay-3.png"],
    description:
        "Cozy Play is a music player app designed to deliver an experience that is intuitive, organised and visually pleasing. The main challenge was to make it easy to manage and browse a large music library, with a clear and fluid organisation of playlists, albums and tracks. To match a soft, modern visual identity, I built the palette around shades of pink, adding a subtle feminine touch without compromising the readability or the sobriety of the interface. Usability was at the heart of the design: every element was crafted to maximise efficiency and ease of use, with a clear visual hierarchy, well-sized buttons and smooth navigation.",
    tools: ["Figma", "UX/UI Design", "Design Thinking", "Wireframing"],
  },
  {
    id: "6",
    title: "@FRIC FINANCE",
    images: ["/fricfinance-1.png", "/fricfinance-2.png", "/fricfinance-3.png"],
    description:
        "I designed the user interfaces for the @fric Finance mobile app, a microfinance platform built to simplify everyday financial operations. The goal was to deliver a smooth, intuitive and secure experience across screens dedicated to sending and receiving money, paying bills and services, international transfers, institutional payments, cash withdrawals, as well as balance and transaction history views. All interfaces were designed in Figma following UX/UI design principles, with particular attention paid to usability, accessibility, visual consistency and simple user journeys to make financial services more accessible and efficient.",
    tools: ["Figma", "UX/UI Design", "Prototyping", "Design System"],
  },
  {
    id: "7",
    title: "@FRIC ENERGIES",
    images: ["/fricenergies-1.jpg", "/fricenergies-2.png", "/fricenergies-3.png"],
    description:
        "I designed the interfaces for the @fric Énergies website, a platform dedicated to promoting sustainable and innovative energy solutions. The project aimed to present the company's services clearly and engagingly while making essential information easy to access. The interfaces include a homepage highlighting the company's vision and commitments, a section presenting its areas of expertise (renewable energy, energy efficiency and e-mobility), and a contact page with an intuitive form and easily accessible contact details. Designed in Figma, these interfaces were built around user-centred design principles, with particular attention to visual hierarchy, readability, responsive design and smooth navigation, delivering a modern, consistent and accessible user experience.",
    tools: ["Figma", "UX/UI Design", "Responsive Design", "User-centred design"],
  },
]

export interface JourneyItem {
  type: "experience" | "education"
  title: string
  org: string
  period: string
  current?: boolean
  bullets: string[]
}

const journeyFr: JourneyItem[] = [
  {
    type: "experience",
    title: "Designer UI/UX & Développement Web",
    org: "BJFT S.A.",
    period: "Août 2024 – Juillet 2026",
    current: true,
    bullets: [
      "Conception d'interfaces web responsive via Figma et développement Angular, HTML, CSS",
      "Création de parcours utilisateurs fluides et intuitifs",
      "Réalisation de prototypes interactifs pour validation fonctionnelle",
    ],
  },
  {
    type: "experience",
    title: "Designer UI/UX & Développement Web & Mobile",
    org: "KAKOTEL",
    period: "Janvier 2024 – Juillet 2024",
    bullets: [
      "Conception d'interfaces web responsive via Figma et développement Angular, HTML, CSS",
      "Collaboration étroite avec les développeurs en méthode agile",
    ],
  },
  {
    type: "experience",
    title: "Stage en programmation et design UI/UX",
    org: "PHARMONY, Douala",
    period: "Octobre 2022 – Novembre 2024",
    bullets: [
      "Formation et mise en pratique sur React Native, Laravel, HTML/CSS",
      "Conception d'interfaces pour des applications internes et clients",
    ],
  },
  {
    type: "education",
    title: "Master 2 — Création numérique (DIMI), UX/UI Design & Design d'interface",
    org: "Université Sorbonne Paris Nord",
    period: "2026 – 2027 (en cours)",
    current: true,
    bullets: [],
  },
  {
    type: "education",
    title: "Master 2 en Génie logiciel",
    org: "IUG, Douala",
    period: "2023 – 2024",
    bullets: [],
  },
  {
    type: "education",
    title: "Master 1 en Génie logiciel",
    org: "IUG, Douala",
    period: "2022 – 2023",
    bullets: [],
  },
  {
    type: "education",
    title: "Licence en Génie logiciel",
    org: "IME, Douala",
    period: "2020 – 2021",
    bullets: [],
  },
  {
    type: "education",
    title: "BTS en Génie logiciel",
    org: "IME, Douala",
    period: "2019 – 2020",
    bullets: [],
  },
]

const journeyEn: JourneyItem[] = [
  {
    type: "experience",
    title: "UI/UX Designer & Web Development",
    org: "BJFT S.A.",
    period: "August 2024 – July 2026",
    current: true,
    bullets: [
      "Designing responsive web interfaces in Figma and building them with Angular, HTML, CSS",
      "Creating smooth, intuitive user journeys",
      "Building interactive prototypes for functional validation",
    ],
  },
  {
    type: "experience",
    title: "UI/UX Designer & Web & Mobile Development",
    org: "KAKOTEL",
    period: "January 2024 – July 2024",
    bullets: [
      "Designing responsive web interfaces in Figma and building them with Angular, HTML, CSS",
      "Close collaboration with developers in an agile workflow",
    ],
  },
  {
    type: "experience",
    title: "Internship in programming and UI/UX design",
    org: "PHARMONY, Douala",
    period: "October 2022 – November 2024",
    bullets: [
      "Training and hands-on practice with React Native, Laravel, HTML/CSS",
      "Designing interfaces for internal and client applications",
    ],
  },
  {
    type: "education",
    title: "Master 2 — Digital Creation (DIMI), UX/UI Design & Interface Design",
    org: "Université Sorbonne Paris Nord",
    period: "2026 – 2027 (ongoing)",
    current: true,
    bullets: [],
  },
  {
    type: "education",
    title: "Master 2 in Software Engineering",
    org: "IUG, Douala",
    period: "2023 – 2024",
    bullets: [],
  },
  {
    type: "education",
    title: "Master 1 in Software Engineering",
    org: "IUG, Douala",
    period: "2022 – 2023",
    bullets: [],
  },
  {
    type: "education",
    title: "Bachelor's degree in Software Engineering",
    org: "IME, Douala",
    period: "2020 – 2021",
    bullets: [],
  },
  {
    type: "education",
    title: "BTS in Software Engineering",
    org: "IME, Douala",
    period: "2019 – 2020",
    bullets: [],
  },
]

export const translations = {
  fr: {
    nav: { about: "A Propos", home: "Accueil", portfolio: "Portfolio", journey: "Parcours", contact: "Contact" },
    hero: {
      title1: "DESIGNER",
      title2a: "UI/UX & ",
      title2b: "ARTIST",
      p1: "Je suis UI/UX Designer basé à Douala, Cameroun, passionné par la création d'expériences digitales intuitives et centrées sur l'utilisateur.",
      p2: "J'accompagne les entreprises et les startups dans la conception d'interfaces web et mobile qui allient esthétique, fonctionnalité et accessibilité.",
      btnPortfolio: "Télécharger le Portfolio",
      btnCv: "Télécharger le CV",
      btnContact: "Me Contacter",
    },
    about: {
      name: "WASHINGTON Temfing Brenda",
      role1: "Designer UI/UX & ",
      role2: "Artist",
      descriptionLabel: "Description :",
      p1: "UI/UX Designer avec une expérience croissante dans la conception d'interfaces digitales, j'ai eu l'opportunité de travailler sur des projets variés, allant de la création de maquettes fonctionnelles à l'optimisation de parcours utilisateurs. Mon approche repose sur une compréhension fine des besoins des utilisateurs, une maîtrise des outils de design collaboratif et une capacité à transformer les idées en expériences intuitives, accessibles et cohérentes.",
      p2: "Parallèlement à mon activité de designer, je suis également illustratrice, ce qui enrichit ma pratique par une sensibilité artistique affirmée. Cette double compétence me permet d'apporter une dimension visuelle forte à mes projets, en alliant fonctionnalité, esthétique et narration. Pour moi, un bon design est un équilibre subtil entre utilité, émotion et impact visuel.",
    },
    portfolio: {
      title: "PORTFOLIO",
      subtitle: "Designer UI/UX & Artist",
      intro:
          "Ce portfolio présente une sélection de projets en UX/UI, développement web/mobile et illustration. La majorité de mes réalisations étant confidentielles (projets d'entreprise), seuls des travaux personnels ou diffusables sont partagés ici.",
      description: "DESCRIPTION",
      tools: "OUTILS",
      prev: "Projet précédent",
      next: "Projet suivant",
      prevImage: "Image précédente",
      nextImage: "Image suivante",
      close: "Fermer",
      gallery: "Aperçus de l'interface",
    },
    projects: projectsFr,
    journey: {
      title: "PARCOURS",
      subtitle: "Expériences & Formations",
      intro: "Un aperçu de mon parcours professionnel et académique, entre design d'interfaces et développement web.",
      experienceLabel: "Expérience",
      educationLabel: "Formation",
      current: "En cours",
      items: journeyFr,
    },
    contact: {
      title: "CONTACT",
      subtitle: "Travaillons ensemble",
      intro:
          "Un projet en tête ? Une question ? N'hésitez pas à me contacter, je réponds généralement sous 24h.",
      nameLabel: "Nom et prénom",
      emailLabel: "Email",
      subjectLabel: "Objet",
      messageLabel: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      subjectPlaceholder: "Sujet de votre message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer le message",
      infoTitle: "Coordonnées",
      location: "Douala, Cameroun",
      locationNote: "Disponible à la mobilité",
      phone: "+237 690 24 47 34",
      email: "WashingtonTbrenda@gmail.com",
      portfolioLink: "portfoliobree.vercel.app",
    },
    langLabel: "FR",
  },
  en: {
    nav: { about: "About", home: "Home", portfolio: "Portfolio", journey: "Journey", contact: "Contact" },
    hero: {
      title1: "DESIGNER",
      title2a: "UI/UX & ",
      title2b: "ARTIST",
      p1: "I'm a UI/UX Designer based in Douala, Cameroon, passionate about creating intuitive, user-centred digital experiences.",
      p2: "I help companies and startups design web and mobile interfaces that combine aesthetics, functionality and accessibility.",
      btnPortfolio: "Download Portfolio",
      btnCv: "Download CV",
      btnContact: "Contact Me",
    },
    about: {
      name: "WASHINGTON Temfing Brenda",
      role1: "UI/UX Designer & ",
      role2: "Artist",
      descriptionLabel: "About me:",
      p1: "As a UI/UX Designer with growing experience in digital interface design, I've had the opportunity to work on a wide range of projects, from building functional mockups to optimising user journeys. My approach relies on a deep understanding of user needs, strong command of collaborative design tools, and the ability to turn ideas into intuitive, accessible and coherent experiences.",
      p2: "Alongside my work as a designer, I'm also an illustrator, which enriches my practice with a strong artistic sensibility. This dual skill set lets me bring a strong visual dimension to my projects, blending functionality, aesthetics and storytelling. To me, good design is a subtle balance between usefulness, emotion and visual impact.",
    },
    portfolio: {
      title: "PORTFOLIO",
      subtitle: "UI/UX Designer & Artist",
      intro:
          "This portfolio showcases a selection of UX/UI, web/mobile development and illustration projects. Since most of my work is confidential (client projects), only personal or shareable pieces are presented here.",
      description: "DESCRIPTION",
      tools: "TOOLS",
      prev: "Previous project",
      next: "Next project",
      prevImage: "Previous image",
      nextImage: "Next image",
      close: "Close",
      gallery: "Interface previews",
    },
    projects: projectsEn,
    journey: {
      title: "JOURNEY",
      subtitle: "Experience & Education",
      intro: "A look at my professional and academic path, between interface design and web development.",
      experienceLabel: "Experience",
      educationLabel: "Education",
      current: "Ongoing",
      items: journeyEn,
    },
    contact: {
      title: "CONTACT",
      subtitle: "Let's work together",
      intro: "Have a project in mind, or a question? Feel free to reach out — I usually reply within 24h.",
      nameLabel: "Full name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "Subject of your message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      infoTitle: "Contact details",
      location: "Douala, Cameroon",
      locationNote: "Available for relocation",
      phone: "+237 690 24 47 34",
      email: "WashingtonTbrenda@gmail.com",
      portfolioLink: "portfoliobree.vercel.app",
    },
    langLabel: "EN",
  },
} as const