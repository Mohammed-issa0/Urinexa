import Counter from "./Counter";
import { CircleCheckBig } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
export default function Urgency3({ isModalOpen, setIsModalOpen }) {
  return (
    <div className="bg-amber-50 py-16 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <CircleCheckBig className="h-16 w-16 text-green-700 mr-2" />
        </div>
        <p className="text2xl sm:text-3xl text-gray-900 font-semibold mb-4">
          هذه فرصتك الأخيرة لتغيير حياتك مع شريكتك للأفضل. الكمية قليلة وتنفذ
          بسرعة, لذا لاتدع هذه الفرصة تفوتك واحجز عبوة لك الآن قبل إنتهاء
          الكمية.
        </p>

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <CTAButton
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </motion.div>
      </div>
    </div>
  );
}
