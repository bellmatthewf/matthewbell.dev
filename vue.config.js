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
    pages: {
        index: {
            template: "public/index.html",
            entry: "src/pages/index/index.js",
        },
        blog: {
            template: "public/blog.html",
            entry: "src/pages/blog/blog.js",
        },
        contact: {
            template: "public/contact.html",
            entry: "src/pages/contact/contact.js",
        },
    },
};
