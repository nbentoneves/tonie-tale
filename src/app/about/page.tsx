import { Metadata } from 'next';
import { Seo } from '../../utils/seo';
import AboutUs from '@componentes/Static/About';

export const metadata: Metadata = Seo.aboutPage;

const AboutPage = () => {
    return <AboutUs />;
};

export default AboutPage;
