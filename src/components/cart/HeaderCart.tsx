import React from 'react';
import { useCart } from '../../context/CartContext';

const HeaderCart = () => {
  const { cartTotal } = useCart();

  return (
    <div className="text-sm font-semibold">
      🛒 الإجمالي: {cartTotal.toFixed(2)} ريال
    </div>
  );
};

export default HeaderCart;
