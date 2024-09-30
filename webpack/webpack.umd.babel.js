import webpack from 'webpack';
import ESLintPlugin from 'eslint-webpack-plugin'; // Correctly import ESLintPlugin

export default {
  devtool: 'source-map',
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.SourceMapDevToolPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ESLintPlugin({ // Move ESLintPlugin to the plugins section
      extensions: ['js'], // Define which file extensions ESLint should lint
      exclude: 'node_modules' // Exclude node_modules from linting
    })
  ],
  optimization: {
    minimize: true // Enable minification
  }
};
