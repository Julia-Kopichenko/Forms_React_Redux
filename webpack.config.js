const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        use: [
          // loading images
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name]-[sha1:hash:7].[ext]",
            },
          },
        ],
      },
      // loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]",
            },
          },
        ],
      },
      // loading css
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      // loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
      buildTime: new Date().toISOString(),
      template: "./public/index.html",
    }),
  ],
};
