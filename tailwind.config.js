const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#FB9333',
        'light-cream': '#FFF1DE',
        "secondry-orange": "#FFF0DC",
        "gray-black": "#575757",
        "para-color": "#828282"

      },
      screens: {
        'sml': '350px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #FFF6EA 0%, rgba(255, 232, 199, 0.5) 100%)',
      },
    },
  },
  plugins: [],
});