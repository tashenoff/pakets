// src/components/Navigation.js
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MiniCart from './MiniCart';
import Image from "next/image";
import NProgress from 'nprogress'; // Импортируем библиотеку

const Navigation = () => {
    const router = useRouter();

    useEffect(() => {
        NProgress.configure({ showSpinner: false }); // Настройка без спиннера

        const handleStart = () => NProgress.start(); // Запуск индикатора
        const handleComplete = () => NProgress.done(); // Завершение индикатора

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <nav className="p-4">
            <div className='container'>
                <ul className="flex justify-between items-center w-full">
                    <div className='flex space-x-4 items-center'>
                        <Link href={'/'}>
                            <Image
                                className="light:invert"
                                src="/logo.svg"
                                alt="Next.js logo"
                                width={160}
                                height={38}
                                priority
                            />
                        </Link>
                    </div>
                    <div>
                        <li>
                            <MiniCart />
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
