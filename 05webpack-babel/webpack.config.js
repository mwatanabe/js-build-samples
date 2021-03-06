module.exports = {
    entry: './js/src.js',
    output: {
        path: __dirname + "/js",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};