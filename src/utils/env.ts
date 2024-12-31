export const Env = {
    isDevelopment: process.env.NODE_ENV === 'development',
    uriApi:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:8080'
            : 'https://api.tonietale.com',
    uri:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://tonietale.com/',
};
