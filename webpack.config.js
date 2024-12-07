const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'script.js'
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 8080,
      hot: true
    },

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              

               MiniCssExtractPlugin.loader,
              
              "css-loader",

              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: () => [
                      require('autoprefixer')
                    ]
                  }
                }
              },
              
              
              "sass-loader",
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
]
}