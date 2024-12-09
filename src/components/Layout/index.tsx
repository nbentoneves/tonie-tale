'use client';

import { Alert, Box, Flex, Link } from '@chakra-ui/react';

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import { maxWidthProps } from './styles/customTheme';

const LayoutWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Box minHeight="100vh" transition="0.4s ease-out">
            <Meta />
            <Header />
            <Flex {...maxWidthProps} px={8} py={0}>
                <Alert.Root
                    status="error"
                    textAlign="center"
                    flexDirection="column"
                    variant="solid"
                    fontSize={[13, 15, 15]}
                >
                    <Box>
                        Please note that Tonietale is an independent platform
                        and is not affiliated with, endorsed by, or associated
                        with Tonies GmbH or its parent company. Our website is
                        dedicated to providing a space for users to create
                        stories for use with the Tonie Box. For official
                        products and services, please visit{' '}
                        <Link
                            href="https://tonies.com/"
                            target="_blank"
                            color="black"
                        >
                            Tonies.com
                        </Link>{' '}
                        directly.
                    </Box>
                </Alert.Root>
            </Flex>
            <Box>
                <Box {...maxWidthProps} as="main" mb={22}>
                    {children}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default LayoutWrapper;
