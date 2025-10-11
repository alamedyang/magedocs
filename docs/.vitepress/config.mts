import { defineConfig } from 'vitepress'

import { readFileSync } from "fs"

const mgsGrammar = JSON.parse(readFileSync("mgs.tmLanguage.json", 'utf8'))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MageGame Docs",
  description: "Documentation for working with MageGameScript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
