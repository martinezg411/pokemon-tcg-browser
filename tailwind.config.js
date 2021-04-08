module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'card-image': "url('./pokeballAndCards.jpg')",
      }),
    },
    minWidth: {
      sm: '280px',
    },

    minHeight: {
      sm: '390px',
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
