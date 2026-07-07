export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-url': {
      url: 'copy',
      assetsPath: 'assets/img',
      useHash: true
    }
  },
}