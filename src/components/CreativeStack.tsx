"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import PremierePro from '../icons/PremierePro';
import AfterEffects from '../icons/AfterEffects';
import DaVinciResolve from '../icons/DaVinciResolve';
import Photoshop from '../icons/Photoshop';
import Figma from '../icons/Figma';

const tools = [
  { name: 'Premiere Pro', description: 'Fast editorial assembly, precision trims, and polished delivery.', icon: PremierePro },
  { name: 'After Effects', description: 'Motion systems, animated titles, and clean visual effects.', icon: AfterEffects },
  { name: 'DaVinci Resolve', description: 'Cinematic color shaping and finishing with strong tonal control.', icon: DaVinciResolve },
  { name: 'Photoshop', description: 'Frames, key art, thumbnails, and texture cleanup.', icon: Photoshop },
  { name: 'Figma', description: 'Moodboards, story planning, and streamlined creative direction.', icon: Figma },
];

export default function CreativeStack() {
  return (
    <section id="stack" className="px-5 pb-24 pt-12 md:px-10 lg:pb-32 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Creative Stack"
          title="Tools I Use"
          description="A compact stack of tools for editing, motion, color, and presentation work."
        />

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
                className="group rounded-[24px] border border-white/8 bg-white/5 p-6 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.07] hover:shadow-glow"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/8 bg-transparent transition-transform duration-300 group-hover:scale-105">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-extra-bold text-foreground">{tool.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-secondary">{tool.description}</p>
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