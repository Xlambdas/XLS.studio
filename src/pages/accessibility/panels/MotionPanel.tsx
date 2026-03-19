// src/pages/accessibility/panels/MotionPanel.tsx

import { type AppTheme } from '../../../theme/theme.types';

interface MotionPanelProps {
    theme: AppTheme;
    onToggle: (feature: 'reducedMotion' | 'highContrast') => void;
    t: {
        reduceMotion: string;
        highContrast: string;
    };
}

interface ToggleFeature {
    feature: 'reducedMotion' | 'highContrast';
    label: string;
}

const TOGGLE_FEATURES = (t: MotionPanelProps['t']): ToggleFeature[] => [
    { feature: 'reducedMotion', label: t.reduceMotion },
    { feature: 'highContrast', label: t.highContrast },
];

export const MotionPanel: React.FC<MotionPanelProps> = ({ theme, onToggle, t }) => {
    const isEnabled = (feature: 'reducedMotion' | 'highContrast') => theme[feature];

    return (
        <div role="tabpanel" id="motion-panel" className="mb-12">
            <div
                className="p-6 sm:p-8 rounded-xl border-2 max-w-2xl transition-all"
                style={{ borderColor: 'var(--color-primary)' }}
            >
                <div className="space-y-6">
                    {TOGGLE_FEATURES(t).map(({ feature, label }) => (
                        <div
                            key={feature}
                            className="flex items-center justify-between p-4 rounded-lg transition-colors"
                            style={{ backgroundColor: 'var(--color-primary-transparent)' }}
                        >
                            <label
                                className="text-base sm:text-lg font-light italic"
                                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                            >
                                {label}
                            </label>
                            <button
                                onClick={() => onToggle(feature)}
                                className="px-6 py-2 rounded-full font-light transition-all hover:scale-105 active:scale-95"
                                style={{
                                    backgroundColor: isEnabled(feature)
                                        ? 'var(--color-primary)'
                                        : 'transparent',
                                    color: isEnabled(feature)
                                        ? 'var(--color-secondary)'
                                        : 'var(--color-primary)',
                                    border: '2px solid var(--color-primary)',
                                }}
                            >
                                {isEnabled(feature) ? '✓ ON' : '○ OFF'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const MotionPanel_old: React.FC<MotionPanelProps> = ({ theme, onToggle, t }) => {
    return (
        <div role="tabpanel" id="motion-panel" className="mb-12">
            <div className="p-6 sm:p-8 rounded-xl border-2 max-w-2xl" style={{ borderColor: theme.colors.primary }}>
                <div className="space-y-6">
                    {[
                        { feature: 'reducedMotion' as const, label: t.reduceMotion },
                        { feature: 'highContrast' as const, label: t.highContrast },
                    ].map(({ feature, label }) => (
                        <div key={feature} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: theme.colors.primaryTransparent }}>
                            <label className="text-base sm:text-lg font-light italic" style={{ color: theme.colors.primary }}>
                                {label}
                            </label>
                            <button
                                onClick={() => onToggle(feature)}
                                className="px-6 py-2 rounded-full font-light transition-all"
                                style={{
                                    backgroundColor: theme[feature] ? theme.colors.primary : 'transparent',
                                    color: theme[feature] ? theme.colors.background : theme.colors.primary,
                                    border: `2px solid ${theme.colors.primary}`,
                                }}
                            >
                                {theme[feature] ? '✓ ON' : '○ OFF'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};