/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        headers: '#111827',
        text: '#64748b',
        subheader: '#F9D36E',
      },
    },
  },
  plugins: [],
};