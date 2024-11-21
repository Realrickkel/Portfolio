/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },

      keyframes: {
        blob: {
          "0%": {
            rotate: "0deg",
            translate: "0, 0",
          },
          "10%": {
            transform: "translate(-50%, 50%)", 
          },

          "30%": {
            rotate: "90deg",
            transform: "translate(-100%, 200%)", 
          },
          "50%": {
            transform: "translate(-140%, 50%)" 
          },
          "70%": {
            rotate: "45deg",
            transform: "translate(-230%, 160%)",
          },
          "90%": {
            rotate: "5deg",
            transform: "translate(-80%, 0%)",
          },
        },
      },
      animation: {
        //dze misschien een eigen animatie maken
        blob: "blob 25s infinite ease-in-out",
        "blob-reverse":
          "blob 40s infinite ease-in-out reverse"
      },
    },
  },
  plugins: [],
};

