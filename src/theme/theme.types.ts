// src/theme/theme.types.ts

export type Language = 'en' | 'es' | 'fr' | 'de';

export interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    darkButton: string;
    primaryTransparent: string;
    primaryGlow: string;
    darkButtonTransparent: string;
    splineColor: string;
    splineFresnel: string;
    splineLighting: string;
}

export interface ThemeTypography {
    /** Text scale multiplier. 0.85 | 1 | 1.2 | 1.5 */
    fontScale: number;
    /** Active font family. 'Arial' is the dyslexia-safe fallback */
    primaryFontFamily: 'Montserrat' | 'Inter' | 'Arial';
    secondaryFontFamily: 'JetBrains Mono' | 'Inter' | 'Arial';
}


export interface AppTheme {
    colors: ThemeColors;
    typography: ThemeTypography;
    buttonScale: number;
    reducedMotion: boolean;
    highContrast: boolean;
    language: Language;
}


export interface AppTheme_old {
    colors: ThemeColors;
    typography: ThemeTypography;
    /** Button size multiplier. 0.85 | 1 | 1.3 */
    buttonScale: number;
    /** Disables transitions and Spline glow effects */
    reducedMotion: boolean;
    /** Forces white-on-black regardless of custom colors */
    highContrast: boolean;
}
