import fs from 'fs';
import path from 'path';

import CopyPlugin from 'copy-webpack-plugin';

const config = {
  entry: {
    content: './extension/src/content/content.js',
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, '/../../dist/build-mv3/'),
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'extension/manifest.json', to: 'manifest.json' },
        { from: 'extension/src/assets/icons', to: 'images' },
        { from: 'extension/src/assets/content', to: 'images' },
        { from: 'extension/src/popup.html', to: 'popup.html' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
