'use client';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const { push } = useRouter();

    return (
        <Box textAlign="center">
            <Heading as="h1">Whoops! Something&apos;s changed</Heading>
            <Text mt={5}>
                Before continuing about your day. enjoy a deep breath on us.
            </Text>
            <Text>Ready? Big inhale. And exhale.</Text>
            <Button mt={6} onClick={() => push('/')} colorScheme="yellow">
                Return Home
            </Button>
        </Box>
    );
};

export default NotFound;
