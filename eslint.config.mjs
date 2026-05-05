// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // ✅ IMPORTANT

  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json', // ✅ REQUIRED
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off', // warn
      '@typescript-eslint/no-unsafe-call': 'off', // warn
      '@typescript-eslint/no-unsafe-member-access': 'off', // warn
      '@typescript-eslint/no-unsafe-return': 'off', // warn
    },
  },
];
