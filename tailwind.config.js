import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Poller One"', ...defaultTheme.fontFamily.sans],
        article: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
        title: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dimmed-gray': '#F1F2F3',
        'strong-gray': '#0E0E0E',
        'accent-green': '#05D465',
        'accent-red': '#C31815',
      }
    },
  },
  plugins: [],
}
