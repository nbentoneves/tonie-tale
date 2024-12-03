import LayoutWrapper from '@componentes/Layout';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';
import ProvidersWrapper from './Providers';
import { Seo } from '../utils/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Env } from '../utils/env';

const geistSans = localFont({
    src: './../../public/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './../../public/fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = Seo.default;

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ProvidersWrapper>
                    <LayoutWrapper>{children}</LayoutWrapper>
                </ProvidersWrapper>
                {!Env.isDevelopment && (
                    <GoogleAnalytics
                        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''}
                    />
                )}
            </body>
        </html>
    );
};

export default RootLayout;
