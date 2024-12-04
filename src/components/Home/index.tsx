'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
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
                    <b>Welcome</b> to the place where you can find tools to help
                    with your investments.
                </Text>
            </Box>
        </MotionFlex>
    );
};

export default Home;
