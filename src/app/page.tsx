import MyInfo from '@componentes/MyInfo';
import { Metadata } from 'next';
import { Seo } from '../utils/seo';

export const metadata: Metadata = Seo.homePage;

const HomePage = () => {
    return <MyInfo />;
};

export default HomePage;
