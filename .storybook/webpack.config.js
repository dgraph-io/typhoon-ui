const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
    require.resolve('@emotion/babel-preset-css-prop'),
  ];

  // styles
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.unshift({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
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
    loader: require.resolve('ts-loader'),
  });
  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    hooks: path.resolve(__dirname, '../src/hooks/'),
    components: path.resolve(__dirname, '../src/components/'),
    helpers: path.resolve(__dirname, '../src/helpers/'),
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
