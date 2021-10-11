const colors = require('tailwindcss/colors')


const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {
			mustard: {
				DEFAULT: '#eeba2b'
			},
			mint:  {
				DEFAULT: '#25cec8'
			},
			white: {
				DEFAULT: '#fff'
			},
			black: {
				DEFAULT: '#000000'
			},
			darkGray: {
				DEFAULT: '#777777'
			},
			lightGray: {
				DEFAULT: '#F5F5F5'
			}
		},
		extend: {
			fontFamily: {
				'rale': 'Raleway',
				'quick': 'Quicksand',
				'dm': 'DM Sans'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
};

module.exports = config;