const stylexPlugin = require('@stylexjs/babel-plugin');

module.exports = function (api) {
  const plugins = [];

  const disableBabelPlugin = process.env.DISABLE_BABEL_PLUGIN === '1';
  // https://babeljs.io/docs/en/config-files#apicache
  api.cache.invalidate(() => disableBabelPlugin);
  if (disableBabelPlugin) {
    console.log('Starting Web example without Babel plugin.');
  } else {
    if (!process.env.EXPO_ROUTER_APP_ROOT) {
      plugins.push('react-native-reanimated/plugin');
    }
    plugins.unshift([
      stylexPlugin,
      {
        dev: process.env.NODE_ENV === 'development',
        importSources: ['@stylexjs/stylex'],
        runtimeInjection: true,
        genConditionalClasses: true,
      },
    ]);
  }

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
