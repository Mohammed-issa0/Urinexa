import logo from "../../public/images/inHand.png";
import { motion } from "framer-motion";
export default function Tork() {
  return (
    <div className="bg-amber-100 py-16 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-3 ">
          <p className="text2xl sm:text-3xl text-center text-gray-900 font-semibold mb-4">
            هل ستترك هذه الفرصة وتعود لحياتك العادية بدون متعة وحيوية جنسية مع
            شريكتك أم أنك ستأخذ خطوتك لتحسين نشاطك الجنسي وتفاجئها بقوتك ورغبتك
            الجامحة التي اشتاقت إليها لقضاء أجمل أمسية ملتهبة معك من جديد؟
          </p>
        </div>
      </motion.div>
    </div>
  );
}