import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { type AppTheme } from '../theme/theme.types';
import { DEFAULT_THEME } from '../theme/theme.defaults.ts';


// =========
// Context shape
// =========
interface ThemeContextValue {
    theme: AppTheme;
    updateTheme: (partial: Partial<AppTheme>) => void;
    resetTheme: () => void;
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

    const cssVariables = {
        "--color-primary": theme.colors.primary,
        "--color-primary-glow": theme.colors.primaryGlow,
        "--color-secondary": theme.colors.secondary,
        "--color-background": theme.colors.background,

        "--font-primary": theme.typography.primaryFontFamily,
        "--font-secondary": theme.typography.secondaryFontFamily,

        "--font-scale": theme.typography.fontScale,
        "--button-scale": theme.buttonScale,
    } as React.CSSProperties;

    return (
        <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
            <div style={cssVariables}>{children}</div>
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