import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Course {
  id: string;
  title: string;
  price: number;
}

interface CartContextType {
  cartItems: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Course[]>([]);

  const addToCart = (course: Course) => {
    setCartItems(prev => {
      const exists = prev.some(c => c.id === course.id);
      return exists ? prev : [...prev, course];
    });
  };

  const removeFromCart = (courseId: string) => {
    setCartItems(prev => prev.filter(c => c.id !== courseId));
  };

  const cartTotal = cartItems.reduce((sum, course) => sum + course.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
