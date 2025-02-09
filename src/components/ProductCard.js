import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import dynamic from 'next/dynamic'; // Импорт dynamic из Next.js
const Notification = dynamic(() => import('./Notification'), { ssr: false });

const PackagePage = ({ product }) => {
    const { t } = useTranslation('common');
    const { addToCart } = useCart();

    const initialQuantity = product.id === 11 ? 50 : 100;
    const [quantity, setQuantity] = useState(initialQuantity);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if (product.sizes && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0]);
        } else {
            setSelectedSize(null);
        }
        setIsLoading(false);
    }, [product]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value % 100 === 0) {
            setQuantity(value);
        }
    };

    const handleSizeChange = (e) => {
        const size = product.sizes.find((s) => s.id === parseInt(e.target.value));
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize && quantity >= 100) {
            const productWithSelectedSize = {
                ...product,
                selectedSize: selectedSize.size,
                price: selectedSize.price,
            };
            addToCart(productWithSelectedSize, quantity, selectedSize.size);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        }
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 100);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 100 ? prev - 100 : 100));
    };

    if (isLoading) {
        return <p>{t('catalog.loading')}</p>;
    }

    const renderStockInfo = () => {
        if (!selectedSize) {
            return <p className="text-sm text-gray-500">{t('catalog.not_available')}</p>;
        }

        if (selectedSize.stockQuantity === 0) {
            return <p className="text-red-500">{t('catalog.preorder')}</p>;
        }

        return <p>в наличии: {selectedSize.stockQuantity}</p>;
    };

    return (
        <div className="card bg-white shadow-xl md:flex md:flex-col md:justify-between md:h-full md:p-4">
            <figure className='bg-gray-50 md:flex-shrink-0'>
                <Link href={`/catalog/${product.id}`}>
                    <img
                        src={product.imageUrl}
                        alt={product.translatedName}
                        className="h-40 w-full object-cover md:h-48"
                    />
                </Link>
            </figure>
            <div className="card-body md:flex md:flex-col md:justify-between md:space-y-4 md:h-full">
                <div className="md:flex md:flex-col md:space-y-2">
                    <h2 className="card-sm text-blue-500 font-bold">{product.translatedName}</h2>
                    <p>{product.color}</p>
                </div>

                <div className="flex w-full items-center justify-between md:flex-col md:items-stretch md:space-y-4">
                    <div className="flex items-center justify-center md:justify-start">
                        <button
                            onClick={decreaseQuantity}
                            className="btn btn-sm bg-base-300"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="input input-bordered w-20  mx-2"
                            min="100"
                            step="100"
                        />
                        <button
                            onClick={increaseQuantity}
                            className="btn btn-sm bg-base-300"
                        >
                            +
                        </button>
                    </div>

                    <div className="text-left">
                        <p className="text-lg font-bold">
                            {selectedSize ? `${selectedSize.price} ₸` : `${product.price} ₸`}
                           <span> за шт</span>
                        </p>
                        {renderStockInfo()}
                    </div>
                </div>

                <div className="mt-3 w-full">
                    <label htmlFor="size" className="block text-sm font-medium">
                      выберите размер
                    </label>
                    <select
                        id="size"
                        value={selectedSize ? selectedSize.id : ''}
                        onChange={handleSizeChange}
                        className="select select-bordered w-full mt-2"
                    >
                        {product.sizes.map((size) => (
                            <option key={size.id} value={size.id}>
                                {size.size} - {size.price} 
                                {size.stockQuantity === 0 ? ` (${t('catalog.preorder')})` : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="card-actions mt-4 w-full">
                    <button
                        onClick={handleAddToCart}
                        className="btn bg-blue-500 text-white w-full"
                    >
                        добавить в корзину
                    </button>
                </div>
            </div>

            {showNotification && <Notification message='добавлен в корзину' onClose={() => setShowNotification(false)} />}
        </div>
    );
};

export default PackagePage;