const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const fm = require("front-matter");

function getBlogData () {
    const blogData = [];
    const blogPostPath = "./src/posts/blog";
    fs.readdirSync(blogPostPath).forEach(file => {
        const data = fs.readFileSync(path.join(blogPostPath, file), "utf-8");
        const fmData = fm(data);
        blogData.push(fmData.attributes);
    });
    return blogData;
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
