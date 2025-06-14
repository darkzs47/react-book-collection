import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'

export default [
    {ignores: ['dist']},
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {jsx: true},
                sourceType: 'module',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'import': importPlugin,
            'jsx-a11y': jsxA11y,
            'react': reactPlugin
        },
        rules: {
            ...jsxA11y.configs.recommended.rules,
            ...js.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z_]'}],
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],

            'import/order': ['warn', {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            }],
            'import/no-unresolved': 'error',
            'import/no-duplicates': 'warn',
        },
    },
]
