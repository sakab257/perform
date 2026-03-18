// ============================================================
// Navigation
// ============================================================

export const navLinks = [
  { label: "Coaching", href: "#coaching" },
  { label: "Avis", href: "#reviews" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "/contact" },
] as const;

// ============================================================
// Hero Section
// ============================================================

export const hero = {
  preheading: "Coach expérimenté",
  heading: ["Atteignez Votre", "Meilleur Niveau"],
  paragraph:
    "Améliorez vos performances physique grâce à des plans d'entraînement personnalisés, encadrés par un coach expérimenté dédié à votre réussite.",
  cta: "Commencer",
  reviewsText: "100+ avis clients positifs",
  backgroundImage: {
    src: "/images/hero-image.webp",
    alt: "Photo dynamique d'un coach qui court",
  },
} as const;

// ============================================================
// Trust Section
// ============================================================

export const trust = {
  heading: {
    bold: "Des débutants aux athlètes confirmés, je crée des plans sur mesure",
    regular:
      " conçus pour vous aider à exploiter tout votre potentiel et réussir en compétition.",
  },
  image: {
    src: "/images/coach-explaining.png",
    alt: "Coach expliquant une stratégie à un athlète",
  },
  stats: [
    { value: 15, label: "Années d'expérience" },
    { value: 200, label: "Athlètes coachés" },
    { value: 500, label: "Stratégies de course" },
    { value: 10000, label: "Heures d'entraînement" },
  ],
} as const;

// ============================================================
// Coaching Plans
// ============================================================

export interface CoachingPlan {
  name: string;
  price: string;
  features: string[];
  image: {
    src: string;
    alt: string;
  };
}

export const coachingPlans: CoachingPlan[] = [
  {
    name: "Basic",
    price: "59€/mois",
    features: [
      "Consultation initiale gratuite",
      "Mise à jour du plan toutes les 2 semaines",
      "Coaching via l'application TrainingPeaks",
      "Suivi hebdomadaire",
    ],
    image: {
      src: "/images/coaching-swimming.png",
      alt: "Nageur s'entraînant en eau libre",
    },
  },
  {
    name: "Standard",
    price: "99€/mois",
    features: [
      "Tout le contenu précédent",
      "Élaboration d'une stratégie de course spécifique",
      "Développement d'un plan nutritionnel adapté",
      "Avantages partenaires inclus",
    ],
    image: {
      src: "/images/coaching-running.png",
      alt: "Coureur de trail s'entraînant en forêt",
    },
  },
  {
    name: "Premium",
    price: "169€/mois",
    features: [
      "Tout le contenu précédent",
      "Mises à jour et modifications illimitées du plan",
      "Suivi et analyse de performance en continu",
      "Travail sur le mental pour des performances optimales",
    ],
    image: {
      src: "/images/coaching-premium.png",
      alt: "Athlète célébrant à la ligne d'arrivée",
    },
  },
];

// ============================================================
// Testimonials
// ============================================================

export interface Testimonial {
  quote: string;
  author: string;
  avatarIndex: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Avec le bon coaching, j\u2019ai pu dépasser mes limites. Je n\u2019aurais jamais atteint mes objectifs sans l\u2019accompagnement et le soutien d\u2019un coach expérimenté.",
    author: "Emily Johnson, Professeure de yoga",
    avatarIndex: 0,
  },
  {
    quote:
      "La différence entre s\u2019entraîner seul et avec un coach expert est énorme. Je ne me suis jamais senti aussi confiant et préparé pour mes courses.",
    author: "David Thompson, Architecte",
    avatarIndex: 1,
  },
  {
    quote:
      "J\u2019ai appris plus en quelques mois avec mon coach qu\u2019en des années d\u2019entraînement solo. Son approche personnalisée a fait toute la différence.",
    author: "Sarah Miller, Avocate",
    avatarIndex: 2,
  },
  {
    quote:
      "S\u2019entraîner avec un coach qui connaît vraiment le sport a tout changé. J\u2019ai gagné plusieurs minutes sur mes chronos et je suis au meilleur de ma forme.",
    author: "James Carter, Journaliste",
    avatarIndex: 3,
  },
];

export const testimonialAvatars = [
  { src: "/images/avatar-woman-blonde.png", alt: "Emily Johnson" },
  { src: "/images/avatar-athlete-male.png", alt: "David Thompson" },
  { src: "/images/avatar-woman-swimmer.png", alt: "Sarah Miller" },
  { src: "/images/avatar-man-gray.png", alt: "James Carter" },
];

// ============================================================
// About Section
// ============================================================

export const aboutSection = {
  blocks: [
    {
      bold: "J\u2019ai commencé le triathlon en galérant avec l\u2019équilibre et la technique. ",
      regular: "Aujourd\u2019hui, j\u2019accompagne les autres pour atteindre leur plein potentiel.",
      image: {
        src: "/images/triathlete-grayscale.png",
        alt: "Triathlète concentré en noir et blanc",
      },
    },
    {
      bold: "Mon coaching allie préparation physique et stratégies mentales, ",
      regular:
        "aidant les athlètes à développer force et confiance pour repousser leurs limites.",
      image: {
        src: "/images/coach-athlete.png",
        alt: "Coach en discussion avec un athlète",
      },
    },
    {
      bold: "Ensemble, nous briserons les barrières et libérerons votre potentiel, ",
      regular:
        "transformant chaque étape en victoire grâce à un coaching personnalisé.",
      image: {
        src: "/images/athlete-winning.png",
        alt: "Athlète remportant une course",
      },
    },
  ],
} as const;

// ============================================================
// FAQ Section
// ============================================================

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Quel type de coaching proposez-vous ?",
    answer:
      "Je propose un coaching sportif personnalisé adapté à tous les niveaux — que vous soyez débutant ou sportif confirmé. Chaque programme est conçu sur mesure en fonction de vos objectifs, votre condition physique actuelle et votre emploi du temps.",
  },
  {
    question: "Comment se déroule la première séance ?",
    answer:
      "La première séance est un bilan complet : nous évaluons votre forme physique, vos habitudes et vos objectifs. À partir de là, je construis un programme adapté. C\u2019est aussi l\u2019occasion de faire connaissance et de poser toutes vos questions.",
  },
  {
    question: "Puis-je être coaché à distance ?",
    answer:
      "Absolument ! Je propose un suivi entièrement à distance. Vous recevrez votre programme d\u2019entraînement, des bilans réguliers et un accompagnement continu via une application dédiée, où que vous soyez.",
  },
  {
    question: "À quelle fréquence faut-il s\u2019entraîner ?",
    answer:
      "Cela dépend de vos objectifs et de votre disponibilité. En général, je recommande 3 à 5 séances par semaine, avec un équilibre entre effort et récupération. Le programme s\u2019adapte à votre rythme de vie.",
  },
  {
    question: "Le coaching inclut-il des conseils en nutrition ?",
    answer:
      "Oui, selon la formule choisie. L\u2019alimentation est un pilier essentiel de la performance. Je vous propose des recommandations nutritionnelles adaptées à vos objectifs, que ce soit pour la perte de poids, la prise de masse ou l\u2019optimisation de vos performances.",
  },
];

// ============================================================
// CTA Section
// ============================================================

export const ctaSection = {
  heading: "Prêt à atteindre vos objectifs ?",
  paragraph:
    "Je vous aiderai à repousser vos limites et à garder une longueur d\u2019avance sur la concurrence.",
  cta: "Parlons-en",
  backgroundImage: {
    src: "/images/cta-track-sunset.png",
    alt: "Athlètes s'entraînant sur une piste au coucher du soleil",
  },
} as const;

// ============================================================
// Contact Page
// ============================================================

export const contactPage = {
  heading: "Prenons contact",
  paragraph:
    "Prêt à passer au niveau supérieur en triathlon ? Contactez-moi dès aujourd\u2019hui et créons ensemble votre plan d\u2019entraînement personnalisé.",
  phone: "+123456789",
  email: "info@example.com",
  portrait: {
    src: "/images/contact-portrait.png",
    alt: "Portrait du coach",
  },
  formFields: {
    name: { label: "Nom", placeholder: "Jean Dupont" },
    email: { label: "Email", placeholder: "exemple@exemple.com" },
    phone: { label: "Téléphone", placeholder: "+33 6 12 34 56 78", optional: true },
    coachingPlan: {
      label: "Plan de coaching",
      placeholder: "Sélectionner...",
      optional: true,
      options: ["Basic", "Standard", "Premium"],
    },
    message: { label: "Message", placeholder: "J'ai besoin de..." },
  },
  submitButton: "Envoyer",
} as const;

// ============================================================
// Footer
// ============================================================

export const footer = {
  brand: "Perform",
  description:
    "Améliorez vos performances en triathlon grâce à des plans d'entraînement personnalisés, encadrés par un coach expérimenté dédié à votre réussite.",
  createdBy: { label: "SAKAB", href: "https://www.sakab.fr" },
  sections: [
    { label: "À propos", href: "#about" },
    { label: "Coaching", href: "#coaching" },
    { label: "Avis", href: "#reviews" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Twitter", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
} as const;

// ============================================================
// Images (centralized paths)
// ============================================================

export const images = {
  logoIcon: "/images/logo-icon.png",
  heroCyclist: "/images/hero-cyclist.jpg",
  coachExplaining: "/images/coach-explaining.png",
  triathleteGrayscale: "/images/triathlete-grayscale.png",
  coachAthlete: "/images/coach-athlete.png",
  athleteWinning: "/images/athlete-winning.png",
  coachingSwimming: "/images/coaching-swimming.png",
  coachingRunning: "/images/coaching-running.png",
  coachingPremium: "/images/coaching-premium.png",
  ctaTrackSunset: "/images/cta-track-sunset.png",
  contactPortrait: "/images/contact-portrait.png",
  avatarAthleteMale: "/images/avatar-athlete-male.png",
  avatarWomanBlonde: "/images/avatar-woman-blonde.png",
  avatarWomanSwimmer: "/images/avatar-woman-swimmer.png",
  avatarManGray: "/images/avatar-man-gray.png",
} as const;
