import { ApiContext } from '@package/api/context';
import { TaleInfo } from '@package/api/tonieTales';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';

const useGenerateTale = () => {
    const { endpoints } = useContext(ApiContext);

    const {
        data: tale,
        isSuccess,
        isError,
        mutate: generateTale,
    } = useMutation({
        mutationKey: ['generateTale'],
        mutationFn: (request: TaleInfo) =>
            endpoints.tonieTale.createNewTale(request),
    });

    return {
        generateTale,
        status: {
            isSuccess,
            isError,
        },
        tale,
    };
};

export default useGenerateTale;
