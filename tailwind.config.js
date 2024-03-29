/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        gray: {
          100: "#cffafe",
          200: "#e5e7eb",
          300: "#67e8f9",
          400: "#9ca3af",
          500: "#06b6d4",
          600: "#4b5563",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        nude: {
          100: "#D1C0B4",
        },
      },
    },
    backgroundImage: {
      hero: "url('https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_HomepageHero_draft1_3760x.jpg?v=1706802356')",
      // 'hero': "url('https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_CategoryBlocks_Artboard_13_3760x.jpg?v=1707320653')",
    },
  },
  plugins: [],
};
