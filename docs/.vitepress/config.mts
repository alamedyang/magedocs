import { defineConfig } from 'vitepress'

import { readFileSync } from 'fs'

const mgsGrammar = JSON.parse(readFileSync("mgs.tmLanguage.json", 'utf8'))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MageGameScript Docs",
  description: "Documentation for working with MageGameScript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
	logo: 'media/MageGameScript-MAGE.png',
    search: {
		provider: 'local',
	},
	nav: [
		{ text: 'Docs Home', link: '/' },
		{ text: 'Play the Game', link: 'https://dc801.github.io/BM-Badge/' },
		{
			text: 'Repos',
			items: [
				{ text: 'Black Mage Game', link: "https://github.com/DC801/BM-Badge" },
				{ text: 'MGS Syntax Colors', link: "https://github.com/alamedyang/magegamescript-syntax-highlighting" },
			]
		},
    ],
	sidebar: [
		{
			text: "Overview",
			collapsed: true,
			items: [
				{ text: 'Introduction to MGS', link: "/introduction_to_mgs.md" },
				{ text: 'What You\'ll Need', link: "/what_youll_need.md" },
				{ text: 'General Process', link: "/general_process.md" },
				{ text: 'Jargon and Syntax', link: "/jargon_and_syntax.md" },
				{ text: 'Syntax Scopes', link: "/syntax_scopes.md" },
			]
		},
		{
			text: "Assets",
			collapsed: true,
			items: [
				{ text: 'Tilesets', link: "/tilesets.md" },
				{ text: 'Animations', link: "/animations.md" },
				{ text: 'Maps', link: "/maps.md" },
				{ text: 'Vector Objects', link: "/vector_objects.md" },
				{ text: 'Entities', link: "/entities.md" },
				{ text: 'Entity Types', link: "/entity_types.md" },
				{ text: 'Entity Management System', link: "/entity_management_system.md" },
			]
		  },
		  {
			text: "Types and Structure",
			collapsed: true,
			items: [
				{ text: 'Primitive Types', link: "/primitive_types.md"},
				{ text: 'Dialog and Serial Dialog Strings', link: "/dialog_and_serial_dialog_strings.md" },
				{ text: 'Identifiers', link: "/identifiers.md" },
				{ text: 'Expressions and Operators', link: "/expressions_and_operators.md" },
				{ text: 'Macros', link: "/macros.md" },
				{ text: 'Fns', link: "/fns.md" },
				{ text: 'State', link: "/state.md" },
			]
		},
		{
			text: "Root Level Definitions",
			collapsed: true,
			items: [
				{ text: 'Constants', link: "/constants.md" },
				{ text: 'Dialog and Serial Dialog Settings', link: "/dialog_and_serial_dialog_settings.md" },
				{ text: 'Dialogs', link: "/dialogs.md" },
				{ text: 'Serial Dialogs', link: "/serial_dialogs.md" },
				{ text: 'Scripts', link: "/scripts.md" },
			]
		},
		{
			text: "Script Body Items",
			collapsed: true,
			items: [
				{ text: 'Script Control Flow', link: "/script_control_flow.md" },
				{ text: 'JSON Literals', link: "/json_literals.md" },
				{ text: 'Arrays', link: "/arrays.md" },
				{ text: 'Commands', link: "/commands.md" },
				{ text: 'Actino Param Expansions', link: "/action_param_expansions.md" },
				{ text: 'Actions', link: "/actions.md" },
			]
		},
		{
			text: "Techniques",
			collapsed: true,
			items: [
				{ text: 'Actors', link: "/actors.md" },
				{ text: 'Cutscenes', link: "/cutscenes.md" },
				{ text: 'Doors', link: "/doors.md" },
				{ text: 'Handlers', link: "/handlers.md" },
				{ text: 'Hiding an Entity', link: "/hiding_an_entity.md" },
				{ text: 'Hint Systems', link: "/hint_systems.md" },
			]
		},
		{
			text: "Technical",
			collapsed: true,
			items: [
				{ text: 'Hex Editor', link: "/hex_editor.md" },
				{ text: 'Terminal', link: "/terminal.md" },
				{ text: 'MGE VM', link: "/mge_vm.md" },
				{ text: 'Encoder', link: "/encoder.md" },
				{ text: 'Debug Tools', link: "/debug_tools.md" },
				{ text: 'Updating the Hardware', link: "/updating_the_hardware.md" },
			]
		  }
	],
  },
  markdown: {
	languages: [
		'json',
		{
			...mgsGrammar,
			displayName: "MageGameScript",
			aliases: ['mgs'],
			embeddedLangs: ['json'],

		},
	],
	theme: {
		dark: 'dark-plus',
		light: 'light-plus',
	}
  },
})
