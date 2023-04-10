const moduleResolver = [
  'module-resolver',
  {
    root: ['.'],
    extensions: [
      '.ios.js',
      '.android.js',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json'
    ],
    alias: {
      src: ['./src']
    }
  }
]

const babelPluginInlineImport = [
  'babel-plugin-inline-import',
  {
    extensions: ['.svg']
  }
]

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-root-import', {
      rootPathPrefix:'~',
      rootPathSuffix:'src'
    }],
    'optional-require',
    moduleResolver,
    babelPluginInlineImport,
    'react-native-reanimated/plugin',
    ["import", { libraryName: "@ant-design/react-native" }]
  ]
};

