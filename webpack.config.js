const path = require("path");

module.exports = {
  entry: "./scr/js/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./scr", "dist"),
  },
};
