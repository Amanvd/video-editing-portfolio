"use client";

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {eyebrow ? (
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-heading font-display font-extra-bold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}