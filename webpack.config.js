module.exports = {
    entry: "./public/entry.js",
    output: {
        path: "./public/assets", // The output directory as absolute path (required) 
        publicPath: "/assets/", // specifies the public URL address of the output files when referenced in a browser
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg|ttf)$/, loader: 'url-loader?limit=8192' } 
        ]
    }
};

