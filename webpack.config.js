const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './extension/src/index.ts', // Your entry point
    tournamentDetails: './extension/src/tournamentDetails/tournamentDetails.ts', 
    contentLoader: './extension/src/contentLoader.ts'
  },
  output: {
    path: path.resolve(__dirname, 'extension/dist'), // Output directory
    filename: '[name].bundle.js' // Output file
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Add any other rules for other file types
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'extension/src/tournamentDetails/tournamentDetails.html', to: 'tournamentDetails.html' },
        { from: 'extension/popup.html', to: 'popup.html' },
        // Add similar patterns for other HTML/CSS files you want to copy.
      ]
    }),
  ],
  // Add any additional plugins if needed
};


