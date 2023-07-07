/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter V', 'sans-serif'],
      mono: ['SF Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      iron: '#DDDDDD',
      B100: '#f4f4f4',
      B500: 'rgba(103, 119, 201, 1)',
      B600: 'rgba(224, 255, 158, 1)',
      B900: '#1d1d1d',

      charcoal: '#343433',
      carbonn: '#484645',
      jade: '#00C454',
      jaded: '#44C67F',
      azure: '#0086FC',
      sun: '#FF3F00',
      paleSky: '#6A7280',
      graphicGreen: 'var(--graphic-green)',

      twitter: '#1DA1F2',

      carbon: {
        50: 'rgba(246, 248, 250, 1)',
        100: 'rgba(223, 233, 233, 1)',
        200: 'rgba(200, 210, 210, 1)',
        300: 'rgba(174, 184, 184, 1)',
        400: 'rgba(149, 159, 159, 1)',
        500: 'rgba(109, 119, 119, 1)',
        600: 'rgba(88, 100, 100, 1)',
        700: 'rgba(60, 70, 70, 1)',
        800: 'rgba(45, 55, 55, 1)',
        900: 'rgba(13, 17, 17, 1)',
        950: 'rgba(0, 2, 3, 1)',
      },

      grey: {
        A1: 'hsla(0, 0%, 0%, 0.012)',
        A2: 'hsla(0, 0%, 0%, 0.027)',
        A3: 'hsla(0, 0%, 0%, 0.047)',
        A4: 'hsla(0, 0%, 0%, 0.071)',
        A5: 'hsla(0, 0%, 0%, 0.090)',
        A6: 'hsla(0, 0%, 0%, 0.114)',
        A7: 'hsla(0, 0%, 0%, 0.141)',
        A8: 'hsla(0, 0%, 0%, 0.220)',
        A9: 'hsla(0, 0%, 0%, 0.439)',
        A10: 'hsla(0, 0%, 0%, 0.478)',
        A11: 'hsla(0, 0%, 0%, 0.565)',
        A12: 'hsla(0, 0%, 0%, 0.910)',

        50: 'rgba(249, 250, 251, 1)',
        100: 'rgba(243, 244, 246, 1)',
        200: 'rgba(229, 231, 235, 1)',
        300: 'rgba(209, 213, 219, 1)',
        400: 'rgba(156, 163, 175, 1)',
        500: 'rgba(107, 114, 128, 1)',
        600: 'rgba(75, 85, 99, 1)',
        700: 'rgba(55, 65, 81, 1)',
        800: 'rgba(31, 41, 55, 1)',
        900: 'rgba(17, 24, 39, 1)',
        950: 'rgba(3, 7, 18, 1)',
      },
      extend: {
        // ..
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
  },
};
