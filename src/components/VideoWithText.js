import React from 'react';

const VideoWithText = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid lg:grid-cols-12 gap-6 p-6">
                {/* Видео слева */}
                <div className="lg:col-span-4">
                    <video
                        className="lg:w-[400px] w-full h-[500px]"
                        controls
                        src="/paket.mp4"
                        alt="Video"
                    />
                </div>

                {/* Текст справа */}
                <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
                    <h2 className="text-2xl text-blue-500 font-bold uppercase">Опытные специалисты, которые всегда готовы помочь вам выбрать только качественный продукт</h2>
                    <p>Каждый отвечает за свою зону работы и делает все на качество.</p>
                    <h3 className="text-xl font-semibold">Заводские цены</h3>
                    <p>А то значит на 90% дешевле всех производителей.</p>
                    <h3 className="text-xl font-semibold">Пошаговый комплекс услуг</h3>
                    <ul className="list-disc pl-5">
                        <li>Консультация</li>
                        <li>Дизайн</li>
                        <li>Печать пакетов</li>
                        <li>Доставка</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Индивидуальный подход</h3>
                </div>
            </div>
        </div>
    );
};

export default VideoWithText;
