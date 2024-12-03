export const Env = {
    isDevelopment: process.env.NODE_ENV === 'development',
    uri:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://mymarketinfo-web-7a7b3c83dc1d.herokuapp.com',
};
