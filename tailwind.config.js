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
            transform: "translate(-40vw, 15vh)", 
          },

          "30%": {
            rotate: "90deg",
            transform: "translate(-80vw, 55vh)", 
          },
          "50%": {
            transform: "translate(-60vw, 50vh)" 
          },
          "70%": {
            rotate: "45deg",
            transform: "translate(-115vw, 80vh)",
          },
          "90%": {
            rotate: "5deg",
            transform: "translate(-40vw, 0vh)",
          },
        },
      },
      animation: {
        //dze misschien een eigen animatie maken
        blob: "blob 35s -10s infinite ease-in-out",
        "blob-reverse":
          "blob 50s infinite ease-in-out reverse"
      },
    },
  },
  plugins: [],
};

