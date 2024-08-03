// webpack.config.js

module.exports = {
    // other configurations...
    module: {
      rules: [
        // other rules...
        {
          test: /\.scss$/,
          use: [
            'style-loader', // injects CSS into the DOM
            'css-loader', // interprets @import and url() like import/require() and will resolve them
            'postcss-loader', // applies any PostCSS plugins you have configured
            'resolve-url-loader', // resolves relative URLs in your Sass files
            'sass-loader', // compiles Sass to CSS
          ],
        },
      ],
    },
  };
  