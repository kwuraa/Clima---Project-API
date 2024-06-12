const path = require("path");

module.exports = {
  entry: "src/js/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
