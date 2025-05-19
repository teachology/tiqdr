import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { courses as courseList } from '../../data/courses';
import { useCart } from '../../context/CartContext'; // ✅ Import useCart

const CourseDetails: React.FC = () => {
  const { courseId } = useParams();
  const { cartTotal, addToCart } = useCart(); // ✅ Use global cart context

  const course = courseList.find((c) => c.id === courseId);

  if (!course) {
    return <div className="text-center p-8">الدورة غير موجودة</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Cart Button */}
      <div className="fixed top-20 left-4 z-50">
        <button className="bg-purple-800 text-white px-4 py-2 rounded-full flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span>{cartTotal.toFixed(2)} ريال</span> {/* ✅ Show global cart total */}
        </button>
      </div>

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl shadow"
      />

      {/* Course Header */}
      <div className="text-right space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-gray-600">المدرب: {course.instructor}</p>
        <p className="text-gray-600">الفئة: {course.category}</p>
        <p className="text-gray-600">المدة: {course.duration}</p>
        <p className="text-gray-600">
          الشهادة: {course.certificateIncluded ? 'نعم' : 'لا'}
        </p>
      </div>

      {/* Course Price and Add to Cart */}
      <div className="bg-white rounded-lg shadow p-6 text-right">
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => addToCart(course)} // ✅ Use context to add course
          >
            إضافة للسلة
          </button>
          <div className="text-2xl font-bold text-purple-800">
            {course.price.toFixed(2)} ريال
          </div>
        </div>
      </div>

      {/* Course Features */}
      <div className="bg-white rounded-lg shadow p-6" dir="rtl">
        <h2 className="text-xl font-bold text-right mb-4">مميزات الدورة</h2>
        <ul className="space-y-3 text-right">
          {course.details.map((feature, index) => (
            <li key={index} className="flex flex-row-reverse items-center justify-end gap-2">
              <span>{feature}</span>
              <span className="w-2 h-2 bg-purple-800 rounded-full"></span>
            </li>
          ))}
          {course.isRecorded && (
            <li className="flex flex-row-reverse items-center justify-end gap-2">
              <span>تسجيلات الدورة متاحة لمدة سنة</span>
              <span className="w-2 h-2 bg-purple-800 rounded-full"></span>
            </li>
          )}
        </ul>
      </div>

      {/* Video Preview */}
      {course.videoPreviewUrl && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-right mb-4">عرض الدورة</h2>
          <div className="aspect-video">
            <iframe
              src={course.videoPreviewUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
              title="معاينة الدورة"
            ></iframe>
          </div>
        </div>
      )}

      {/* Activation Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-right mb-4">تفعيل الدورة</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="أدخل كود التفعيل"
            className="w-full p-2 border rounded-lg text-right"
          />
          <button className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            تفعيل الدورة إذا كان لديك كود
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
