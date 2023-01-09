/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				primary: {
					primary: '#2AF5FF',
					'primary-focus': '#00D5E0',
					secondary: '#007EA7',
					accent: '#9B5DE5',
					neutral: '#080A0C',
					'base-100': '#2A303C',
					'base-200': '#212630',
					'base-300': '#191D24',
					info: '#008BF8',
					success: '#0CF574',
					warning: '#FBBD23',
					error: '#FF5D73'
				}
			},
			'light',
			'dark'
		]
	},
	plugins: [require('daisyui')]
}
