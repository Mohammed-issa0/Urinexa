import React from "react";
import { motion } from "framer-motion";
function Msg() {
  return (
    <motion.div
      className="bg-gray-400 p-4 text-center"
      whileInView={{ opacity: 1, y: 0 }} // تظهر عند دخول العنصر في نطاق العرض
      initial={{ opacity: 0, y: 50 }} // تبدأ غير مرئية وتنزلق للأعلى
      transition={{ duration: 0.8, ease: "easeOut" }} // مدة الحركة وسلاستها
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold text-white py-4 text-center">
          إذا ظهر لك خصم 50% أعلى هذه الرسالة, فهذا يعني أنه تبقى أقل من  10 قطع
          متوفرة الآن. ويمكنك الحصول على قطعة بنصف السعر الأصلي في حال طلبت
          المنتج قبل نفاذ القطع المتبقية.
        </h2>
      </div>
    </motion.div>
  );
}

export default Msg;
