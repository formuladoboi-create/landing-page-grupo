import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
    const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { ref, isRevealed };
};

// Component wrapper for scroll reveal
import React, { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    variant?: 'up' | 'scale' | 'fade';
    delay?: number;
    threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = '',
    variant = 'up',
    delay = 0,
    threshold = 0.15,
}) => {
    const { ref, isRevealed } = useScrollReveal({ threshold });

    const variantClass = {
        up: 'scroll-reveal',
        scale: 'scroll-reveal-scale',
        fade: 'scroll-reveal-fade',
    }[variant];

    return (
        <div
            ref={ref}
            className={`${variantClass} ${isRevealed ? 'revealed' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
