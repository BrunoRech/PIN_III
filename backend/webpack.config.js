module.exports = {
    context: __dirname + "/../frontend",
    entry: "./main.ts",
    output: {
        filename: "main.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
      contentBase: './dist',
      hot: true,
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
        ]
    },

};