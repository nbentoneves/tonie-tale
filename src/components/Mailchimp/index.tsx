import { Flex, Input } from '@chakra-ui/react';
import { Button } from '@componentes/ui/button';
import { Field } from '@componentes/ui/field';
import { toaster } from '@componentes/ui/toaster';
import useMailchimp from '@hooks/useMailchimp';
import jsonp from 'jsonp';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type InputForm = {
    email: string;
};

const Mailchimp = () => {
    const { register, handleSubmit } = useForm<InputForm>();

    const { subscribe } = useMailchimp();

    const [isSubscriptionDisabled, setIsSubscriptionDisabled] =
        useState<boolean>(false);

    const onSubmit: SubmitHandler<InputForm> = async (data) => {
        const isValid = await subscribe(data.email);

        if (isValid) {
            setIsSubscriptionDisabled(true);
        }
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
