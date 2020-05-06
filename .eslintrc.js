const additionalHooks = ['useKeyboard'];

module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    __PATH_PREFIX__: true,
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'object-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-useless-return': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'arrow-parens': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-wrap-multilines': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'react/jsx-curly-newline': 'off',

    'max-len': ['error', { code: 120 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: `(${additionalHooks.join('|')})`,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
