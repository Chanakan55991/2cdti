/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {

			'sans': ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			'serif': ['Literata', 'ui-serif', 'Georgia', 'serif'],
			'mono': ['ui-mono', 'SFMono-Regular', 'monospace']
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
