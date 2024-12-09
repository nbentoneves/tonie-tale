import { chakra, Link } from '@chakra-ui/react';

const DECORATION = {
    textDecoration: 'none',
    boxShadow: '0px 1px 2px 2px rgba(190, 190, 190, 0.5)',
    opacity: '0.85',
    color: '#FFFFFF',
};

const Button = chakra('a', {
    base: {
        lineHeight: 2,
        height: '5rem',
        textDecoration: 'none',
        display: 'inline-flex',
        color: '#FFFFFF',
        backgroundColor: ' #FF813F',
        borderRadius: '5px',
        border: '1px solid transparent',
        padding: '0.7rem 1rem 0.7rem 1rem',
        fontSize: '2rem',
        letterSpacing: '0.6px',
        boxShadow: '0px 1px 2px rgba(190, 190, 190, 0.5)',
        transition: '0.3s all linear',
        fontFamily: 'cursive',
        _hover: DECORATION,
        _active: DECORATION,
        _focus: DECORATION,
    },
});

const Image = chakra('img', {
    base: {
        height: '34px',
        width: '35px',
        marginBottom: '1px',
        boxShadow: 'none',
        border: 'none',
        verticalAlign: 'middle',
    },
});

const Text = chakra('span', {
    base: {
        marginLeft: '15px',
        fontSize: '2rem',
        verticalAlign: 'middle',
    },
});

const BuyMeCoffee = () => {
    return (
        <Link href="https://www.buymeacoffee.com/nbentoneves">
            {/* FIXME: This needs to be fixed in IOS */}
            <Image
                src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=nbentoneves&button_colour=D10E1D&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=ffffff"
                alt="By me a coffee"
                width={200}
                height={50}
            />
        </Link>
    );
};

export default BuyMeCoffee;
