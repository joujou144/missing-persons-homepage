import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 5px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 12px 16px var(--tw-shadow-color)",
      },

      colors: {
        midnight: "#090911",
        cream: "#E0D9D9",
        crimson: "#950720",

        gray: {
          10: "#EEEEEE",
          20: "#A3A3A3",
          30: "#7B7B7B",
          50: "#585858",
          70: "#222020",
          90: "#141414",
          200: "#111111",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [
    require("autoprefixer"),
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: Function;
      theme: Function;
    }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
