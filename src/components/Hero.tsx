"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          const playPromise = video.play();
          if (playPromise) {
            playPromise.catch(() => undefined);
          }
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.35, 0.6] }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden bg-[#f5f1eb] pt-[20px]">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1500px] flex-col items-center justify-center px-4 pb-20 sm:px-6 md:px-8 md:pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="mt-8 w-full md:mt-10"
        >
          <div className="group relative mx-auto aspect-video w-full overflow-hidden rounded-[28px] !bg-black shadow-[0_28px_90px_rgba(0,0,0,0.22)] md:rounded-[30px]">
            <button
              type="button"
              onClick={() => {
                const video = videoRef.current;
                if (!video) return;
                const nextMuted = !isMuted;
                video.muted = nextMuted;
                setIsMuted(nextMuted);
                if (video.paused) {
                  void video.play();
                }
              }}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="absolute bottom-4 right-4 z-20 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black/85"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>

            <video
              ref={videoRef}
              className="h-full w-full bg-black object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              poster="/assets/thumbnails/reel2.png"
            >
              <source src="/assets/reels/showreel_1.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(0,0,0,0.8)_0.35px,transparent_0.35px)] [background-size:2px_2px]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto mt-10 max-w-4xl text-center md:mt-12"
        >
          <h1 className="text-balance text-[2.1rem] font-display font-extra-bold leading-[0.94] tracking-[-0.035em] text-black sm:text-[2.8rem] md:text-[3.7rem] lg:text-[4.5rem]">
            Crafting Motion That Keeps People Watching.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-black/72 sm:text-base md:text-lg md:leading-8">
            I create cinematic edits, motion graphics, and visual stories designed to hold attention and leave impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

