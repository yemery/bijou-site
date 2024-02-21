/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",


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
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      
    },
    backgroundImage: {
      'hero': "url('https://www.daisyjewellery.com/cdn/shop/files/DoWhatYouLove_HomepageHero_draft1_3760x.jpg?v=1706802356')",
      'cat1': "url('https://i.pinimg.com/564x/95/27/ab/9527ab3d53adea07bdeccfa856cc8fbb.jpg')",
      'cat2': "url('https://i.pinimg.com/564x/b2/0d/2c/b20d2c46c013a411bc95c6415482c05d.jpg')",
      'cat3': "url('https://i.pinimg.com/564x/b2/0d/2c/b20d2c46c013a411bc95c6415482c05d.jpg')",
      'cat4': "url('https://i.pinimg.com/564x/b2/0d/2c/b20d2c46c013a411bc95c6415482c05d.jpg')",
    }
  },
  plugins: [
  ],
}

