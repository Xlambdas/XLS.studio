import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { type AppTheme } from '../theme/theme.types';
import { DEFAULT_THEME } from '../theme/theme.defaults.ts';
import { getColors } from '../styles/utils.ts';

// =========
// Context shape
// =========
// interface ThemeContextValue_old {
//     theme: AppTheme;
//     updateTheme: (partial: Partial<AppTheme>) => void;
//     resetTheme: () => void;
// }

interface ThemeContextValue {
    theme: AppTheme;
    updateTheme: (partial: Partial<AppTheme>) => void;
    resetTheme: () => void;
    updateColor: (key: 'primary' | 'secondary' | 'background' | 'primaryGlow', value: string) => void;
    updateFontScale: (scale: number) => void;
    updateButtonScale: (scale: number) => void;
    updateMotion: (enabled: boolean) => void;
    updateLanguage: (lang: 'en' | 'es' | 'fr' | 'de') => void; // ← NEW
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ========
// Storage key
// ========
const STORAGE_KEY = 'app-theme';

function loadTheme(): AppTheme {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return { ...DEFAULT_THEME, ...JSON.parse(raw) };
    } catch {
        // ignore parse errors
    }
    return DEFAULT_THEME;
}

// =========
// Provider
// =========
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<AppTheme>(loadTheme);

    // Honour OS-level prefers-reduced-motion on first load
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.matches) {
            setTheme(prev => ({ ...prev, reducedMotion: true }));
        }
    }, []);

    // Apply CSS variables to root element
    useEffect(() => {
        const root = document.documentElement;
        const colors = getColors(theme); // Apply high-contrast logic

        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-primary-glow', colors.primaryGlow);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-dark-button', colors.darkButton);
        root.style.setProperty('--color-primary-transparent', colors.primaryTransparent);
        root.style.setProperty('--color-dark-button-transparent', colors.darkButtonTransparent);
        root.style.setProperty('--font-primary', theme.typography.primaryFontFamily);
        root.style.setProperty('--font-secondary', theme.typography.secondaryFontFamily);
        root.style.setProperty('--font-scale', String(theme.typography.fontScale));
        root.style.setProperty('--button-scale', String(theme.buttonScale));
    }, [theme]);

    // Sync HTML lang attribute with theme language
    useEffect(() => {
        document.documentElement.lang = theme.language;
    }, [theme.language]);

    // Persist to localStorage whenever theme changes
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
        } catch {
            // quota exceeded – silently ignore
        }
    }, [theme]);

    const updateTheme = useCallback((partial: Partial<AppTheme>) => {
        setTheme(prev => ({ ...prev, ...partial }));
    }, []);

    const resetTheme = useCallback(() => {
        setTheme(DEFAULT_THEME);
        localStorage.removeItem(STORAGE_KEY);
    }, []);

    const updateColor = useCallback(
        (key: 'primary' | 'secondary' | 'background' | 'primaryGlow', value: string) => {
            setTheme(prev => ({ ...prev, colors: { ...prev.colors, [key]: value } }));
        },
        []
    );

    const updateFontScale = useCallback((scale: number) => {
        setTheme(prev => ({ ...prev, typography: { ...prev.typography, fontScale: scale } }));
    }, []);

    const updateButtonScale = useCallback((scale: number) => {
        setTheme(prev => ({ ...prev, buttonScale: scale }));
    }, []);

    const updateMotion = useCallback((enabled: boolean) => {
        setTheme(prev => ({ ...prev, reducedMotion: enabled }));
    }, []);

    const updateLanguage = useCallback((lang: 'en' | 'es' | 'fr' | 'de') => {
        setTheme(prev => ({ ...prev, language: lang }));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, updateTheme, resetTheme, updateColor, updateFontScale, updateButtonScale, updateMotion, updateLanguage }}>
            {children}
        </ThemeContext.Provider>
    );
};

// =========
// Hook
// =========
export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
    return ctx;
}