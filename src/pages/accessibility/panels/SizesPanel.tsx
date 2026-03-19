// src/pages/accessibility/panels/SizesPanel.tsx

import { type AppTheme } from '../../../theme/theme.types';
import { FONT_SCALE_OPTIONS, BUTTON_SCALE_OPTIONS } from '../../../theme/theme.options';

interface SizesPanelProps {
    theme: AppTheme;
    onScaleChange: (scale: number, type: 'font' | 'button') => void;
    t: {
        textSize: string;
        buttonSize: string;
    };
}

interface ScaleSection {
    type: 'font' | 'button';
    label: string;
    options: readonly { label: string; value: number }[];
}

const SCALE_SECTIONS = (t: SizesPanelProps['t']): ScaleSection[] => [
    { type: 'font', label: t.textSize, options: FONT_SCALE_OPTIONS },
    { type: 'button', label: t.buttonSize, options: BUTTON_SCALE_OPTIONS },
];

export const SizesPanel: React.FC<SizesPanelProps> = ({ theme, onScaleChange, t }) => {
    const isSelected = (value: number, type: 'font' | 'button') => {
        return type === 'font' ? theme.typography.fontScale === value : theme.buttonScale === value;
    };

    return (
        <div role="tabpanel" id="sizes-panel" className="space-y-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {SCALE_SECTIONS(t).map(({ type, label, options }) => (
                    <div
                        key={type}
                        className="p-6 sm:p-8 rounded-xl border-2 transition-all"
                        style={{ borderColor: 'var(--color-primary)' }}
                    >
                        <h3
                            className="text-xl sm:text-2xl font-light italic mb-6"
                            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                        >
                            {label}
                        </h3>
                        <div className="space-y-3">
                            {options.map(({ label: optionLabel, value }) => (
                                <button
                                    key={optionLabel}
                                    onClick={() => onScaleChange(value, type)}
                                    className="w-full p-4 sm:p-5 text-left rounded-lg transition-all hover:scale-105 active:scale-95"
                                    style={{
                                        fontSize: `${16 * value}px`,
                                        backgroundColor: isSelected(value, type)
                                            ? 'var(--color-primary-transparent)'
                                            : 'transparent',
                                        color: 'var(--color-primary)',
                                        border: '2px solid var(--color-primary-transparent)',
                                    }}
                                >
                                    {optionLabel} • {value}x
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export const SizesPanel_old: React.FC<SizesPanelProps> = ({ theme, onScaleChange, t }) => {
    return (
        <div role="tabpanel" id="sizes-panel" className="space-y-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 sm:p-8 rounded-xl border-2" style={{ borderColor: theme.colors.primary }}>
                    <h3 className="text-xl sm:text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                        {t.textSize}
                    </h3>
                    <div className="space-y-3">
                        {FONT_SCALE_OPTIONS.map(({ label, value }) => (
                            <button
                                key={label}
                                onClick={() => onScaleChange(value, 'font')}
                                className="w-full p-4 sm:p-5 text-left rounded-lg transition-all"
                                style={{
                                    fontSize: `${18 * value}px`,
                                    backgroundColor:
                                        theme.typography.fontScale === value ? theme.colors.primaryTransparent : 'transparent',
                                    color: theme.colors.primary,
                                    border: `2px solid ${theme.colors.primaryTransparent}`,
                                }}
                            >
                                {label} • {value}x
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6 sm:p-8 rounded-xl border-2" style={{ borderColor: theme.colors.primary }}>
                    <h3 className="text-xl sm:text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                        {t.buttonSize}
                    </h3>
                    <div className="space-y-3">
                        {BUTTON_SCALE_OPTIONS.map(({ label, value }) => (
                            <button
                                key={label}
                                onClick={() => onScaleChange(value, 'button')}
                                className="w-full p-4 sm:p-5 text-left rounded-lg transition-all"
                                style={{
                                    fontSize: `${16 * value}px`,
                                    backgroundColor:
                                        theme.buttonScale === value ? theme.colors.primaryTransparent : 'transparent',
                                    color: theme.colors.primary,
                                    border: `2px solid ${theme.colors.primaryTransparent}`,
                                }}
                            >
                                {label} • {value}x
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};