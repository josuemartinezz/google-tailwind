module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
