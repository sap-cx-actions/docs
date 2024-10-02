// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	root: { label: 'English', lang: 'en' },
	fr: { label: 'Français', lang: 'fr' },
}
export default defineConfig({
	site: 'https://sap-cx-actions.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'SAP CX Actions',
			social: {
				github: 'https://github.com/sap-cx-actions/docs',
			},
			lastUpdated: true,
			pagination: false,
			customCss: ['./src/assets/landing.css'],
			defaultLocale: 'root',
			locales,
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
