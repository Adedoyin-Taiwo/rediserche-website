import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#191919',
        brand: '#390b76',
        plum: '#5a179d',
        lavender: '#f4effb',
        paper: '#fffdf9',
        line: '#eadff5',
        muted: '#6f6877',
        gold: '#f2b84b',
        mint: '#dff7ee'
      },
      boxShadow: {
        card: '0 20px 45px rgba(25, 25, 25, 0.08)',
        soft: '0 12px 30px rgba(57, 11, 118, 0.12)'
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
