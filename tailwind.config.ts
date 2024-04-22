import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			plum: 'rgb(43, 42, 52)',
			gold: 'rgb(203, 167, 47)',
			salmon: {
				DEFAULT: 'rgb(233, 128, 120)',
				light: 'rgba(213, 99, 90, 0.25)'
			},
			white: 'rgb(255, 255, 255)'
		}
	},
	plugins: []
};
export default config;
