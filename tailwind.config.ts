import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-blue': '#1a202c',
        'gold-dark': '#b39b4e', // Oro oscuro para profesionalismo
        'gold-light': '#d4af37', // Oro claro para efecto hover
        'blue-dark': '#0f172a', // Azul oscuro para botones
        'gray-200': '#e5e7eb', // Gris claro para subtítulos y textos
      },
    },
  },
  plugins: [],
};
export default config;
