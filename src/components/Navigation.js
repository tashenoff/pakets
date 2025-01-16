// src/components/Navigation.js
import Link from 'next/link';
import MiniCart from './MiniCart'; // Импортируем компонент мини корзины
import Image from "next/image";

const Navigation = () => {
    return (
        <nav className="p-4">
            <div className='container'>
                <ul className="flex justify-between items-center w-full">
                    <div className='flex space-x-4 items-center '>

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
