const path = require('path')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireAliases = require('react-app-rewire-aliases')
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  config = rewireAliases.aliasesOptions({
      '~': path.resolve(__dirname, './src')
  })(config, env)
  
  if(env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    })
  }
  
  return config
}