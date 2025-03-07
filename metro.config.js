const { getDefaultConfig } = require('expo/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const baseConfig = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return config;
})();
if (process.env.EXPO_ROUTER_APP_ROOT) {
  module.exports = baseConfig;
} else {
  module.exports = wrapWithReanimatedMetroConfig(baseConfig);
}
