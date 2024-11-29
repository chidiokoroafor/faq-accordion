/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-pink":"hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)"
      },
      fontFamily: {
        'sans': ['"Work Sans"', 'system-ui',],
       
      },
      backgroundImage:{
        'desktop-pattern': "url('/public/images/background-pattern-desktop.svg')",
        'mobile-pattern': "url('/public/images/background-pattern-mobile.svg')",
      }
    },
  },
  plugins: [],
}

