import React from "react";
import { ShoppingCart } from "lucide-react";
import CTAButton from "./CTAButton";
export default function Navbar() {
  return (
    <nav
      className="fixed w-full bg-amber-50 shadow-sm backdrop-blur-md z-50 "
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-row-reverse h-16">
          <a
            href={(window.location.href = "#")}
            className="flex items-center space-x-2"
          >
            <span className="text-3xl font-bold text-[#137131]">Urinexa</span>
            <img src="../../public/images/mainLogo.png" className="w-9" />
          </a>
          <div className="hidden md:flex items-center flex-row-reverse gap-2">
            <a
              href={(window.location.href = "#ben")}
              className="text-gray-600 hover:text-gray-900 mr-8 font-bold"
            >
              المميزات
            </a>
            <a
              href={(window.location.href = "#ing")}
              className="text-gray-600 hover:text-gray-900 mr-8 font-bold"
            >
              المكونات
            </a>
            <a
              href={(window.location.href = "#rev")}
              className="text-gray-600 hover:text-gray-900 mr-8 font-bold"
            >
              التقييمات
            </a>
            <CTAButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
