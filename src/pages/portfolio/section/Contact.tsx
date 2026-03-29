import React from 'react';
import { type PortfolioTranslations } from '../../../locales';

interface ContactProps {
    t: PortfolioTranslations;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
    const contactLinks = [
        { label: 'Email', href: 'mailto:cogassien@hotmail.com' },
        { label: 'LinkedIn', href: 'https://fr.linkedin.com/in/corentin-gassien-1b7289261' },
        { label: 'GitHub', href: 'https://github.com/Xlambdas' },
    ];

    return (
        <section
            className="min-h-screen py-20 px-4 flex items-center"
            role="region"
            aria-label="Contact section"
        >
            <div className="max-w-3xl mx-auto w-full text-center">
                <h2
                    className="text-4xl sm:text-5xl font-light italic mb-8"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.contact?.getInTouch || 'Get in Touch'}
                </h2>

                <p
                    className="text-lg mb-12"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-secondary)',
                    }}
                >
                    {t.contact?.description || 'Let\'s connect and explore opportunities together.'}
                </p>

                <div className="flex justify-center gap-6 flex-wrap">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="px-6 py-3 border border-current hover:opacity-70 transition-opacity"
                            style={{
                                color: 'var(--color-primary)',
                                fontFamily: 'var(--font-secondary)',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};