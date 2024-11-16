const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // autoprefixer adds vendor prefixes to css rules
    require('autoprefixer'),
    // cssnano minifies css
    require('cssnano'),
    // pxtorem converts pixel units to rem units
    require('postcss-pxtorem')({ propList: ['*'] }),
  ],
};