const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const fm = require("front-matter");

function getBlogData () {
    const BlogData = [];
    const dirPath = "./src/posts/blog";
    fs.readdirSync(dirPath).forEach(file => {
        const data = fs.readFileSync(path.join(dirPath, file), "utf-8");
        const fmData = fm(data);
        BlogData.push(fmData.attributes);
    });
    return BlogData;
}

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
                "process.env.blogData": JSON.stringify(getBlogData()),
            }),
            new CopyPlugin({
                patterns: [
                    { from: "src/posts", to: "posts" },
                ],
            }),
        ],
    },
};
