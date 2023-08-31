/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        
      },
      theme:{
        Shadow:{aboutLogoShadowBlue:
        "0px 0px 14px 7px rgba(55, 124, 236, .5), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
        }
      },
      fontFamily:{
        'Mulish':'Mulish',
        'Rubik':'Rubik',
        'Poppins':'Poppins',
        'raleway': ['"Raleway"', 'sans-serif']
      },
      backgroundImage:{
        'gradient' : 'linear-gradient(180deg, #170D36 0%, #261C52 100%)'
      }
    },
  },
  plugins: [],
}

