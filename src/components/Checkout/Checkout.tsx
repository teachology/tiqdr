import React, { useState } from 'react';
import { Camera, Send } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CheckoutProps {
  onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onClose }) => {
  const { cartItems, cartTotal } = useCart();
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [whatsappNumber] = useState('+20183254553');
  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPaymentProof(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment verification process
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="text-right mb-6">
          <h2 className="text-2xl font-bold text-gray-900">إتمام الدفع</h2>
          <p className="text-gray-600">المبلغ المطلوب: {cartTotal.toFixed(2)} ريال</p>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg text-right">
            <h3 className="font-semibold text-purple-900 mb-2">تعليمات الدفع:</h3>
            <ol className="list-decimal list-inside space-y-2 text-purple-800">
              <li>قم بتحويل المبلغ عبر InstaPay أو المحفظة الإلكترونية إلى الرقم: {whatsappNumber}</li>
              <li>التقط صورة لإيصال الدفع</li>
              <li>أدخل اسمك وارفق صورة الإيصال</li>
              <li>سيتم إرسال تفاصيل الوصول إلى دوراتك عبر WhatsApp</li>
            </ol>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-right text-sm font-medium text-gray-700 mb-1">
                الاسم
              </label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border rounded-lg text-right"
                placeholder="أدخل اسمك الكامل"
              />
            </div>

            <div>
              <label className="block text-right text-sm font-medium text-gray-700 mb-1">
                صورة إيصال الدفع
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                  id="payment-proof"
                />
                <label
                  htmlFor="payment-proof"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <Camera className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">
                    {paymentProof ? paymentProof.name : 'انقر لإرفاق صورة الإيصال'}
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'جاري الإرسال...'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>إرسال للتحقق</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
