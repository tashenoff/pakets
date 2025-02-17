// components/ProductInfo.js
import React from 'react';
import DownloadImageBlock from './DownloadImageBlock';

const ProductInfo = () => {
  const product = {
    image: '/img/11.png',
    name: 'Полиэтиленовые пакеты',
    price: 'от 0,5 тг.',
    description: 'В компании «Логопак» вы можете по выгодным ценам заказать изготовление полиэтиленовых пакетов. Мы гарантируем высокое качество продукции и оперативность исполнения заказа.',
    specifications: [
      { key: 'Тип пакетов', value: 'Пакеты полиэтиленовые' },
      { key: 'Толщина', value: 'От 20 до 100 мкм' },
      { key: 'Типоразмеры', value: '20х30 см; 25х35 см; 30х40 см; 34х40 см; 40х50 см; 45х55 см; 50х60 см; 60х50 см; 70х60 см; 85х70 см;' },
      { key: 'Тип печати', value: 'Флексографическая' },
      { key: 'Особенности печати', value: 'На одной или обеих сторонах, как простая, так и полноцветная' },
    ],

    priceList: [
      { tirage: 100, prices: [46.5, 56.5, 69.3, 82.5] },
      { tirage: 200, prices: [34.0, 42.8, 50.5, 63.0] },
      // Добавьте остальные данные
    ],
  };

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1 space-y-4">
          <div className="text-2xl font-bold">Пакеты на заказ</div>
          <table className="w-full text-left text-sm ">
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 font-medium">{spec.key}:</td>
                  <td className="py-2 ">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="text-2xl text-blue-500 font-bold py-10">Изготовим следующие виды продукции с индивидуальными параметрами:</div>

        <div className='grid lg:grid-cols-4 gap-4'>
          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-2.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Пакеты с вырубной ручкой</span>
          </div>

          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-3.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Мешки полиэтиленовые </span>
          </div>

          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-4.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Пакет майка
            </span>
          </div>

          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-6.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Курьерские пакеты
            </span>
          </div>

          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-7.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Пакеты с вырубной ручкой</span>
          </div>


          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-7.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Пакеты зип лок </span>
          </div>

          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-9.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Пакеты дой пак
            </span>
          </div>

          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-10.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Полипропиленовые Бопп пакеты
            </span>
          </div>
          <div className='text-center flex flex-col items-center border'>
            <img src=' https://webpack.kz/images/custom/root-category-15.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Вакуумные пакеты

            </span>
          </div>

          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-6.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Пакет с клеейкой лентой


            </span>
          </div>


          <div className='text-center flex flex-col items-center border'>
            <img src='https://webpack.kz/images/custom/root-category-7.png' />
            <span className='uppercase text-blue-500 font-bold text-sm'>Пакет слайдер с бегунком


            </span>
          </div>


        </div>


      </div>

      <h2 className="mt-8 text-xl font-semibold mb-5">Прайс-лист на пакеты с логотипом</h2>

      {/* Компонент с изображением и кнопкой скачивания */}
      <DownloadImageBlock
        imageUrl="/price.jpg"
        fileName="Paketi.KZ_Logo_Price.pdf"
        description="Скачайте прайс-лист на пакеты с логотипом для более детальной информации."
      />
    </div>
  );
};

export default ProductInfo;
