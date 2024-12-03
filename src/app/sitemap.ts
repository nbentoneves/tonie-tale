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
    ];
};

export default Sitemap;
