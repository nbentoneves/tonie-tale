import type { MetadataRoute } from 'next';
import { Env } from '../utils/env';

const Sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: `${Env.uri}`,
            lastModified: '2024-10-01T09:00:00',
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${Env.uri}/blog`,
            lastModified: '2024-10-03T09:00:00',
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${Env.uri}/etf/calculator`,
            lastModified: '2024-10-02T09:00:00',
            changeFrequency: 'yearly',
            priority: 0.6,
        },
    ];
};

export default Sitemap;
