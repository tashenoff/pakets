import Banner from "../components/Banner";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProductInfo from "../components/ProductInfo";
export default function Packz() {
 
    return (
        <>
            <Banner
                backgroundImage="/home.png"
                title='Пакеты под заказ'

            />

            <ProductInfo />

 

            <Banner
                backgroundImage="/footer.png"
                title='Заказать консультацию'
              
                buttonText='связаться с нами'
                onButtonClick={() => alert('home_banner.button2')}
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



