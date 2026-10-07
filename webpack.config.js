var webpack = require("webpack");

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + "/dist/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
};
