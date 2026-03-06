"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useSpring,
    useMotionValue,
    SpringOptions,
} from "framer-motion";

interface SpringConfig {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
}

interface SmoothCursorProps {
    cursor?: React.ReactNode;
    springConfig?: SpringConfig;
}

const defaultSpringConfig: SpringConfig = {
    damping: 55,
    stiffness: 280,
    mass: 0.6,
    restDelta: 0.001,
};

const rotateSpringConfig: SpringOptions = {
    damping: 30,
    stiffness: 120,
    mass: 1.2,
    restDelta: 0.01,
};

function DefaultCursorSVG() {
    return (
        <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                fill="white"
                stroke="black"
                strokeWidth="1"
            />
        </svg>
    );
}

export function SmoothCursor({
    cursor = <DefaultCursorSVG />,
    springConfig = defaultSpringConfig,
}: SmoothCursorProps) {
    const cursorX = useMotionValue(-200);
    const cursorY = useMotionValue(-200);

    const springOptions: SpringOptions = {
        damping: springConfig.damping,
        stiffness: springConfig.stiffness,
        mass: springConfig.mass,
        restDelta: springConfig.restDelta,
    };

    const smoothX = useSpring(cursorX, springOptions);
    const smoothY = useSpring(cursorY, springOptions);

    // Smooth the rotation with its own spring to kill jitter
    const rawRotate = useMotionValue(0);
    const smoothRotate = useSpring(rawRotate, rotateSpringConfig);

    const lastPos = useRef({ x: -200, y: -200, time: Date.now() });
    // Exponential moving average for velocity smoothing
    const velocity = useRef({ vx: 0, vy: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const EMA_ALPHA = 0.25; // lower = smoother, higher = more reactive
        const MIN_SPEED = 0.08; // don't rotate below this speed (prevents idle jitter)

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            const dt = Math.max(now - lastPos.current.time, 1);

            const rawVx = (e.clientX - lastPos.current.x) / dt;
            const rawVy = (e.clientY - lastPos.current.y) / dt;

            // EMA smoothing on velocity
            velocity.current.vx =
                EMA_ALPHA * rawVx + (1 - EMA_ALPHA) * velocity.current.vx;
            velocity.current.vy =
                EMA_ALPHA * rawVy + (1 - EMA_ALPHA) * velocity.current.vy;

            const speed = Math.sqrt(
                velocity.current.vx ** 2 + velocity.current.vy ** 2
            );

            if (speed > MIN_SPEED) {
                const angle =
                    (Math.atan2(velocity.current.vy, velocity.current.vx) * 180) /
                    Math.PI +
                    90;
                rawRotate.set(angle);
            }

            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            lastPos.current = { x: e.clientX, y: e.clientY, time: now };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                x: smoothX,
                y: smoothY,
                rotate: smoothRotate,
                pointerEvents: "none",
                zIndex: 9999,
                translateX: "-50%",
                translateY: "-50%",
                willChange: "transform",
            }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        >
            {cursor}
        </motion.div>
    );
}
