import React from "react";
import { CheckCircle2, Clock, Heart, Shield, Zap } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
export default function Benefits() {
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5, rotate: "25deg" },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: "0deg",
      transition: { duration: 0.3 },
    },
  };
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-[#137131]" />,
      title: "تحسين القدرة على الانتصاب",
      description: "زيادة تدفق الدم للحصول على انتصاب أقوى وأكثر استمرارية",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#137131]" />,
      title: "تحسين الأداء الجنسي",
      description: "تعزيز الثقة بالنفس وتقليل التوتر النفسي",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#137131]" />,
      title: "آثار طويلة المدى",
      description: "تدوم التأثيرات حتى 36 ساعة للمرونة في العلاقة",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#137131]" />,
      title: "آمن وطبيعي",
      description: "مكونات طبيعية 100% بدون آثار جانبية",
    },
  ];

  return (
    <div id="ben" className="py-16 bg-white">
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
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          ماذا سيحقق لك Urinexa؟
        </motion.h2>

        <motion.div
          variants={listAnimation}
          className="grid md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              variants={listAnimation}
              key={index}
              className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg"
            >
              {benefit.icon}
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={listAnimation}
          className="mt-8 flex justify-center"
        >
          <CTAButton />
        </motion.div>
      </motion.div>
    </div>
  );
}
