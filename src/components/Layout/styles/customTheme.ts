import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                body: { value: 'Comic Sans MS, sans-serif' },
                heading: { value: 'Comic Sans MS, sans-serif' },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);

export const maxWidthProps = {
    margin: '0 auto',
    maxWidth: 800,
    padding: 10,
};
