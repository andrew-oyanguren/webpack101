module.exports = {
  // predifined set of options, can have multiple presets
  presets: [
    ['@babel/preset-env', {
      // as babel encounters new features is will run through pollyfills
      useBuiltIns: 'usage',
      // core-js package includes common pollyfills
      corejs: '3.0',
    }]
  ]
};

// polyfills: code that adds functionality which the engine may lack
// Promises and fetch are examples of features that need polyfills