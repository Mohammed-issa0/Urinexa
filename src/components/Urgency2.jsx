import Counter from "./Counter";
import { CircleAlert } from "lucide-react";
import CTAButton from "./CTAButton";
export default function Urgency2({ isModalOpen, setIsModalOpen }) {
  return (
    <div className="bg-amber-50 py-16 background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <CircleAlert className="h-16 w-16 text-red-600 mr-2" />
        </div>
        <p className="text2xl sm:text-3xl text-white font-semibold mb-4">
          قد لاتتمكن من الحصول على هذا المنتج في وقت لاحق{" "}
          <span className="">بسبب إنتهاء الكمية</span> أو فقدان المنتج. لذا إضمن
          حصولك على عبوتك الآن.
        </p>

        <CTAButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
}
