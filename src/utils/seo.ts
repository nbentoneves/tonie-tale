import { Metadata } from 'next';
import { Env } from './env';

const homePage: Metadata = {
    title: 'CreateMyTonies - Easy way to create stories for tonies',
    description: ``,
    keywords: '',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000'
            : 'https://nbentoneves.github.io/create-my-tonies',
    },
    icons: [
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicon/apple-touch-icon.png',
        },
        {
            rel: 'icon',
            url: '/favicon/favicon.ico',
        },
        {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            url: '/favicon/favicon-32x32.png',
        },
        {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            url: '/favicon/favicon-16x16.png',
        },
        {
            rel: 'mask-icon',
            color: '#5bbad5',
            url: '/favicon/safari-pinned-tab.svg',
        },
    ],
    manifest: '/favicon/site.webmanifest',
};

export const Seo = {
    default: homePage,
    homePage,
};
