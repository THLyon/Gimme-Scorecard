const path = require('path');

module.exports = {
  entry: './extension/src/index.ts', // Your entry point
  output: {
    path: path.resolve(__dirname, 'extension/dist'), // Output directory
    filename: 'bundle.js' // Output file
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
        use: ['style-loader', 'css-loader'],
      },
      // Add any other rules for other file types
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // Add any additional plugins if needed
};


