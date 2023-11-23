/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      fontFamily: {
        sans: ['Atkinson Hyperlegible', 'system-ui'],
        display: ['Outfit', 'system-ui']
      },
      fontMetrics: {
        "Atkinson Hyperlegible": {
          capHeight: 660,
          ascent: 796,
          descent: -251,
          unitsPerEm: 1000,
        },
        "Outfit": {
          capHeight: 694,
          ascent: 1000,
          descent: -260,
          unitsPerEm: 1000,
        }
      },
      extend: {}
    },
    plugins: [require("tailwindcss-leading-trim")]
  };