import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from './Button';
import { FaHome, FaBook, FaInfoCircle, FaBox, FaPhoneAlt } from 'react-icons/fa'; // Импортируем иконки


const handleWhatsAppClick = () => {
    const whatsappNumber = "+77070402121"; // Замените на нужный номер
    window.location.href = `https://wa.me/${whatsappNumber}`;
};

const NavbarMini = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const menuRef = useRef(null); // Реф для мобильного меню
    const buttonRef = useRef(null); // Реф для кнопки крестика/гамбургера

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                closeMenu(); // Закрыть меню, если клик вне меню и кнопки
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = [
        { label: 'Главная', href: '/', icon: <FaHome size={20} /> },
        { label: 'Каталог', href: '/catalog', icon: <FaBook size={20} /> },
        { label: 'Пакеты под заказ', href: '/packz', icon: <FaBox size={20} /> },
        { label: 'О нас', href: '/about', icon: <FaInfoCircle size={20} /> }, // Переместил перед "Контакты"
        { label: 'Контакты', href: '/contact', icon: <FaPhoneAlt size={20} /> },
    ];


    return (
        <nav
            className={`${isFixed
                ? 'sticky h-[70px] top-0 left-0 w-full z-50 bg-animated-gradient text-white shadow-md'
                : 'bg-animated-gradient lg:h-[70px] text-white'
                } px-5 py-4 transition-all duration-300`}
        >
            <div className='container'>
                <div className='flex justify-between items-center w-full'>
                    {/* Hamburger Menu for Mobile */}
                    <div className='lg:hidden flex justify-between w-full items-center'>
                        <button
                            ref={buttonRef}
                            onClick={toggleMenu}
                            className='p-2 rounded-md focus:outline-none focus:ring-2'
                        >
                            {isMenuOpen ? (
                                <span className='block w-6 h-6'>✖</span>
                            ) : (
                                <span className='block w-6 h-6'>☰</span>
                            )}
                        </button>

                        <span className='text-sm'>+7(707)0402121</span>

                        <Button
                            label="написать в WhatsApp"
                            onClick={handleWhatsAppClick}
                            variant="accent"
                            size="sm"
                        />
                    </div>

                    {/* Navigation Links (Hidden on Mobile) */}
                    <ul className='hidden uppercase text-[12px] font-bold lg:flex items-center space-x-5'>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                {item.label === 'Каталог' ? (
                                    <Link href={item.href} className="relative inline-flex items-center px-4  border-white border rounded-full   font-bold group">
                                        {/* Иконка только у "Каталога" */}
                                        <span className="mr-1 text-white">{item.icon}</span>
                                        {/* Текст с анимацией обводки */}
                                        <span className="absolute inset-0 border-2 border-transparent rounded-md"></span>
                                        <span className="relative z-10 px-2 py-2 rounded-md ">
                                            {item.label}
                                        </span>
                                    </Link>
                                ) : (
                                    <Link href={item.href}>{item.label}</Link> // Остальные пункты без иконок
                                )}
                            </li>
                        ))}
                    </ul>



                    {/* Right Section */}
                    <div className='hidden lg:flex items-center space-x-5'>
                        <span>+7(707)040-21-21</span>
                        <div className='mr-2'>
                            <Button
                                label="Написать в WhatsApp"
                                onClick={handleWhatsAppClick}
                                variant="accent"
                                size="sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Dropdown Menu for Mobile */}
                {isMenuOpen && (
                    <div ref={menuRef} className='mt-4 space-y-3 lg:hidden'>
                        <ul className='flex flex-col space-y-3'>
                            {menuItems.map((item) => (
                                <li
                                    key={item.href}
                                    className='flex items-center border-b border-white/20 space-x-3'
                                >
                                    <span className='text-lg'>{item.icon}</span>
                                    <Link href={item.href} onClick={closeMenu}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavbarMini;
