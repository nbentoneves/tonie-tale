'use client';
import { Box, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Mailchimp from '@componentes/Mailchimp';
import NextImage from 'next/image';
import React from 'react';
import step1 from '../../images/step1.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';

const HowItWorksStep = ({
    image,
    heading,
    content,
}: Readonly<{
    image: React.ReactNode;
    heading: string;
    content: React.ReactNode;
}>) => {
    return (
        <Stack mt="6" textAlign="center" alignItems="center">
            {image}
            <Heading size="md">{heading}</Heading>
            <Text fontSize="sm">{content}</Text>
        </Stack>
    );
};

const Home = () => {
    return (
        <>
            <Box mt={[8, 8, 0]} mb={8} textAlign="center">
                <Text as="h1" fontSize="2xl" mb={5}>
                    <b>Welcome</b> to TonieTale, where imagination meets
                    storytelling!
                </Text>

                <Text>
                    Don’t miss out on the magic – sign up now and let’s create
                    unforgettable stories together! Enter your email below to
                    embark on this exciting journey:
                </Text>
                <Mailchimp />
            </Box>

            <Box>
                <Text as="h2" fontSize="2xl" textAlign="center">
                    How it Works
                </Text>

                <SimpleGrid columns={[1, 1, 3]} gap={17}>
                    <HowItWorksStep
                        image={
                            <NextImage
                                src={step1}
                                alt="Inspire the AI"
                                width={100}
                            />
                        }
                        heading="1. Inspire the AI"
                        content={
                            <>
                                Go to{' '}
                                <Link href="/create" color="red.700">
                                    Abracadabra, Story-dabra!
                                </Link>
                                . Choose key parameters like main character
                                name, target age group, and story theme to guide
                                the AI.
                            </>
                        }
                    />

                    <HowItWorksStep
                        image={
                            <NextImage
                                src={step2}
                                alt="Generate and Review"
                                width={100}
                            />
                        }
                        heading="2. Generate and Review"
                        content='Click "Abracadabra, Story-dabra" and let our AI work
                            its magic. Once complete, review the tale, listening
                            the mp3 file!'
                    />

                    <HowItWorksStep
                        image={
                            <NextImage
                                src={step3}
                                alt="Upload to Creative Tonie"
                                width={100}
                            />
                        }
                        heading="3. Upload to Creative Tonie"
                        content="You’re now ready to upload it to your Creative Tonie
                            and share the magic of storytelling with your little
                            ones!"
                    />
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Home;
