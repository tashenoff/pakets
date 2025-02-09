import { useCart } from '../../context/CartContext';
import { useTranslation } from 'next-i18next';
import CartDropdown from './CartDropdown';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Импортируем иконку корзины

const MiniCart = () => {
    const { cart } = useCart(); // Получаем корзину из контекста
    const { t } = useTranslation('common');
    const [drawerOpen, setDrawerOpen] = useState(false); // Состояние для Drawer
    const [isClient, setIsClient] = useState(false);

    // Проверка на клиента
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    if (!cart) {
        return <div>{t('miniCart.empty')}</div>;
    }

    // Подсчёт общего количества и стоимости
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className="relative">
            <div className="drawer drawer-end">
                <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={drawerOpen}
                    onChange={toggleDrawer}
                />
                <div className="drawer-content">
                    <button
                        onClick={toggleDrawer}
                        className="flex items-center p-2  rounded-full"
                    >
                        <span className="mr-2 bg-blue-500 rounded-full p-2 text-white">
                            <FaShoppingCart size={14} />
                        </span>
                        <div className="flex flex-col text-left">
                            <span className="text-lg text-blue-500 font-semibold">Ваша корзина</span>
                            <span className="text-xs">товары: {totalItems}</span>
                            <span className="text-xs">Итог: {totalPrice} ₸</span>
                        </div>
                    </button>
                </div>
                <div className="drawer-side z-50">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <CartDropdown cart={cart} t={t} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniCart;
