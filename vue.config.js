module.exports = {
  pages: {
    index: {
      entry: 'src/app/main/index.ts',
      template: 'public/index.html',
      filename: `index.html`
    }
  },
  configureWebpack: {
    devServer: {
      open: true,
      proxy: {
        '/api': {
          target: `http://localhost:3000`,
          changeOrigin: true
        }
      }
    }
  }
}
