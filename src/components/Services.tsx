"use client";

import { motion } from 'framer-motion';
import { Film, Palette, PlaySquare, Radio, Scissors, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
  { title: 'Cinematic Editing', description: 'Narrative pacing and high-end assembly for brands and creators.', icon: Film },
  { title: 'Reels & Shorts', description: 'Fast, polished vertical edits designed to keep retention high.', icon: PlaySquare },
  { title: 'Motion Graphics', description: 'Clean kinetic typography, lower thirds, and polished animation.', icon: Sparkles },
  { title: 'Color Grading', description: 'Moody contrast, balanced skin tones, and refined finishing.', icon: Palette },
  { title: 'YouTube Editing', description: 'Story-led edits built for clarity, energy, and consistency.', icon: Scissors },
  { title: 'Commercial Ads', description: 'Short-form campaigns with strong hooks and visual rhythm.', icon: Radio },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Services"
          description="A focused set of production services for editorial, motion, and branded content."
        />

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className="group rounded-[24px] border border-white/8 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-extra-bold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-secondary">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
