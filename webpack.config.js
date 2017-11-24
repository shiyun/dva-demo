const webpack = require('webpack');

module.exports = (webpackConfig, env) => {
  const  production = env === 'production' ? true : false;

  webpackConfig.output.chunkFilename = '[name].[chunkhash].js';

  if(production) {
    // clear console.log or debugger something code.
    webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      })
    )
  }

  // Alias
  webpackConfig.resolve.alias = {
    components: `${__dirname}/src/components`,
    utils: `${__dirname}/src/utils`,
    config: `${__dirname}/src/utils/config`,
    enums: `${__dirname}/src/utils/enums`,
    services: `${__dirname}/src/services`,
    models: `${__dirname}/src/models`,
    routes: `${__dirname}/src/routes`,
    themes: `${__dirname}/src/themes`,
    less: `${__dirname}/src/less`,
    locales: `${__dirname}/src/locales`,
  };

  console.log(webpackConfig,env);
  return webpackConfig
};

