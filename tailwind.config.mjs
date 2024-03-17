/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor : {
				'first-color' : '#323847',	
				'second-color' : 	'#01EEFF',
			},
			colors: {
				'second-color' : '#01EEFF',
				'cl-first-color' : '#323847',	
			},
			backgroundImage:{
				'third-color' : 'linear-gradient(to top, transparent 10%, rgba(0, 255, 255, 0.449) 60%, rgba(0, 255, 255, 0.526)70%, #01eeffe4 90%)'
			},
			before : {
				content : "''"
			},
			after : {
				content : "''"
			}
		},
	},
	plugins: [],
}
