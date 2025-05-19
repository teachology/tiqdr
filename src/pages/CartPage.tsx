import React, { useState } from 'react';
import Checkout from '../components/Checkout/Checkout'; // adjust path if needed
import { ShoppingCart } from 'lucide-react';

const CartPage = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Example cart logic (replace with your real cart logic)
  const [cartItems] = useState([
    { id: 1, name: 'دورة الرياضيات', price: 100 },
    { id: 2, name: 'دورة الفيزياء', price: 150 },
  ]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-right">سلة المشتريات</h1>

      <ul className="mb-4 text-right">
        {cartItems.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} - {item.price} ريال
          </li>
        ))}
      </ul>

      <p className="text-right font-semibold mb-6">
        الإجمالي: {cartTotal.toFixed(2)} ريال
      </p>

      <button
        onClick={() => setIsCheckoutOpen(true)}
        className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        إتمام الدفع
      </button>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <Checkout cart={cartTotal} onClose={() => setIsCheckoutOpen(false)} />
      )}
    </div>
  );
};

export default CartPage;
