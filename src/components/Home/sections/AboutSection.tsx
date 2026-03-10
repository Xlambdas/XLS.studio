// src/components/Home/sections/AboutSection.tsx

import { PrimaryButton } from "../../common/Button/Button";
import "../home.css";

export const AboutSection_old = (theme: any) => {

    return (
        <div className="home-section home-section--about">

            <h2
                className="home-title"
                style={{
                    fontFamily: theme.typography.primaryFontFamily,
                    fontSize: `clamp(${10 * theme.typography.fontScale}px,6vw,${60 * theme.typography.fontScale
                        }px)`,
                    color: theme.colors.primary,
                }}
            >
                FROM KNOWLEDGE TO SYSTEMS
            </h2>

            <div className="home-about-layout">

                <div className="home-about-text">

                    <p
                        style={{
                            fontFamily: theme.typography.secondaryFontFamily,
                            fontSize: `clamp(${18 * theme.typography.fontScale}px,2vw,${36 * theme.typography.fontScale
                                }px)`,
                            color: theme.colors.primary,
                        }}
                    >
                        I design structured digital environments that transform complex
                        knowledge into interactive tools. From cognitive science to UI
                        systems, each project is built to explore how humans think,
                        learn and interact.
                    </p>

                </div>

                <div className="home-about-buttons">

                    <PrimaryButton variant="small">
                        My Projects
                    </PrimaryButton>

                    <PrimaryButton variant="large">
                        My Portfolio
                    </PrimaryButton>

                </div>

            </div>
        </div>
    );
};


import React from "react";
import { type AppTheme } from "../../../theme/theme.types";
import "./sections.css";

export const AboutSection: React.FC<{ theme: AppTheme }> = ({ theme }) => {

    return (
        <div className="about-container">

            <h2
                style={{
                    fontSize: `clamp(${Math.round(10 * theme.typography.fontScale)}px,6vw,${Math.round(60 * theme.typography.fontScale)}px)`,
                    fontFamily: theme.typography.primaryFontFamily,
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: theme.colors.primary,
                }}
                className="about-title"
            >
                FROM KNOWLEDGE TO SYSTEMS
            </h2>

            <div className="about-content">

                <div className="about-text">

                    <p
                        style={{
                            fontSize: `clamp(${Math.round(18 * theme.typography.fontScale)}px,2vw,${Math.round(36 * theme.typography.fontScale)}px)`,
                            fontFamily: theme.typography.secondaryFontFamily,
                            color: theme.colors.primary,
                        }}
                        className="about-description"
                    >
                        I design structured digital environments that transform complex knowledge into interactive tools.
                        From cognitive science to UI systems, each project is built to explore how humans think, learn and interact.
                    </p>

                </div>

                <div className="about-buttons">

                    <PrimaryButton className="about-btn-small">
                        My Projects
                    </PrimaryButton>

                    <PrimaryButton className="about-btn-large">
                        My Portfolio
                    </PrimaryButton>

                </div>

            </div>

        </div>
    );
};