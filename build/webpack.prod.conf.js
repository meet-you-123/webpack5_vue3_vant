const {
    merge
} = require("webpack-merge")
const webpackConfigBase = require("./webpack.base.conf")
const copyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const webpackConfigProd = {
    mode: "production",
    plugins: [
        new copyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "../public"),
                to: "./",
                globOptions: {
                    dot: true,
                    gitignore: true,
                    ignore: ["**/index.html"],
                }
            }]
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            }),

        ]
    }
}

module.exports = merge(webpackConfigBase(true), webpackConfigProd)