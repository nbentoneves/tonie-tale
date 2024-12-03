import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    Icon,
    IconButton,
    Link,
    Text,
    useColorMode,
    useDisclosure,
    useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { BiMenu, BiSolidBookBookmark } from 'react-icons/bi';
import { BsCalculator } from 'react-icons/bs';

const AppMenu = () => {
    const { onClose, onOpen, isOpen } = useDisclosure({
        id: 'drawer',
    });
    const { colorMode } = useColorMode();

    const [isBiggerThanMobile] = useMediaQuery('(min-width: 480px)');

    return (
        <>
            <IconButton
                marginLeft={2}
                icon={<BiMenu />}
                aria-label="app-menu"
                background="none"
                onClick={onOpen}
            />
            <Drawer
                placement={isBiggerThanMobile ? 'right' : 'top'}
                isOpen={isOpen}
                onClose={onClose}
            >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerHeader>
                        <Heading size="xs">
                            Welcome to mymarketinfo.co.uk
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody>
                        <Link
                            href="/etf/calculator"
                            as={NextLink}
                            _hover={{ textDecoration: 'none' }}
                            onClick={onClose}
                        >
                            <Flex
                                marginY={4}
                                alignItems="center"
                                padding={2}
                                borderRadius={12}
                                _hover={{
                                    backgroundColor:
                                        colorMode === 'light'
                                            ? 'gray.200'
                                            : 'gray.600',
                                }}
                            >
                                <Icon as={BsCalculator} />
                                <Box marginLeft={4}>
                                    <Heading size="sm">ETF Calculator</Heading>
                                    <Text fontSize="xs">
                                        Helps you to know the cost of an ETF
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>

                        <Link
                            href="/etf/multi-calculator"
                            as={NextLink}
                            _hover={{ textDecoration: 'none' }}
                            onClick={onClose}
                        >
                            <Flex
                                marginY={4}
                                alignItems="center"
                                padding={2}
                                borderRadius={12}
                                _hover={{
                                    backgroundColor:
                                        colorMode === 'light'
                                            ? 'gray.200'
                                            : 'gray.600',
                                }}
                            >
                                <Icon as={BsCalculator} />
                                <Box marginLeft={4}>
                                    <Heading size="sm">Multi ETF Calculator</Heading>
                                    <Text fontSize="xs">
                                        Cost of multiple ETFs
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>

                        <Link
                            hidden
                            href="/blog"
                            as={NextLink}
                            _hover={{ textDecoration: 'none' }}
                            onClick={onClose}
                        >
                            <Flex
                                marginY={4}
                                alignItems="center"
                                padding={2}
                                borderRadius={12}
                                _hover={{
                                    backgroundColor:
                                        colorMode === 'light'
                                            ? 'gray.200'
                                            : 'gray.600',
                                }}
                            >
                                <Icon as={BiSolidBookBookmark} />
                                <Box marginLeft={4}>
                                    <Heading size="sm">Blog</Heading>
                                    <Text fontSize="xs">
                                        Read about my journey
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default AppMenu;
