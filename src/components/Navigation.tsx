"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/8 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <motion.a
          href="#home"
          className="group flex items-center gap-3"
          whileHover={{ x: 2 }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-[0.25em] text-primary transition-colors group-hover:border-accent/30 group-hover:text-accent">
            VE
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-primary">YOUR NAME</p>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">Cinematic portfolio</p>
          </div>
        </motion.a>

        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-secondary transition-colors hover:text-primary"
              whileHover={{ y: -1 }}
              data-cursor-hover
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#work"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-primary transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-primary"
            whileHover={{ y: -1 }}
            data-cursor-hover
          >
            View Work
          </motion.a>
        </div>

        <motion.button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="border-t border-white/8 bg-background/95 backdrop-blur-md lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 md:px-10">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-[0.75rem] font-medium uppercase tracking-[0.3em] text-primary"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  data-cursor-hover
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
