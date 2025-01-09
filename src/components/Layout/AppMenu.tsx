import {
    Box,
    Flex,
    Heading,
    IconButton,
    Link,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { Button } from '@componentes/ui/button';
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
import { BiMenu as MenuIcon } from 'react-icons/bi';
import { Routes } from '../../utils/routes';

const AppMenu = () => {
    const { onClose, onOpen, open } = useDisclosure();

    return (
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
                    <MenuIcon color="black" />
                </IconButton>
            </DrawerTrigger>

            <DrawerContent>
                <DrawerHeader>
                    <Text as="h1" fontSize="large">
                        Welcome to Tonietale
                    </Text>
                </DrawerHeader>
                <DrawerBody>
                    {Routes.pages.map((page) => {
                        return (
                            <Link
                                key={page.href}
                                href={page.href}
                                textDecoration="none"
                                outline="none"
                                onClick={onClose}
                            >
                                <Flex
                                    marginY={4}
                                    alignItems="center"
                                    padding={2}
                                >
                                    <Box marginLeft={4}>
                                        <Heading size="sm">{page.name}</Heading>
                                        <Text fontSize="xs">
                                            {page.description}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Link>
                        );
                    })}
                </DrawerBody>
                <DrawerFooter>
                    <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    );
};

export default AppMenu;
