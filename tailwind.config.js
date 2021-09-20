module.exports = {
  /* optimize for fast reload, dropping all non essential utility classes*/
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'side-bg': "#1E213A",
        'search-place-bg': "#6E707A",
        'color-text': "#E7E7EB",
        'main-bg': "#100E1D",
        'prog-color': "#FFEC65",
        'drawer-bg': "#1E213A",
        'component-bg': "#1E213A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
