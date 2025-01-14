import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [additionalPhone, setAdditionalPhone] = useState('');
  const [comment, setComment] = useState('');
  const [deliveryMethodId, setDeliveryMethodId] = useState(1); // ID способа доставки
  const [deliveryAddress, setDeliveryAddress] = useState(''); // Адрес доставки

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleQuantityChange = (productId, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName || !phone || !email || !deliveryMethodId) {
      alert('Пожалуйста, заполните все обязательные поля!');
      return;
    }

    if (!cart || cart.length === 0) {
      alert('Ваша корзина пуста');
      return;
    }

    if ((deliveryMethodId === 2 || deliveryMethodId === 3) && !deliveryAddress) {
      alert('Пожалуйста, укажите адрес доставки!');
      return;
    }

    const deliveryMethods = {
      1: 'Самовывоз',
      2: 'Доставка до двери',
      3: 'Доставка по Казахстану',
    };

    const orderItems = cart
      .map(
        (item) => `- ${item.translatedName} (${item.selectedSize || 'Без размера'}) - ${item.quantity} шт. по ${item.price} ₸`
      )
      .join('\n');

    const message = `Здравствуйте!\nМой заказ:\n\n` +
      `ФИО: ${fullName}\n` +
      `Телефон: ${phone}\n` +
      (additionalPhone ? `Доп. телефон: ${additionalPhone}\n` : '') +
      `Email: ${email}\n` +
      `Комментарий: ${comment || 'Нет'}\n` +
      `Способ доставки: ${deliveryMethods[deliveryMethodId]}\n` +
      ((deliveryMethodId === 2 || deliveryMethodId === 3) ? `Адрес доставки: ${deliveryAddress}\n` : '') +
      `Общая стоимость: ${totalPrice} тенге\n\nТовары:\n${orderItems}`;

    const whatsappURL = `https://wa.me/+77017896556?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  if (!isClient) return null;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center text-3xl font-bold mb-5">Оформление заказа</h1>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Cart Items */}
        <div className="p-5 bg-base-100 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Товары в корзине</h2>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Ваша корзина пуста</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between border-b py-4"
              >
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
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="btn btn-sm btn-error"
                >
                  Удалить
                </button>
              </div>
            ))
          )}
        </div>

        {/* Order Form */}
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
                <option value="1">Самовывоз</option>
                <option value="2">Доставка до двери</option>
                <option value="3">Доставка по Казахстану</option>
              </select>
            </div>

            {(deliveryMethodId === 2 || deliveryMethodId === 3) && (
              <div className="form-control mt-4">
                <label className="label" htmlFor="deliveryAddress">
                  <span className="label-text">Адрес доставки</span>
                </label>
                <input
                  type="text"
                  id="deliveryAddress"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  required
                  className="input input-bordered"
                />
              </div>
            )}

            <div className="form-control mt-8">
              <button type="submit" className="btn btn-primary w-full">
                Отправить в WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
