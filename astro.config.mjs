import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import starlightImageZoom from 'starlight-image-zoom'

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
			head: [
				{
					tag: 'script',
					content: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-KS9CC43P');
					  `,
				},
			],
			plugins: [
				starlightImageZoom()
			],
			title: 'SAP CX Actions',
			description: 'The SAP CX GitHub Actions documentation provides comprehensive guides and resources for automating SAP Commerce Cloud workflows using GitHub Actions. Learn how to streamline your CI/CD processes with detailed examples and best practices.',
			editLink: {
				baseUrl: 'https://github.com/sap-cx-actions/docs/edit/main/',
			},
			lastUpdated: true,
			pagination: false,
			customCss: ['./src/assets/styles/landing.css', './src/assets/styles/custom.css'],
			defaultLocale: 'root',
			locales,
			expressiveCode: {
				themes: ['github-light'],
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
						{
							label: 'Notifications',
							slug: 'commerce-cloud/notifications',
							translations: {
								fr: 'Notifications'
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
