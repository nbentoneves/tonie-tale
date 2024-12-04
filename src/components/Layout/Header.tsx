import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import logo from '../../images/logo-no-background.png';
import { maxWidthProps } from './styles/customTheme';
import NextImage from 'next/image';

import AppMenu from './AppMenu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <Flex {...maxWidthProps} width="full" align="center">
            {/* 
            TODO: Implement this later
            <Box
                position="absolute"
                inset="0px"
                zIndex={-1}
                width="100%"
                border="1px solid red"
            >
                <HeaderSvg />
            </Box> 
            */}

            <Box width={[100, 300, 400]}>
                <Link href="/">
                    <Image asChild alt="TonieTales">
                        <NextImage src={logo} alt="logo" width={200} />
                    </Image>
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
