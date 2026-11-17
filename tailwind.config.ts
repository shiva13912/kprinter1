import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            900: '#0A192F',
            950: '#060D1A',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1A56DB',
            800: '#113E99',
            900: '#0C2D70',
          },
          cyan: {
            500: '#0284C7',
            600: '#0369A1',
          },
        },
        accent: {
          green: {
            50: '#F0FDF4',
            100: '#DCFCE7',
            500: '#22C55E',
            600: '#16A34A',
            700: '#15803D',
          },
          whatsapp: {
            DEFAULT: '#25D366',
            hover: '#1EBE5D',
            dark: '#128C7E',
          },
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        card: '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 20px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -4px rgba(15, 23, 42, 0.06)',
        whatsapp: '0 4px 14px 0 rgba(37, 211, 102, 0.39)',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
