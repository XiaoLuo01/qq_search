const path = require('path');

module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.module.rules[1].oneOf = [
        ...[
          {
            test: /\.svg$/,
            include: path.resolve(__dirname, 'src/icons'), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  symbolId: 'icon-[name]', //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
                },
              },
            ],
          },
        ],
        ...webpackConfig.module.rules[1].oneOf,
      ];
      return webpackConfig;
    },
  },
};
