import { createContext, useContext, useState, useEffect } from 'react';

// Создаем контекст
const CartContext = createContext();

// Хук для использования корзины
export const useCart = () => {
  return useContext(CartContext);
};

// Провайдер для оборачивания приложения
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0);
  
  const CART_EXPIRATION_TIME = 60 * 60 * 1000; // 1 час в миллисекундах

  // Загружаем корзину из localStorage при старте
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedTime = localStorage.getItem('cartTimestamp');

    if (savedCart && savedTime) {
      const currentTime = Date.now();
      if (currentTime - savedTime < CART_EXPIRATION_TIME) {
        setCart(savedCart);
      } else {
        clearCart(); // Если время истекло, очищаем корзину
      }
    }
  }, []);

  // Сохраняем корзину и время последнего обновления в localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('cartTimestamp', Date.now().toString());
    }
  }, [cart]);

  // Очищаем корзину через 1 час
  useEffect(() => {
    const timer = setInterval(() => {
      const savedTime = localStorage.getItem('cartTimestamp');
      if (savedTime && Date.now() - savedTime >= CART_EXPIRATION_TIME) {
        clearCart();
      }
    }, 1000 * 60); // Проверяем каждую минуту

    return () => clearInterval(timer); // Очищаем таймер при размонтировании
  }, []);

  const addToCart = (product, quantity = 1, selectedSize) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity, selectedSize }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  // Функция для очистки корзины
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTimestamp');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
