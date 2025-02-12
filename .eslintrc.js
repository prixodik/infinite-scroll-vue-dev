module.exports = {
	root: true,
	env: {
	  node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
	parserOptions: {
	  ecmaVersion: 2020,
	},
	rules: {
	  'vue/multi-word-component-names': 'off',
	  '@typescript-eslint/no-explicit-any': 'off',
	},
	overrides: [
	  {
		files: [
		  '**/__tests__/*.{j,t}s?(x)',
		  '**/tests/unit/**/*.spec.{j,t}s?(x)',
		],
		env: {
		  jest: true,
		},
	  },
	],
};
