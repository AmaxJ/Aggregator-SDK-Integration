module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  plugins: ['simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  rules: {
    'import/named': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        /** Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type. */
        fixToUnknown: false,
        /** Whether to ignore rest parameter arrays. */
        ignoreRestArgs: false
      }
    ],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    'unused-imports/no-unused-imports': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.json'],
        moduleDirectory: ['node_modules', 'src/', 'sdk', 'generated/', 'typechain/', 'router/']
      }
    }
  }
}
