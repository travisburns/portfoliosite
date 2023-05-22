/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#66FCF1",
        red: "#45A29E",
        yellow: "FDCC49",
        grey: "#ededed",
        "deep-blue": "#1F2833",
        "dark-grey": "#cC5C6C7",
        "opague-black": "rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
        "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
        "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        Lato: ["Lato", "sans-serif"]
      },
      content: {
        brush: "url(./assets/brush.png')",
        person1: "url(../assets/person-1.png')",
        person2: "url(../assets/person-2.png')",
        person3: "url(../assets/person-3.png')",
      }

    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}