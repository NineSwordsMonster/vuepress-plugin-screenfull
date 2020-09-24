const { path } = require('@vuepress/shared-utils')

module.exports = () => ({
  name: '@nine-theme/vuepress-plugin-screenfull',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
