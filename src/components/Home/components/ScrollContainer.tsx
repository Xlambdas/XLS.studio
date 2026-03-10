import { type ScrollContainerProps } from '../constants';
import React from 'react';
import "./container.css";

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
    section,
    animationsEnabled,
    children,
}) => {

    const totalSections = React.Children.count(children);

    return (
        <div className="scroll-container">
            <div
                className="scroll-container-inner"
                style={{
                    height: `${totalSections * 100}vh`,
                    transform: `translateY(-${section * 100}vh)`,
                    transition: animationsEnabled
                        ? "transform 0.8s cubic-bezier(0.77,0,0.175,1)"
                        : "none",
                }}
            >
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child as React.ReactElement, {
                        active: index === section,
                    } as any)
                )}
            </div>
        </div>
    );
};