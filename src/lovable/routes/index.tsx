import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

// Type mismatch between Vite template and installed TanStack types — ignore
// @ts-ignore
export const Route = createFileRoute("/")({
  component: Index,
});

const TOOLS = [
  { abbr: "Pr", name: "Premiere Pro", caption: "Editorial Assembly", role: "Cut" },
  { abbr: "Ae", name: "After Effects", caption: "Motion & Compositing", role: "Motion" },
  { abbr: "Dv", name: "DaVinci Resolve", caption: "Color & Finishing", role: "Color" },
  { abbr: "Ps", name: "Photoshop", caption: "Key Art & Thumbnails", role: "Frame" },
  { abbr: "Fg", name: "Figma", caption: "Story & Direction", role: "Plan" },
];

const WORKS = [
  {
    title: "Cinematic Fitness Edit",
    category: "Editing • Cinematic",
    views: "62.8K",
    href: "https://www.instagram.com/reel/DX4KNXvyWSW/",
    tint: "from-orange-900/60 via-stone-900 to-black",
  },
  {
    title: "Street Fashion Edit",
    category: "Editing • Color Grade",
    views: "14.9K",
    href: "https://www.instagram.com/reel/DYPV9SXpiYx/",
    tint: "from-rose-950/70 via-neutral-900 to-black",
  },
  {
    title: "Cinematic Fitness II",
    category: "Editing • Cinematic",
    views: "97.8K",
    href: "#",
    tint: "from-amber-900/60 via-zinc-900 to-black",
  },
  {
    title: "Brand Promo Reel",
    category: "Motion • Color",
    views: "41.2K",
    href: "#",
    tint: "from-sky-950/70 via-neutral-900 to-black",
  },
  {
    title: "Travel Diary Cut",
    category: "Editing • Story",
    views: "28.5K",
    href: "#",
    tint: "from-emerald-950/70 via-stone-900 to-black",
  },
  {
    title: "Lifestyle Hero Film",
    category: "Editing • Sound",
    views: "53.1K",
    href: "#",
    tint: "from-violet-950/70 via-neutral-900 to-black",
  },
];

function useTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  return now;
}

function Index() {
  const now = useTime();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/70 backdrop-blur-xl border-b border-border">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight uppercase leading-none">AMAN<span className="text-accent">.</span>EDITS</span>
          <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">/ Cinematic Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">​</a>
          <a href="#stack" className="hover:text-foreground transition-colors">About</a>
          <a href="#about" className="hover:text-foreground transition-colors">About_03</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex flex-col justify-end pt-28 pb-10 px-6 md:px-10">
        {/* Backdrop showreel frame */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-background to-background" />
          <div
            className="absolute inset-0 opacity-[0.06] animate-shutter"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.6) 2px 3px), repeating-linear-gradient(90deg, transparent 0 2px, rgba(255,255,255,0.6) 2px 3px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Film grain */}
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Top meta strip */}
        <div className="absolute top-24 left-6 md:left-10 right-6 md:right-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground animate-reveal">
          <span>REC ● <span className="text-accent">SHOWREEL</span></span>
          <span>​</span>
        </div>

        {/* Showreel frame */}
        <div className="relative mb-14 animate-reveal" style={{ animationDelay: "0.2s" }}>
          <div className="aspect-[21/9] w-full bg-black border border-border relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-zinc-950 to-black" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, rgba(255,62,0,0.5), transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1), transparent 50%)",
              }}
            />
            {/* Corner crops */}
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((c) => (
              <span key={c} className={`absolute size-5 border-foreground/60 ${c}`} />
            ))}
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="size-20 rounded-full border border-foreground/40 grid place-items-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-foreground ml-1.5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-accent transition-colors">
                  Play Showreel · 02:14
                </span>
              </div>
            </div>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-foreground/60">
              ▲ HERO_REEL.MP4
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tabular-nums tracking-widest text-foreground/60">
              00:00:00:00 — 00:02:14:18
            </div>
          </div>
        </div>

        {/* Headline */}
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
              {[
                "Cinematic Cuts",
                "Color Grading",
                "Motion Graphics",
                "Brand Films",
                "Reel Edits",
                "Visual Stories",
                "Sound Design",
              ].map((w) => (
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
              <li
                key={t.name}
                className="group relative border-b lg:border-b-0 lg:border-r border-border last:border-r-0 last:border-b-0 px-2 py-8 hover:bg-foreground/[0.03] transition-colors"
              >
                <div className="flex items-baseline justify-between mb-12">
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{t.role}</span>
                </div>
                <div className="font-display text-7xl leading-none mb-6 group-hover:text-accent transition-colors">
                  {t.abbr}
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {WORKS.map((w, i) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[9/13] bg-background overflow-hidden block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${w.tint}`} />
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Top meta */}
                <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                  <span>R_{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                    {w.views} VIEWS
                  </span>
                </div>

                {/* Bottom meta */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    {w.category}
                  </span>
                  <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight">
                    {w.title}
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
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-28 md:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / About</span>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="font-display uppercase text-3xl md:text-5xl leading-[1.05] tracking-tight">
              I'm <span className="text-accent">Aman</span>, an editor and motion designer obsessed with rhythm —
              the kind of cut that makes a viewer forget to scroll.
            </p>
            <p className="mt-10 text-muted-foreground leading-relaxed max-w-xl">
              I work with creators, brands, and studios to shape footage into stories that move. From cinematic
              fitness edits to fashion films and brand reels, the goal is the same: hold attention, leave impact.
            </p>
          </div>
          {/* Right-side stats column removed per request */}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-6">
                04 / Let's Cut Something
              </span>
              <h2 className="font-display uppercase tracking-tighter leading-[0.85] text-[clamp(3rem,12vw,12rem)]">
                Roll
                <br />
                <span className="italic text-accent">Camera.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <a
                href="mailto:hello@amanedits.com"
                className="group inline-flex items-baseline justify-between border-b border-foreground/40 pb-3 hover:border-accent transition-colors"
              >
                <span className="font-sans text-lg md:text-xl">hello@amanedits.com</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent transition-colors">
                  Email →
                </span>
              </a>
              <div className="flex flex-col gap-2">
                <SocialLink label="Instagram" handle="@amanedits" href="https://instagram.com" />
                <SocialLink label="YouTube" handle="@amanedits" href="https://youtube.com" />
                <SocialLink label="Vimeo" handle="amanedits" href="https://vimeo.com" />
              </div>
            </div>
          </div>

          <div className="mt-20 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>© {now.getFullYear()} Aman Edits — All Rights Reserved</span>
            <span className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Reel Online · Last Updated {now.toLocaleDateString("en-GB")}
            </span>
            <span>Built with intent · v2.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// `Spec` removed — stats column was deleted per user request.

function SocialLink({ label, handle, href }: { label: string; handle: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-baseline justify-between py-2 border-b border-border hover:border-accent transition-colors"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <span className="font-sans text-base group-hover:text-accent transition-colors">{handle} →</span>
    </a>
  );
}
