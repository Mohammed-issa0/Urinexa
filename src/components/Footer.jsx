import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-[#6cd892] to-[#46b99a] text-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">المنتج</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={(window.location.href = "#ben")}
                  className="hover:text-white"
                >
                  المميزات
                </a>
              </li>
              <li>
                <a
                  href={(window.location.href = "#price")}
                  className="hover:text-white"
                >
                  الأسعار
                </a>
              </li>
              <li>
                <a
                  href={(window.location.href = "#rev")}
                  className="hover:text-white"
                >
                  التقييمات
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">الشركة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={(window.location.href = "#")}
                  className="hover:text-white"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">المساعدة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={(window.location.href = "#faq")}
                  className="hover:text-white"
                >
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-white">
                  الشحن
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-white">
                  الإرجاع
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="#whatsapp" className="hover:text-white">
                  واتساب
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white">
                  انستغرام
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-12 pt-8 text-center">
          <p>© 2024 Urinexa. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
