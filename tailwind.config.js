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
			spacing: {
				'24': '2.4rem',
				'28': '2.8rem',
				'40': '4rem',
				'48': '4.8rem',
				'80': '8.0rem',
				'100': '10rem',
				'150': '15rem',
			},
			colors: {
				'dm-primary-white': 'hsl(0,100%,100%)',
				'dm-primary-white2': 'hsla(0, 0%, 85%, 1)',
				'dm-secondary-white': 'hsla(0,100%,100%,0.6)',
				'dm-tertiary-white': 'hsla(0,100%,100%,0.8)',
				'dm-tertiary-white2': 'hsla(0,100%,100%,0.4)',
				'dm-primary-black': 'hsl(0,0%,0%)',
				'dm-secondary-black': 'rgba(18, 18, 18, 0.6)',
				'dm-tertiary-black': 'hsla(0, 0%, 7%, 0.8)',
				'dm-primary-green': '#8DC63F',
				'dm-primary-blue': '#20A4F3',
				'dm-grey': '#18171A'
			},
			fontSize: {
				'12': '1.2rem',
				'14': '1.4rem',
				'16': '1.6rem',
				'20': '2rem',
				'24': '2.4rem',
				'32': '3.2rem',
				'36': '3.6rem',
				'40': '4rem',
				'48': '4.8rem',
				'64': '6.4rem'
			},
			gridTemplateRows: {
				'9': 'repeat(9, minmax(0, 1fr))',
			}
		},
	},
	plugins: [],
}
