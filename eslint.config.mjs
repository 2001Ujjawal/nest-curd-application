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
      // optional tweaks
      // '@typescript-eslint/no-unsafe-call': 'warn',
      // '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
];
