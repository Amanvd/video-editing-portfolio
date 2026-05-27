/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          card: 'var(--card)',
          'card-foreground': 'var(--card-foreground)',
          popover: 'var(--popover)',
          'popover-foreground': 'var(--popover-foreground)',
          primary: 'var(--primary)',
          'primary-foreground': 'var(--primary-foreground)',
          secondary: 'var(--secondary)',
          'secondary-foreground': 'var(--secondary-foreground)',
          muted: 'var(--muted)',
          'muted-foreground': 'var(--muted-foreground)',
          accent: 'var(--accent)',
          'accent-foreground': 'var(--accent-foreground)',
          destructive: 'var(--destructive)',
          'destructive-foreground': 'var(--destructive-foreground)',
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
          'chart-1': 'var(--chart-1)',
          'chart-2': 'var(--chart-2)',
          'chart-3': 'var(--chart-3)',
          'chart-4': 'var(--chart-4)',
          'chart-5': 'var(--chart-5)',
          sidebar: 'var(--sidebar)',
          'sidebar-foreground': 'var(--sidebar-foreground)',
          'sidebar-primary': 'var(--sidebar-primary)',
          'sidebar-primary-foreground': 'var(--sidebar-primary-foreground)',
          'sidebar-accent': 'var(--sidebar-accent)',
          'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
          'sidebar-border': 'var(--sidebar-border)',
          'sidebar-ring': 'var(--sidebar-ring)',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["'Clash Display'", "Inter", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3.5rem, 8vw, 6.5rem)", { lineHeight: "0.94", letterSpacing: "-0.05em" }],
        heading: ["clamp(2.25rem, 4vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        subheading: ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
      },
      fontWeight: {
        "extra-bold": "900",
      },
      letterSpacing: {
        tighter: "-0.04em",
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.35)',
        glow: '0 0 0 1px rgba(255,107,0,0.12), 0 24px 70px rgba(255,107,0,0.12)',
      },
      animation: {
        grain: 'grain 2s steps(2) infinite',
        fadeIn: 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        grain: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
