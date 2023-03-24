/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            darkBlue: 'hsl(209, 23%, 22%)', // Dark Mode Elements
            'veryDarkBlue-1': 'hsl(207, 26%, 17%)', // Dark Mode Background
            'veryDarkBlue-2': 'hsl(200, 15%, 8%)', // Light Mode Text
            darkGray: 'hsl(0, 0%, 52%)', // Light Mode Input
            veryLightGray: 'hsl(0, 0%, 98%)', // Light Mode Background
            white: 'hsl(0, 0%, 100%)', // Dark Mode Text & Light Mode Elements
         },
         fontFamily: {
            nunito: ['Nunito Sans', 'sans-serif'],
         },
      },
      fontWeight: {
         light: '300',
         semiBold: '600',
         extraBold: '800',
      },
   },
   plugins: [],
};
