// components/Slider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Импорт стилей для навигации
import 'swiper/css/pagination'; // Импорт стилей для пагинации

import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="h-[400px] relative">
      <Swiper
        spaceBetween={50} // Расстояние между слайдами
        slidesPerView={1} // Количество слайдов, отображаемых одновременно
        navigation={true} // Включение стрелок навигации
        pagination={{ clickable: true }} // Пагинация
        loop={true} // Зацикливание слайдов
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Автопроигрывание
        modules={[Navigation, Pagination]} // Подключение модулей для навигации и пагинации
        className="h-full" // Устанавливаем высоту для слайдера
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/slider/1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
            {/* Маска */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl text-center md:text-4xl font-bold">
                Упаковка для маркетплейсов<br /> и пищевых продуктов
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/slider/2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
            {/* Маска */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl text-center md:text-4xl font-bold">
                Курьерские пакеты <br />с доставкой по Казахстану
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/slider/3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
            {/* Маска */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl text-center md:text-4xl font-bold">
                Пакеты<br /> с логотипом под заказ
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
