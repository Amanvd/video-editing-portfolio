"use client";

import { useEffect, useRef, useState } from "react";
import VideoModal from "./components/VideoModal";

export default function App() {
  // Avoid rendering a server-generated timestamp to prevent hydration mismatch.
  // Initialize to null and set time only after client mount.
  const [now, setNow] = useState<Date | null>(null);
  const [modalProject, setModalProject] = useState<{
    id: string;
    title: string;
    videoUrl: string;
    category?: string;
  } | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const [heroMuted, setHeroMuted] = useState(true);

  useEffect(() => {
    const set = () => setNow(new Date());
    set();
    const i = setInterval(() => set(), 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    const section = heroSectionRef.current;

    if (!video || !section) return;

    video.muted = heroMuted;
    video.volume = heroMuted ? 0 : 1;

    const playVideo = () => {
      video.muted = heroMuted;
      video.volume = heroMuted ? 0 : 1;
      const result = video.play();
      if (result) {
        result.catch(() => {
          video.muted = true;
          video.volume = 0;
          video.play().catch(() => undefined);
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    playVideo();

    return () => observer.disconnect();
  }, [heroMuted]);

  const handleHeroAudioToggle = () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (heroMuted) {
      video.muted = false;
      video.volume = 1;
      setHeroMuted(false);
      video.play().catch(() => undefined);
      return;
    }

    video.muted = true;
    video.volume = 0;
    setHeroMuted(true);
  };

  const TOOLS = [
    {
      abbr: "Pr",
      name: "Premiere Pro",
      caption: "Editorial Assembly",
      icon: "/assets/logos/Adobe_Premiere_Pro_CC_icon.svg",
      alt: "Premiere Pro",
    },
    {
      abbr: "Ae",
      name: "After Effects",
      caption: "Motion & Compositing",
      icon: "/assets/logos/Adobe_After_Effects_CC_icon.svg",
      alt: "After Effects",
    },
    {
      abbr: "Dv",
      name: "DaVinci Resolve",
      caption: "Color & Finishing",
      icon: "/assets/logos/DaVinci_Resolve_Studio.png",
      alt: "DaVinci Resolve",
    },
    {
      abbr: "Ps",
      name: "Photoshop",
      caption: "Key Art & Thumbnails",
      icon: "/assets/logos/Adobe_Photoshop_CC_icon.svg",
      alt: "Photoshop",
    },
    {
      abbr: "Fg",
      name: "Figma",
      caption: "Story & Direction",
      icon: "/assets/logos/Figma-logo.svg",
      alt: "Figma",
    },
  ];

  

  const WORKS = [
    {
      title: "Cinematic Fitness Edit",
      category: "Editing • Cinematic",
      views: "98.5K",
      videoUrl: "/assets/previews/INVICT.mp4",
      instagramUrl: "https://www.instagram.com/reel/DWoeAzQElFi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tint: "from-purple-900/35 via-slate-900/25 to-black/40",
      thumbnail: "/assets/thumbnails/INVICT.webp",
    },
    {
      title: "Street Fashion Edit",
      category: "Editing • Color Grade",
      views: "15.3K",
      videoUrl: "/assets/previews/Recoloured.mp4",
      instagramUrl: "https://www.instagram.com/reel/DYPV9SXpiYx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tint: "from-rose-950/35 via-neutral-900/25 to-black/40",
      thumbnail: "/assets/thumbnails/Recoloured.webp",
    },
    {
      title: "CINEMATIC FITNESS",
      category: "Editing • Cinematic",
      views: "63.2K",
      videoUrl: "/assets/previews/Reel10-Changed.mp4",
      instagramUrl: "https://www.instagram.com/reel/DX4KNXvyWSW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tint: "from-amber-900/35 via-zinc-900/25 to-black/40",
      thumbnail: "/assets/thumbnails/Reel10-Changed.webp",
    },
    {
      title: "CINEMATIC FITNESS",
      category: "Motion • Color",
      views: "229K",
      videoUrl: "/assets/previews/reel2-low.mp4",
      instagramUrl: "https://www.instagram.com/reel/DW9XCYuknWG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tint: "from-sky-950/35 via-neutral-900/25 to-black/40",
      thumbnail: "/assets/thumbnails/reel2.webp",
    },
    {
      title: "CINEMATIC FITNESS",
      category: "Editing • Story",
      views: "108K",
      videoUrl: "/assets/previews/reel3-low.mp4",
      instagramUrl: "https://www.instagram.com/reel/DXejS7Nkulc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tint: "from-emerald-950/35 via-stone-900/25 to-black/40",
      thumbnail: "/assets/thumbnails/reel3.webp",
    },
    {
      title: "CINEMATIC FITNESS",
      category: "Editing • Sound",
      views: "3K",
      videoUrl: "/assets/previews/reel4-low.mp4",
      instagramUrl: "https://www.instagram.com/reel/DW1VqI4kvA3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tint: "from-violet-950/35 via-neutral-900/25 to-black/40",
      thumbnail: "/assets/thumbnails/reel4.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/70 backdrop-blur-xl border-b border-border">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight uppercase leading-none">AMAN<span className="text-accent">.</span>EDITS</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroSectionRef} id="top" className="relative min-h-screen flex flex-col justify-end pt-28 pb-10 px-6 md:px-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-background to-background" />
          <div className="absolute inset-0 opacity-[0.06] animate-shutter" style={{ backgroundSize: "80px 80px" }} />
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }} />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="absolute top-24 left-6 md:left-10 right-6 md:right-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground animate-reveal">
          <span>REC ● <span className="text-accent">SHOWREEL</span></span>
          <span>​</span>
        </div>

          <div className="relative mb-14 animate-reveal" style={{ animationDelay: "0.2s" }}>
          <div className="aspect-[21/9] w-full bg-black border border-border relative overflow-hidden">
            <video
              ref={heroVideoRef}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              playsInline
              muted={heroMuted}
              preload="auto"
            >
              <source src="/assets/reels/showreel_1.mp4" type="video/mp4" />
            </video>
            {["top-3 left-3 border-t border-l","top-3 right-3 border-t border-r","bottom-3 left-3 border-b border-l","bottom-3 right-3 border-b border-r"].map((c) => (
              <span key={c} className={`absolute size-5 border-foreground/60 ${c}`} />
            ))}
            <button
              type="button"
              onClick={handleHeroAudioToggle}
              className="absolute bottom-3 right-3 px-3 py-1.5 border border-border bg-black/60 backdrop-blur-sm font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:border-accent hover:text-accent transition-colors"
              aria-label={heroMuted ? "Unmute hero video" : "Mute hero video"}
            >
              {heroMuted ? "Unmute" : "Mute"}
            </button>
          </div>
          {modalProject ? (
            <VideoModal
              project={{ id: modalProject.id, title: modalProject.title, thumbnail: '', videoUrl: modalProject.videoUrl, category: modalProject.category || '' }}
              onClose={() => setModalProject(null)}
            />
          ) : null}
        </div>

        <div className="grid grid-cols-12 gap-6 animate-reveal" style={{ animationDelay: "0.4s" }}>
          <h1 className="col-span-12 lg:col-span-9 font-display uppercase leading-[0.82] tracking-tighter text-[clamp(3rem,11vw,11rem)]">
            Crafting Motion
            <br />
            That <span className="text-accent italic">Keeps People</span>
            <br />
            Watching.
          </h1>
            <div className="col-span-12 lg:col-span-3 flex flex-col justify-end gap-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm">
              Cinematic edits, motion graphics, and visual stories designed to hold attention and leave impact.
            </p>
            <div className="h-px w-12 bg-accent" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
              Aman / Editor + Motion Designer
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-5 overflow-hidden bg-background">
        <div className="flex animate-marquee whitespace-nowrap font-display uppercase text-3xl md:text-5xl tracking-tighter">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10">
              {["Cinematic Cuts","Color Grading","Motion Graphics","Brand Films","Reel Edits","Visual Stories","Sound Design"].map((w) => (
                <span key={`${k}-${w}`} className="flex items-center gap-10">
                  <span>{w}</span>
                  <span className="text-accent text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="px-6 md:px-10 py-28 md:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Creative Stack</span>
              <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] tracking-tight max-w-2xl">
                The Tools
                <br />
                Behind the Cut.
              </h2>
            </div>
            <p className="md:max-w-xs text-muted-foreground leading-relaxed">
              A compact stack for editing, motion, color, and presentation work. Sharpened on every project, end to end.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-border">
            {TOOLS.map((t, i) => (
              <li key={t.name} className="group relative border-b lg:border-b-0 lg:border-r border-border last:border-r-0 last:border-b-0 px-2 py-8 hover:bg-foreground/[0.03] transition-colors">
                <div className="flex items-baseline mb-12">
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground">0{i + 1}</span>
                </div>
                <picture className="icon-corner-badge">
                  <img src={t.icon} alt={t.alt} className="h-full w-full object-contain" />
                </picture>
                <div className="font-display text-7xl leading-none mb-6 group-hover:text-accent transition-colors">{t.abbr}</div>
                <div className="font-display uppercase text-xl leading-none mb-2">{t.name}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 md:px-10 py-28 md:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Featured Work</span>
              <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] tracking-tight max-w-3xl">
                Selected
                <br />
                <span className="italic">Frames.</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-muted-foreground leading-relaxed">
              A selection of cinematic edits, motion graphics, and visual storytelling crafted for creators and brands.
            </p>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1zbKxUqE9GkZcc_-TEI7aToDvVrdbhAqI?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="mb-8 block border border-accent/40 bg-accent/5 px-4 py-4 md:px-6 md:py-5 rounded-sm hover:border-accent transition-colors"
          >
            <span className="font-display uppercase text-2xl md:text-3xl tracking-tight text-accent block mb-1">
              My work
            </span>
            <span className="font-sans text-sm md:text-base text-muted-foreground">
              View my work Here
            </span>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4px] bg-border">
            {WORKS.map((w, i) => {
              return (
                <WorkCard key={`${w.title}-${i}`} work={w} index={i} />
            );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-28 md:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / About</span>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <p className="font-display uppercase text-3xl md:text-5xl leading-[1.05] tracking-tight">
              I&apos;m <span className="text-accent">Aman</span>, an editor and motion designer obsessed with rhythm — the kind of cut that makes a viewer forget to scroll.
            </p>
            <p className="mt-10 text-muted-foreground leading-relaxed max-w-xl">
              I work with creators, brands, and studios to shape footage into stories that move. From cinematic fitness edits to fashion films and brand reels, the goal is the same: hold attention, leave impact.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-6">04 / Let&apos;s Cut Something</span>
              <h2 className="font-display uppercase tracking-tighter leading-[0.85] text-[clamp(3rem,12vw,12rem)]">Roll<br /><span className="italic text-accent">Camera.</span></h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <a href="mailto:amanchandra418@gmail.com" className="group inline-flex items-baseline justify-between border-b border-foreground/40 pb-3 hover:border-accent transition-colors">
                <span className="font-sans text-lg md:text-xl">amanchandra418@gmail.com</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent transition-colors">Email →</span>
              </a>
            </div>
          </div>

          <div className="mt-20 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {now ? (
              <>
                <span>© {now.getFullYear()} Aman Edits — All Rights Reserved</span>
                <span className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                  Reel Online · Last Updated {now.toLocaleDateString("en-GB")}
                </span>
              </>
            ) : (
              <>
                <span>© Aman Edits — All Rights Reserved</span>
                <span className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                  Reel Online
                </span>
              </>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkCard({
  work,
  index,
}: {
  work: {
    title: string;
    category: string;
    views: string;
    videoUrl: string;
    instagramUrl: string;
    tint: string;
    thumbnail: string;
  };
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Fallback if play fails
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={work.instagramUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative aspect-[9/13] bg-background overflow-hidden block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        muted
        loop
        preload="none"
        crossOrigin="anonymous"
      >
        <source src={work.videoUrl} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${work.thumbnail}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${work.tint}`} />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

      <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80 z-20">
        <span>R_{String(index + 1).padStart(2, "0")}</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          {work.views} VIEWS
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2 z-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          {work.category}
        </span>
        <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight">
          {work.title}
        </h3>
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-foreground/20">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Instagram Reel
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground transition-transform group-hover:translate-x-1">
            Watch →
          </span>
        </div>
      </div>
    </a>
  );
}

