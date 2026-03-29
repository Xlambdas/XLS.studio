import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SkillsProps, SkillCategory } from '../constants';

export const Skills: React.FC<SkillsProps> = ({ t }) => {
    const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
        new Set([0]) // Expand first category by default
    );

    // Transform translation data into component format
    const skillCategories: SkillCategory[] = Object.entries(t.skills.categories).map(
        ([key, category]) => ({
            key,
            title: category.title,
            description: category.description,
            subcategories: Object.entries(category.subcategories).map(
                ([, subData]) => ({
                    name: subData.name,
                    skills: subData.skills,
                })
            ),
        })
    );

    const toggleCategory = (index: number) => {
        setExpandedCategories((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <section
            className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 flex items-center"
            role="region"
            aria-label={t.skills.ariaLabel}
        >
            <div className="max-w-4xl mx-auto w-full">
                {/* Section Title */}
                <h2
                    className="text-4xl sm:text-5xl lg:text-6xl font-light italic mb-6 sm:mb-8"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.skills.title}
                </h2>

                {/* Section Description */}
                <p
                    className="text-base sm:text-lg mb-12 sm:mb-16 opacity-80"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-secondary)',
                    }}
                >
                    {t.skills.description}
                </p>

                {/* Skills Categories */}
                <div className="space-y-4 sm:space-y-6">
                    {skillCategories.map((category, categoryIndex) => {
                        const isExpanded = expandedCategories.has(categoryIndex);

                        return (
                            <div
                                key={category.key}
                                className="border border-current rounded transition-all duration-200"
                                style={{
                                    borderColor: 'var(--color-primary-transparent)',
                                }}
                            >
                                {/* Category Header */}
                                <button
                                    onClick={() => toggleCategory(categoryIndex)}
                                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 hover:opacity-80 transition-opacity"
                                    style={{
                                        color: 'var(--color-primary)',
                                        fontFamily: 'var(--font-secondary)',
                                    }}
                                    aria-expanded={isExpanded}
                                >
                                    <div className="flex-1 text-left">
                                        <h3 className="text-lg sm:text-xl font-light mb-1 sm:mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm opacity-60">
                                            {category.description}
                                        </p>
                                    </div>

                                    <div
                                        className="shrink-0 transition-transform duration-200"
                                        style={{
                                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                        }}
                                    >
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                {/* Category Content */}
                                {isExpanded && (
                                    <div
                                        className="border-t px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6"
                                        style={{
                                            borderColor: 'var(--color-primary-transparent)',
                                        }}
                                    >
                                        {category.subcategories.map((subcategory, subIndex) => (
                                            <div key={subIndex}>
                                                <h4
                                                    className="text-sm sm:text-base font-light mb-3 opacity-70"
                                                    style={{
                                                        color: 'var(--color-primary)',
                                                        fontFamily: 'var(--font-secondary)',
                                                    }}
                                                >
                                                    {subcategory.name}
                                                </h4>

                                                {/* Skills Grid */}
                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                                                    {subcategory.skills.map((skill, skillIndex) => (
                                                        <div
                                                            key={skillIndex}
                                                            className="px-3 sm:px-4 py-2 border rounded text-xs sm:text-sm font-light transition-all duration-200 hover:opacity-100"
                                                            style={{
                                                                color: 'var(--color-primary)',
                                                                fontFamily: 'var(--font-secondary)',
                                                                borderColor: 'var(--color-primary-transparent)',
                                                                opacity: 0.85,
                                                            }}
                                                        >
                                                            {skill}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Additional Note */}
                <p
                    className="text-xs sm:text-sm mt-12 sm:mt-16 opacity-60"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-secondary)',
                    }}
                >
                    {t.skills.finalNote}
                </p>
            </div>
        </section>
    );
};