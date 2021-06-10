const CopyPlugin = require("copy-webpack-plugin");

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
            new CopyPlugin({
                patterns: [
                    { from: "src/posts", to: "posts" },
                ],
            }),
        ],
    },
};
