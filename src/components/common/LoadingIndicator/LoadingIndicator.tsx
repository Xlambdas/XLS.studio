// src/components/common/LoadingIndicator/LoadingIndicator.tsx
import React from "react";
import { type LoadingIndicatorProps } from "../types";
import "./loading-indicator.css";

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    message = "Loading…",
}) => {
    const { theme } = useTheme();

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label={message}
            className="loading-overlay"
            style={{
                background: theme.colors.background,
                fontFamily: theme.typography.secondaryFontFamily,
                fontSize: `${theme.typography.fontScale}rem`,
            }}
            data-reduced-motion={theme.reducedMotion}
        >
            <div
                aria-hidden="true"
                className="loading-spinner"
                style={{
                    borderColor: theme.colors.primaryTransparent,
                    borderTopColor: theme.colors.primary,
                }}
            />

            <span className="loading-text">
                {message}
            </span>
        </div>
    );
};




// to delete :

import { useTheme } from '../../../context/themeContext';

export const LoadingIndicator_old: React.FC<LoadingIndicatorProps> = ({
    message = 'Loading…',
}) => {
    const { theme } = useTheme();
    const colors = theme.colors;

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label={message}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.background,
                gap: '16px',
            }}
        >
            {/* Animated ring */}
            <div
                aria-hidden="true"
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: `3px solid ${colors.primaryTransparent}`,
                    borderTopColor: colors.primary,
                    animation: theme.reducedMotion
                        ? 'none'
                        : 'spin 0.9s linear infinite',
                }}
            />

            <span style={{
                color: colors.primary,
                fontFamily: theme.typography.secondaryFontFamily,
                fontSize: `${theme.typography.fontScale}rem`,
            }}>
                {message}
            </span>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};