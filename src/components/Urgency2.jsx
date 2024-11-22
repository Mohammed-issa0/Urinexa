import Counter from "./Counter";
import { AlertTriangle } from "lucide-react";
import CTAButton from "./CTAButton";
export default function Urgency2({}) {
  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="h-14 w-14 text-red-600 mr-2" />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          قد لاتتمكن من الحصول على هذا المنتج في وقت لاحق بسبب إنتهاء الكمية أو
          فقدان المنتج. لذا إضمن حصولك على عبوتك الآن.
        </p>

        <CTAButton />
      </div>
    </div>
  );
}
