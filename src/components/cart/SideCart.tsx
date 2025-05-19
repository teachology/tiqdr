import React from 'react';
import { useCart } from '../../context/CartContext';

const SideCart = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <div className="bg-gray-100 p-4 w-64 shadow-lg">
      <h2 className="text-lg font-bold mb-4">سلة الشراء</h2>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span>{item.title}</span>
            <button
              className="text-red-500 text-sm"
              onClick={() => removeFromCart(item.id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-semibold">المجموع: {cartTotal.toFixed(2)} ريال</div>
    </div>
  );
};

export default SideCart;
