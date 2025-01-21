import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Условие для определения мобильной версии
    };

    // Установка состояния при загрузке
    handleResize();

    // Добавление обработчика изменения размера
    window.addEventListener('resize', handleResize);

    // Очистка обработчика при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-[400px] relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Pagination]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={isMobile ? '/slider/1_m.jpg' : '/slider/1.jpg'}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          
            <div className="absolute inset-0 flex items-center justify-center">
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={isMobile ? '/slider/2_m.jpg' : '/slider/2.jpg'}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
           
            <div className="absolute inset-0 flex items-center justify-center">
          
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={isMobile ? '/slider/3_m.jpg' : '/slider/3.jpg'}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
           
            <div className="absolute inset-0 flex items-center justify-center">
          
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
