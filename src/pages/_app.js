import '../globals.css'; // Путь к вашему стилевому файлу
import { appWithTranslation } from 'next-i18next';
// import i18n from '../../lib/i18n'; // Импорт инициализации i18next
import Navigation from '../components/Navigation'; // Импортируем компонент навигации
import NavbarMini from '../components/NabarMini';
import { CartProvider } from '../../context/CartContext';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"
import YandexMetrika from '../components/YandexMetrika';
function MyApp({ Component, pageProps }) {
    return (

        <div>

            <Analytics />
            <CartProvider>
                <NavbarMini />
                <Navigation /> {/* Отображаем компонент навигации */}



                <Component {...pageProps} />
                <YandexMetrika />
                <Footer />
            </CartProvider>
        </div>

    );
}


export default appWithTranslation(MyApp); // Оборачиваем приложение в поддержку переводов
