// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{ weight: 400, style: 'normal' },
					{ weight: 700, style: 'normal' },
				],
			},
		},

	],
});
