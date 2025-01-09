const pages = [
    {
        name: 'Your Story Hub',
        description: 'Home page',
        href: '/',
        sitemap: {
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    },
    {
        name: 'Abracadabra, Story-dabra!',
        description: 'Generate a personalized tale',
        href: '/create',
        sitemap: {
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    },
    {
        name: 'How To Upload Tales!',
        description: 'Find how to upload tales into creative tonies',
        href: '/how-to-upload',
        sitemap: {
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    },
    {
        name: 'About us',
        description: 'Discover the Magic of TonieTale',
        href: '/about',
        sitemap: {
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    },
];

export const Routes = {
    pages,
};
