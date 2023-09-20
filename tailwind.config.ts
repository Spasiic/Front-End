/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      
      },
    },
    fontSize: {
      'title': '2rem',
      'subtitle': '1.625rem',
      'description' : '1.25rem'
    },
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans']
    },
    colors: {
      'white': '#D9D9D9',
      'purple': '#523767',
      'gray': '#404040',
      'blur': 'rgba(11, 11, 11, 0.8)',
      'black': '#151515',
      'black-gray': '#171717',
    }
  },
  plugins: [],
}
