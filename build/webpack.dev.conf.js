const path = require("path")
const {
    merge
} = require("webpack-merge")
const webpackConfigBase = require("./webpack.base.conf")
let webpackConfigDev = {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    module: {},
    plugins: [],
    devServer: {
        open: true,
        host: "127.0.0.1",
        https: false,
        hot: true,
        historyApiFallback: true,
    }
}

module.exports = merge(webpackConfigBase(false), webpackConfigDev)