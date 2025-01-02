export const Env = {
    isDevelopment: process.env.NODE_ENV === 'development',
    uriApi: process.env.NEXT_PUBLIC_TONIE_TALE_API,
    uri:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://tonietale.com/',
};
