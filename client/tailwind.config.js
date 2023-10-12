/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "color-bg":"#0084b4",
        // "color-bg":"#C70039",
        // "color-1":'#0064ff',
        "color-1":'#44b09e',
        "color-2":'#f4f5f9',
        "color-3":"#fff9ef",
        "footer":"#44b09e"


      }
    },
  },
  plugins: [],
}
