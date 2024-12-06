import { Metadata } from 'next';
import { Env } from './env';

const defaults = {
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

const homePage: Metadata = {
    ...defaults,
    title: 'TonieTales: Your Story Hub',
    description:
        'Discover TonieTales: Your place to creating and uploading custom stories for Tonie Box. Effortlessly upload your stories in just a few clicks. Share your personalized audio adventures with ease, it is quick, simple, and fun!',
    keywords:
        'tonie box, story upload, audio stories, personalized tales, children stories, storytelling platform, story sharing, family entertainment, educational stories',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000'
            : `https://nbentoneves.github.io${Env.base}`,
    },
};

const createTalesPage: Metadata = {
    ...defaults,
    title: 'TonieTales | Create Your Tale: Automatic Story Generator',
    description:
        'Unleash your creativity with our automatic story generator! Easily create personalized tales for your Tonie Box in just a few steps. Whether you are crafting bedtime stories, fun adventures, or educational content, our tool helps you bring your ideas to life effortlessly. Start creating your unique tale today!',
    keywords:
        'automatic story generator, create a tale, personalized stories, tonie box tales, story creation tool, custom audio stories, easy storytelling, generate a story, creative storytelling, quick story creation',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000'
            : `https://nbentoneves.github.io${Env.base}/create`,
    },
};

const aboutPage: Metadata = {
    ...defaults,
    title: 'TonieTales | Empowering Personalized Storytelling for Children',
    description:
        'Discover the story behind TonieTales, your platform for creating unique, AI-powered tales for Tonie Box. Learn how we’re revolutionizing bedtime stories by helping parents craft personalized adventures featuring diverse characters, fostering creativity, and strengthening family bonds through storytelling.',
    keywords:
        'personalized stories, tonie box tales, ai storytelling, children’s stories, creative parenting, diverse characters, family storytelling, custom audio stories, bedtime tales, educational stories',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000'
            : `https://nbentoneves.github.io${Env.base}/about`,
    },
};

export const Seo = {
    default: homePage,
    homePage,
    createTalesPage,
    aboutPage,
};
