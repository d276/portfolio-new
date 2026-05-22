import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    duration?: number; // duration of animation in ms
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
    target, 
    suffix = '', 
    duration = 1500 
}) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quad formula for smooth decelerating animation
            const easeProgress = progress * (2 - progress);
            
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        window.requestAnimationFrame(step);
    }, [hasAnimated, target, duration]);

    return (
        <span ref={elementRef}>
            {count}
            {suffix}
        </span>
    );
};
