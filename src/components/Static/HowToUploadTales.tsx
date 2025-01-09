import {
    AspectRatio,
    Heading,
    Icon,
    List,
    SimpleGrid,
    Stack,
} from '@chakra-ui/react';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from '@componentes/ui/accordion';
import { IoIosAppstore, IoLogoAndroid, IoLogoChrome } from 'react-icons/io';

const StepList = ({
    children,
}: Readonly<{
    children: string;
}>) => {
    return (
        <List.Item p="1" fontSize="sm">
            {children}
        </List.Item>
    );
};

const items = [
    {
        value: 'ios',
        icon: <IoIosAppstore />,
        title: 'iOS (iPhone/iPad)',
        content: (
            <List.Root as="ol">
                <StepList>Open the mytonies app on your device.</StepList>
                <StepList>
                    Tap the “Collection” icon in the bottom right corner.
                </StepList>
                <StepList>Select the “Creative-Tonies” header.</StepList>
                <StepList>
                    Tap on the picture of the Creative-Tonie you want to upload
                    content to.
                </StepList>
                <StepList>
                    Tap the tonie/arrow icon on the right side of the screen.
                </StepList>
                <StepList>
                    Tap the tonie/arrow icon on the right side of the screen.
                </StepList>
                <StepList>
                    Press the “Upload a new file” button at the bottom of the
                    “Assign content” screen.
                </StepList>
                <StepList>
                    Navigate to the location where your MP3 files are stored in
                    the Files app.
                </StepList>
                <StepList>
                    Select the MP3 file(s) you wish to upload and tap “Open”.
                </StepList>
                <StepList>
                    Once the upload is complete, tap the red “Done” button in
                    the top-right corner
                </StepList>
            </List.Root>
        ),
    },
    {
        value: 'android',
        icon: <IoLogoAndroid />,
        title: 'Android',
        content: (
            <List.Root as="ol">
                <StepList>Open the mytonies app on your device.</StepList>
                <StepList>
                    Tap the “Collection” icon in the bottom right corner.
                </StepList>
                <StepList>Select the “Creative-Tonies” header.</StepList>
                <StepList>
                    Tap on the picture of the Creative-Tonie you want to upload
                    content to.
                </StepList>
                <StepList>
                    Tap the tonie/arrow icon on the right side of the screen.
                </StepList>
                <StepList>
                    Press the “Upload a new file” button at the bottom of the
                    “Assign content” screen.
                </StepList>
                <StepList>
                    Tap “My Files” to access your device’s internal storage.
                </StepList>
                <StepList>
                    Navigate to the folder containing your MP3 files (e.g.,
                    “Music” folder).
                </StepList>
                <StepList>
                    Select the MP3 file(s) you wish to upload by tapping the
                    circles next to the file names.
                </StepList>
                <StepList>
                    Tap “Done” at the bottom of the screen to start the upload.
                </StepList>
                <StepList>
                    Once the upload is complete, tap the red “Done” button in
                    the top-right corner
                </StepList>
            </List.Root>
        ),
    },
    {
        value: 'computer',
        icon: <IoLogoChrome />,
        title: 'Desktop (my.tonies.com)',
        content: (
            <List.Root as="ol">
                <StepList>
                    Go to my.tonies.com and log in to your account.
                </StepList>
                <StepList>Click on “Creative-Tonies” in the menu.</StepList>
                <StepList>
                    Select the Creative-Tonie you want to upload content to.
                </StepList>
                <StepList>
                    Click the tonie/arrow icon on the right side of the screen.
                </StepList>
                <StepList>Click the “Upload” button.</StepList>
                <StepList>
                    Either drag and drop your MP3 files into the designated area
                    or click “Browse Files” to select them from your computer.
                </StepList>
                <StepList>
                    Once you’ve chosen your files, click “Save Content” to
                    upload them to your Creative-Tonie
                </StepList>
            </List.Root>
        ),
    },
];

const HowToUploadTales = () => {
    return (
        <SimpleGrid columns={[1, 1, 2]} gap={10}>
            <Stack>
                <Heading size="md">
                    How To Upload Tales into Creative Tonies
                </Heading>
                <AccordionRoot collapsible defaultValue={['info']}>
                    {items.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionItemTrigger>
                                <Icon fontSize="lg" color="fg.subtle">
                                    {item.icon}
                                </Icon>
                                {item.title}
                            </AccordionItemTrigger>
                            <AccordionItemContent p="3">
                                {item.content}
                            </AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
            </Stack>
            <AspectRatio ratio={1}>
                <iframe
                    title="How to setup creative tonies"
                    src="https://www.youtube.com/embed/X7YtYX7jujs?si=JqsDd9KDVGTM4OMd"
                    allowFullScreen
                />
            </AspectRatio>
        </SimpleGrid>
    );
};

export default HowToUploadTales;
