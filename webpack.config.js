const path = require("path");

module.exports = {
    entry: path.join(__dirname, "frontend", "index.jsx"),
    output: {
        path: path.join(__dirname, "app", "static"),
        filename: "bundle.js"
    }
};
