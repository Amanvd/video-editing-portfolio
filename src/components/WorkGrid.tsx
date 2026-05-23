"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
  services: string;
  instagramUrl: string;
}

interface WorkGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Cinematic Fitness Edit',
    thumbnail: '/assets/thumbnails/Reel10-Changed.png',
    videoUrl: '/assets/previews/Reel10-Changed-low.mp4',
    views: '62.8k',
    services: 'Editing • Cinematic',
    instagramUrl: 'https://www.instagram.com/reel/DX4KNXvyWSW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: '2',
    title: 'Street fashion edit',
    thumbnail: '/assets/thumbnails/Recoloured.png',
    videoUrl: '/assets/previews/Recoloured-low.mp4',
    views: '14.9k',
    services: 'Editing • Color Grade',
    instagramUrl: 'https://www.instagram.com/reel/DYPV9SXpiYx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: '3',
    title: 'Cinematic Fitness edit',
    thumbnail: '/assets/thumbnails/INVICT.png',
    videoUrl: '/assets/previews/INVICT-low.mp4',
    views: '97.8k',
    services: 'Editing • Color Grade',
    instagramUrl: 'https://www.instagram.com/reel/DWoeAzQElFi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: '4',
    title: 'GYM edit',
    thumbnail: '/assets/thumbnails/reel2.png',
    videoUrl: '/assets/previews/reel2-low.mp4',
    views: '229k',
    services: 'Editing • Color Grade',
    instagramUrl: 'https://www.instagram.com/reel/DW9XCYuknWG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: '5',
    title: 'Fitness edit',
    thumbnail: '/assets/thumbnails/reel3.png',
    videoUrl: '/assets/previews/reel3-low.mp4',
    views: '108k',
    services: 'Editing • Color Grade',
    instagramUrl: 'https://www.instagram.com/reel/DXejS7Nkulc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: '6',
    title: 'Fitness edit',
    thumbnail: '/assets/thumbnails/reel4.png',
    videoUrl: '/assets/previews/reel4-low.mp4',
    views: '2.9k',
    services: 'Editing • Color Grade',
    instagramUrl: 'https://www.instagram.com/reel/DW1VqI4kvA3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];

export default function WorkGrid({ projects = defaultProjects }: WorkGridProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [failedThumbnails, setFailedThumbnails] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    projects.forEach((project, index) => {
      const video = videoRefs.current[index];

      if (!video) {
        return;
      }

      if (activeVideoId === project.id) {
        const playPromise = video.play();

        if (playPromise) {
          playPromise.catch(() => undefined);
        }

        return;
      }

      video.pause();
      video.currentTime = 0;
    });
  }, [activeVideoId, projects]);

  return (
    <section id="work" className="bg-[#0A0A0A] px-5 py-24 text-[#F5F5F5] md:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <p className="text-[12px] uppercase tracking-[0.5em] text-white/60">FEATURED WORK</p>
          <h2 className="mt-5 text-[clamp(3.5rem,6vw,4.5rem)] font-display font-bold leading-[0.95] tracking-[-0.05em] text-[#F5F5F5] md:text-[clamp(4.25rem,6.5vw,5.5rem)]">
            Featured Work
          </h2>
          <p className="mt-6 max-w-[600px] text-[clamp(1.05rem,1.2vw,1.25rem)] leading-[1.7] text-white/65">
            A selection of cinematic edits, motion graphics, and visual storytelling crafted for creators and brands.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid justify-items-center gap-6 md:grid-cols-2 md:justify-items-stretch xl:grid-cols-3 xl:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open ${project.title} on Instagram`}
              className="group relative w-full max-w-[360px] overflow-hidden rounded-[28px] border border-white/8 bg-[#111111] shadow-[0_28px_80px_rgba(0,0,0,0.45)] md:max-w-none"
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.7, ease: 'easeOut' },
                },
              }}
              whileHover={{ y: -10, scale: 1.01 }}
              whileFocus={{ y: -10, scale: 1.01 }}
              onMouseEnter={() => setActiveVideoId(project.id)}
              onMouseLeave={() => setActiveVideoId((current) => (current === project.id ? null : current))}
              onFocus={() => setActiveVideoId(project.id)}
              onBlur={() => setActiveVideoId((current) => (current === project.id ? null : current))}
              style={{ transition: 'all 0.4s ease' }}
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,#151515_0%,#0a0a0a_100%)]" />
                {!failedThumbnails[project.id] ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    onError={() => setFailedThumbnails((current) => ({ ...current, [project.id]: true }))}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                    <div className="max-w-[220px]">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[0.7rem] uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm">
                        Play
                      </div>
                      <p className="mt-5 text-[0.95rem] uppercase tracking-[0.35em] text-white/50">Thumbnail unavailable</p>
                      <p className="mt-3 text-sm leading-6 text-white/55">
                        Add the reel thumbnail to the public assets folder to show the actual preview frame here.
                      </p>
                    </div>
                  </div>
                )}
                {activeVideoId === project.id ? (
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={project.thumbnail}
                    onError={() => setFailedThumbnails((current) => ({ ...current, [project.id]: true }))}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.14)_28%,rgba(0,0,0,0.7)_100%)] transition-opacity duration-500 ease-out group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.2),rgba(12,12,12,0.72))] p-4 backdrop-blur-[20px]">
                    <p className="text-[0.75rem] uppercase tracking-[0.42em] text-white/60">Instagram Reel</p>
                    <h3 className="mt-3 text-[1.5rem] font-display font-bold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[1rem] font-medium text-white/80">{project.views}</p>
                    <p className="mt-2 text-[0.95rem] leading-7 text-white/65">{project.services}</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-[0.95rem] text-white/65">Content viewed by millions across social platforms.</p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-[0.75rem] uppercase tracking-[0.28em] text-[#F5F5F5] transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_rgba(255,255,255,0.08)]"
          >
            View More on Instagram ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
