const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path');
const { config } = require('process');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve(__dirname, 'src'))
    
    config.resolve.extensions
      .prepend('.js')
      .prepend('.json')
      .prepend('.ts')
  }
})
