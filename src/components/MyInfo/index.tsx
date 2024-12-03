'use client';
import { Image } from '@chakra-ui/next-js';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from '../../images/logo.png';
import { useState } from 'react';

const baseAnimationProps = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

const MyInfo = () => {
    const disclosureDrawer = useDisclosure({
        id: 'drawer',
    });

    return (
        <Flex
            as={motion.div}
            variants={baseAnimationProps}
            initial="hidden"
            animate="visible"
            alignItems="center"
            flexDirection="column"
            gap={6}
        >
            <Box width={[250, 300, 400]}>
                <Image src={logo} alt="logo" />
            </Box>

            <Box mt={[8, 8, 0]} textAlign="center">
                <Text as="h1" fontSize="2xl" mb={5}>
                    <b>Welcome</b> to the place where you can find tools to help
                    with your investments.
                </Text>
            </Box>
        </Flex>
    );
};

export default MyInfo;
