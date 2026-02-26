import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ──────────────────────────────────────────────
       * Brand Colors
       * ────────────────────────────────────────────── */
      colors: {
        brand: {
          red: "#F4001A",
          blue: "#0093D0",
          grey: "#747E86",
          "dark-grey": "#696B80",
          black: "#000000",
        },
        dark: {
          bg: "#0F0F0F",
          surface: "#1A1A1A",
          border: "#2A2A2A",
        },
      },

      /* ──────────────────────────────────────────────
       * Typography
       * ────────────────────────────────────────────── */
      fontFamily: {
        heading: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        body: [
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },

      /* ──────────────────────────────────────────────
       * Border Radius
       * ────────────────────────────────────────────── */
      borderRadius: {
        card: "12px",
        pill: "50px",
        input: "8px",
      },

      /* ──────────────────────────────────────────────
       * Custom Animations
       * ────────────────────────────────────────────── */
      keyframes: {
        flip: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%": {
            transform: "rotateX(0deg)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "bounce-in": {
          "0%": {
            transform: "scale(0.3)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
          "70%": {
            transform: "scale(0.9)",
            opacity: "0.9",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "pulse-red": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(244, 0, 26, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 0 12px rgba(244, 0, 26, 0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        flip: "flip 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "bounce-in": "bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "pulse-red": "pulse-red 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
