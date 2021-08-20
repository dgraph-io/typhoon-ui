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

module.exports = async ({ config }) => {
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
    require.resolve("@emotion/babel-preset-css-prop"),
  ];

  // styles
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ["resolve-url-loader"],
    include: path.resolve(__dirname, "../"),
  });

  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf)$/,
    use: [
      {
        loader: "file-loader",
        query: {
          name: "[name].[ext]",
        },
      },
    ],
    include: path.resolve(__dirname, "../"),
  });

  config.module.rules.unshift({
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
    ],
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("ts-loader"),
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.resolve.alias = {
    hooks: path.resolve(__dirname, "../src/hooks/"),
    components: path.resolve(__dirname, "../src/components/"),
    helpers: path.resolve(__dirname, "../src/helpers/"),
    theme: path.resolve(__dirname, "../src/theme.ts"),
  };

  config.module.rules = config.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      };
    }

    return rule;
  });
  
  return config;
};
