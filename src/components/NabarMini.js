// src/components/NavbarMini.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import LanguageSwitcher from './LanguageSwitcher';
import Button from './Button';

const handleWhatsAppClick = () => {
    const whatsappNumber = "+77017896556"; // Замените на нужный номер
    window.location.href = `https://wa.me/${whatsappNumber}`;
};

const NavbarMini = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

    return (
        <nav
            className={`${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-base-300 shadow-md' : 'bg-base-300'
                } px-5 py-4 transition-all duration-300`}
        >
            <div className='flex justify-between items-center w-full'>
                {/* Hamburger Menu for Mobile */}
                <div className='lg:hidden flex justify-between w-full items-center'>
                    <button
                        onClick={toggleMenu}
                        className='p-2 rounded-md hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-base-100'
                    >
                        {isMenuOpen ? (
                            <span className='block w-6 h-6 bg-gray-600'>✖</span>
                        ) : (
                            <span className='block w-6 h-6 bg-gray-600'>☰</span>
                        )}
                    </button>

                    <span>8(701)789-65-56</span>

                    <Button
                        label="Написать в WhatsApp"
                        onClick={handleWhatsAppClick}
                        variant="success"
                        size="sm"
                    />


                </div>

                {/* Navigation Links (Hidden on Mobile) */}
                <ul className='hidden lg:flex space-x-5'>
                    <li>
                        <Link href='/'>Главная</Link>
                    </li>
                    <li>
                        <Link href='/catalog'>Каталог</Link>
                    </li>
                    <li>
                        <Link href='/about'>О нас</Link>
                    </li>
                    <li>
                        <Link href='/packz'>Пакеты под заказ</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Контакты</Link>
                    </li>
                </ul>

                {/* Right Section */}
                <div className='hidden lg:flex items-center space-x-5'>
                    <span>По всем вопросам: 8(701)789-65-56</span>
                    <div className='mr-2'>
                    <Button
                        label="Написать в WhatsApp"
                        onClick={handleWhatsAppClick}
                        variant="success"
                        size="sm"
                    />
                    </div>
                    {/* <LanguageSwitcher /> */}
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <div className='mt-4 space-y-3 lg:hidden'>
                    <ul className='flex flex-col space-y-3'>
                        <li>
                            <Link href='/catalog'>Каталог</Link>
                        </li>
                        <li>
                            <Link href='/about'>О нас</Link>
                        </li>
                        <li>
                            <Link href='/packz'>Пакеты под заказ</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Контакты</Link>
                        </li>
                    </ul>
                    <div className='mt-3 flex flex-col space-y-3'>

                        {/* <LanguageSwitcher /> */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarMini;
