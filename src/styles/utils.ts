// src/styles/utils.ts
import { type AppTheme } from '../theme/theme.types.ts';

export const KEYFRAMES = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.4; }
    }
`;


/**
 * Returns resolved colors, applying high-contrast override when enabled.
 */
export function getColors(theme: AppTheme) {
    if (theme.highContrast) {
        return {
            primary: '#FFFFFF',
            secondary: '#000000',
            background: '#FFFFFF',
            darkButton: '#000000',
            primaryTransparent: 'rgba(255,255,255,0.15)',
            primaryGlow: 'rgba(255,255,255,0.35)',
            darkButtonTransparent: 'rgba(0,0,0,0.85)',
        };
    }
    return { ...theme.colors };
}