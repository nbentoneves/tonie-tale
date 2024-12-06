'use client';
import {
    Box,
    createListCollection,
    Fieldset,
    Flex,
    IconButton,
    Input,
    Stack,
} from '@chakra-ui/react';
import { Button } from '@componentes/ui/button';
import { Field } from '@componentes/ui/field';
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@componentes/ui/select';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { RiDeleteBin5Fill as DeleteIcon } from 'react-icons/ri';

enum TargetAge {
    TODDLER = 'TODDLER', //1-2 years
    PRESCHOOLER = 'PRESCHOOLER', //3-5 years
    SCHOOLAGE = 'SCHOOLAGE', //6-12 years
}

enum Theme {
    FRIENDSHIP_TEAMWORK = 'FRIENDSHIP_TEAMWORK',
    COURAGE_BRAVERY = 'COURAGE_BRAVERY',
    KINDNESS_COMPASSION = 'KINDNESS_COMPASSION',
    IMAGINATION_CREATIVITY = 'IMAGINATION_CREATIVITY',
    EXPLORATION_DISCOVERY = 'EXPLORATION_DISCOVERY',
    FAMILY_BELONGING = 'FAMILY_BELONGING',
    OVERCOMING_CHALLENGES = 'OVERCOMING_CHALLENGES',
    MAGIC_WONDER = 'MAGIC_WONDER',
    RESPECT_NATURE = 'RESPECT_NATURE',
    LEARNING_LIFE_LESSONS = 'LEARNING_LIFE_LESSONS',
}

enum Duration {
    TWENTY_MIN = '20',
    SIXTY_MIN = '60',
    ONE_HUNDRED_TWENTY_MIN = '120',
}

type Character = {
    name: string;
    type: string;
};

type TaleInputs = {
    mainCharacter: string;
    email: string;
    targetAge: TargetAge;
    characters: Character[];
    duration: string;
    theme: Theme;
};

const taleThemes = createListCollection({
    items: [
        { label: 'Friendship and Teamwork', value: Theme.FRIENDSHIP_TEAMWORK },
        { label: 'Courage and Bravery', value: Theme.COURAGE_BRAVERY },
        { label: 'Kindness and Compassion', value: Theme.KINDNESS_COMPASSION },
        {
            label: 'Imagination and Creativity',
            value: Theme.IMAGINATION_CREATIVITY,
        },
        {
            label: 'Exploration and Discovery',
            value: Theme.EXPLORATION_DISCOVERY,
        },
        { label: 'Family and Belonging', value: Theme.FAMILY_BELONGING },
        { label: 'Overcoming Challenges', value: Theme.OVERCOMING_CHALLENGES },
        { label: 'Magic and Wonder', value: Theme.MAGIC_WONDER },
        { label: 'Respect for Nature', value: Theme.RESPECT_NATURE },
        {
            label: 'Learning Life Lessons ',
            value: Theme.LEARNING_LIFE_LESSONS,
        },
    ],
});

const ageTargets = createListCollection({
    items: [
        { label: 'Toddler (1-2 years old)', value: TargetAge.TODDLER },
        { label: 'Preschooler (3-5 years old)', value: TargetAge.PRESCHOOLER },
        { label: 'Schoolage (6-12 years old)', value: TargetAge.SCHOOLAGE },
    ],
});

const durations = createListCollection({
    items: [
        { label: '20 min', value: Duration.TWENTY_MIN },
        { label: '60 min', value: Duration.SIXTY_MIN },
        { label: '120 min', value: Duration.ONE_HUNDRED_TWENTY_MIN },
    ],
});

const TalesCreate = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<TaleInputs>();

    const {
        fields: characters,
        append: addCharacters,
        remove: deleteCharacters,
    } = useFieldArray<TaleInputs>({
        control,
        name: 'characters', // unique name for your Field Array
    });

    const onSubmit: SubmitHandler<TaleInputs> = (data) => console.log(data);

    return (
        <Fieldset.Root size="lg" maxW="lvh">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <Fieldset.Legend>Build a magic tale:</Fieldset.Legend>
                    <Fieldset.HelperText>
                        Fill out the form below to create your personalized
                        tale! Simply provide key details like the main
                        character’s name, theme and special character's you'd
                        like included. Our tool will use this information to
                        craft a unique and engaging story tailored to your
                        input. It’s quick, easy, and fun—start building your
                        tale now!
                    </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content mt="6">
                    <Field label="Main Character's name">
                        <Input {...register('mainCharacter')} />
                    </Field>

                    <SelectRoot
                        collection={durations}
                        {...register('duration')}
                    >
                        <SelectLabel>Duration when read aloud</SelectLabel>
                        <SelectTrigger>
                            <SelectValueText placeholder="Select a duration" />
                        </SelectTrigger>
                        <SelectContent>
                            {durations.items.map((duration) => (
                                <SelectItem
                                    item={duration}
                                    key={duration.value}
                                >
                                    {duration.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>

                    <SelectRoot
                        collection={ageTargets}
                        {...register('targetAge')}
                    >
                        <SelectLabel>Target age</SelectLabel>
                        <SelectTrigger>
                            <SelectValueText placeholder="Select a target age" />
                        </SelectTrigger>
                        <SelectContent>
                            {ageTargets.items.map((ageTarget) => (
                                <SelectItem
                                    item={ageTarget}
                                    key={ageTarget.value}
                                >
                                    {ageTarget.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>

                    <Flex>
                        <Button
                            onClick={() =>
                                addCharacters({ name: '', type: '' })
                            }
                        >
                            Add caracter
                        </Button>
                    </Flex>

                    <Box>
                        {characters.map((character, index) => {
                            const characterNumber = index + 1;

                            return (
                                <Flex
                                    key={`${character.id}-${character.name}-${character.type} `}
                                    flexDirection="row"
                                    alignItems="center"
                                    gap="2"
                                    mt="2"
                                >
                                    <Field
                                        label={`${characterNumber} Character`}
                                        helperText="Peter"
                                    >
                                        <Input
                                            {...register(
                                                `characters.${index}.name`,
                                            )}
                                        />
                                    </Field>
                                    <Field label="Type" helperText="Rabbit">
                                        <Input
                                            {...register(
                                                `characters.${index}.type`,
                                            )}
                                        />
                                    </Field>
                                    <IconButton
                                        aria-label="Delete character"
                                        onClick={() => deleteCharacters(index)}
                                        mt="1"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Flex>
                            );
                        })}
                    </Box>

                    <SelectRoot collection={taleThemes} {...register('theme')}>
                        <SelectLabel>Theme</SelectLabel>
                        <SelectTrigger>
                            <SelectValueText placeholder="Select a tale theme" />
                        </SelectTrigger>
                        <SelectContent>
                            {taleThemes.items.map((theme) => (
                                <SelectItem item={theme} key={theme.value}>
                                    {theme.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>

                    <Field label="Email address">
                        <Input type="email" {...register('email')} />
                    </Field>
                </Fieldset.Content>

                <Button type="submit" alignSelf="flex-start" mt="10">
                    Submit
                </Button>
            </form>
        </Fieldset.Root>
    );
};

export default TalesCreate;
