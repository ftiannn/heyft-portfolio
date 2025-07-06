/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',   
  ],
  safelist: [
    'text-pink-700', 'text-teal-700', 'text-purple-500', 'text-blue-700',
    'bg-pink-100', 'bg-teal-100', 'bg-purple-100', 'bg-blue-100',
    'border-pink-200', 'border-teal-200', 'border-purple-200', 'border-blue-200',
    'text-pink-800', 'text-teal-800', 'text-purple-800', 'text-blue-800',
    'bg-pink-50', 'bg-teal-50', 'bg-purple-50', 'bg-blue-50',
    'border-pink-100', 'border-teal-100', 'border-purple-100', 'border-blue-100'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-pink': '#ff6b9d',
        'secondary-teal': '#4ecdc4',
        'secondary-purple': '#8b5cf6',
        'accent-blue': '#45b7d1',
        'dark-navy': '#2c2c54',
        'light-bg': '#f1f5f9',
        'text-gray': '#64748b',
        
        'pink': {
          50: '#fef7ff',
          100: '#fce7f3',
          500: '#ff6b9d',
          600: '#e91e63',
          700: '#c2185b',
          800: '#ad1457',
        },
        'teal': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#4ecdc4',
          600: '#14b8a6',
          700: '#0d9488',
          800: '#115e59',
        },
        'purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
        },
        'blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#45b7d1',
          600: '#0ea5e9',
          700: '#0284c7',
          800: '#075985',
        },
        'navy': {
          800: '#2c2c54',
          900: '#1a1a2e',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff6b9d, #45b7d1)',
        'gradient-hero': 'linear-gradient(135deg, #ff6b9d, #4ecdc4)',
        'gradient-light': 'linear-gradient(135deg, #ffffff, #fef7ff)',
        'gradient-dark': 'linear-gradient(135deg, #2c2c54, #1a1a2e)',
        'gradient-subtle': 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'pink': '0 10px 30px rgba(255, 107, 157, 0.3)',
        'teal': '0 10px 30px rgba(78, 205, 196, 0.3)',
        'purple': '0 10px 30px rgba(139, 92, 246, 0.3)',
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'large': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
