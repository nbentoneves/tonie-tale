export const Env = {
    base: process.env.NODE_ENV === 'development' ? "" : "/tonie-tales",
    isDevelopment: process.env.NODE_ENV === 'development',
    uri:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://nbentoneves.github.io/tonie-tales',
};
