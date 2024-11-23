import Counter from "./Counter";
import { CircleAlert } from "lucide-react";
import CTAButton from "./CTAButton";
export default function Urgency3({ isModalOpen, setIsModalOpen }) {
  return (
    <div className="bg-amber-50 py-16 background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <CircleAlert className="h-16 w-16 text-red-600 mr-2" />
        </div>
        <p className="text2xl sm:text-3xl text-white font-semibold mb-4">
          هذه فرصتك الأخيرة لتغيير حياتك مع شريكتك للأفضل. الكمية قليلة وتنفذ
          بسرعة, لذا لاتدع هذه الفرصة تفوتك واحجز عبوة لك الآن قبل إنتهاء
          الكمية.
        </p>

        <CTAButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
}
