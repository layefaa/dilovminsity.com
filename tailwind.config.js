/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			//mobile,tablet portrait
			'sm': '480px',
			// mobile,tablet portrait
			
			// tablet landscape, small laptop
			'md': '768px',
			// tablet landscape, small laptop
			
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			// }
		},
		extend: {
			colors: {
				'dm-primary-white': 'hsl(0,100%,100%)',
				'dm-primary-black': 'hsl(0,0%,0%)',
			},
		},
	},
	plugins: [],
}
