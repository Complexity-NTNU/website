import type { Config } from 'tailwindcss';

export default {
	darkmode: 'media',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				// Default font: Roboto loaded by Next.js via the CSS variable
				sans: ['var(--font-roboto)', 'Arial', 'Helvetica', 'sans-serif'],
				// Alternative font: Rethink Sans loaded via CSS @font-face
				alt: ['"Rethink Sans"', 'sans-serif'],
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'50%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slide: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				fadeUp: 'fadeUp 1s ease-out forwards',
				slide: 'slide 20s linear infinite',
			},
		},
	},
	plugins: [],
} satisfies Config;
