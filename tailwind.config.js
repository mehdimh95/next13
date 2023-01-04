/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

// module.exports = withMT({
//   content: ['./app/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     container: {
//       center: true,
//     },
//     extend: {},
//   },
//   plugins: [require('@tailwindcss/line-clamp')],
// })
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp', 'tw-elements/dist/plugin')],
}
