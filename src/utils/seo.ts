import { Metadata } from 'next';
import { Env } from './env';

const homePage: Metadata = {
    title: 'TonieTales: Your Story Upload Hub',
    description:
        'Discover TonieTales: Your place to creating and uploading custom stories for Tonie Box. Effortlessly upload your stories in just a few clicks. Share your personalized audio adventures with ease, it is quick, simple, and fun!',
    keywords:
        'tonie box, story upload, audio stories, personalized tales, children stories, storytelling platform, story sharing, family entertainment, educational stories',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000'
            : 'https://nbentoneves.github.io/tonie-tales',
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
