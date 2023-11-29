import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "375px", //Mobile
      lg: "1440px", //Desktop
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      "light-gray": "hsl(212, 45%, 89%)",
      "grayish-blue": "hsl(220, 15%, 55%)",
      "dark-blue": "hsl(218, 44%, 22%)",
    },
    fontSize: {
      "15": "15px",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    fontWeight: { "400": "400", "700": "700" },
  },
  plugins: [],
};
export default config;
