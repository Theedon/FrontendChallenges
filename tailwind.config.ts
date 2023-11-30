import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      sm: "375px", //Mobile
      lg: "1440px", //Desktop
    },
    colors: {
      qrColors: {
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(212, 45%, 89%)",
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },

      newsletterColors: {
        tomato: "Hepta_Slab(4, 100%, 67%)",
        grey: "hsl(231, 7%, 60%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
