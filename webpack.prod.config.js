/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const nodeModules = {};

// note the path.resolve(__dirname, ...) part
// without it, eslint-import-resolver-webpack fails
// since eslint might be invoked with different cwd
fs.readdirSync(path.resolve(__dirname, "node_modules"))
    .filter(x => [".bin"].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

// es5 style alternative
// fs.readdirSync(path.resolve(__dirname, 'node_modules'))
//     .filter(function(x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function(mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });

module.exports =

{
    // The configuration for the server-side rendering
    name: "server",
    target: "node",
    entry: "./bin/www.ts",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "out"),
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader",
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true
            }
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader"
        },
        ],
    },  
    resolve: {
        modules: [
            "node_modules",
            path.resolve("./src"),
        ],
        extensions: [".ts", ".js",],
    },
};