import { Flex, Input } from '@chakra-ui/react';
import { Button } from '@componentes/ui/button';
import { Field } from '@componentes/ui/field';
import useMailchimp from '@hooks/useMailchimp';
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
                <Field
                    maxW="md"
                    errorText="Please provide an email address!"
                    invalid={!!errors.email}
                >
                    <Input
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Email"
                        disabled={isSubscriptionDisabled}
                    />
                </Field>

                <Button
                    type="submit"
                    mt="3"
                    disabled={isSubscriptionDisabled}
                    bgColor="red.600"
                    _hover={{ bgColor: 'red.700' }}
                >
                    Subscribe
                </Button>
            </Flex>
        </form>
    );
};

export default Mailchimp;
