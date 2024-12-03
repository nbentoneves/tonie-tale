import { Metadata } from 'next';
import { Env } from './env';

const homePage: Metadata = {
    title: 'MyMarketInfo.co.uk - Beginner investor creating tools for other beginners',
    description: `I'm excited to embark on this journey, as a beginner investor I'm creating tools to help other beginners.`,
    keywords:
        'investing tools, mymarketinfo, investing utils, beginner investor, learn how to invest',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000'
            : 'https://mymarketinfo-web-7a7b3c83dc1d.herokuapp.com',
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

const etfCalculatorPage: Metadata = {
    title: 'Check the future return of an ETF with expense ratio fees.',
    description:
        'A calculator that can help you determine the future value and cost of your ETF.',
    keywords:
        'etf calculator, what is expense ratio, mutual fund expense ratio, expense ratio calculator, expense ratio of mutual fund',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000/etf/calculator'
            : 'https://mymarketinfo-web-7a7b3c83dc1d.herokuapp.com/eft/calculator',
    },
};

const etfMultiCalculatorPage: Metadata = {
    title: 'Check the future return of multiple ETF with expense ratio fees.',
    description:
        'A calculator that can help you determine the future value and cost of multiples ETF combined.',
    keywords:
        'etf calculator, what is expense ratio, mutual fund expense ratio, expense ratio calculator, expense ratio of mutual fund',
    alternates: {
        canonical: Env.isDevelopment
            ? 'http://localhost:3000/etf/calculator'
            : 'https://mymarketinfo-web-7a7b3c83dc1d.herokuapp.com/eft/calculator',
    },
};

export const Seo = {
    default: homePage,
    homePage,
    etfCalculatorPage,
    etfMultiCalculatorPage,
    blogPage: homePage,
};
