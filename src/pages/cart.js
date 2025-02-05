import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useRouter } from 'next/router';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [additionalPhone, setAdditionalPhone] = useState('');
  const [comment, setComment] = useState('');
  const [deliveryMethodId, setDeliveryMethodId] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
  const [successMessage, setSuccessMessage] = useState(''); // Состояние для успешного сообщения

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleQuantityChange = (productId, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!fullName || !phone || !email) {
      alert('Пожалуйста, заполните все обязательные поля!');
      return;
    }
  
    if (!cart || cart.length === 0) {
      alert('Ваша корзина пуста');
      return;
    }
  
    setIsLoading(true); // Включаем прелоадер
  
    try {
      const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
      // Добавляем размер к каждому товару
      const updatedCart = cart.map(item => ({
        ...item,
        size: item.selectedSize || 'Не выбран' // добавляем размер или указываем "Не выбран"
      }));
  
      const response = await fetch('/api/sendOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          additionalPhone,
          comment,
          deliveryMethod: deliveryMethodId,
          deliveryAddress,
          cart: updatedCart, // отправляем корзину с размером
          totalAmount,
        }),
      });
  
      const responseBody = await response.json();
  
      if (!response.ok) {
        throw new Error(`Ошибка отправки заказа: ${response.status}`);
      }
  
      // Устанавливаем сообщение об успешной отправке заказа
      setSuccessMessage('Заказ успешно отправлен на email!');
  
      // Пауза перед редиректом, чтобы успел отобразиться успех
      setTimeout(() => {
        router.push('/thanks'); // Редирект на страницу благодарности
      }, 2000);
  
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      alert(`Ошибка при отправке заказа: ${error.message}`);
    } finally {
      setIsLoading(false); // Выключаем прелоадер
    }
  };
  

  if (!isClient) return null;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center text-3xl font-bold mb-5">Оформление заказа</h1>

      {successMessage && (
        <div className="alert alert-success shadow-lg mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-3 text-white size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-white font-bold">{successMessage}</span>
          </div>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="p-5 bg-base-100 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Товары в корзине</h2>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Ваша корзина пуста</p>
          ) : (
            cart.map((item) => (
              <div key={item.productId} className="flex items-center justify-between border-b py-4">
                <img
                  src={item.imageUrl}
                  alt={item.translatedName}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.translatedName}</h3>
                  <p className="text-sm text-gray-500">{item.price} ₸</p>
                  {item.selectedSize && <p className="text-sm">Размер: {item.selectedSize}</p>}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.productId, e)}
                    className="input input-bordered input-sm w-20 mt-2"
                  />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-5 bg-base-100 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Детали заказа</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label" htmlFor="fullName">
                <span className="label-text">ФИО</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label" htmlFor="phone">
                <span className="label-text">Телефон</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Электронная почта</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label" htmlFor="additionalPhone">
                <span className="label-text">Дополнительный телефон</span>
              </label>
              <input
                type="tel"
                id="additionalPhone"
                value={additionalPhone}
                onChange={(e) => setAdditionalPhone(e.target.value)}
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label" htmlFor="comment">
                <span className="label-text">Комментарий</span>
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="textarea textarea-bordered"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label" htmlFor="deliveryMethod">
                <span className="label-text">Способ доставки</span>
              </label>
              <select
                id="deliveryMethod"
                value={deliveryMethodId}
                onChange={(e) => setDeliveryMethodId(parseInt(e.target.value))}
                className="select select-bordered"
              >
                <option value={1}>Самовывоз</option>
                <option value={2}>Доставка</option>
              </select>
            </div>

            {deliveryMethodId === 2 && (
              <div className="form-control mt-4">
                <label className="label" htmlFor="deliveryAddress">
                  <span className="label-text">Адрес доставки</span>
                </label>
                <input
                  type="text"
                  id="deliveryAddress"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="input input-bordered"
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full mt-6" disabled={isLoading}>
              {isLoading ? <span className="loading loading-bars loading-md"></span> : 'Оформить заказ'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
