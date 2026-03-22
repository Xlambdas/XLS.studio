// src/locales/header.ts
import { type Language } from '../pages/accessibility';

export interface HeaderTranslations {
    animationsOn: string;
    animationsOff: string;
    accessibility: string;
}

export const HEADER_TRANSLATIONS: Record<Language, HeaderTranslations> = {
    en: {
        animationsOn: 'Animations enabled',
        animationsOff: 'Animations disabled',
        accessibility: 'Accessibility',
    },
    es: {
        animationsOn: 'Animaciones activadas',
        animationsOff: 'Animaciones desactivadas',
        accessibility: 'Accesibilidad',
    },
    fr: {
        animationsOn: 'Animations activées',
        animationsOff: 'Animations désactivées',
        accessibility: 'Accessibilité',
    },
    de: {
        animationsOn: 'Animationen aktiviert',
        animationsOff: 'Animationen deaktiviert',
        accessibility: 'Barrierefreiheit',
    },
    it: {
        animationsOn: 'Animazioni attivate',
        animationsOff: 'Animazioni disattivate',
        accessibility: 'Accessibilità',
    },
};