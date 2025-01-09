import { toaster } from '@componentes/ui/toaster';
import jsonp from 'jsonp';

const useMailchimp = () => {
    const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_ADDRESS;

    const subscribe = (email: string): Promise<boolean> => {
        return new Promise((resolve) =>
            jsonp(
                `${MAILCHIMP_URL}&EMAIL=${email}`,
                { param: 'c' },
                (err, response) => {
                    if (err || response.result !== 'success') {
                        toaster.create({
                            title: 'Something went wrong. Please contact the administrator!',
                            type: 'error',
                            duration: 3600,
                        });

                        resolve(false);
                    } else {
                        toaster.create({
                            title: 'Thank you for joining the TonieTale family!',
                            type: 'success',
                            duration: 3600,
                        });

                        resolve(true);
                    }
                },
            ),
        );
    };

    return {
        subscribe,
    };
};

export default useMailchimp;
