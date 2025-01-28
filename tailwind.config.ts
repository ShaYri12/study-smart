import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueish: "#11337A",
        dark: "#1F2833",
        grayish: "#4D637B",
        light: "#6D8CAD",
      },
    },
  },
  plugins: [],
} satisfies Config;
