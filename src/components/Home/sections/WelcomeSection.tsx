// src/components/Home/sections/WelcomeSection.tsx

import { PrimaryButton } from "../../common/Button/Button";
// import "../home.css";

export const WelcomeSection_old = (theme: any) => {

    return (
        <div className="home-section home-section--welcome">
            <div className="home-stack">

                <div className="home-text-right">

                    <h1
                        className="home-title"
                        style={{
                            fontFamily: theme.typography.primaryFontFamily,
                            fontSize: `clamp(${36 * theme.typography.fontScale}px,8vw,${96 * theme.typography.fontScale
                                }px)`,
                            color: theme.colors.primary,
                        }}
                    >
                        WELCOME
                    </h1>

                    <p
                        className="home-description-right"
                        style={{
                            fontFamily: theme.typography.secondaryFontFamily,
                            fontSize: `clamp(${16 * theme.typography.fontScale}px,2.5vw,${32 * theme.typography.fontScale
                                }px)`,
                            color: theme.colors.primary,
                        }}
                    >
                        Explore cognitive science, quizzes & projects
                    </p>

                </div>

                <div className="home-center-button">
                    <PrimaryButton variant="cta">
                        Enter the system
                    </PrimaryButton>
                </div>

            </div>
        </div>
    );
};

import React from "react";
import "./sections.css";
import type { AppTheme } from "../../../theme/theme.types";

export const WelcomeSection: React.FC<{ theme: AppTheme }> = ({ theme }) => {

    return (
        <div className="welcome-container">

            <div className="welcome-stack">

                <div className="welcome-text">

                    <h1
                        style={{
                            fontFamily: theme.typography.primaryFontFamily,
                            fontSize: `clamp(${Math.round(36 * theme.typography.fontScale)}px,8vw,${Math.round(96 * theme.typography.fontScale)}px)`,
                            fontStyle: "italic",
                            fontWeight: 500,
                            lineHeight: "normal",
                            color: theme.colors.primary,
                        }}
                    >
                        WELCOME
                    </h1>

                    <p
                        className="welcome-description"
                        style={{
                            fontFamily: theme.typography.secondaryFontFamily,
                            fontSize: `clamp(${Math.round(16 * theme.typography.fontScale)}px,2.5vw,${Math.round(32 * theme.typography.fontScale)}px)`,
                            fontWeight: 500,
                            color: theme.colors.primary,
                        }}
                    >
                        Explore cognitive science, quizzes & projects
                    </p>

                </div>

                <div className="welcome-button-row">

                    <div />

                    <div className="welcome-button">
                        <PrimaryButton variant="cta">
                            Enter the system
                        </PrimaryButton>
                    </div>

                    <div />

                </div>

            </div>

        </div>
    );
};