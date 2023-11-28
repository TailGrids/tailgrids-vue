/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        success: '#34D399',
        error: '#B45454',
        'gray-2': '#f8fafc'
      },
      boxShadow: {
        three: '0px 1px 5px rgba(0, 0, 0, 0.14)'
      }
    }
  },
  plugins: [require('./plugin')]
}
