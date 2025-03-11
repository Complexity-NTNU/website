import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Use ES module import

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// Extend Next.js recommended configs
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	// Extend eslint-config-prettier to disable conflicting rules
	...compat.extends('prettier'),
	{
		// Load eslint-plugin-prettier via the imported value
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			// Run Prettier as an ESLint rule and report differences as errors
			'prettier/prettier': 'error',
		},
	},
];

export default eslintConfig;
