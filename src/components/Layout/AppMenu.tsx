import {
    Box,
    Flex,
    Heading,
    Icon,
    IconButton,
    Link,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { Button } from '@componentes/ui/button';
import { useColorMode } from '@componentes/ui/color-mode';
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTrigger,
} from '@componentes/ui/drawer';
import { BiMenu } from 'react-icons/bi';

const AppMenu = () => {
    const { onClose, onOpen, open } = useDisclosure();
    const { colorMode } = useColorMode();

    return (
        <>
            <DrawerRoot
                open={open}
                onOpenChange={(e) => (e.open ? onOpen() : onClose())}
            >
                <DrawerBackdrop />

                <DrawerTrigger asChild>
                    <IconButton
                        marginLeft={2}
                        aria-label="app-menu"
                        background="none"
                    >
                        <BiMenu color='black' />
                    </IconButton>
                </DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader>
                        <Text as="h1" fontSize="x-large">
                            Welcome to Tonietales
                        </Text>
                    </DrawerHeader>
                    <DrawerBody>
                        <Link
                            href="/about"
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
                                <Box marginLeft={4}>
                                    <Heading size="sm">About us</Heading>
                                    <Text fontSize="xs">
                                        Helps you to know the cost of an ETF
                                    </Text>
                                </Box>
                            </Flex>
                        </Link>
                    </DrawerBody>
                    <DrawerFooter>
                        <DrawerActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerActionTrigger>
                        <Button>Save</Button>
                    </DrawerFooter>
                    <DrawerCloseTrigger />
                </DrawerContent>
            </DrawerRoot>
        </>
    );
};

export default AppMenu;
