import React from 'react';

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
    <div className="p-6">
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

      <h2 className="mt-8 text-xl font-semibold mb-5">Прайс-лист на пакеты с логотипом</h2>

      <img src='/price.jpg' className="w-full" alt="logo" />


      {/* <table className="w-full mt-4 border border-gray-200 text-gray-700 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Тираж</th>
            <th className="py-2 px-4 text-left">1 цв., тг</th>
            <th className="py-2 px-4 text-left">2 цв., тг</th>
            <th className="py-2 px-4 text-left">3 цв., тг</th>
            <th className="py-2 px-4 text-left">4 цв., тг</th>
          </tr>
        </thead>
        <tbody>
          {product.priceList.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="py-2 px-4 border-t">{row.tirage}</td>
              {row.prices.map((price, i) => (
                <td key={i} className="py-2 px-4 border-t">{price}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}

      <h2 className="mt-8 text-xl font-semibold">Таблица цветов</h2>
      <table className="w-full text-center mt-4">
        <tbody>
          {[
            ['https://www.logo-pak.ru/images/clrs/20.png', 'https://www.logo-pak.ru/images/clrs/12.png', 'https://www.logo-pak.ru/images/clrs/16.png', 'https://www.logo-pak.ru/images/clrs/13.png'],
            ['https://www.logo-pak.ru/images/clrs/18.png', 'https://www.logo-pak.ru/images/clrs/10.png', 'https://www.logo-pak.ru/images/clrs/3.png', 'https://www.logo-pak.ru/images/clrs/8.png'],
            ['https://www.logo-pak.ru/images/clrs/4.png', 'https://www.logo-pak.ru/images/clrs/11.png', 'https://www.logo-pak.ru/images/clrs/6.png', 'https://www.logo-pak.ru/images/clrs/7.png'],
            ['https://www.logo-pak.ru/images/clrs/1.png', 'https://www.logo-pak.ru/images/clrs/5.png', 'https://www.logo-pak.ru/images/clrs/15.png', 'https://www.logo-pak.ru/images/clrs/17.png'],
            ['https://www.logo-pak.ru/images/clrs/2.png', 'https://www.logo-pak.ru/images/clrs/9.png', 'https://www.logo-pak.ru/images/clrs/14.png', 'https://www.logo-pak.ru/images/clrs/19.png'],
          ].map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              {row.map((src, colIndex) => (
                <td key={colIndex} className="p-2">
                  <img src={src} alt={`Color ${rowIndex * 4 + colIndex + 1}`} className="w-full h-16 mx-auto object-contain" />

                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInfo;
