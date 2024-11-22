import React from "react";
import { Leaf, Shield, Award } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
export default function Ingredients({ isModalOpen, setIsModalOpen }) {
  const listAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <div id="ing" className="py-16 bg-gray-50 background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ threshold: 0.7 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={listAnimation}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          المكونات الطبيعية الأساسية
        </motion.h2>

        <motion.div variants={listAnimation} className="space-y-8">
          <motion.div
            variants={listAnimation}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-600 ml-4" />
              <h3 className="text-xl font-semibold">مستخلص النخيل</h3>
            </div>
            <p className="text-gray-600">
              يساهم في تدفق البول بشكل صحي ووظيفة البروستاتا الصحية. تحتوي
              التركيبة على زنك مضاف، لأنه معدن أساسي مهم بشكل خاص لوظيفة الغدد
              الصماء والصحة الإنجابية بشكل عام.
            </p>
          </motion.div>

          <motion.div
            variants={listAnimation}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-600 ml-4" />
              <h3 className="text-xl font-semibold">مستخلص الحريقة</h3>
            </div>
            <p className="text-gray-600">
              العناصر الطبيعية المتواجدة في نبات القراص تمنع تحول هرمون
              التستوستيرون إلى هرمون ديهدروتستوستيرون، مما يساعد على تقليل حجم
              البروستاتا وتحسين الوظائف الجنسية.
            </p>
          </motion.div>

          <motion.div
            variants={listAnimation}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-green-600 ml-4" />
              <h3 className="text-xl font-semibold">فيتامين B9</h3>
            </div>
            <p className="text-gray-600">
              يساهم في تحسين الخصوبة وإنتاج الحيوانات المنوية، كما يساعد في خفض
              فرص الإصابة بأمراض مختلفة.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 flex justify-center">
          <CTAButton
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
