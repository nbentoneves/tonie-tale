import { Metadata } from 'next';
import { Seo } from '../../utils/seo';
import HowToUploadTales from '@componentes/Static/HowToUploadTales';

export const metadata: Metadata = Seo.howToUpload;

const HowToUploadPage = () => {
    return <HowToUploadTales />;
};

export default HowToUploadPage;
