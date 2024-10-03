import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export const locales = {
	root: { label: 'English', lang: 'en' },
	fr: { label: 'Français', lang: 'fr' },
}
export default defineConfig({
	site: 'https://sap-cx-actions.github.io',
	base: '/docs',
	trailingSlash: 'never',
	integrations: [
		starlight({
			social: {
				github: 'https://github.com/sap-cx-actions/docs',
			},
			title: 'SAP CX Actions',
			description: 'The SAP CX GitHub Actions documentation provides comprehensive guides and resources for automating SAP Commerce Cloud workflows using GitHub Actions. Learn how to streamline your CI/CD processes with detailed examples and best practices.',
			editLink: {
				baseUrl: 'https://github.com/sap-cx-actions/docs/edit/main/',
			},
			lastUpdated: true,
			pagination: false,
			customCss: ['./src/assets/landing.css', './src/assets/custom.css'],
			defaultLocale: 'root',
			locales,
			expressiveCode: {
				themes: ['github-light'],
				shiki: {
					langs: [
						// import('./some-exported-grammar.mjs'),
						// JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
					],
				},
				plugins: [
					pluginLineNumbers()
				],
			},
			sidebar: [
				{
					label: 'Hello, World!',
					translations: {
						fr: 'Bonjour, le monde!',
					},
					items: [
						{
							label: 'Getting Started',
							slug: 'hello-world',
							translations: {
								fr: 'Commencer',
							}
						},
					],
				},
				{
					label: 'Commerce Cloud',
					translations: {
						fr: 'Commerce Cloud'
					},
					badge: 'New',
					items: [
						{
							label: 'Introduction',
							slug: 'commerce-cloud',
							translations: {
								fr: 'Introduction'
							}
						},
						{
							label: 'Cloud Build',
							slug: 'commerce-cloud/build',
							translations: {
								fr: 'Construction de Cloud'
							}
						},
						{
							label: 'Cloud Deploy',
							slug: 'commerce-cloud/deploy',
							translations: {
								fr: 'Déploiement dans le cloud'
							}
						},
					]
				},
				{
					label: 'Reference',
					items: [
						{
							label: 'API Reference',
							slug: 'reference/api'
						},
						{
							label: 'CLI Reference',
							slug: 'reference/cli'
						},
					]
				}
			],
		}),
	],
});
