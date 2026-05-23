"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
import SectionHeading from './SectionHeading';

const links = [
  { label: 'Email', href: 'mailto:hello@yourname.com', icon: Mail },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let’s Create Something Cinematic."
          description="If you need a polished edit, a motion-led visual story, or a premium branded piece, I’m available for select projects."
        />

        <motion.div
          className="mt-14 rounded-[24px] border border-white/8 bg-card p-6 shadow-soft md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-[24px] border border-white/8 bg-white/5 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-accent/10"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  <div>
                    <p className="text-sm font-semibold text-primary">{link.label}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.26em] text-secondary">Connect</p>
                  </div>
                  <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-secondary">Based anywhere. Working globally on editorial, motion, and commercial content.</p>
            <a
              href="mailto:hello@yourname.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-background"
              data-cursor-hover
            >
              hello@yourname.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
