const path = require("path");

module.exports = async ({ config }) => {
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
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
          configFileName: "./tsconfig.json",
        },
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.resolve.alias = {
    hooks: path.resolve(__dirname, "../src/hooks/"),
    components: path.resolve(__dirname, "../src/components/"),
    helpers: path.resolve(__dirname, "../src/helpers/"),
  };

  return config;
};
