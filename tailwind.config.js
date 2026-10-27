/** @type {import('tailwindcss').Config} */
// Les couleurs viennent des variables CSS de src/index.css (même palette
// que src/theme.ts), pour que les composants de src/components/ui suivent
// le thème de l'app.
const hsl = (name) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Bricolage Grotesque"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        background: hsl("background"),
        foreground: hsl("foreground"),
        border: hsl("border"),
        input: hsl("input"),
        ring: hsl("ring"),
        highlight: hsl("highlight"),
        card: { DEFAULT: hsl("card"), foreground: hsl("card-foreground") },
        popover: { DEFAULT: hsl("popover"), foreground: hsl("popover-foreground") },
        primary: { DEFAULT: hsl("primary"), foreground: hsl("primary-foreground") },
        secondary: { DEFAULT: hsl("secondary"), foreground: hsl("secondary-foreground") },
        muted: { DEFAULT: hsl("muted"), foreground: hsl("muted-foreground") },
        accent: { DEFAULT: hsl("accent"), foreground: hsl("accent-foreground") },
        destructive: {
          DEFAULT: hsl("destructive"),
          foreground: hsl("destructive-foreground"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
