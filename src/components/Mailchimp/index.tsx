import { Flex, Input } from '@chakra-ui/react';
import { Button } from '@componentes/ui/button';
import { Field } from '@componentes/ui/field';
import { toaster } from '@componentes/ui/toaster';
import jsonp from 'jsonp';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type InputForm = {
    email: string;
};

const Mailchimp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>();

    const [isSubscriptionDisabled, setIsSubscriptionDisabled] =
        useState<boolean>(false);

    const onSubmit: SubmitHandler<InputForm> = (data) => {
        const url =
            'https://github.us11.list-manage.com/subscribe/post-json?u=9226449943d3d975da62d4561&amp;id=858bba42ef&amp;f_id=00f7c2e1f0';

        jsonp(`${url}&EMAIL=${data.email}`, { param: 'c' }, (err, response) => {
            if (err || response.result !== 'success') {
                toaster.create({
                    title: 'Something went wrong. Please contact the administrator!',
                    type: 'error',
                });
            } else {
                toaster.create({
                    title: 'Thank you for joining the TonieTales family!',
                    type: 'success',
                });
                setIsSubscriptionDisabled(true);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
                textAlign="center"
                alignItems="center"
                direction="column"
                mt="6"
            >
                <Field maxW="md">
                    <Input
                        type="email"
                        {...register('email')}
                        placeholder="Email"
                        disabled={isSubscriptionDisabled}
                    />
                </Field>

                <Button type="submit" mt="3" disabled={isSubscriptionDisabled}>
                    Subscribe
                </Button>
            </Flex>
        </form>
    );
};

export default Mailchimp;
