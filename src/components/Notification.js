import { useState, useEffect } from 'react';

const Notification = ({ message, onClose }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
                onClose(); // Закрыть уведомление через 3 секунды
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className='toast toast-center toast-middle z-50'>
            <div className="alert alert-success shadow-lg">
                <div className="flex justify-between w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 text-white size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <span className='text-white font-bold'>{message}</span>
                </div>
            </div>
        </div>
    );
};

export default Notification;
