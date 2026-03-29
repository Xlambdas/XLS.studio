import type { Language } from '../pages/settings';

export type EntryType = 'studies' | 'work' | 'personal' | 'project' | 'event' | 'education' | 'other';

export interface PortfolioTranslations {
    // Navigation
    navigation: {
        back: string;
        github: string;
    };

    // Page labels
    ariaLabel: string;

    // Sidebar Navigation
    sidebar: {
        labelCollapse: string;
        labelExpand: string;
        files: {
            [key: string]: {
                name: string;
                comment: string;
            };
        };
        folders: {
            [key: string]: {
                name: string;
                comment: string;
            };
        };
        footer: {
            copyright: string;
            githubLabel: string;
        };
    };

    // Hero Section
    hero: {
        title: string;
        subtitle: string;
        ariaLabel: string;
    };

    // About Section
    about: {
        title: string;
        description: string;
        ariaLabel: string;
    };

    // Skills Section
    skills: {
        title: string;
        description: string;
        ariaLabel: string;
        finalNote: string;
        categories: {
            gamedev: {
                title: string;
                description: string;
                subcategories: {
                    design: {
                        name: string;
                        skills: string[];
                    };
                    development: {
                        name: string;
                        skills: string[];
                    };
                    relatedSkills: {
                        name: string;
                        skills: string[];
                    };
                };
            };
            uiux: {
                title: string;
                description: string;
                subcategories: {
                    tools: {
                        name: string;
                        skills: string[];
                    };
                    principles: {
                        name: string;
                        skills: string[];
                    };
                    advanced: {
                        name: string;
                        skills: string[];
                    };
                };
            };
            webdev: {
                title: string;
                description: string;
                subcategories: {
                    frontend: {
                        name: string;
                        skills: string[];
                    };
                    tools: {
                        name: string;
                        skills: string[];
                    };
                    backend: {
                        name: string;
                        skills: string[];
                    };
                };
            };
            dataAlgorithms: {
                title: string;
                description: string;
                subcategories: {
                    algorithms: {
                        name: string;
                        skills: string[];
                    };
                    datascience: {
                        name: string;
                        skills: string[];
                    };
                    mathematics: {
                        name: string;
                        skills: string[];
                    };
                };
            };
            cognitivescience: {
                title: string;
                description: string;
                subcategories: {
                    cognitive: {
                        name: string;
                        skills: string[];
                    };
                    hci: {
                        name: string;
                        skills: string[];
                    };
                    learning: {
                        name: string;
                        skills: string[];
                    };
                };
            };
        };
    };

    // Timeline Section (for future use)
    timeline?: {
        title: string;
        description: string;
        ariaLabel: string;
        entries?: {
            [key: number]: {
                startDate?: string;
                endDate: string;
                type: EntryType;
                title: string;
                description: string;
            };
        };
    };

    // Interests Section (for future use)
    interests?: {
        title: string;
        description: string;
        ariaLabel: string;
    };

    // Values Section (for future use)
    values?: {
        title: string;
        description: string;
        ariaLabel: string;
    };

    // Contact Section (for future use)
    contact?: {
        title: string;
        description: string;
        ariaLabel: string;
        getInTouch: string;
        links: {
            [key: string]: {
                label: string;
                href: string;
            };
        };
    };
}

export const PORTFOLIO_TRANSLATIONS: Record<Language, PortfolioTranslations> = {
    en: {
        navigation: {
            back: '← Back',
            github: 'github',
        },

        // Page labels
        ariaLabel: 'Portfolio page',

        // Sidebar Navigation
        sidebar: {
            labelCollapse: 'Collapse sidebar',
            labelExpand: 'Expand sidebar',
            files: {
                about: {
                    name: 'AboutMe',
                    comment: '# About section',
                },
                skills: {
                    name: 'Skills',
                    comment: '# Skills & expertise',
                },
                timeline: {
                    name: 'Timeline',
                    comment: '# My Timeline',
                },
                interests: {
                    name: 'Interests',
                    comment: '# My Interests',
                },
                values: {
                    name: 'Values',
                    comment: '# Personal values and philosophy',
                },
                contact: {
                    name: 'Contact',
                    comment: '# Contact section',
                },
            },
            folders: {
                portfolio: {
                    name: 'portfolio',
                    comment: '',
                },
                aboutme: {
                    name: 'About_me',
                    comment: '# About me subfolder',
                },
            },
            footer: {
                copyright: '©',
                githubLabel: 'github',
            },
        },

        // Hero Section
        hero: {
            title: 'Designer & Developer',
            subtitle: 'Crafting intuitive experiences at the intersection of design, code, and cognitive science',
            ariaLabel: 'Portfolio introduction',
        },

        // About Section
        about: {
            title: 'About me',
            description: 'I\'m a designer and developer passionate about creating human-centered digital experiences. With a background in cognitive science and expertise spanning game development, UI/UX design, and web technologies, I approach every project with clarity and intentionality.',
            ariaLabel: 'About me section',
        },

        // Skills Section
        skills: {
            title: 'Skills',
            description: 'A comprehensive overview of my expertise across game development, design, web technologies, and cognitive science.',
            ariaLabel: 'Skills section',
            finalNote: 'I continuously explore emerging technologies and methodologies. Always learning, always building.',
            categories: {
                gamedev: {
                    title: 'Game Development & Design',
                    description: 'Interactive systems and game mechanics',
                    subcategories: {
                        design: {
                            name: 'Game Design',
                            skills: ['Game Mechanics', 'Level Design', 'Player Psychology', 'System Design'],
                        },
                        development: {
                            name: 'Game Development',
                            skills: ['Unity', 'C#', 'Physics Systems', 'UI/UX for Games'],
                        },
                        relatedSkills: {
                            name: 'Related Skills',
                            skills: ['Prototyping', 'Playtesting', 'Game Narrative', '3D Modeling basics'],
                        },
                    },
                },
                uiux: {
                    title: 'UI/UX Design',
                    description: 'Digital product design and user experience',
                    subcategories: {
                        tools: {
                            name: 'Design Tools & Methods',
                            skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
                        },
                        principles: {
                            name: 'Design Principles',
                            skills: ['User Research', 'Usability Testing', 'Information Architecture', 'Responsive Design'],
                        },
                        advanced: {
                            name: 'Advanced Design',
                            skills: ['Adaptive Design', 'Interaction Design', 'Accessibility (A11y)', 'User Testing'],
                        },
                    },
                },
                webdev: {
                    title: 'Web Development',
                    description: 'Frontend and full-stack web technologies',
                    subcategories: {
                        frontend: {
                            name: 'Frontend',
                            skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
                        },
                        tools: {
                            name: 'Frontend Tools & Build',
                            skills: ['Vite', 'Node.js', 'npm/yarn', 'Git & GitHub', 'Terminal/CLI'],
                        },
                        backend: {
                            name: 'Backend & APIs',
                            skills: ['Node.js', 'PHP', 'REST APIs', 'Database Design'],
                        },
                    },
                },
                dataAlgorithms: {
                    title: 'Data & Algorithms',
                    description: 'Computational thinking and data science',
                    subcategories: {
                        algorithms: {
                            name: 'Algorithms & Problem Solving',
                            skills: ['Algorithm Design', 'Data Structures', 'Computational Thinking', 'Code Optimization'],
                        },
                        datascience: {
                            name: 'Data Science',
                            skills: ['Python', 'Data Analysis', 'Statistical Thinking', 'Data Visualization'],
                        },
                        mathematics: {
                            name: 'Mathematical Thinking',
                            skills: ['Linear Algebra', 'Discrete Math', 'Probability', 'Pattern Recognition'],
                        },
                    },
                },
                cognitivescience: {
                    title: 'Cognitive Science & Human-Centered Design',
                    description: 'Understanding human behavior and interaction',
                    subcategories: {
                        cognitive: {
                            name: 'Cognitive Science',
                            skills: ['Cognitive Psychology', 'Learning Systems', 'Memory & Attention', 'Decision Making'],
                        },
                        hci: {
                            name: 'Human-Computer Interaction',
                            skills: ['User Interaction Design', 'Usability Research', 'Accessibility', 'User Behavior Analysis'],
                        },
                        learning: {
                            name: 'Learning & Behavior',
                            skills: ['Learning Design', 'Gamification', 'User Engagement', 'Behavioral Psychology'],
                        },
                    },
                },
            },
        },

        timeline: {
            title: "Timeline",
            description: "A path through design, code, and research.",
            ariaLabel: "Timeline section",
            entries: {
                0: { startDate: "2026-02-02", endDate: "2026-06-30", title: "Game dev internship", type: "education", description: "Developed a game concept and prototype using Unity and C#." },
                1: { startDate: "2021-09", endDate: "2026-01", title: "Bachelor MIASHS", type: "education", description: "At the University of Bordeaux, focusing on cognitive science and human-computer interaction." },
                2: { endDate: "2021-06", title: "French baccalauréat", type: "education", description: "Completed high school education with a focus on science and mathematics." },
                3: { startDate: "2026-02", endDate: "2026-03", title: "Portfolio Launch", type: "work", description: "Launching this portfolio to showcase my work and journey." },
                4: { startDate: "2025-05", endDate: "2026-09", title: "Plugin GOL", type: "project", description: "Developed a plugin for the note taking application (Obsidian)." },
            }
        },

        // Interests Section (placeholder for future implementation)
        interests: {
            title: 'Interests',
            description: 'Areas I explore and continue learning about',
            ariaLabel: 'Interests section',
        },

        // Values Section (placeholder for future implementation)
        values: {
            title: 'Values',
            description: 'Core principles that guide my work',
            ariaLabel: 'Values section',
        },

        // Contact Section (placeholder for future implementation)
        contact: {
            title: 'Get in Touch',
            description: 'Let\'s connect and explore opportunities together.',
            ariaLabel: 'Contact section',
            getInTouch: 'Contact Me',
            links: {
                email: {
                    label: 'Email',
                    href: 'mailto:cogassien@hotmail.com',
                },
                linkedin: {
                    label: 'LinkedIn',
                    href: 'https://fr.linkedin.com/in/corentin-gassien-1b7289261',
                },
                github: {
                    label: 'GitHub',
                    href: 'https://github.com/Xlambdas',
                },
            },
        },
    },
    es: {
        navigation: {
            back: '← Volver',
            github: 'github',
        },
        ariaLabel: 'Página de portafolio',

        sidebar: {
            labelExpand: 'Mostrar barra lateral',
            labelCollapse: 'Ocultar barra lateral',
            files: {
                about: { name: 'SobreMi', comment: '# Sección sobre mí' },
                skills: { name: 'Habilidades', comment: '# Habilidades y experiencia' },
                timeline: { name: 'Cronología', comment: '# Mi cronología' },
                interests: { name: 'Intereses', comment: '# Mis intereses' },
                values: { name: 'Valores', comment: '# Valores personales y filosofía' },
                contact: { name: 'Contacto', comment: '# Sección de contacto' },
            },
            folders: {
                portfolio: { name: 'portafolio', comment: '' },
                aboutme: { name: 'Sobre_mi', comment: '# Subcarpeta sobre mí' },
            },
            footer: {
                copyright: '©',
                githubLabel: 'github',
            },
        },

        hero: {
            title: 'Diseñador y Desarrollador',
            subtitle: 'Creando experiencias intuitivas en la intersección del diseño, el código y la ciencia cognitiva',
            ariaLabel: 'Introducción del portafolio',
        },

        about: {
            title: 'Sobre mí',
            description: 'Soy un diseñador y desarrollador apasionado por crear experiencias digitales centradas en el usuario...',
            ariaLabel: 'Sección sobre mí',
        },

        skills: {
            title: 'Habilidades',
            description: 'Una visión completa de mi experiencia en desarrollo de juegos, diseño, tecnologías web y ciencia cognitiva.',
            ariaLabel: 'Sección de habilidades',
            finalNote: 'Exploro continuamente nuevas tecnologías y metodologías. Siempre aprendiendo, siempre construyendo.',
            categories: {
                gamedev: {
                    title: 'Desarrollo y Diseño de Juegos',
                    description: 'Sistemas interactivos y mecánicas de juego',
                    subcategories: {
                        design: {
                            name: 'Diseño de Juegos',
                            skills: ['Mecánicas de juego', 'Diseño de niveles', 'Psicología del jugador', 'Diseño de sistemas'],
                        },
                        development: {
                            name: 'Desarrollo de Juegos',
                            skills: ['Unity', 'C#', 'Sistemas de física', 'UI/UX para juegos'],
                        },
                        relatedSkills: {
                            name: 'Habilidades relacionadas',
                            skills: ['Prototipado', 'Playtesting', 'Narrativa de juego', 'Modelado 3D básico'],
                        },
                    },
                },
                uiux: {
                    title: 'Diseño UI/UX',
                    description: 'Diseño de productos digitales y experiencia de usuario',
                    subcategories: {
                        tools: {
                            name: 'Herramientas y métodos',
                            skills: ['Figma', 'Wireframing', 'Prototipado', 'Sistemas de diseño'],
                        },
                        principles: {
                            name: 'Principios de diseño',
                            skills: ['Investigación de usuarios', 'Pruebas de usabilidad', 'Arquitectura de la información', 'Diseño responsivo'],
                        },
                        advanced: {
                            name: 'Diseño avanzado',
                            skills: ['Diseño adaptativo', 'Diseño de interacción', 'Accesibilidad (A11y)', 'Pruebas de usuario'],
                        },
                    },
                },
                webdev: {
                    title: 'Desarrollo Web',
                    description: 'Tecnologías frontend y full-stack',
                    subcategories: {
                        frontend: {
                            name: 'Frontend',
                            skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
                        },
                        tools: {
                            name: 'Herramientas frontend',
                            skills: ['Vite', 'Node.js', 'npm/yarn', 'Git & GitHub', 'Terminal/CLI'],
                        },
                        backend: {
                            name: 'Backend y APIs',
                            skills: ['Node.js', 'PHP', 'APIs REST', 'Diseño de bases de datos'],
                        },
                    },
                },
                dataAlgorithms: {
                    title: 'Datos y Algoritmos',
                    description: 'Pensamiento computacional y ciencia de datos',
                    subcategories: {
                        algorithms: {
                            name: 'Algoritmos y resolución de problemas',
                            skills: ['Diseño de algoritmos', 'Estructuras de datos', 'Pensamiento computacional', 'Optimización de código'],
                        },
                        datascience: {
                            name: 'Ciencia de datos',
                            skills: ['Python', 'Análisis de datos', 'Pensamiento estadístico', 'Visualización de datos'],
                        },
                        mathematics: {
                            name: 'Pensamiento matemático',
                            skills: ['Álgebra lineal', 'Matemática discreta', 'Probabilidad', 'Reconocimiento de patrones'],
                        },
                    },
                },
                cognitivescience: {
                    title: 'Ciencia Cognitiva y Diseño Centrado en el Usuario',
                    description: 'Comprender el comportamiento humano',
                    subcategories: {
                        cognitive: {
                            name: 'Ciencia cognitiva',
                            skills: ['Psicología cognitiva', 'Sistemas de aprendizaje', 'Memoria y atención', 'Toma de decisiones'],
                        },
                        hci: {
                            name: 'Interacción humano-computadora',
                            skills: ['Diseño de interacción', 'Investigación de usabilidad', 'Accesibilidad', 'Análisis del comportamiento'],
                        },
                        learning: {
                            name: 'Aprendizaje y comportamiento',
                            skills: ['Diseño de aprendizaje', 'Gamificación', 'Engagement', 'Psicología conductual'],
                        },
                    },
                },
            },
        },

        timeline: {
            title: 'Trayectoria',
            description: 'Mi evolución profesional y hitos',
            ariaLabel: 'Sección de cronología',
            entries: {
                0: { endDate: '2024', title: 'Proyecto reciente', type: 'project', description: 'Descripción próximamente' },
                1: { endDate: '2023', title: 'Experiencia', type: 'event', description: 'Descripción próximamente' },
                2: { endDate: '2022', title: 'Educación', type: 'education', description: 'Descripción próximamente' },
            },
        },

        interests: {
            title: 'Intereses',
            description: 'Áreas que exploro y en las que sigo aprendiendo',
            ariaLabel: 'Sección de intereses',
        },

        values: {
            title: 'Valores',
            description: 'Principios que guían mi trabajo',
            ariaLabel: 'Sección de valores',
        },

        contact: {
            title: 'Contacto',
            description: 'Conectemos y exploremos oportunidades juntos.',
            ariaLabel: 'Sección de contacto',
            getInTouch: 'Contactar',
            links: {
                email: { label: 'Email', href: 'mailto:cogassien@hotmail.com' },
                linkedin: { label: 'LinkedIn', href: 'https://fr.linkedin.com/in/corentin-gassien-1b7289261' },
                github: { label: 'GitHub', href: 'https://github.com/Xlambdas' },
            },
        },
    },

    fr: {
        navigation: { back: '← Retour', github: 'github' },
        ariaLabel: 'Page portfolio',

        sidebar: {
            labelExpand: 'Afficher la barre latérale',
            labelCollapse: 'Masquer la barre latérale',
            files: {
                about: { name: 'À_propos', comment: '# Section à propos' },
                skills: { name: 'Compétences', comment: '# Compétences et expertise' },
                timeline: { name: 'Chronologie', comment: '# Mon parcours' },
                interests: { name: 'Intérêts', comment: '# Mes intérêts' },
                values: { name: 'Valeurs', comment: '# Valeurs et philosophie' },
                contact: { name: 'Contact', comment: '# Section contact' },
            },
            folders: {
                portfolio: { name: 'portfolio', comment: '' },
                aboutme: { name: 'A_propos', comment: '# Dossier à propos' },
            },
            footer: { copyright: '©', githubLabel: 'github' },
        },

        hero: {
            title: 'Designer & Développeur',
            subtitle: 'Créer des expériences intuitives à l’intersection du design, du code et de la science cognitive',
            ariaLabel: 'Introduction du portfolio',
        },

        about: {
            title: 'À propos',
            description: 'Je suis un designer et développeur passionné par la création d’expériences numériques centrées sur l’humain...',
            ariaLabel: 'Section à propos',
        },

        skills: {
            title: 'Compétences',
            description: 'Une vue d’ensemble de mon expertise en développement de jeux, design, technologies web et science cognitive.',
            ariaLabel: 'Section compétences',
            finalNote: 'J’explore en continu de nouvelles technologies et méthodes. Toujours apprendre, toujours construire.',
            categories: {
                gamedev: {
                    title: 'Développement & Design de Jeux',
                    description: 'Systèmes interactifs et mécaniques de jeu',
                    subcategories: {
                        design: {
                            name: 'Game Design',
                            skills: ['Mécaniques de jeu', 'Level design', 'Psychologie du joueur', 'Design de systèmes'],
                        },
                        development: {
                            name: 'Développement de jeux',
                            skills: ['Unity', 'C#', 'Systèmes physiques', 'UI/UX pour jeux'],
                        },
                        relatedSkills: {
                            name: 'Compétences associées',
                            skills: ['Prototypage', 'Playtesting', 'Narration', 'Bases en modélisation 3D'],
                        },
                    },
                },
                uiux: {
                    title: 'Design UI/UX',
                    description: 'Design de produits digitaux',
                    subcategories: {
                        tools: {
                            name: 'Outils & méthodes',
                            skills: ['Figma', 'Wireframing', 'Prototypage', 'Design systems'],
                        },
                        principles: {
                            name: 'Principes de design',
                            skills: ['Recherche utilisateur', 'Tests d’utilisabilité', 'Architecture de l’information', 'Responsive design'],
                        },
                        advanced: {
                            name: 'Design avancé',
                            skills: ['Design adaptatif', 'Design d’interaction', 'Accessibilité (A11y)', 'Tests utilisateurs'],
                        },
                    },
                },
                webdev: {
                    title: 'Développement Web',
                    description: 'Technologies frontend et full-stack',
                    subcategories: {
                        frontend: {
                            name: 'Frontend',
                            skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
                        },
                        tools: {
                            name: 'Outils frontend',
                            skills: ['Vite', 'Node.js', 'npm/yarn', 'Git & GitHub', 'CLI'],
                        },
                        backend: {
                            name: 'Backend & APIs',
                            skills: ['Node.js', 'PHP', 'APIs REST', 'Bases de données'],
                        },
                    },
                },
                dataAlgorithms: {
                    title: 'Données & Algorithmes',
                    description: 'Pensée computationnelle',
                    subcategories: {
                        algorithms: {
                            name: 'Algorithmes',
                            skills: ['Conception d’algorithmes', 'Structures de données', 'Pensée computationnelle', 'Optimisation'],
                        },
                        datascience: {
                            name: 'Data Science',
                            skills: ['Python', 'Analyse de données', 'Statistiques', 'Visualisation'],
                        },
                        mathematics: {
                            name: 'Mathématiques',
                            skills: ['Algèbre linéaire', 'Maths discrètes', 'Probabilités', 'Patterns'],
                        },
                    },
                },
                cognitivescience: {
                    title: 'Science Cognitive & Design Centré Humain',
                    description: 'Comprendre le comportement humain',
                    subcategories: {
                        cognitive: {
                            name: 'Science cognitive',
                            skills: ['Psychologie cognitive', 'Apprentissage', 'Mémoire & attention', 'Décision'],
                        },
                        hci: {
                            name: 'IHM',
                            skills: ['Interaction', 'UX research', 'Accessibilité', 'Analyse comportementale'],
                        },
                        learning: {
                            name: 'Apprentissage',
                            skills: ['Learning design', 'Gamification', 'Engagement', 'Psychologie'],
                        },
                    },
                },
            },
        },

        timeline: {
            title: 'Parcours',
            description: 'Mon évolution et mes étapes clés',
            ariaLabel: 'Section chronologie',
            entries: {
                0: { endDate: '2024', title: 'Projet récent', type: 'project', description: 'Description bientôt disponible' },
                1: { endDate: '2023', title: 'Expérience', type: 'event', description: 'Description bientôt disponible' },
                2: { endDate: '2022', title: 'Formation', type: 'education', description: 'Description bientôt disponible' },
            },
        },

        interests: { title: 'Intérêts', description: 'Domaines que j’explore', ariaLabel: 'Section intérêts' },
        values: { title: 'Valeurs', description: 'Principes qui guident mon travail', ariaLabel: 'Section valeurs' },

        contact: {
            title: 'Contact',
            description: 'Discutons et explorons des opportunités.',
            ariaLabel: 'Section contact',
            getInTouch: 'Me contacter',
            links: {
                email: { label: 'Email', href: 'mailto:cogassien@hotmail.com' },
                linkedin: { label: 'LinkedIn', href: '...' },
                github: { label: 'GitHub', href: '...' },
            },
        },
    },
    de: {
        navigation: {
            back: '← Zurück',
            github: 'github',
        },
        ariaLabel: 'Portfolio-Seite',

        sidebar: {
            labelExpand: 'Seitenleiste erweitern',
            labelCollapse: 'Seitenleiste reduzieren',
            files: {
                about: { name: 'ÜberMich', comment: '# Über mich Bereich' },
                skills: { name: 'Fähigkeiten', comment: '# Fähigkeiten & Expertise' },
                timeline: { name: 'Zeitachse', comment: '# Mein Werdegang' },
                interests: { name: 'Interessen', comment: '# Meine Interessen' },
                values: { name: 'Werte', comment: '# Werte und Philosophie' },
                contact: { name: 'Kontakt', comment: '# Kontaktbereich' },
            },
            folders: {
                portfolio: { name: 'portfolio', comment: '' },
                aboutme: { name: 'Über_mich', comment: '# Über mich Unterordner' },
            },
            footer: {
                copyright: '©',
                githubLabel: 'github',
            },
        },

        hero: {
            title: 'Designer & Entwickler',
            subtitle: 'Gestaltung intuitiver Erfahrungen an der Schnittstelle von Design, Code und Kognitionswissenschaft',
            ariaLabel: 'Portfolio Einführung',
        },

        about: {
            title: 'Über mich',
            description: 'Ich bin ein Designer und Entwickler mit Leidenschaft für menschenzentrierte digitale Erfahrungen...',
            ariaLabel: 'Über mich Bereich',
        },

        skills: {
            title: 'Fähigkeiten',
            description: 'Überblick über meine Expertise in Spieleentwicklung, Design, Webtechnologien und Kognitionswissenschaft.',
            ariaLabel: 'Fähigkeiten Bereich',
            finalNote: 'Ich erforsche kontinuierlich neue Technologien und Methoden. Immer lernen, immer bauen.',
            categories: {
                gamedev: {
                    title: 'Spieleentwicklung & Design',
                    description: 'Interaktive Systeme und Spielmechaniken',
                    subcategories: {
                        design: {
                            name: 'Game Design',
                            skills: ['Spielmechaniken', 'Leveldesign', 'Spielerpsychologie', 'Systemdesign'],
                        },
                        development: {
                            name: 'Spieleentwicklung',
                            skills: ['Unity', 'C#', 'Physiksysteme', 'UI/UX für Spiele'],
                        },
                        relatedSkills: {
                            name: 'Verwandte Fähigkeiten',
                            skills: ['Prototyping', 'Playtesting', 'Spielnarrative', '3D-Modellierung (Grundlagen)'],
                        },
                    },
                },
                uiux: {
                    title: 'UI/UX Design',
                    description: 'Digitale Produktgestaltung und Nutzererfahrung',
                    subcategories: {
                        tools: {
                            name: 'Tools & Methoden',
                            skills: ['Figma', 'Wireframing', 'Prototyping', 'Designsysteme'],
                        },
                        principles: {
                            name: 'Designprinzipien',
                            skills: ['User Research', 'Usability-Tests', 'Informationsarchitektur', 'Responsives Design'],
                        },
                        advanced: {
                            name: 'Fortgeschrittenes Design',
                            skills: ['Adaptives Design', 'Interaktionsdesign', 'Barrierefreiheit (A11y)', 'User Testing'],
                        },
                    },
                },
                webdev: {
                    title: 'Webentwicklung',
                    description: 'Frontend- und Full-Stack-Technologien',
                    subcategories: {
                        frontend: {
                            name: 'Frontend',
                            skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
                        },
                        tools: {
                            name: 'Frontend Tools',
                            skills: ['Vite', 'Node.js', 'npm/yarn', 'Git & GitHub', 'Terminal/CLI'],
                        },
                        backend: {
                            name: 'Backend & APIs',
                            skills: ['Node.js', 'PHP', 'REST APIs', 'Datenbankdesign'],
                        },
                    },
                },
                dataAlgorithms: {
                    title: 'Daten & Algorithmen',
                    description: 'Computational Thinking und Data Science',
                    subcategories: {
                        algorithms: {
                            name: 'Algorithmen & Problemlösung',
                            skills: ['Algorithmendesign', 'Datenstrukturen', 'Computational Thinking', 'Code-Optimierung'],
                        },
                        datascience: {
                            name: 'Data Science',
                            skills: ['Python', 'Datenanalyse', 'Statistisches Denken', 'Datenvisualisierung'],
                        },
                        mathematics: {
                            name: 'Mathematisches Denken',
                            skills: ['Lineare Algebra', 'Diskrete Mathematik', 'Wahrscheinlichkeit', 'Mustererkennung'],
                        },
                    },
                },
                cognitivescience: {
                    title: 'Kognitionswissenschaft & Human-Centered Design',
                    description: 'Verständnis menschlichen Verhaltens',
                    subcategories: {
                        cognitive: {
                            name: 'Kognitionswissenschaft',
                            skills: ['Kognitive Psychologie', 'Lernsysteme', 'Gedächtnis & Aufmerksamkeit', 'Entscheidungsfindung'],
                        },
                        hci: {
                            name: 'Mensch-Computer-Interaktion',
                            skills: ['Interaktionsdesign', 'Usability-Forschung', 'Barrierefreiheit', 'Verhaltensanalyse'],
                        },
                        learning: {
                            name: 'Lernen & Verhalten',
                            skills: ['Lerndesign', 'Gamification', 'User Engagement', 'Verhaltenspsychologie'],
                        },
                    },
                },
            },
        },

        timeline: {
            title: 'Werdegang',
            description: 'Mein beruflicher Weg und wichtige Meilensteine',
            ariaLabel: 'Zeitachsen Bereich',
            entries: {
                0: { endDate: '2024', title: 'Aktuelles Projekt', type: 'project', description: 'Beschreibung folgt' },
                1: { endDate: '2023', title: 'Erfahrung', type: 'event', description: 'Beschreibung folgt' },
                2: { endDate: '2022', title: 'Ausbildung', type: 'education', description: 'Beschreibung folgt' },
            },
        },

        interests: {
            title: 'Interessen',
            description: 'Bereiche, die ich erforsche und weiterentwickle',
            ariaLabel: 'Interessen Bereich',
        },

        values: {
            title: 'Werte',
            description: 'Grundprinzipien, die meine Arbeit leiten',
            ariaLabel: 'Werte Bereich',
        },

        contact: {
            title: 'Kontakt',
            description: 'Lass uns vernetzen und gemeinsam Möglichkeiten erkunden.',
            ariaLabel: 'Kontakt Bereich',
            getInTouch: 'Kontakt aufnehmen',
            links: {
                email: { label: 'Email', href: 'mailto:cogassien@hotmail.com' },
                linkedin: { label: 'LinkedIn', href: 'https://fr.linkedin.com/in/corentin-gassien-1b7289261' },
                github: { label: 'GitHub', href: 'https://github.com/Xlambdas' },
            },
        },
    },

    it: {
        navigation: {
            back: '← Indietro',
            github: 'github',
        },
        ariaLabel: 'Pagina portfolio',

        sidebar: {
            labelExpand: 'Espandi barra laterale',
            labelCollapse: 'Riduci barra laterale',
            files: {
                about: { name: 'ChiSono', comment: '# Sezione su di me' },
                skills: { name: 'Competenze', comment: '# Competenze ed esperienza' },
                timeline: { name: 'Cronologia', comment: '# Il mio percorso' },
                interests: { name: 'Interessi', comment: '# I miei interessi' },
                values: { name: 'Valori', comment: '# Valori e filosofia' },
                contact: { name: 'Contatto', comment: '# Sezione contatto' },
            },
            folders: {
                portfolio: { name: 'portfolio', comment: '' },
                aboutme: { name: 'Chi_sono', comment: '# Cartella su di me' },
            },
            footer: {
                copyright: '©',
                githubLabel: 'github',
            },
        },

        hero: {
            title: 'Designer & Sviluppatore',
            subtitle: 'Creo esperienze intuitive all\'intersezione tra design, codice e scienza cognitiva',
            ariaLabel: 'Introduzione al portfolio',
        },

        about: {
            title: 'Chi sono',
            description: 'Sono un designer e sviluppatore appassionato di creare esperienze digitali centrate sull’utente...',
            ariaLabel: 'Sezione su di me',
        },

        skills: {
            title: 'Competenze',
            description: 'Panoramica completa delle mie competenze in sviluppo di giochi, design, tecnologie web e scienza cognitiva.',
            ariaLabel: 'Sezione competenze',
            finalNote: 'Esploro continuamente nuove tecnologie e metodologie. Sempre imparando, sempre costruendo.',
            categories: {
                gamedev: {
                    title: 'Sviluppo e Design di Giochi',
                    description: 'Sistemi interattivi e meccaniche di gioco',
                    subcategories: {
                        design: {
                            name: 'Game Design',
                            skills: ['Meccaniche di gioco', 'Level design', 'Psicologia del giocatore', 'Design di sistemi'],
                        },
                        development: {
                            name: 'Sviluppo di giochi',
                            skills: ['Unity', 'C#', 'Sistemi fisici', 'UI/UX per giochi'],
                        },
                        relatedSkills: {
                            name: 'Competenze correlate',
                            skills: ['Prototipazione', 'Playtesting', 'Narrativa di gioco', 'Modellazione 3D (base)'],
                        },
                    },
                },
                uiux: {
                    title: 'Design UI/UX',
                    description: 'Progettazione di prodotti digitali e esperienza utente',
                    subcategories: {
                        tools: {
                            name: 'Strumenti e metodi',
                            skills: ['Figma', 'Wireframing', 'Prototipazione', 'Design system'],
                        },
                        principles: {
                            name: 'Principi di design',
                            skills: ['User research', 'Test di usabilità', 'Architettura dell’informazione', 'Responsive design'],
                        },
                        advanced: {
                            name: 'Design avanzato',
                            skills: ['Design adattivo', 'Interaction design', 'Accessibilità (A11y)', 'User testing'],
                        },
                    },
                },
                webdev: {
                    title: 'Sviluppo Web',
                    description: 'Tecnologie frontend e full-stack',
                    subcategories: {
                        frontend: {
                            name: 'Frontend',
                            skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
                        },
                        tools: {
                            name: 'Strumenti frontend',
                            skills: ['Vite', 'Node.js', 'npm/yarn', 'Git & GitHub', 'Terminal/CLI'],
                        },
                        backend: {
                            name: 'Backend e API',
                            skills: ['Node.js', 'PHP', 'API REST', 'Progettazione database'],
                        },
                    },
                },
                dataAlgorithms: {
                    title: 'Dati e Algoritmi',
                    description: 'Pensiero computazionale e data science',
                    subcategories: {
                        algorithms: {
                            name: 'Algoritmi e problem solving',
                            skills: ['Progettazione algoritmi', 'Strutture dati', 'Pensiero computazionale', 'Ottimizzazione codice'],
                        },
                        datascience: {
                            name: 'Data science',
                            skills: ['Python', 'Analisi dati', 'Pensiero statistico', 'Visualizzazione dati'],
                        },
                        mathematics: {
                            name: 'Pensiero matematico',
                            skills: ['Algebra lineare', 'Matematica discreta', 'Probabilità', 'Riconoscimento pattern'],
                        },
                    },
                },
                cognitivescience: {
                    title: 'Scienza Cognitiva e Design Human-Centered',
                    description: 'Comprendere il comportamento umano',
                    subcategories: {
                        cognitive: {
                            name: 'Scienza cognitiva',
                            skills: ['Psicologia cognitiva', 'Sistemi di apprendimento', 'Memoria e attenzione', 'Decision making'],
                        },
                        hci: {
                            name: 'Interazione uomo-computer',
                            skills: ['Interaction design', 'Ricerca di usabilità', 'Accessibilità', 'Analisi comportamentale'],
                        },
                        learning: {
                            name: 'Apprendimento e comportamento',
                            skills: ['Learning design', 'Gamification', 'Coinvolgimento utente', 'Psicologia comportamentale'],
                        },
                    },
                },
            },
        },

        timeline: {
            title: 'Percorso',
            description: 'Il mio percorso professionale e le tappe principali',
            ariaLabel: 'Sezione cronologia',
            entries: {
                0: { endDate: '2024', title: 'Progetto recente', type: 'project', description: 'Descrizione in arrivo' },
                1: { endDate: '2023', title: 'Esperienza', type: 'event', description: 'Descrizione in arrivo' },
                2: { endDate: '2022', title: 'Formazione', type: 'education', description: 'Descrizione in arrivo' },
            },
        },

        interests: {
            title: 'Interessi',
            description: 'Aree che esploro e continuo ad approfondire',
            ariaLabel: 'Sezione interessi',
        },

        values: {
            title: 'Valori',
            description: 'Principi che guidano il mio lavoro',
            ariaLabel: 'Sezione valori',
        },

        contact: {
            title: 'Contatto',
            description: 'Connettiamoci ed esploriamo nuove opportunità.',
            ariaLabel: 'Sezione contatto',
            getInTouch: 'Contattami',
            links: {
                email: { label: 'Email', href: 'mailto:cogassien@hotmail.com' },
                linkedin: { label: 'LinkedIn', href: 'https://fr.linkedin.com/in/corentin-gassien-1b7289261' },
                github: { label: 'GitHub', href: 'https://github.com/Xlambdas' },
            },
        },
    },
};