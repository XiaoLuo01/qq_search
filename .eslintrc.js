module.exports = {
  parser: '@typescript-eslint/parser', // Specify the ESLint parser
  extends: [
    'plugin:react/recommended', // Use recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allow parsing of the latest ECMAScript features
    sourceType: 'module', // Allow the use of import
    ecmaFeatures: {
      jsx: true, // Allow JSX to be parsed
    },
  },
  rules: {
    // Custom rules
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { arrowParens: 'avoid', printWidth: 120 }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect', // Tell eslint-plugin-react to automatically detect the version of React
    },
  },
};
