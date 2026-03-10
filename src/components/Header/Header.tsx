import React from "react";
import { useNavigate  } from "react-router-dom";

import "./header.css";


type HeaderProps = {
    type?: "main" | "default";
    animationsEnabled?: boolean;
    setAnimationsEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
};


export const Header: React.FC<HeaderProps> = ({
    type = "default",
    animationsEnabled,
    setAnimationsEnabled,
}) => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-container">

                <h1 className="header-logo">
                    XLS.studio
                </h1>

                {type === "main" && setAnimationsEnabled && (
                    <button
                        onClick={() => setAnimationsEnabled(prev => !prev)}
                        className={`header-toggle hide-below-600 ${animationsEnabled ? "active" : ""
                            }`}
                    >
                        {animationsEnabled ? "Animations ON" : "Animations OFF"}
                    </button>
                )}

                <button
                    onClick={() => navigate("/accessibility")}
                    className="header-button"
                >
                    Accessibility
                </button>

                <button className="header-color-toggle" />

            </div>
        </header>
    );
};




// to delete :
import { useTheme } from '../../context/themeContext';
import { DEFAULT_THEME } from '../../theme/theme.defaults.ts';

export const Header_old: React.FC<HeaderProps> = ({
    type = "default",
    animationsEnabled,
    setAnimationsEnabled,
}) => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "clamp(60px, 6vh, 70px)",
                zIndex: 10,
                backgroundColor: theme.colors.secondary,
            }}
        >
            <div
                style={{
                    display: "flex",
                    padding: "0 clamp(16px, 4vw, 40px)",
                    maxWidth: "1800px",
                    width: "100%",
                    alignItems: "center",
                    gap: "0.625rem",
                    height: "100%",
                    margin: "0 auto",
                }}
            >
                <h1
                    style={{
                        alignSelf: "center",
                        color: theme.colors.primary,
                        fontFamily: DEFAULT_THEME.typography.primaryFontFamily,
                        fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                        fontStyle: "italic",
                        fontWeight: 300,
                        margin: 0,
                        flex: 1,
                    }}
                >
                    XLS.studio
                </h1>

                {type === "main" && setAnimationsEnabled && (
                    <button
                        onClick={() =>
                            setAnimationsEnabled((prev) => !prev)
                        }
                        className="hide-below-600"
                        style={{
                            alignSelf: "center",
                            minWidth: "fit-content",
                            padding: "0 16px",
                            height: 30,
                            borderRadius: 20,
                            border: "1px solid #9C88D9",
                            background: animationsEnabled
                                ? "#9C88D9"
                                : "#18112D",
                            color: animationsEnabled
                                ? "#18112D"
                                : "#9C88D9",
                            fontFamily: theme.typography.secondaryFontFamily || DEFAULT_THEME.typography.secondaryFontFamily,
                            fontSize: "0.8rem",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            // display: window.innerWidth < 600 ? "none" : "block",
                        }}
                    >
                        {animationsEnabled
                            ? "Animations ON"
                            : "Animations OFF"}
                    </button>
                )}

                <button
                    onClick={() => navigate("/accessibility")}
                    style={{
                        alignSelf: "center",
                        display: "flex",
                        height: "30px",
                        minWidth: "max-content",
                        padding: "0 clamp(16px, 4vw, 48px)",
                        alignItems: "center",
                        borderRadius: "30px",
                        border: "1px solid #9C88D9",
                        background: DEFAULT_THEME.colors.secondary,
                        color: DEFAULT_THEME.colors.primary,
                        fontFamily: DEFAULT_THEME.typography.secondaryFontFamily,
                        fontSize: "clamp(0.8rem, 1vw, 1rem)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        fontStyle: "italic",
                        fontWeight: 100,
                        lineHeight: "normal",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "0 0 15px rgba(156,136,217,0.3)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "none";
                    }}
                >
                    Accessibility
                </button>

                <button
                    style={{
                        alignSelf: "center",
                        width: "clamp(40px, 5vw, 50px)",
                        height: "clamp(28px, 4vw, 30px)",
                        background: theme.colors.primary,
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background =
                            theme.colors.primaryGlow;
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background =
                            theme.colors.primary;
                    }}
                />
            </div>
        </div>
    );
};

