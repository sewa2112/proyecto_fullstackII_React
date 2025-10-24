const path = require("path");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],

    files: [
      "spec/**/*Spec.js"
    ],

    preprocessors: {
      "spec/**/*Spec.js": ["webpack", "sourcemap"]
    },

    webpack: {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
},


    webpackMiddleware: {
      stats: "errors-only"
    },

    reporters: ["progress"],

    browsers: ["Chrome"],

    singleRun: true,

    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-webpack",
      "karma-sourcemap-loader"
    ]
    
  });
};
