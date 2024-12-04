import LayoutWrapper from '@componentes/Layout';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import React from 'react';
import { Env } from '../utils/env';
import { Seo } from '../utils/seo';
import ProvidersWrapper from './Providers';

export const metadata: Metadata = Seo.default;

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
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
