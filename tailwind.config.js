/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#010066',
        secondary: '#f4981b '


        // custom primary color
      },
      boxShadow: {
        'custom': '0 0 20px 3px hsla(212,7%,43%,.1)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,23,121,0.11537114845938379) 0%, rgba(1,0,102,0.7344187675070029) 100%)',
      },
    },
  },
  plugins: [],
}
