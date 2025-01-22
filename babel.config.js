module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      'react-native-reanimated/plugin',
    ],
  };
};

module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // Add any required plugins here, for example:
    
  ],
};
