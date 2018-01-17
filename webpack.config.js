var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: "bundle.js"
  },
  // module: {
  //   loaders: [
  //     {exclude: /node_modules/}
  //   ]
  // },
  resolve: {
    extensions: [".js", ".jsx", "*"]
	}
};
