'use client';
import { ChakraProvider, useToast } from '@chakra-ui/react';
import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import React from 'react';

const ProvidersWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const toast = useToast();

    const handleError = (error: AxiosError) => {
        toast({
            title: error.message,
            description:
                (error?.response?.data as any).message ||
                'Please contact the service provider',
            status: 'error',
            duration: 9000,
            isClosable: true,
        });
    };

    // Create a client
    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error, _) => handleError(error as AxiosError),
        }),
        mutationCache: new MutationCache({
            onError: (error, _) => handleError(error as AxiosError),
        }),
    });

    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <>{children}</>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    );
};

export default ProvidersWrapper;
