const { configure, presets } = require('eslint-kit')

module.exports = configure({
	presets: [
		presets.imports({
			sort: {
				// (optional) Add newline between import groups
				newline: true,
			},
		}),
		presets.typescript({
			root: './',
			tsconfig: 'tsconfig.json',
		}),
		presets.prettier(),
		presets.node(),
		presets.react({
			version: 'detect',
		}),
	],
	extend: {
		rules: {
			'jsx-a11y/no-redundant-roles': 'warn',
			'jsx-a11y/no-noninteractive-tabindex': 'warn',
		},
	},
})
