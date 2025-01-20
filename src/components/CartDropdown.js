import Link from 'next/link';
import CartItem from './CartItem';

const CartDropdown = ({ cart, t }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Ваша корзина</h3>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">ничего нет</p>
      ) : (
        <>
          <div className="mt-4 space-y-2">
            {cart.map((item) => (
              <CartItem 
                key={`${item.id}-${item.selectedSize}`} // Генерируем уникальный ключ
                item={item} 
              />
            ))}
          </div>
          <div className="mt-4 text-right">
            <p className="text-lg font-semibold">
              Общая сумма: {totalPrice} ₸
            </p>
          </div>
        </>
      )}
      <div className="mt-4 text-center">
        <Link href="/cart" className="w-full btn btn-accent">
        Оформить заказ
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
