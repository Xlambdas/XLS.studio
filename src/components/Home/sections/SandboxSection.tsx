// src/components/Home/sections/SandboxSection.tsx

// import "../home.css";

export const SandboxSection_old = (theme: any) => {

    return (
        <div className="home-section home-section--sandbox">

            <h2
                className="home-title"
                style={{
                    fontFamily: theme.typography.primaryFontFamily,
                    fontSize: `clamp(${42 * theme.typography.fontScale}px,8vw,${96 * theme.typography.fontScale
                        }px)`,
                    color: theme.colors.primary,
                }}
            >
                THE SANDBOX
            </h2>

            <div className="home-sandbox-stack">

                <p
                    className="home-description"
                    style={{
                        fontFamily: theme.typography.secondaryFontFamily,
                        fontSize: `clamp(${16 * theme.typography.fontScale}px,2.5vw,${32 * theme.typography.fontScale
                            }px)`,
                        color: theme.colors.primary,
                    }}
                >
                    A controlled environment for experimentation,
                    iteration, and structured exploration.
                </p>

                <PrimaryButton>
                    Discover more
                </PrimaryButton>

            </div>
        </div>
    );
};


import React from "react";
import { type AppTheme } from "../../../theme/theme.types";
import { PrimaryButton } from "../../common/Button/Button";
import "./sections.css";

export const SandboxSection: React.FC<{ theme: AppTheme }> = ({ theme }) => {

    return (
        <div className="sandbox-container">

            <h2
                className="sandbox-title"
                style={{
                    fontFamily: theme.typography.primaryFontFamily,
                    fontSize: `clamp(${Math.round(42 * theme.typography.fontScale)}px,8vw,${Math.round(96 * theme.typography.fontScale)}px)`,
                    fontStyle: "italic",
                    fontWeight: 500,
                    lineHeight: "1",
                    color: theme.colors.primary,
                }}
            >
                THE SANDBOX
            </h2>

            <div className="sandbox-content">

                <p
                    className="sandbox-description"
                    style={{
                        fontFamily: theme.typography.secondaryFontFamily,
                        fontSize: `clamp(${Math.round(16 * theme.typography.fontScale)}px,2.5vw,${Math.round(32 * theme.typography.fontScale)}px)`,
                        fontStyle: "italic",
                        fontWeight: 500,
                        lineHeight: "1.4",
                        color: theme.colors.primary,
                    }}
                >
                    A controlled environment for experimentation,
                    iteration, and structured exploration.
                </p>

                <div className="sandbox-button">
                    <PrimaryButton variant="cta">
                        Discover more
                    </PrimaryButton>
                </div>

            </div>

        </div>
    );
};