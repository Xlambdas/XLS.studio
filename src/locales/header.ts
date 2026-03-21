// src/locales/header.ts
import type { Language } from '../theme/theme.types';

export interface HeaderTranslations {
    animationsOn: string;
    animationsOff: string;
    accessibility: string;
}

export const HEADER_TRANSLATIONS: Record<Language, HeaderTranslations> = {
    en: {
        animationsOn: 'Animations ON',
        animationsOff: 'Animations OFF',
        accessibility: 'Accessibility',
    },
    es: {
        animationsOn: 'Animaciones ON',
        animationsOff: 'Animaciones OFF',
        accessibility: 'Accesibilidad',
    },
    fr: {
        animationsOn: 'Animations ON',
        animationsOff: 'Animations OFF',
        accessibility: 'Accessibilité',
    },
    de: {
        animationsOn: 'Animationen ON',
        animationsOff: 'Animationen AUS',
        accessibility: 'Barrierefreiheit',
    },
};