import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { useState } from 'react';
import { DEFAULT_THEME } from '../theme/theme.defaults';
import { AVAILABLE_PRIMARY_FONTS, AVAILABLE_SECONDARY_FONTS, BUTTON_SCALE_OPTIONS, FONT_SCALE_OPTIONS } from '../theme/theme.options';
import { FONTS } from '../components/Home/Home_save';


export const AccessibilityPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme, updateTheme } = useTheme();
    const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'sizes' | 'motion'>('colors');

    const handleColorChange = (colorKey: 'primary' | 'secondary' | 'background', value: string) => {
        updateTheme({
            colors: {
                ...theme.colors,
                [colorKey]: value,
            },
        });
    };

    const handleFontChange = (fontFamily: string, type: 'primary' | 'secondary') => {
        if (fontFamily === 'Arial') {
            // Arial overrides both
            updateTheme({
                typography: {
                    ...theme.typography,
                    primaryFontFamily: 'Arial' as const,
                    secondaryFontFamily: 'Arial' as const,
                },
            });
        } else {
            // Independent fonts
            updateTheme({
                typography: {
                    ...theme.typography,
                    [type === 'primary' ? 'primaryFontFamily' : 'secondaryFontFamily']:
                        fontFamily as any,
                },
            });
        }
    };

    const handleScaleChange = (scale: number, type: 'font' | 'button') => {
        updateTheme({
            ...(type === 'font' ? {
                typography: { ...theme.typography, fontScale: scale }
            } : {
                buttonScale: scale
            })
        });
    };

    const handleToggle = (feature: 'reducedMotion' | 'highContrast', enabled: boolean) => {
        updateTheme({ [feature]: enabled });
    };

    const handleReset = () => {
        updateTheme(DEFAULT_THEME);
    };


    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: theme.colors.background }}>
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="mb-8 text-xl font-light italic"
                    style={{ color: theme.colors.primary }}
                    tabIndex={0}
                >
                    ← Back to Home
                </button>

                <h1
                    className="text-4xl font-light italic mb-12"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: theme.typography.primaryFontFamily === 'Arial' ? 'Arial' : FONTS.montserrat
                    }}
                >
                    Accessibility Settings
                </h1>

                {/* Tab Navigation - ARIA Compliant */}
                <div role="tablist" className="flex border-b-2 mb-8" style={{ borderColor: theme.colors.primary }}>
                    {[
                        { id: 'colors', label: 'Colors', panel: 'color-panel' },
                        { id: 'typography', label: 'Typography', panel: 'typography-panel' },
                        { id: 'sizes', label: 'Sizes', panel: 'sizes-panel' },
                        { id: 'motion', label: 'Motion', panel: 'motion-panel' }
                    ].map(({ id, label, panel }) => (
                        <button
                            key={id}
                            role="tab"
                            aria-selected={activeTab === id}
                            aria-controls={panel}
                            id={`tab-${id}`}
                            tabIndex={activeTab === id ? 0 : -1}
                            onClick={() => setActiveTab(id as any)}
                            className={`pb-4 px-6 font-light italic text-xl mr-4 border-b-4 ${activeTab === id
                                    ? `border-${theme.colors.primary} text-[${theme.colors.primary}]`
                                    : 'border-transparent opacity-50 hover:opacity-75'
                                }`}
                            style={{
                                color: activeTab === id ? theme.colors.primary : '#666',
                                fontFamily: theme.typography.primaryFontFamily
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Colors Tab */}
                <div
                    role="tabpanel"
                    id="color-panel"
                    aria-labelledby="tab-colors"
                    style={{ display: activeTab === 'colors' ? 'block' : 'none' }}
                >
                    <div className="space-y-8 mb-12">
                        <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                            <label className="block text-2xl font-light italic mb-4" style={{ color: theme.colors.primary }}>
                                Primary Color (Accent)
                            </label>
                            <div className="flex gap-4 items-center">
                                <input
                                    type="color"
                                    value={theme.colors.primary}
                                    onChange={(e) => handleColorChange('primary', e.target.value)}
                                    className="w-20 h-20 cursor-pointer"
                                    tabIndex={0}
                                />
                                <span className="text-lg font-light" style={{ color: theme.colors.primary }}>
                                    {theme.colors.primary}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                            <label className="block text-2xl font-light italic mb-4" style={{ color: theme.colors.primary }}>
                                Secondary Color
                            </label>
                            <div className="flex gap-4 items-center">
                                <input
                                    type="color"
                                    value={theme.colors.secondary}
                                    onChange={(e) => handleColorChange('secondary', e.target.value)}
                                    className="w-20 h-20 cursor-pointer"
                                    tabIndex={0}
                                />
                                <span className="text-lg font-light" style={{ color: theme.colors.primary }}>
                                    {theme.colors.secondary}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                            <label className="block text-2xl font-light italic mb-4" style={{ color: theme.colors.primary }}>
                                Background Color
                            </label>
                            <div className="flex gap-4 items-center">
                                <input
                                    type="color"
                                    value={theme.colors.background}
                                    onChange={(e) => handleColorChange('background', e.target.value)}
                                    className="w-20 h-20 cursor-pointer"
                                    tabIndex={0}
                                />
                                <span className="text-lg font-light" style={{ color: theme.colors.primary }}>
                                    {theme.colors.background}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Typography Tab */}
                <div
                    role="tabpanel"
                    id="typography-panel"
                    aria-labelledby="tab-typography"
                    style={{ display: activeTab === 'typography' ? 'block' : 'none' }}
                >
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                            <label className="block text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                                Primary Font (Headings)
                            </label>
                            <div className="space-y-3">
                                {AVAILABLE_PRIMARY_FONTS.map((font) => (
                                    <button
                                        key={font}
                                        onClick={() => handleFontChange(font, 'primary')}
                                        className="block w-full text-left p-3 hover:bg-opacity-20 rounded transition-all"
                                        style={{
                                            fontFamily: font,
                                            fontSize: `${24 * theme.typography.fontScale}px`,
                                            color: theme.colors.primary,
                                            backgroundColor: theme.typography.primaryFontFamily === font ? theme.colors.primaryTransparent : 'transparent'
                                        }}
                                        tabIndex={0}
                                    >
                                        {font} — The quick brown fox jumps
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                            <label className="block text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                                Secondary Font (Code/Text)
                            </label>
                            <div className="space-y-3">
                                {AVAILABLE_SECONDARY_FONTS.map((font) => (
                                    <button
                                        key={font}
                                        onClick={() => handleFontChange(font, 'secondary')}
                                        className="block w-full text-left p-3 hover:bg-opacity-20 rounded transition-all"
                                        style={{
                                            fontFamily: font,
                                            fontSize: `${20 * theme.typography.fontScale}px`,
                                            color: theme.colors.primary,
                                            backgroundColor: theme.typography.secondaryFontFamily === font ? theme.colors.primaryTransparent : 'transparent'
                                        }}
                                        tabIndex={0}
                                    >
                                        {font} — `console.log("sample")`
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sizes Tab */}
                <div
                    role="tabpanel"
                    id="sizes-panel"
                    aria-labelledby="tab-sizes"
                    style={{ display: activeTab === 'sizes' ? 'block' : 'none' }}
                >
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                            <label className="block text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                                Text Size
                            </label>
                            <div className="space-y-3">
                                {FONT_SCALE_OPTIONS.map(({ label, value }) => (
                                    <button
                                        key={label}
                                        onClick={() => handleScaleChange(value, 'font')}
                                        className="block w-full p-4 text-left rounded transition-all hover:bg-opacity-20"
                                        style={{
                                            fontSize: `${24 * value}px`,
                                            backgroundColor: theme.typography.fontScale === value ? theme.colors.primaryTransparent : 'transparent',
                                            color: theme.colors.primary
                                        }}
                                        tabIndex={0}
                                    >
                                        {label} — Sample text at {value}x scale
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                            <label className="block text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                                Button Size
                            </label>
                            <div className="space-y-3">
                                {BUTTON_SCALE_OPTIONS.map(({ label, value }) => (
                                    <button
                                        key={label}
                                        onClick={() => handleScaleChange(value, 'button')}
                                        className="block w-full p-4 text-left rounded transition-all hover:bg-opacity-20"
                                        style={{
                                            fontSize: `${20 * value}px`,
                                            backgroundColor: theme.buttonScale === value ? theme.colors.primaryTransparent : 'transparent',
                                            color: theme.colors.primary
                                        }}
                                        tabIndex={0}
                                    >
                                        {label} Button ({value}x)
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Motion Tab */}
                <div
                    role="tabpanel"
                    id="motion-panel"
                    aria-labelledby="tab-motion"
                    style={{ display: activeTab === 'motion' ? 'block' : 'none' }}
                >
                    <div className="space-y-6 p-6 rounded-lg border-2 max-w-md" style={{ borderColor: theme.colors.primary }}>
                        <div>
                            <label className="block text-2xl font-light italic mb-4" style={{ color: theme.colors.primary }}>
                                Reduce Motion
                            </label>
                            <button
                                onClick={() => handleToggle('reducedMotion', !theme.reducedMotion)}
                                className="flex items-center p-4 w-full text-left rounded transition-all"
                                style={{
                                    backgroundColor: theme.reducedMotion ? theme.colors.primaryTransparent : 'transparent',
                                    color: theme.colors.primary,
                                    border: `2px solid ${theme.colors.primary}`
                                }}
                                tabIndex={0}
                            >
                                {theme.reducedMotion ? '✅ Enabled' : '❌ Disabled'}
                            </button>
                        </div>

                        <div>
                            <label className="block text-2xl font-light italic mb-4" style={{ color: theme.colors.primary }}>
                                High Contrast Mode
                            </label>
                            <button
                                onClick={() => handleToggle('highContrast', !theme.highContrast)}
                                className="flex items-center p-4 w-full text-left rounded transition-all"
                                style={{
                                    backgroundColor: theme.highContrast ? theme.colors.primaryTransparent : 'transparent',
                                    color: theme.colors.primary,
                                    border: `2px solid ${theme.colors.primary}`
                                }}
                                tabIndex={0}
                            >
                                {theme.highContrast ? '✅ Enabled' : '❌ Disabled'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Live Preview */}
                <div className="mt-16 p-8 rounded-xl border-4" style={{
                    borderColor: theme.colors.primary,
                    backgroundColor: theme.colors.background,
                    color: theme.colors.primary,
                }}>
                    <h2 className="text-3xl font-light italic mb-6" style={{
                        fontFamily: theme.typography.primaryFontFamily,
                        fontSize: `${48 * theme.typography.fontScale}px`
                    }}>
                        Live Preview
                    </h2>
                    <div className="p-8 rounded-lg text-2xl font-light italic text-center leading-relaxed" style={{
                        fontFamily: theme.typography.secondaryFontFamily,
                        fontSize: `${24 * theme.typography.fontScale}px`,
                        lineHeight: '1.6',
                        backgroundColor: theme.colors.secondary,
                        color: theme.colors.primary,
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        Your settings are applied instantly across the entire site!
                        <br />
                        <span style={{ fontSize: `${20 * theme.typography.fontScale}px` }}>
                            Typography: {theme.typography.primaryFontFamily} / {theme.typography.secondaryFontFamily}
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleReset}
                    className="mt-8 px-8 py-4 rounded-lg border-2 font-light italic text-xl"
                    style={{
                        backgroundColor: 'transparent',
                        color: theme.colors.primary,
                        borderColor: theme.colors.primary,
                        fontFamily: theme.typography.primaryFontFamily
                    }}
                    tabIndex={0}
                >
                    Reset All Settings to Default
                </button>
            </div>
        </div>
    );
};
