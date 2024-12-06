import { Metadata } from 'next';
import { Seo } from '../../utils/seo';
import TalesCreate from '@componentes/Tales/Create';

export const metadata: Metadata = Seo.createTalesPage;

const CreateTalesPage = () => {
    return <TalesCreate />;
};

export default CreateTalesPage;
