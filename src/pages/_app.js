import { useEffect } from 'react';
import '../globals.css'; // Путь к вашему стилевому файлу
import { appWithTranslation } from 'next-i18next';
import Navigation from '../components/Navigation'; // Импортируем компонент навигации
import NavbarMini from '../components/NabarMini';
import { CartProvider } from '../../context/CartContext';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []); // Добавление класса dark при загрузке компонента

    return (
        <CartProvider>
            <NavbarMini />
            <Navigation /> {/* Отображаем компонент навигации */}
            <Component {...pageProps} />
            <Footer />
        </CartProvider>
    );
}

export default appWithTranslation(MyApp); // Оборачиваем приложение в поддержку переводов
