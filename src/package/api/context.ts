import globalAxios, { AxiosInstance } from 'axios';
import instance from './api-common';
import React from 'react';
import { Configuration, TalesControllerApiFactory } from './tonieTales';

export type Api = ReturnType<typeof createApi>;

export type CreateApiSources = {
    tonieTales: {
        config?: Configuration;
        uri: string;
    };
};

export const createApi = (
    sources: CreateApiSources,
    axios: AxiosInstance = instance,
) => {
    const { config: tonieTalesConfig, uri: tonieTalesUri } = sources.tonieTales;

    return {
        endpoints: {
            tonieTale: {
                ...TalesControllerApiFactory(
                    tonieTalesConfig,
                    tonieTalesUri,
                    axios,
                ),
            },
        },
        CancelToken: globalAxios.CancelToken,
    };
};

export const ApiContext = React.createContext<Api>({} as Api);
