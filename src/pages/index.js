import Banner from "../components/Banner";
import Advantages from "../components/Advantages";
import InstagramSection from "../components/InstagramSection";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Slider from '../components/Slider';
export default function Home() {
    const { t } = useTranslation('common'); // 'common' соответствует имени JSON-файла

    return (
        <>
            <Slider />
            <Advantages />
            <InstagramSection />
            <Banner
                backgroundImage="/footer.png"
                title={t('home_banner.title2')}
                description={t('home_banner.description2')}
                buttonText={t('home_banner.button2')}
                onButtonClick={() => alert(t('home_banner.button2'))}
            />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
