import React from "react";
import { UserCircle2 } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
export default function Story({ isModalOpen, setIsModalOpen }) {
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.7 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <motion.div
            variants={listAnimation}
            className="flex items-center mb-6"
          >
            <UserCircle2 className="h-12 w-12 text-[#137131] ml-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">قصة عمر</h3>
              <p className="text-gray-600">تجربة حقيقية مع Urinexa</p>
            </div>
          </motion.div>

          <motion.div
            variants={listAnimation}
            className="space-y-4 text-gray-700"
          >
            <motion.p variants={listAnimation}>
              في زحمة الحياة اليومية، كان عمر يشعر بأن ضغوط العمل وأعباء الحياة
              قد بدأت تؤثر على طاقته وحيويته. لاحظ تراجعًا في حماسه وسعادته
              الزوجية، مما أثار قلقه.
            </motion.p>
            <motion.p variants={listAnimation}>
              لم يكن "عمر" يريد شيئًا أكثر من أن يعيد إشعال شرارة الثقة والحيوية
              التي كانت تميزه.
            </motion.p>
            <motion.p variants={listAnimation}>
              بدأ البحث عن حلٍ يضمن له الأمان والفعالية، حتى اكتشف Urinexa، الحل
              الطبيعي الذي أعاد له قوته وعزز من نشاطه دون أي آثار جانبية.
            </motion.p>
            <motion.p
              variants={listAnimation}
              className="font-semibold text-[#137131]"
            >
              خلال أيام قليلة، شعر عمر بفرق كبير، وعادت الابتسامة إلى وجهه ورضا
              شريكته أصبح أكبر من أي وقت مضى.
            </motion.p>
          </motion.div>

          <motion.div
            variants={listAnimation}
            className="mt-8 flex justify-center"
          >
            <CTAButton
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
