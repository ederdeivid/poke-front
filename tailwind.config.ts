/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        water: '#00A3FF',
        grass: '#08FEC3',
        poison: '#AF08FE',
        fire: '#FE0808',
        eletric: '#FFB800',
        ground: '#85826E',
        fairy: '#FBA1EC',
        normal: '#C4C4C4',
        flying: '#5317FC',
        default: '#0E0E0E'
      }
    },
  },
  plugins: [],
}
