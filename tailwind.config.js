/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ring: "hsl(var(--ring))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",

        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [],
};