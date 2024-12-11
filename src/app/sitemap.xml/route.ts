// https://nextjs.org/docs/app/api-reference/file-conventions/route
// Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

import { MetadataRoute } from 'next';
import { Routes } from '../../utils/routes';

const ITEMS: MetadataRoute.Sitemap = Routes.pages.map((route) => {
    return {
        url: route.href,
        lastModified: route.sitemap?.lastModified,
        changeFrequency: route.sitemap?.changeFrequency as any,
        priority: route.sitemap?.priority,
    };
});

const getSitemap = () => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${ITEMS.map(
            (item) => `
                <url>
                    <loc>${item.url}</loc>
                    <lastmod>${item.lastModified}</lastmod>
                    <changefreq>${item.changeFrequency}</changefreq>
                    <priority>${item.priority}</priority>
                </url>
                `,
        ).join('')}
    </urlset>`;
};

export const GET = async () => {
    return new Response(getSitemap(), {
        headers: {
            'Content-Type': 'text/xml',
        },
    });
};
