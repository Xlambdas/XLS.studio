import type { Language } from '../theme/theme.types';

export interface ProjectsTranslations {
    // Page labels
    ariaLabel: string;
    title: string;
    backButton: string;
    viewMore: string;
    backAriaLabel: string;
    carouselAriaLabel: string;
    carouselAriaLive: string;

    // Project data
    projects: {
        [key: number]: {
            title: string;
            subtitle: string;
            description: string;
            statusLabel: string;
        };
    };

    // Status labels
    statusLabels: {
        'soon-release': string;
        'paused': string;
        'started': string;
        'not-started': string;
        'in-progress': string;
        'completed': string;
    };
}

export const PROJECTS_TRANSLATIONS: Record<Language, ProjectsTranslations> = {
    en: {
        ariaLabel: 'Projects page',
        title: 'My Projects',
        backButton: '← Back',
        viewMore: 'View more →',
        backAriaLabel: 'Return to home page',
        carouselAriaLabel: 'Projects carousel: Use arrow keys or buttons to navigate through projects',
        carouselAriaLive: 'Carousel region, use left and right arrow keys to navigate',
        projects: {
            1: {
                title: 'Game Of Life',
                subtitle: 'Obsidian Plugin',
                description: 'A modern web extension built with React and Node.js. Plugin for the application © Obsidian.\n\nTrack quests, earn levels, and gamify your existence inside Obsidian.\nBuilt for those who seek mastery...',
                statusLabel: 'Soon to be released',
            },
            2: {
                title: 'Cognitive Science DB',
                subtitle: 'Knowledge Exploration',
                description: 'Cognitive Science Database and learning environment.\n\nCognitive science explores the nature of thought, learning, and mental organization, drawing from psychology, neuroscience, artificial intelligence, philosophy, linguistics, and anthropology.\nIt seeks to understand how information is processed and represented in the mind and brain, aiming to unravel the complexities of human cognition and behavior.',
                statusLabel: 'Paused',
            },
            3: {
                title: 'Upcoming Unity Project',
                subtitle: 'Unity Game',
                description: 'A full project on Unity. But no spoilers, you\'ll find out soon!',
                statusLabel: 'In progress',
            },
            4: {
                title: 'Upcoming Project',
                subtitle: 'TBA',
                description: 'Currently in progress, please be patient...',
                statusLabel: 'Not started',
            },
        },
        statusLabels: {
            'soon-release': 'Soon to be released',
            'paused': 'Paused',
            'started': 'In progress',
            'not-started': 'Not started',
            'in-progress': 'In progress',
            'completed': 'Completed',
        },
    },
    es: {
        ariaLabel: 'Página de proyectos',
        title: 'Mis Proyectos',
        backButton: '← Atrás',
        viewMore: 'Ver más →',
        backAriaLabel: 'Volver a la página de inicio',
        carouselAriaLabel: 'Carrusel de proyectos: Use las teclas de flecha o botones para navegar',
        carouselAriaLive: 'Región del carrusel, use las teclas de flecha izquierda y derecha para navegar',
        projects: {
            1: {
                title: 'Game Of Life',
                subtitle: 'Complemento de Obsidian',
                description: 'Una extensión web moderna construida con React y Node.js. Complemento para la aplicación © Obsidian.\n\nRastreaa misiones, gana niveles y gamifica tu existencia dentro de Obsidian.\nConstruido para quienes buscan dominio...',
                statusLabel: 'Próximo a lanzarse',
            },
            2: {
                title: 'Base de Datos de Ciencia Cognitiva',
                subtitle: 'Exploración del Conocimiento',
                description: 'Base de datos de ciencia cognitiva y entorno de aprendizaje.\n\nLa ciencia cognitiva explora la naturaleza del pensamiento, el aprendizaje y la organización mental, extrayendo de la psicología, neurociencia, inteligencia artificial, filosofía, lingüística y antropología.\nBusca comprender cómo se procesa y representa la información en la mente y el cerebro.',
                statusLabel: 'Pausado',
            },
            3: {
                title: 'Próximo Proyecto Unity',
                subtitle: 'Juego Unity',
                description: '¡Un proyecto completo en Unity. Pero sin spoilers, te enterarás pronto!',
                statusLabel: 'En progreso',
            },
            4: {
                title: 'Próximo Proyecto',
                subtitle: 'Por definir',
                description: 'Actualmente en progreso, por favor ten paciencia...',
                statusLabel: 'No iniciado',
            },
        },
        statusLabels: {
            'soon-release': 'Próximo a lanzarse',
            'paused': 'Pausado',
            'started': 'En progreso',
            'not-started': 'No iniciado',
            'in-progress': 'En progreso',
            'completed': 'Completado',
        },
    },
    fr: {
        ariaLabel: 'Page des projets',
        title: 'Mes Projets',
        backButton: '← Retour',
        viewMore: 'Voir plus →',
        backAriaLabel: 'Retour à la page d\'accueil',
        carouselAriaLabel: 'Carrousel de projets: Utilisez les touches fléchées ou les boutons pour naviguer',
        carouselAriaLive: 'Région du carrousel, utilisez les touches fléchées gauche et droite pour naviguer',
        projects: {
            1: {
                title: 'Game Of Life',
                subtitle: 'Plugin Obsidian',
                description: 'Une extension web moderne construite avec React et Node.js. Plugin pour l\'application © Obsidian.\n\nSuivez des quêtes, gagnez des niveaux et gamifiez votre existence dans Obsidian.\nConstruit pour ceux qui recherchent la maîtrise...',
                statusLabel: 'À paraître bientôt',
            },
            2: {
                title: 'Base de Données de Sciences Cognitives',
                subtitle: 'Exploration de la Connaissance',
                description: 'Base de données de sciences cognitives et environnement d\'apprentissage.\n\nLes sciences cognitives explorent la nature de la pensée, de l\'apprentissage et de l\'organisation mentale, s\'inspirant de la psychologie, des neurosciences, de l\'intelligence artificielle, de la philosophie, de la linguistique et de l\'anthropologie.\nElle cherche à comprendre comment l\'information est traitée et représentée dans l\'esprit et le cerveau.',
                statusLabel: 'En pause',
            },
            3: {
                title: 'Prochain Projet Unity',
                subtitle: 'Jeu Unity',
                description: 'Un projet complet sur Unity. Mais pas de spoilers, vous le saurez bientôt!',
                statusLabel: 'En cours',
            },
            4: {
                title: 'Prochain Projet',
                subtitle: 'À déterminer',
                description: 'Actuellement en cours, veuillez patienter...',
                statusLabel: 'Non commencé',
            },
        },
        statusLabels: {
            'soon-release': 'À paraître bientôt',
            'paused': 'En pause',
            'started': 'En cours',
            'not-started': 'Non commencé',
            'in-progress': 'En cours',
            'completed': 'Terminé',
        },
    },
    de: {
        ariaLabel: 'Projektseite',
        title: 'Meine Projekte',
        backButton: '← Zurück',
        viewMore: 'Mehr anzeigen →',
        backAriaLabel: 'Zurück zur Startseite',
        carouselAriaLabel: 'Projekt-Karussell: Verwenden Sie Pfeiltasten oder Schaltflächen zum Navigieren',
        carouselAriaLive: 'Karussellbereich, verwenden Sie die linke und rechte Pfeiltaste zum Navigieren',
        projects: {
            1: {
                title: 'Game Of Life',
                subtitle: 'Obsidian-Plugin',
                description: 'Eine moderne Weberweiterung, die mit React und Node.js erstellt wurde. Plugin für die Anwendung © Obsidian.\n\nVerfolgen Sie Quests, verdienen Sie Ebenen und gamifizieren Sie Ihre Existenz in Obsidian.\nGebaut für diejenigen, die Beherrschung anstreben...',
                statusLabel: 'Bald erhältlich',
            },
            2: {
                title: 'Kognitionswissenschaftliche Datenbank',
                subtitle: 'Wissenerkundung',
                description: 'Datenbank für Kognitionswissenschaft und Lernumgebung.\n\nKognitionswissenschaft untersucht die Natur des Denkens, des Lernens und der mentalen Organisation und zieht aus Psychologie, Neurowissenschaften, künstlicher Intelligenz, Philosophie, Linguistik und Anthropologie.\nSie versucht zu verstehen, wie Informationen im Geist und im Gehirn verarbeitet und dargestellt werden.',
                statusLabel: 'Pausiert',
            },
            3: {
                title: 'Bevorstehendes Unity-Projekt',
                subtitle: 'Unity-Spiel',
                description: 'Ein vollständiges Projekt in Unity. Aber keine Spoiler, Sie erfahren es bald!',
                statusLabel: 'In Bearbeitung',
            },
            4: {
                title: 'Bevorstehendes Projekt',
                subtitle: 'Noch zu bestimmen',
                description: 'Derzeit in Bearbeitung, bitte haben Sie Geduld...',
                statusLabel: 'Nicht gestartet',
            },
        },
        statusLabels: {
            'soon-release': 'Bald erhältlich',
            'paused': 'Pausiert',
            'started': 'In Bearbeitung',
            'not-started': 'Nicht gestartet',
            'in-progress': 'In Bearbeitung',
            'completed': 'Abgeschlossen',
        },
    },
};