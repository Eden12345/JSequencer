var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: "bundle.js"
  },
  resolve: {
                // for webpack 1:
		// modulesDirectories: ["path/to/Tone.js/"],
                // for webpack 2:
    modules: ["path/to/Tone.js/"]
	},
};
