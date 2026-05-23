export default function HeroServer() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0">
        <div className="absolute left-[-12%] top-[-15%] h-[32rem] w-[32rem] rounded-full bg-accent/10" />
        <div className="absolute right-[-8%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-white/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_32%)]" />
      </div>

      <div className="grain-overlay" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-5 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.38em] text-secondary">
            VIDEO EDITOR • MOTION DESIGNER
          </p>
          <h1 className="max-w-4xl text-display font-display font-extra-bold text-primary">
            Crafting Motion That Keeps People Watching.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-secondary md:text-lg">
            I create cinematic edits, motion graphics, and visual stories designed to hold attention and leave impact.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-background transition-transform hover:-translate-y-0.5"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[32px] bg-accent/10" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-card shadow-soft">
            {/* Server-rendered hero uses a poster image to avoid blocking LCP with video */}
            <img
              src="/assets/thumbnails/Reel10-Changed.png"
              alt="Showreel poster"
              className="h-full min-h-[32rem] w-full object-cover opacity-90"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.06),rgba(14,14,14,0.68)),linear-gradient(90deg,rgba(255,107,0,0.08),transparent_35%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex items-end justify-between gap-6 rounded-[24px] border border-white/8 bg-background/45 p-5">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.34em] text-secondary">Showreel / 2026</p>
                  <p className="mt-2 text-lg font-semibold text-primary">Cinematic cuts, pacing, and motion with intent.</p>
                </div>
                <div className="hidden text-right sm:block">
                  <p className="text-[0.65rem] uppercase tracking-[0.34em] text-secondary">Featured style</p>
                  <p className="mt-2 text-sm text-primary">Muted • Smooth • Premium</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
