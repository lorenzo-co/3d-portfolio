module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
	"react/self-closing-comp": [
		"error",
		{
			"component": true,
			"html": true
		}
	],
		"react/react-in-jsx-scope": "off",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
	}
};
