import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sapin: "#14342B",
        brique: "#C8431B",
        creme: "#F6F1E7",
        papier: "#FFFDF8",
        encre: "#1B1B18",
        sourdine: "#6B665C",
      },
      fontFamily: {
        titre: ["var(--font-titre)", "Georgia", "serif"],
        corps: ["var(--font-corps)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
