import { Flex, Link, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import NextLink from 'next/link';
import BuyMeCoffee from '../BuyMeCoffee';
import { maxWidthProps } from './styles/customTheme';
import getConfig from 'next/config';

const year = DateTime.now().year;

const Footer = () => {
    return (
        <Flex
            {...maxWidthProps}
            as="footer"
            wrap="wrap"
            textAlign={['center', 'center', 'inherit']}
            width="full"
            align="center"
        >
            <Text flexBasis={['100%', '100%', '50%']}>
                {year} -{' '}
                <Link
                    href="/"
                    as={NextLink}
                    fontWeight={500}
                >
                    TonieTales
                </Link>
            </Text>

            <Flex
                marginY={2}
                flexBasis={['100%', '100%', '50%']}
                marginLeft="auto"
                justifyContent={['center', 'center', 'end']}
            >
                <BuyMeCoffee />
            </Flex>
        </Flex>
    );
};

export default Footer;
