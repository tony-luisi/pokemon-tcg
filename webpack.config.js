var path = require("path")
module.exports = {
  entry: "./src/javascripts/index.js",
  output: {
    path: path.resolve(__dirname, "public/javascripts"),
    publicPath: "/javascripts/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {

        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}
