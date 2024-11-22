import React from "react";
import { CheckCircle } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
export default function Problems({ isModalOpen, setIsModalOpen }) {
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  const problems = [
    {
      title: "ضعف الانتصاب المستمر",
      description: "صعوبة في تحقيق أو الحفاظ على الانتصاب بشكل متكرر ومستمر",
    },
    {
      title: "الضعف الجنسي المرتبط بحالات صحية",
      description: "مشاكل تؤثر على تدفق الدم مثل السكري وضغط الدم",
    },
    {
      title: "ضعف الانتصاب المرتبط بالتقدم في العمر",
      description: "صعوبات في الانتصاب مع التقدم في السن",
    },
    {
      title: "الحالات النفسية",
      description: "القلق والتوتر المرتبط بالضعف الجنسي",
    },
    {
      title: "انخفاض الرغبة الجنسية",
      description: "نقص في الرغبة والدافع الجنسي",
    },
    {
      title: "صعوبة في تحقيق الحمل للزوجة",
      description:
        "غالبا مايرافق ضعف النشاط الجنسي صعوبات في تلقيح بويضة الإمرأة عند الجماع, وهذا بسبب قلة او ضعف الحيوانات المنوية الذي يحققها الرجل الذي يعاني من الضعف الجنسي. مايؤخر أو يمنع الحمل لدى الزوجة",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          inherit={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          الحالات التي يُنصح فيها باستخدام{" "}
          <motion.span
            inherit={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[#137131]"
          >
            Urinexa
          </motion.span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.7 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="space-y-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              variants={listAnimation}
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <CTAButton
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </div>
  );
}
