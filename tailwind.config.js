/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'


  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'system-ui', ],
        'serif': ['ui-serif', 'Georgia', ],
        'mono': ['ui-monospace', 'SFMono-Regular', ],
        'display': ['Oswald', ],
        'body': ['"Open Sans"', ],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gray': {
          100: '#cffafe',
          200: '#e5e7eb',
          300: '#67e8f9',
          400: '#9ca3af',
          500: '#06b6d4',
          600: '#4b5563',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // ...
      },
      
    },
    backgroundImage: {
      'hero': "url('https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_HomepageHero_draft1_3760x.jpg?v=1706802356')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

