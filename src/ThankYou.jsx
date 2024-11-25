import React from "react";
import { CircleCheckBig } from "lucide-react";
export default function ThankYou() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-6">
        <CircleCheckBig className="h-16 w-16 text-green-600 mr-2" />
        <h1 className="text-3xl text-center font-bold text-green-600" dir="rtl">
          شكرا لك, تم إستلام طلبك وسيتم التواصل معك خلال 24 ساعة لتأكيد الطلب
          وتوصيله لك.
        </h1>
      </div>
    </div>
  );
}
