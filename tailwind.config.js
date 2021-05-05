module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'card-image': "url('./images/homeBackground.jpg')",
      }),
    },
    minWidth: {
      sm: '280px',
    },

    minHeight: {
      sm: '390px',
    },
    boxShadow: {
      inner:
        'inset 120px 100px 250px #000000, inset -120px -100px 250px #000000',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
};
