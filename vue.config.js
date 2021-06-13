const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

// Joining path of directory
const directoryPath = path.join(__dirname, "Documents");
// Passing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    // handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    // listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
    });
});

module.exports = {
    publicPath: process.env.NODE_ENV === "production"
        ? "/dist/"
        : "/",
    transpileDependencies: [
        "vuetify",
    ],
    devServer: {
        host: "localhost",
        port: 8081,
        compress: true,
        disableHostCheck: true,
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: "@import \"~@/styles/global.scss\";",
            },
        },
    },
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                TWO: JSON.stringify("test-value"),
                "process.env.hello": "'wporld deww'",
            }),
            new CopyPlugin({
                patterns: [
                    { from: "src/posts", to: "posts" },
                ],
            }),
        ],
    },
};
