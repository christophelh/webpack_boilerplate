const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {

    module: {
        rules: [{
            test: /\.html$/,
            use: [ {
              loader: 'html-loader',
              options: {
                minimize: true
              }
            }],
          },
        
          {
            test: /\.(png|jpe?g|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {},
              },
            ],
          },
        
        
        ]
    },

  plugins: [
    new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "./index.html"
    }
)
  ]
}