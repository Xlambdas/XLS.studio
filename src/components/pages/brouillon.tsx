

import { Application } from '@splinetool/runtime';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// ============================================================================
// CONSTANTS
// ============================================================================

const COLORS = {
    primary: '#9C88D9',
    background: '#0B0E16',
    headerBg: '#18112D',
    accent: '#B4A0E8',
} as const;

const SPACING = {
    headerHeight: 70,
    sectionCount: 3,
    maxWidth: 1400,
} as const;

const ANIMATION = {
    duration: 800,
    easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
    minFps: 40,
    targetFps: 55,
} as const;

const DPR_CONFIG = {
    initial: 1.2,
    min: 0.8,
    max: 1.5,
    decreaseThreshold: 0.1,
    increaseThreshold: 0.05,
} as const;

// ============================================================================
// STYLE CONSTANTS
// ============================================================================

const styles = {
    // Global containers
    fullContainer: {
        backgroundColor: COLORS.background,
        position: 'relative' as const,
        overflow: 'hidden' as const,
    },
    canvasWrapper: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
    },
    canvas: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
        display: 'block' as const,
        touchAction: 'none' as const,
    },
    // Header
    header: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        height: `${SPACING.headerHeight}px`,
        zIndex: 10,
        backgroundColor: COLORS.headerBg,
    },
    headerContent: {
        display: 'flex' as const,
        padding: '0.625rem 1.25rem',
        alignItems: 'center' as const,
        gap: '0.625rem',
        height: '100%',
        maxWidth: `${SPACING.maxWidth}px`,
        margin: '0 auto',
    },
    // Content sections
    sectionsContainer: {
        position: 'relative' as const,
        height: '100vh',
        width: '100%',
        overflow: 'hidden' as const,
        zIndex: 1,
    },
    sectionsWrapper: (section: number, animationsEnabled: boolean) => ({
        height: '300vh',
        width: '100%',
        transform: `translateY(-${section * 100}vh)`,
        transition: animationsEnabled ? `transform ${ANIMATION.duration}ms ${ANIMATION.easing}` : 'none',
    } as const),
} as const;

// ============================================================================
// BUTTON STYLES
// ============================================================================

const createButtonStyle = (
    variant: 'primary' | 'secondary' = 'primary'
): React.CSSProperties => ({
    borderRadius: '40px',
    border: `2px solid ${COLORS.primary}`,
    background: variant === 'primary' ? COLORS.headerBg : COLORS.headerBg,
    color: COLORS.primary,
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: 200,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
});

// ============================================================================
// COMPONENTS
// ============================================================================

const LoadingIndicator: React.FC = () => (
    <div
        style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
            color: COLORS.primary,
            textAlign: 'center',
        }}
    >
        <div style={{ fontSize: '14px', fontFamily: 'Inter', marginBottom: '10px' }}>
            Loading experience...
        </div>
        <div
            style={{
                width: '40px',
                height: '4px',
                background: `rgba(156, 136, 217, 0.2)`,
                borderRadius: '2px',
                overflow: 'hidden',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: '30%',
                    background: COLORS.primary,
                    borderRadius: '2px',
                    animation: 'loading 1.5s ease-in-out infinite',
                }}
            />
        </div>
    </div>
);

const Header: React.FC<{
    animationsEnabled: boolean;
    onAnimationsToggle: () => void;
    onNavigate: (path: string) => void;
}> = ({ animationsEnabled, onAnimationsToggle, onNavigate }) => (
    <div style={styles.header}>
        <div style={styles.headerContent}>
            <h1
                style={{
                    alignSelf: 'stretch',
                    color: COLORS.primary,
                    fontFamily: 'Montserrat',
                    fontSize: '2.25rem',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    margin: 0,
                    flex: 1,
                }}
            >
                XLS.studio
            </h1>
            <button
                onClick={onAnimationsToggle}
                style={{
                    width: 120,
                    height: 30,
                    borderRadius: 20,
                    border: `1px solid ${COLORS.primary}`,
                    background: animationsEnabled ? COLORS.primary : COLORS.headerBg,
                    color: animationsEnabled ? COLORS.headerBg : COLORS.primary,
                    fontFamily: 'Inter',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                }}
            >
                {animationsEnabled ? 'Animations ON' : 'Animations OFF'}
            </button>
            <button
                onClick={() => onNavigate('/accessibility')}
                style={{
                    display: 'flex',
                    height: '30px',
                    minWidth: '180px',
                    maxWidth: '302px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '30px',
                    border: `1px solid ${COLORS.primary}`,
                    background: COLORS.headerBg,
                    color: COLORS.primary,
                    fontFamily: 'Inter',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: '0 15px',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 15px rgba(156, 136, 217, 0.3)`;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
            >
                Accessibility
            </button>
            <button
                style={{
                    width: 50,
                    height: 30,
                    background: COLORS.primary,
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = COLORS.accent;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = COLORS.primary;
                }}
            />
        </div>
    </div>
);

const Section1: React.FC = () => (
    <div style={{ height: '100vh' }}>
        <div style={{ paddingTop: `${SPACING.headerHeight}px`, paddingBottom: `${SPACING.headerHeight}px` }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '90px',
                    minHeight: `calc(100vh - ${SPACING.headerHeight * 2}px)`,
                    maxWidth: `${SPACING.maxWidth}px`,
                    margin: '0 auto',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        padding: '0 90px 113px 121px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '100px',
                        width: '100%',
                    }}
                >
                    <div style={{ display: 'flex', height: '223px', flexDirection: 'column', alignItems: 'flex-end', width: '100%' }}>
                        <div
                            style={{
                                height: 124,
                                color: COLORS.primary,
                                textAlign: 'right',
                                fontFamily: 'Montserrat',
                                fontSize: 96,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: 'normal',
                            }}
                        >
                            WELCOME
                        </div>
                        <div
                            style={{
                                color: COLORS.primary,
                                fontFamily: 'JetBrains Mono',
                                fontSize: 32,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                minWidth: 372,
                            }}
                        >
                            Explore cognitive science, quizzes & projects
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            height: '64px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '435px', height: '45px' }} />
                        <button
                            style={{
                                width: '310px',
                                height: '64px',
                                ...createButtonStyle('primary'),
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 20px rgba(156, 136, 217, 0.4)`;
                                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                (e.currentTarget as HTMLButtonElement).style.background = COLORS.headerBg;
                            }}
                        >
                            Enter the system
                        </button>
                        <div style={{ width: 49, height: 45 }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Section2: React.FC = () => (
    <div style={{ height: '100vh' }}>
        <div style={{ paddingTop: `${SPACING.headerHeight}px`, paddingBottom: `${SPACING.headerHeight}px` }}>
            <div
                style={{
                    display: 'flex',
                    height: '854px',
                    padding: '40px',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '868px',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        alignSelf: 'stretch',
                    }}
                >
                    <h1
                        style={{
                            display: 'flex',
                            height: '208.323px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignSelf: 'stretch',
                            color: COLORS.primary,
                            fontFamily: 'Montserrat',
                            fontSize: 80,
                            fontStyle: 'italic',
                            fontWeight: 500,
                            lineHeight: 'normal',
                        }}
                    >
                        FROM KNOWLEDGE TO SYSTEMS
                    </h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            alignSelf: 'stretch',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flex: '1 0 0',
                            }}
                        >
                            <p
                                style={{
                                    width: '552px',
                                    height: '500px',
                                    color: COLORS.primary,
                                    textAlign: 'justify',
                                    fontFamily: '"JetBrains Mono"',
                                    fontSize: '36px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                }}
                            >
                                I design structured digital environments that transform complex knowledge into interactive tools.
                                From cognitive science to UI systems, each project is built to explore how humans think, learn and
                                interact.
                            </p>
                            <div style={{ width: '181px', height: '281px' }} />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        height: '193px',
                        padding: '20px 80px 60px 20px',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        flex: '0 0 auto',
                    }}
                >
                    <button style={{ width: '321px', height: '47px', ...createButtonStyle() }}>
                        My Projects
                    </button>
                    <button style={{ width: '453px', height: '46.848px', ...createButtonStyle() }}>
                        My Portfolio
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const Section3: React.FC = () => (
    <div style={{ height: '100vh' }}>
        <div style={{ paddingTop: `${SPACING.headerHeight}px`, paddingBottom: `${SPACING.headerHeight}px` }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    minHeight: `calc(100vh - ${SPACING.headerHeight * 2}px)`,
                    maxWidth: `${SPACING.maxWidth}px`,
                    margin: '0 auto',
                    paddingLeft: '120px',
                    gap: '40px',
                }}
            >
                <div
                    style={{
                        color: COLORS.primary,
                        fontFamily: 'Montserrat',
                        fontSize: 96,
                        fontStyle: 'italic',
                        fontWeight: 500,
                        lineHeight: '1',
                    }}
                >
                    THE SANDBOX
                </div>
                <div
                    style={{
                        color: COLORS.primary,
                        fontFamily: 'JetBrains Mono',
                        fontSize: 32,
                        fontStyle: 'italic',
                        fontWeight: 500,
                        maxWidth: '520px',
                        lineHeight: '1.4',
                        textAlign: 'center',
                    }}
                >
                    A controlled environment for experimentation, iteration, and structured exploration.
                </div>
                <button
                    style={{
                        width: '310px',
                        height: '64px',
                        ...createButtonStyle('primary'),
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 20px rgba(156, 136, 217, 0.4)`;
                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                        (e.currentTarget as HTMLButtonElement).style.background = COLORS.headerBg;
                    }}
                >
                    Discover more
                </button>
            </div>
        </div>
    </div>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const Home_other: React.FC = () => {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const appRef = useRef<Application | null>(null);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState(0);

    // Refs for non-state values
    const sectionRef = useRef(0);
    const isAnimating = useRef(false);
    const dprRef = useRef<number>(DPR_CONFIG.initial);
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());

    // ========================================================================
    // PERFORMANCE MONITORING
    // ========================================================================

    const updateCanvasResolution = useCallback(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const dpr = animationsEnabled ? Math.max(DPR_CONFIG.min, Math.min(dprRef.current, DPR_CONFIG.max)) : 1;

        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    }, [animationsEnabled]);

    const monitorPerformance = useCallback(() => {
        frameCount.current++;

        const now = performance.now();
        const delta = now - lastTime.current;

        if (delta > 1000) {
            const fps = (frameCount.current * 1000) / delta;
            let newDpr = dprRef.current;

            if (fps < ANIMATION.minFps) newDpr -= DPR_CONFIG.decreaseThreshold;
            if (fps > ANIMATION.targetFps) newDpr += DPR_CONFIG.increaseThreshold;

            newDpr = Math.max(DPR_CONFIG.min, Math.min(newDpr, DPR_CONFIG.max));

            if (Math.abs(newDpr - dprRef.current) > 0.05) {
                dprRef.current = newDpr;
                updateCanvasResolution();
            }

            frameCount.current = 0;
            lastTime.current = now;
        }

        requestAnimationFrame(monitorPerformance);
    }, [updateCanvasResolution]);

    // ========================================================================
    // INITIALIZATION
    // ========================================================================

    useEffect(() => {
        const initSpline = async () => {
            if (!canvasRef.current) {
                console.error('❌ Canvas ref not available');
                return;
            }

            try {
                const canvas = canvasRef.current;
                updateCanvasResolution();

                const app = new Application(canvas);
                appRef.current = app;

                // FIX: Use BASE_URL from Vite config for GitHub Pages
                const splineUrl = `${import.meta.env.BASE_URL || '/'}brain.splinecode`;
                console.log('📦 Loading Spline from:', splineUrl);

                await app.load(splineUrl);
                monitorPerformance();
                console.log('✅ Spline loaded successfully');

                app.setVariable('section', 0);

                setTimeout(() => {
                    setIsLoading(false);
                }, 200);

                const animate = () => {
                    requestAnimationFrame(animate);
                };
                animate();
            } catch (error) {
                console.error('❌ Error loading Spline:', error);
                setIsLoading(false);
            }
        };

        initSpline();

        // Cleanup
        return () => {
            if (appRef.current) {
                appRef.current = null;
            }
        };
    }, [updateCanvasResolution, monitorPerformance]);

    // ========================================================================
    // EVENT HANDLERS
    // ========================================================================

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!animationsEnabled) return;
            e.preventDefault();
            if (isAnimating.current) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const current = sectionRef.current;
            const next = current + direction;

            if (next < 0 || next > SPACING.sectionCount - 1) return;

            isAnimating.current = true;
            sectionRef.current = next;
            setSection(next);

            if (appRef.current) {
                try {
                    appRef.current.setVariable('section', next);
                } catch (e) {
                    console.warn('⚠️  Spline variable update failed', e);
                }
            }

            setTimeout(() => {
                isAnimating.current = false;
            }, ANIMATION.duration);
        };

        const handleResize = () => {
            if (!canvasRef.current) return;

            const dpr = animationsEnabled ? Math.min(window.devicePixelRatio || 1, DPR_CONFIG.max) : 1;

            canvasRef.current.width = window.innerWidth * dpr;
            canvasRef.current.height = window.innerHeight * dpr;

            canvasRef.current.style.width = `${window.innerWidth}px`;
            canvasRef.current.style.height = `${window.innerHeight}px`;
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleWheel);
        };
    }, [animationsEnabled]);

    // Check for prefers-reduced-motion
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            setAnimationsEnabled(false);
        }
    }, []);

    // ========================================================================
    // RENDER
    // ========================================================================

    return (
        <div style={styles.fullContainer}>
            {/* Canvas */}
            {animationsEnabled && (
                <div style={styles.canvasWrapper}>
                    <canvas ref={canvasRef} style={styles.canvas} />
                </div>
            )}

            {/* Loading Indicator */}
            {isLoading && <LoadingIndicator />}

            {/* Keyframe Animations */}
            <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(233%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

            {/* Header */}
            <Header
                animationsEnabled={animationsEnabled}
                onAnimationsToggle={() => setAnimationsEnabled((prev) => !prev)}
                onNavigate={navigate}
            />

            {/* Sections Container */}
            <div style={styles.sectionsContainer}>
                <div style={styles.sectionsWrapper(section, animationsEnabled)}>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                </div>
            </div>
        </div>
    );
};