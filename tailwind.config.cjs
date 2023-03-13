module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			desktop: '1440px',
			tablet: '768px',
		},
		colors: {
			red: '#FF0000',
			white: '#FFFFFF',
			black: '#171823',
			light: {
				gray: '#fafafa',
				grayishBlue1: '#e4e5f1',
				grayishBlue2: '	#d2d3db',
				darkGrayishBlue1: '#9394a5',
				darkGrayishBlue2: '#484b6a',
			},
			dark: {
				darkBlue1: '#161722',
				desaturatedBlue: '#25273D',
				lightGrayishBlue: '#cacde8',
				lightGrayishBlueHover: '#e4e5f1',
				darkGrayishBlue1: '#777a92',
				darkGrayishBlue2: '#4d5066',
				darkGrayishBlue3: '#393a4c',
			},
		},
		fontFamily: {
			josefin: ['Josefin Sans', 'sans-serif'],
		},
		fontSize: {
			l: ['40px', { lineHeight: '40px', fontWeight: 700 }],
			m: ['18px', { lineHeight: '18px', fontWeight: 700 }],
			s: ['14px', { lineHeight: '14px', fontWeight: 400 }],
			regular: ['14px', { lineHeight: '14px', fontWeight: 300 }],
			xs: ['12px', { lineHeight: '12px', fontWeight: 400 }],
		},
		extend: {},
	},
	plugins: [],
};
