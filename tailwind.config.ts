import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px", //small Mobile
        lg: "1440px", //Desktop
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        rubik: ["var(--font-rubik)"],
      },
    },

    colors: {
      qrColors: {
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(212, 45%, 89%)",
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },

      newsletterColors: {
        tomato: "hsl(4, 100%, 67%)",
        grey: "hsl(231, 7%, 60%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        white: "hsl(0, 0%, 100%)",
      },
      blandingColors: {
        sBlue: "hsl(231, 69%, 60%)",
        sRed: "hsl(0, 94%, 66%)",

        gBlue: "hsl(229, 8%, 60%)",
        dBlue: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
export default config;
