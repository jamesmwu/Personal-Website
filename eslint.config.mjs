import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		languageOptions: {
			globals: globals.browser
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			quotes: ['error', 'single'],
			'no-trailing-spaces': ['error'],
			'max-len': ['error', { code: 80 }],
			'react/prop-types': 'off',
			'no-unused-vars': 'warn',
			'no-undef': 'warn'
		}
	}
];
