module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      // sm: '320px', // => @media (min-width: 360px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px',
      xl: '1248px',
    },
    container: {
      padding: '0.5rem',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '34px',
      '5xl': '40px',
      '6xl': '48px',
    },
    extend: {
      colors: {
        orange: {
          100: '#FCE1D3',
        },
        purple: '#7e5bef',
        pink: '#ff49db',
        green: '#13ce66',
        yellow: '#ffc82c',
        grayDark: '#273444',
        gray: '#8492a6',
        grayLight: '#d3dce6',
      },
    },
  },
  plugins: [],
};
