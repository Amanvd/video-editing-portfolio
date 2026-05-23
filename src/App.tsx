"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import CreativeStack from './components/CreativeStack';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateScrollValues = () => {
      const position = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = Math.round((position / maxScroll) * 100);

      setScrollProgress((current) => (current === nextProgress ? current : nextProgress));
    };

    const requestScrollUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateScrollValues();
        frameId = 0;
      });
    };

    updateScrollValues();
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-primary">
      <Navigation />

      <div className="pointer-events-none fixed left-0 top-0 z-40 h-1 w-full bg-white/5">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-accent via-primary to-accent"
          style={{ scaleX: scrollProgress / 100 }}
        />
      </div>

      <main>
        <Hero />
        <CreativeStack />
        <WorkGrid />
        <About />
      </main>

      <div className="fixed bottom-6 right-6 z-40 rounded-full border border-white/8 bg-background/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-secondary backdrop-blur-md">
        {scrollProgress}%
      </div>
    </div>
  );
}

export default App;

