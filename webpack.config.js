const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname + '/src/components/index.ts'),
  devtool: false,
  target: 'node',
  externals: [
    nodeExternals(),
    {
      react: 'umd react',
      'react-dom': 'umd react-dom',
    },
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      hooks: path.resolve(__dirname, '/src/hooks/'),
      components: path.resolve(__dirname, '/src/components/'),
      helpers: path.resolve(__dirname, '/src/helpers/'),
    },
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: ['resolve-url-loader'],
        include: path.resolve(__dirname, './'),
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@emotion/babel-preset-css-prop',
            '@babel/preset-react',
            '@babel/preset-env',
          ],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader'),
      },

      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]',
            },
          },
        ],
        include: path.resolve(__dirname, './'),
      },
    ],
  },
  node: {
    fs: 'empty',
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
      }),
    ],
  },
};
