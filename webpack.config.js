const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { plugin } = require('postcss');

module.exports = {
  // specify what we are bundling for: 'development' or 'production'
  mode: 'production',
  // what is the entry point of our application; where webpack will start bundling
  entry: './src/index.js',
  // where the bundled code will be output
  output: {
    filename: 'main.js',
    // can specify path to output file: path: '/dist' is the default
  },
  plugins: [
    // plugin to extract css into a separate file (from npm pakcage)
    new MiniCssExtractPlugin({
      filename: 'main.css',
    })
  ],
  module: {
    rules: [
      {
        // test for files that end with .js
        test: /\.js$/,
        // exclude node_modules from using babel-loader
        exclude: /node_modules/,
        // use specifies loaders to use for the files that match the test
        use: ['babel-loader'],
      },
      {
        // test for files that end with .css
        test: /\.css$/,
        // use specifies loaders to use for the files that match the test
        // each line put through loader right to left
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ]
  }
};