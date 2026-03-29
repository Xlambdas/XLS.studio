import React from 'react';
import { type PortfolioTranslations } from '../../../locales';

interface SkillsProps {
    t: PortfolioTranslations;
}

export const Interests: React.FC<SkillsProps> = () => {

    return (
        <section
            className="min-h-screen py-20 px-4"
            role="region"
            aria-label="Skills and expertise"
        >
            <div className="max-w-5xl mx-auto">
                <h2
                    className="text-4xl sm:text-5xl font-light italic mb-12"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    aaa
                </h2>

            </div>
        </section>
    );
};