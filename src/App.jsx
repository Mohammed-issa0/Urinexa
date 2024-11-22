import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Urgency from "./components/Urgency";
import Problems from "./components/Problems";
import Story from "./components/Story";
import Benefits from "./components/Benefits";
import Urgency2 from "./components/Urgency2";
import Ingredients from "./components/Ingredients";
import Testimonials from "./components/Testimonials";
import Price from "./components/Price";
import SimpleSlider from "./components/SimpleSlider";
import { useState } from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [counter, setCounter] = useState(4);
  function handleClick() {
    if (counter === 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  }

  const [isModalOpen, setIsModalOpen] = useState(false); // للتحكم في النافذة المنبثقة
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    method: "",
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSend = () => {
    const { name, quantity, method } = formData;

    if (!name || !quantity || !method) {
      alert("يرجى تعبئة جميع الحقول واختيار طريقة التواصل.");
      return;
    }

    switch (method) {
      case "whatsapp":
        window.open(
          `https://wa.me/00963932952575?text=الاسم: ${name}%0Aعدد العبوات: ${quantity}%0Aطريقة التواصل: واتساب`
        );
        break;
      case "telegram":
        window.open(
          `https://t.me/Mohammed-issa0?start=الاسم:${name}_عدد-العبوات:${quantity}`
        );
        break;
      case "gmail":
        window.open(
          `mailto:mohammed.issaopte@gmail.com?subject=طلب&body=الاسم: ${name}%0Aعدد العبوات: ${quantity}`
        );
        break;
      default:
        alert("يرجى اختيار طريقة تواصل صحيحة.");
    }

    setIsModalOpen(false); // غلق النافذة بعد الإرسال
  };
  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">طلب جديد</h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Quantity */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  عدد العبوات المطلوبة
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="أدخل العدد"
                />
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  طريقة التواصل
                </label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                >
                  <option value="">اختر طريقة التواصل</option>
                  <option value="whatsapp">واتساب</option>
                  <option value="telegram">تلغرام</option>
                  <option value="gmail">Gmail</option>
                </select>
              </div>
            </form>

            <div className="flex justify-end mt-6 space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                إلغاء
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                إرسال
              </button>
            </div>
          </div>
        </div>
      )}
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Urgency
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        text={
          "يُسمح لنا إستيراد 150 قطعة فقط من منتج Urinexa كل شهر. وهذا لقلة توفر المنتج بسبب ندرة الأعشاب المستخدمة فيه مع الطلب الكبير عليها. لذلك لاتضيع هذا المنتج عليك واحجز عبوتك قبل نفاذ الكمية."
        }
        counter={counter}
        setCounter={setCounter}
        handleClick={handleClick}
      />
      <Problems isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Story isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Benefits isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Urgency2 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Ingredients isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Testimonials isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Price isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <FAQ isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
    </div>
  );
}
