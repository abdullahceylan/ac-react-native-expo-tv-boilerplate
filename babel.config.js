const { readdirSync } = require('fs');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            ...readdirSync('./src', { withFileTypes: true }).reduce(
              (res, entry) => {
                let key = entry.name;
                if (!entry.isDirectory()) {
                  // remove extension
                  const parts = entry.name.split('.');
                  parts.pop();

                  key = parts.join('');
                }

                return {
                  ...res,
                  [`@${key}`]: `./src/${entry.name}`,
                };
              },
              {},
            ),
            '@assets': './assets',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          // envName: 'APP_ENV',
          moduleName: 'react-native-dotenv',
          // path: '.env',
          // blocklist: null,
          // allowlist: null,
          // safe: false,
          allowUndefined: true,
          // verbose: false,
        },
      ],
    ],
  };
};
