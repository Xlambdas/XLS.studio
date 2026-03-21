import type { Language } from '../theme/theme.types';

export interface HomeTranslations {
    // Welcome Section
    welcomeTitle: string;
    welcomeSubtitle: string;
    enterSystem: string;

    // About Section
    aboutTitle: string;
    aboutDescription: string;
    myProjects: string;
    myPortfolio: string;

    // Sandbox Section
    sandboxTitle: string;
    sandboxDescription: string;
    discoverMore: string;

    // Accessibility labels
    welcomeAriaLabel: string;
    aboutAriaLabel: string;
    sandboxAriaLabel: string;
}

export const HOME_TRANSLATIONS: Record<Language, HomeTranslations> = {
    en: {
        welcomeTitle: 'WELCOME',
        welcomeSubtitle: 'Explore cognitive science, quizzes & projects',
        enterSystem: 'Enter the system',
        aboutTitle: 'FROM KNOWLEDGE TO SYSTEMS',
        aboutDescription: 'I design structured digital environments that transform complex knowledge into interactive tools. From cognitive science to UI systems, each project is built to explore how humans think, learn and interact.',
        myProjects: 'My Projects',
        myPortfolio: 'My Portfolio',
        sandboxTitle: 'THE SANDBOX',
        sandboxDescription: 'A controlled environment for experimentation, iteration, and structured exploration.',
        discoverMore: 'Discover more',
        welcomeAriaLabel: 'Welcome',
        aboutAriaLabel: 'About',
        sandboxAriaLabel: 'Sandbox',

    },
    es: {
        welcomeTitle: 'BIENVENIDO',
        welcomeSubtitle: 'Explora ciencia cognitiva, cuestionarios y proyectos',
        enterSystem: 'Entrar al sistema',
        aboutTitle: 'DEL CONOCIMIENTO A LOS SISTEMAS',
        aboutDescription: 'Diseño entornos digitales estructurados que transforman el conocimiento complejo en herramientas interactivas. Desde la ciencia cognitiva hasta los sistemas de interfaz, cada proyecto está diseñado para explorar cómo piensan, aprenden e interactúan los humanos.',
        myProjects: 'Mis Proyectos',
        myPortfolio: 'Mi Portafolio',
        sandboxTitle: 'LA CAJA DE ARENA',
        sandboxDescription: 'Un entorno controlado para la experimentación, la iteración y la exploración estructurada.',
        discoverMore: 'Descubre más',
        welcomeAriaLabel: 'Bienvenido',
        aboutAriaLabel: 'Acerca de',
        sandboxAriaLabel: 'Caja de arena',
    },
    fr: {
        welcomeTitle: 'BIENVENUE',
        welcomeSubtitle: 'Explorez la science cognitive, les quiz et les projets',
        enterSystem: 'Entrer dans le système',
        aboutTitle: 'DU SAVOIR AUX SYSTÈMES',
        aboutDescription: 'Je conçois des environnements numériques structurés qui transforment les connaissances complexes en outils interactifs. De la science cognitive aux systèmes d\'interface, chaque projet est conçu pour explorer comment les humains pensent, apprennent et interagissent.',
        myProjects: 'Mes Projets',
        myPortfolio: 'Mon Portfolio',
        sandboxTitle: 'LE BAC À SABLE',
        sandboxDescription: 'Un environnement contrôlé pour l\'expérimentation, l\'itération et l\'exploration structurée.',
        discoverMore: 'Découvrir plus',
        welcomeAriaLabel: 'Bienvenue',
        aboutAriaLabel: 'À propos',
        sandboxAriaLabel: 'Bac à sable',
    },
    de: {
        welcomeTitle: 'WILLKOMMEN',
        welcomeSubtitle: 'Erkunden Sie Kognitionswissenschaft, Quiz und Projekte',
        enterSystem: 'System betreten',
        aboutTitle: 'VOM WISSEN ZUM SYSTEM',
        aboutDescription: 'Ich gestalte strukturierte digitale Umgebungen, die komplexes Wissen in interaktive Werkzeuge umwandeln. Von der Kognitionswissenschaft bis zu UI-Systemen ist jedes Projekt darauf ausgerichtet zu erforschen, wie Menschen denken, lernen und interagieren.',
        myProjects: 'Meine Projekte',
        myPortfolio: 'Mein Portfolio',
        sandboxTitle: 'DIE SANDBOX',
        sandboxDescription: 'Eine kontrollierte Umgebung für Experimente, Iteration und strukturierte Erkundung.',
        discoverMore: 'Mehr entdecken',
        welcomeAriaLabel: 'Willkommen',
        aboutAriaLabel: 'Über',
        sandboxAriaLabel: 'Sandbox',
    },
};