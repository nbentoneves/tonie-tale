'use client';
import NotFound from '@componentes/Shared/NotFound';
import type { Metadata } from 'next';

//FIXME: This is not working because a nextjs bug: https://github.com/vercel/next.js/issues/45620
export const metadata: Metadata = {
    title: '...',
    description: '...',
};

const NotFoundPage = () => {
    return <NotFound />;
};

export default NotFoundPage;
