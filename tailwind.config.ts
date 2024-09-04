import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/banner.jpg')",
      },
      colors: {
        fundo: {
          light: '#E8EDF5',
          dark: '#1e1e1e',
        }
      }
    },
  },
  plugins: [],
};
export default config;
