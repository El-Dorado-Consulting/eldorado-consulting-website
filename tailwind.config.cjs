const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'rale': 'Raleway',
        'source': 'Source Sans Pro'
      },
      colors: {
        mustard: {
          DEFAULT: '#FFBC00',
          dark: '#C99E2A' 
        },
        mint:  {
          DEFAULT: '#25cec8'
        },
        graphite: {
          DEFAULT: '#777777',
          dark: '#666666',
          '50': '#F5F5F5'
        }
  
      }
    }

  },

  plugins: [],
};

module.exports = config;
