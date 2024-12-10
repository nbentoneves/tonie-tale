import { FriendshipTeamworkTales } from './tales/friendship-teamwork-tales';
import { CourageBravery } from './tales/courage-bravery';
import { KindnessCompassion } from './tales/kindness-compassion';

const BLOB_OUTPUT_TYPE = 'text/plain';
const FILE_OUTPUT_NAME = 'tale.txt';

const TALES_MAP = [
    //FRIENDSHIP_TEAMWORK
    {
        key: 'TODDLER-FRIENDSHIP_TEAMWORK',
        tale: FriendshipTeamworkTales.TALE_01,
    },
    {
        key: 'PRESCHOOLER-FRIENDSHIP_TEAMWORK',
        tale: FriendshipTeamworkTales.TALE_02,
    },
    {
        key: 'SCHOOLAGE-FRIENDSHIP_TEAMWORK',
        tale: FriendshipTeamworkTales.TALE_03,
    },

    //COURAGE_BRAVERY
    {
        key: 'TODDLER-COURAGE_BRAVERY',
        tale: CourageBravery.TALE_01,
    },
    {
        key: 'PRESCHOOLER-COURAGE_BRAVERY',
        tale: CourageBravery.TALE_02,
    },
    {
        key: 'SCHOOLAGE-COURAGE_BRAVERY',
        tale: CourageBravery.TALE_03,
    },

    //KINDNESS_COMPASSION
    {
        key: 'TODDLER-KINDNESS_COMPASSION',
        tale: KindnessCompassion.TALE_01,
    },
    {
        key: 'PRESCHOOLER-KINDNESS_COMPASSION',
        tale: KindnessCompassion.TALE_02,
    },
    {
        key: 'SCHOOLAGE-KINDNESS_COMPASSION',
        tale: KindnessCompassion.TALE_03,
    },
];

const processFileContents = (contents: string, mainCharacter: string) => {
    // Replace the string
    const updatedContents = contents.replace(/XZY/g, mainCharacter);

    // Optionally, create a new file with the changes
    const blob = new Blob([updatedContents], { type: BLOB_OUTPUT_TYPE });
    const url = URL.createObjectURL(blob);

    // Create a download link for the modified file
    const a = document.createElement('a');
    a.href = url;
    a.download = FILE_OUTPUT_NAME;
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
};

export const Tales = {
    TALES_MAP,
    processFileContents,
};
