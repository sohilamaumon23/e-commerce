const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
    theme: {
    extend: {
      backgroundImage: {
     img: "url('/src/image/about-us.jpg')",
     home: "url('/src/image/hero-1.jpg')",

    },
  },
},
plugins: [require('daisyui')],
daisyui: {
  themes: ['light' ],
},
});

