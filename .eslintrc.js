// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  globals: {
    require: 'readonly'
  },
  env: {
    node: true
  },
  plugins: ['@typescript-eslint', 'react', 'unused-imports'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    }
  },
  extends: [
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false }
    ],
    'no-extra-boolean-cast': 'off', // eslint --fix is autofixing it and not having the boolean cast might cause react native to crash
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-useless-catch': 'off',
    'unused-imports/no-unused-imports-ts': 'warn',
    // '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'react/prop-types': 'off',
    'no-nested-ternary': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 'off',
    'react/forbid-elements': [
      'error',
      {
        forbid: [
          { element: 'Image', message: 'use <ImageWithPlaceholder> instead' },
          {
            element: 'ImageBackground',
            message: 'use <ImageBackgroundWithPlaceholder> instead'
          },
          { element: 'MapView', message: 'use <CustomMapView> instead' }
        ]
      }
    ]
  }
}
