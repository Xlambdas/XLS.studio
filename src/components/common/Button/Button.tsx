// src/components/common/Button/Button.tsx

import { cn } from "../../../lib/utils";
import { type PrimaryButtonProps } from "../types";
import "./button.css";

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    ariaLabel,
    disabled = false,
    className,
    variant = "default",
}) => {
    return (
        <button
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "primary-button",
                `primary-button--${variant}`,
                className
            )}
        >
            {children}
        </button>
    );
};



// to delete

import { useState } from 'react';
import { DEFAULT_THEME } from '../../../theme/theme.defaults.ts';
import { useTheme } from '../../../context/themeContext.tsx';


interface PrimaryButtonProps_old {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
    /** Accessible label when button text is not descriptive enough */
    ariaLabel?: string;
    disabled?: boolean;
}

export const PrimaryButton_old: React.FC<PrimaryButtonProps_old> = ({
    children,
    style,
    onClick,
    ariaLabel,
    disabled = false,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const { theme } = useTheme();

    const colors = useTheme().theme.colors || DEFAULT_THEME.colors;
    const baseStyle = useTheme().theme || DEFAULT_THEME;
    const isActive = (isHovered || isFocused) && !disabled;

    return (
        <button
            tabIndex={0}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
                ...baseStyle,
                background: isActive ? colors.darkButtonTransparent : colors.darkButton,
                boxShadow: isActive && !theme.reducedMotion
                    ? `0 0 20px ${colors.primaryGlow}`
                    : 'none',
                transform: isFocused ? 'translateZ(0)' : 'none',
                // WCAG 2.4.7: always-visible focus indicator
                outline: isFocused
                    ? `3px solid ${colors.primary}`
                    : 'none',
                outlineOffset: '3px',
                opacity: disabled ? 0.45 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer',
                ...style,
            }}
        >
            {children}
        </button>
    );
};



// -------------------------------

