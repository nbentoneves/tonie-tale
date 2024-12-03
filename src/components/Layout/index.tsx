'use client';

import { Alert, AlertIcon, Box, Flex } from '@chakra-ui/react';
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
                <Alert
                    status="warning"
                    textAlign="center"
                    flexDirection="column"
                >
                    <AlertIcon mb={2} />
                    THIS INFORMATION DOES NOT CONSTITUTE FINANCIAL ADVICE OR
                    RECOMMENDATION
                </Alert>
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
