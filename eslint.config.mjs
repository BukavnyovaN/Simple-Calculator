import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'dist/**', 'webpack.config.js'],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...js.configs.recommended.globals,
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
      },
    },

    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-debugger': 'error',
    },

    settings: {
      prettier: true,
    },
  },
  eslintConfigPrettier,
];
