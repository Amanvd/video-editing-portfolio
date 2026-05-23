/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3F1ED",
        card: "#F7F5F2",
        surface: "#F7F5F2",
        primary: "#1E1B18",
        secondary: "#5E544C",
        accent: "#D96B1D",
        border: "#DED8D1",
        "noir-black": "#0B0B0B",
        "matte-gray": "#EDE9E4",
        "muted-white": "#F7F5F2",
        "muted": "#5E544C",
        "accent-gray": "#EFE9E3",
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
