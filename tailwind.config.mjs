/** @type {import('tailwindcss').Config} */
const config = {
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
        primaryBlack: "#050505",
        secondaryBlack: "#101010",
        primaryGray: "#141414",
        secondaryGray: "#191919",
        terinaryGray: "#282828",
        lightGray: "#1F1F1F",
        ultralightgray: "#202020",
        primarywhite: "#cccccc",
        primaryVoilet: "#916CE7",
        primaryGreen: "#6DD33D",
      },
    },
  },
  plugins: [],
};

export default config;
