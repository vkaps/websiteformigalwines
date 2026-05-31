/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  safelist: [
    'bg-wine-950', 'bg-wine-900', 'bg-wine-800', 'bg-wine-50',
    'text-wine-950', 'text-wine-800', 'text-wine-700', 'text-wine-400',
    'border-wine-950', 'border-wine-800', 'border-wine-200',
    'hover:bg-wine-800', 'hover:text-wine-950',
    'ring-wine-950',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50:  '#fdf2f4',
          100: '#fce7eb',
          200: '#f8d0d8',
          300: '#f3aab8',
          400: '#eb7590',
          500: '#df4a6b',
          600: '#cc2a4f',
          700: '#ab1d3f',
          800: '#8f1b38',
          900: '#7a1a34',
          950: '#581c24',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#3f3f46',
            a: { color: '#581c24' },
          },
        },
      },
    },
  },
  plugins: [],
};
