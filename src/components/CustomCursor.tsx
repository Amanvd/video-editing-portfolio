"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const isHoveringRef = useRef(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 420, damping: 32, mass: 0.3 });
  const springY = useSpring(cursorY, { stiffness: 420, damping: 32, mass: 0.3 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updatePointerCapability = () => setIsFinePointer(mediaQuery.matches);

    updatePointerCapability();
    mediaQuery.addEventListener('change', updatePointerCapability);

    return () => mediaQuery.removeEventListener('change', updatePointerCapability);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (event: MouseEvent) => {
      const offset = isHoveringRef.current ? 28 : 10;
      cursorX.set(event.clientX - offset);
      cursorY.set(event.clientY - offset);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const nextHovering = Boolean(target?.closest('[data-cursor-hover]'));
      isHoveringRef.current = nextHovering;
      setIsHovering(nextHovering);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', updateHoverState);
    window.addEventListener('mouseout', updateHoverState);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', updateHoverState);
      window.removeEventListener('mouseout', updateHoverState);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isFinePointer]);

  if (!isFinePointer || !isVisible) {
    return null;
  }

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? 'h-14 w-14 border-accent/40 bg-accent/10 shadow-glow'
              : 'h-5 w-5 border-white/20 bg-white/10 shadow-soft'
          }`}
          animate={{ scale: isHovering ? 1 : 1 }}
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-60" />
        </motion.div>
      </motion.div>
    </>
  );
}
