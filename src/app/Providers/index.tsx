'use client';
import { Toaster, toaster } from '@componentes/ui/toaster';
import { Provider as ChakraProvider } from '@componentes/ui/provider';
import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import React from 'react';
import { ApiContext, createApi } from '@package/api/context';
import { Env } from 'src/utils/env';

const ProvidersWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const handleError = (error: AxiosError) => {
        toaster.create({
            title: error.message,
            description:
                (error?.response?.data as any).message ||
                'Please contact the service provider',
            type: 'error',
            duration: 9000,
        });
    };

    // Create a client
    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error) => handleError(error as AxiosError),
        }),
        mutationCache: new MutationCache({
            onError: (error) => handleError(error as AxiosError),
        }),
    });

    return (
        <ChakraProvider defaultTheme="light">
            <QueryClientProvider client={queryClient}>
                <ApiContext.Provider
                    value={createApi({
                        tonieTales: {
                            uri: Env.uriApi,
                        },
                    })}
                >
                    <Toaster />
                    <>{children}</>
                    <ReactQueryDevtools initialIsOpen={false} />
                </ApiContext.Provider>
            </QueryClientProvider>
        </ChakraProvider>
    );
};

export default ProvidersWrapper;
