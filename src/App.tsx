import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CourseDetails from './components/CourseDetails/CourseDetails';
import AllCourses from './pages/AllCourses';
import MyCourses from './pages/MyCourses';
import CartPage from './pages/CartPage';
import Checkout from './components/Checkout/Checkout';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FaqPage from './pages/FaqPage';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Logout from './pages/Logout';

import { CartProvider } from './context/CartContext'; // Cart context

function App() {
  return (
    <CartProvider>
      <div dir="rtl" className="text-end p-4 rtl:pr-6 pt-24 font-primary text-gray-800">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />

            {/* Course pages */}
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/my-courses" element={<MyCourses />} />

            {/* Cart & Checkout */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </div>
    </CartProvider>
  );
}

export default App;
