'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import Mailchimp from '@componentes/Mailchimp';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

const baseAnimationProps = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

const Home = () => {
    return (
        <MotionFlex
            as={motion.div}
            variants={baseAnimationProps}
            initial="hidden"
            animate="visible"
            alignItems="center"
            flexDirection="column"
            gap={6}
        >
            <Box mt={[8, 8, 0]} textAlign="center">
                <Text as="h1" fontSize="2xl" mb={5}>
                    <b>Welcome</b> this place is under construction! See you
                    soon :)
                </Text>

                <Text>
                    Don’t miss out on the magic – sign up now and let’s create
                    unforgettable stories together! Enter your email below to
                    embark on this exciting journey:
                </Text>
                <Mailchimp />
            </Box>
        </MotionFlex>
    );
};

export default Home;
