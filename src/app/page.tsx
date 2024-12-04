import { Metadata } from 'next';
import { Seo } from '../utils/seo';
import Home from '@componentes/Home';

export const metadata: Metadata = Seo.homePage;

const HomePage = () => {
    return <Home />;
};

export default HomePage;
