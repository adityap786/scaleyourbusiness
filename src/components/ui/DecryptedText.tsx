import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * DecryptedText
 *
 * Effect that scrambles text like a decoding sequence.
 */

interface DecryptedTextProps {
    text: string;
    speed?: number; // Time in ms between character swaps
    maxIterations?: number; // How many scrambles per character before revealing
    revealDirection?: 'start' | 'end' | 'center';
    sequential?: boolean; // If true, decrypts one character at a time. If false, decrypts all randomly.
    className?: string;
    scrambleCharacters?: string;
    animateOn?: 'view' | 'hover';
}

const DEFAULT_SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export const DecryptedText = ({
    text,
    speed = 40,
    maxIterations = 10,
    sequential = true,
    revealDirection = 'start',
    className = '',
    scrambleCharacters = DEFAULT_SCRAMBLE_CHARS,
    animateOn = 'hover',
}: DecryptedTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const [isDecrypting, setIsDecrypting] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);

    // Track intersections for 'view' animation
    useEffect(() => {
        if (animateOn !== 'view' || !containerRef.current) return;

        let hasAnimated = false;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        triggerDecryption();
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [animateOn]);

    const triggerDecryption = () => {
        if (isDecrypting) return;
        setIsDecrypting(true);

        const length = text.length;
        let iteration = 0;

        // Create an array to track if a character is "locked" in its final state
        const lockedChars = new Array(length).fill(false);

        const interval = setInterval(() => {
            let allLocked = true;
            let newText = '';

            for (let i = 0; i < length; i++) {
                // Handle sequential locking logic based on direction
                let shouldLock = false;

                if (sequential) {
                    // How many characters should be locked by this iteration?
                    // This determines the 'wave' of revealing.
                    const revealedCount = Math.floor(iteration / (maxIterations / length));

                    if (revealDirection === 'start') {
                        shouldLock = i < revealedCount;
                    } else if (revealDirection === 'end') {
                        shouldLock = i >= length - revealedCount;
                    } else if (revealDirection === 'center') {
                        const center = length / 2;
                        shouldLock = Math.abs(i - center) < revealedCount / 2;
                    }
                } else {
                    // Random unlocking
                    shouldLock = iteration >= maxIterations;
                }

                if (text[i] === ' ') {
                    newText += ' ';
                    lockedChars[i] = true;
                } else if (shouldLock || lockedChars[i]) {
                    newText += text[i];
                    lockedChars[i] = true;
                } else {
                    allLocked = false;
                    // Pick a random scramble character
                    newText += scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
                }
            }

            setDisplayText(newText);
            iteration++;

            if (allLocked && iteration > maxIterations) {
                clearInterval(interval);
                setDisplayText(text); // Ensure final state is perfect
                setIsDecrypting(false);
            }
        }, speed);
    };

    return (
        <motion.span
            ref={containerRef}
            className={className}
            onMouseEnter={() => animateOn === 'hover' && triggerDecryption()}
        >
            {displayText}
        </motion.span>
    );
};
