import { Box } from '@chakra-ui/react';
import { ColorModeButton } from '@componentes/ui/color-mode';

const ThemeToggle = () => {
    return (
        <Box marginRight={2} hidden>
            <ColorModeButton aria-label="theme toggle" />
        </Box>
    );
};

export default ThemeToggle;
