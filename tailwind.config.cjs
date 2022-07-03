const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'rale': 'Raleway',
        'source': 'Source Sans Pro'
      }
    },
    colors: {
      mustard: {
        DEFAULT: '#eeba2b'
      },
      mint:  {
        DEFAULT: '#25cec8'
      },
      graphite: {
        DEFAULT: '#777777'
      }

    }
  },

  plugins: [],
};

module.exports = config;
