
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Thanks() {

    return (
        <>

            <p>спасибо</p>
          
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



