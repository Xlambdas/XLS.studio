// src/components/common/types.ts

export interface PrimaryButtonProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
    /** Accessible label when button text is not descriptive enough */
    ariaLabel?: string;
    disabled?: boolean;
    className?: string;
    variant?: "default" | "small" | "large" | "cta" | "outline" | "ghost";
}

export interface LoadingIndicatorProps {
    /** Optional override message */
    message?: string;
}



// to delete :

export interface PrimaryButtonProps_old {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
    /** Accessible label when button text is not descriptive enough */
    ariaLabel?: string;
    disabled?: boolean;
}