 
 const path = require('path');
 
 module.exports = function (api) {
    
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // Usa 'babel-preset-expo' para proyectos Expo
      // O si es un proyecto React Native puro, podría ser:
      // presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        [
          'module-resolver',
          {
            root: [path.resolve('./')],
            alias: {
                    '@': path.resolve('./'),
                    },
          },
        ],
        'react-native-reanimated/plugin',
      ],
    };
  };