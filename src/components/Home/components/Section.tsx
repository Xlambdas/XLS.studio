import React from 'react';
import { type SectionProps } from '../constants';
import "./container.css";

export const Section: React.FC<SectionProps> = ({
    children,
    ariaLabel,
    active,
}) => {

    return (
        <section
            inert={!active ? true : undefined} // For better accessibility, non-active sections are inert
            aria-label={ariaLabel}
            className="home-section"
        >
            {children}
        </section>
    );
};