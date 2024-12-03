import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import { maxWidthProps } from './styles/customTheme';

import AppMenu from './AppMenu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <Flex {...maxWidthProps} width="full" align="center">
            <Box>
                <Link href="/">
                    <Box flexBasis="100%">
                        <Heading fontSize={['2xl', '3xl']}>
                            My Market Info
                            <br />
                            .co.uk
                        </Heading>
                    </Box>
                </Link>
            </Box>

            <Flex marginLeft="auto">
                <ThemeToggle />
                <AppMenu />
            </Flex>
        </Flex>
    );
};

export default Header;
