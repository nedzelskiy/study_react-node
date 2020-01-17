const path = require('path');

module.exports = {
  entry: {
    client: path.normalize(`${process.env.PWD}${path.sep}client${path.sep}client.tsx`),
  },
  output: {
    path: path.normalize(`${process.env.PWD}${path.sep}builds`),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.normalize(`${process.env.PWD}${path.sep}tsconfig.json`),
            },
          }
        ],
        exclude: /node_modules/,
      },
    ],
  }
};
