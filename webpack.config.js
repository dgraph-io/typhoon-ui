/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require("path");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: path.resolve(__dirname + "/src/index.tsx"),
    devtool: false,
    target: "node",
    externals: [
        nodeExternals(),
        {
            react: "umd react",
            "react-dom": "umd react-dom",
        },
    ],
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            hooks: path.resolve(__dirname, "/src/hooks/"),
            components: path.resolve(__dirname, "/src/components/"),
            helpers: path.resolve(__dirname, "/src/helpers/"),
            theme: path.resolve(__dirname, "../src/theme.ts"),
        },
        symlinks: false,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            svgoConfig: {
                                plugins: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    },
                    "url-loader",
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: ["resolve-url-loader"],
                include: path.resolve(__dirname, "./"),
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@emotion/babel-preset-css-prop",
                        "@babel/preset-react",
                        "@babel/preset-env",
                    ],
                },
            },
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve("ts-loader"),
            },

            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        query: {
                            name: "[name].[ext]",
                        },
                    },
                ],
                include: path.resolve(__dirname, "./"),
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    node: {
        fs: "empty",
    },

    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    },
                },
            }),
            new TerserPlugin({
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
            }),
        ],
    },
};
