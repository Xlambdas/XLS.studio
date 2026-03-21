// src/locales/components.ts
import { type Language } from '../theme';

export interface ComponentTranslations {
    loadingMessage: string;
    previousSection: string;
    nextSection: string;
}

export const COMPONENT_TRANSLATIONS: Record<Language, ComponentTranslations> = {
    en: {
        loadingMessage: 'Loading…',
        previousSection: 'Previous section',
        nextSection: 'Next section',
    },
    es: {
        loadingMessage: 'Cargando…',
        previousSection: 'Sección anterior',
        nextSection: 'Siguiente sección',
    },
    fr: {
        loadingMessage: 'Chargement…',
        previousSection: 'Section précédente',
        nextSection: 'Section suivante',
    },
    de: {
        loadingMessage: 'Wird geladen…',
        previousSection: 'Vorheriger Abschnitt',
        nextSection: 'Nächster Abschnitt',
    },
};