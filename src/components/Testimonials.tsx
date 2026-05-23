"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    quote: 'The pacing, sound, and color felt intentional from the first cut. Everything was elevated without losing clarity.',
    name: 'Creative Director',
    project: 'Brand Campaign',
  },
  {
    quote: 'A sharp eye for editorial rhythm and a clean process. The final video kept attention all the way through.',
    name: 'YouTube Producer',
    project: 'Documentary Series',
  },
  {
    quote: 'The motion work was subtle, premium, and exactly what the brand needed. It felt expensive in the best way.',
    name: 'Marketing Lead',
    project: 'Product Launch',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          description="Quiet confidence, strong communication, and polished delivery."
        />

        <motion.div
          className="mt-14 grid gap-4 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name + item.project}
              className={`rounded-[24px] border border-white/8 bg-white/5 p-6 shadow-soft backdrop-blur-xl ${index === 1 ? 'lg:translate-y-4' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
            >
              <Quote className="h-5 w-5 text-accent" />
              <p className="mt-5 text-lg leading-8 text-primary">{item.quote}</p>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                <div>
                  <p className="text-sm font-semibold text-primary">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.28em] text-secondary">{item.project}</p>
                </div>
                <span className="rounded-full border border-white/8 bg-background/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-secondary">
                  Verified
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}