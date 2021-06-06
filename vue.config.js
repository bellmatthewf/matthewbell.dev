module.exports = {
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
        module: {
            rules: [{
                test: /\.md$/,
                use: [
                    { loader: "html-loader" },
                    { loader: "markdown-loader", options: {} },
                ],
            },
            ],
        },
    },
};
