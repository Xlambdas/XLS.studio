import React from 'react';
import { type PortfolioTranslations } from '../../../locales';


// ============================================================================
// TIMELINE SECTION
// ============================================================================
interface TimelineProps {
    t: PortfolioTranslations;
}

export const Timeline: React.FC<TimelineProps> = ({ t }) => {

    return (
        <section
            className="min-h-screen py-20 px-4 flex items-center"
            role="region"
            aria-label="Timeline section"
        >
            <div className="max-w-3xl mx-auto w-full">
                <h2
                    className="text-4xl sm:text-5xl font-light italic mb-12"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.timeline?.title || 'Journey'}
                </h2>

                {/* <div className="space-y-8">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="border-l-2 border-current pl-6">
                            <p
                                className="text-sm font-light"
                                style={{
                                    color: 'var(--color-primary)',
                                    fontFamily: 'var(--font-secondary)',
                                }}
                            >
                                {event.year}
                            </p>
                            <h3
                                className="text-xl font-light mt-2"
                                style={{
                                    color: 'var(--color-primary)',
                                    fontFamily: 'var(--font-secondary)',
                                }}
                            >
                                {event.title}
                            </h3>
                            <p
                                className="text-base mt-2 opacity-80"
                                style={{
                                    color: 'var(--color-primary)',
                                    fontFamily: 'var(--font-secondary)',
                                }}
                            >
                                {event.description}
                            </p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};