"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="About"
          description="I turn raw footage into immersive visual stories through pacing, sound design, color, and motion."
        />

        <div className="mt-14">
          <motion.div
            className="rounded-[24px] border border-white/8 bg-card p-8 shadow-soft md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="max-w-2xl text-lg leading-9 text-primary md:text-xl">
              I focus on rhythm, restraint, and emotional clarity. Every cut is built to feel deliberate, every motion cue is designed to support the story, and every frame is shaped to keep attention without overcrowding the screen.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-secondary">
              My work blends editorial pacing with cinematic finishing so brands, creators, and filmmakers can communicate with confidence and polish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
