import type { Config } from "tailwindcss";

export default {
  darkmode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Default font: Roboto loaded by Next.js via the CSS variable
        sans: ["var(--font-roboto)", "Arial", "Helvetica", "sans-serif"],
        // Alternative font: Rethink Sans loaded via CSS @font-face
        alt: ['"Rethink Sans"', "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;