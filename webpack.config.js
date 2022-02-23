// eslint-disable-next-line
module.exports = {
  entry: "./src/index.js",
  output: {
    // eslint-disable-next-line no-undef
    path: __dirname + "/dist",
    filename: "index.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: "./babel.config.js",
          },
        },
      },
    ],
  },
};
