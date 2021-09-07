const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      port: 9000
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', "@babel/preset-react"],
                      plugins: ["@babel/plugin-proposal-class-properties"]
                  }
              }
          },
            {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
             ],
           },
           {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
               'file-loader',
             ],
           }
      ]
  }
};