'use strict';

const autoprefixer = require('autoprefixer');

const postcssConfig = {
  loader: require.resolve('postcss-loader'),
  options: {
    sourceMap: true,
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ],
  }
}

module.exports = postcssConfig
