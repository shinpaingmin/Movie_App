/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  //tailwind component
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'  //flowbite component
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

