import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import img1 from "../../public/images/دائرة.png";
import img2 from "../../public/images/رجل.png";
export default function Hero({ isModalOpen, setIsModalOpen }) {
  const listAnimation = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };
  const listAnimation2 = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="bg-gradient-to-r from-[#6cd892] to-[#46b99a] text-white py-20">
      <div className="container mx-auto px-4 text-center lg:text-right flex flex-col items-center md:flex-row">
        {/* النصوص مع الحركة */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.7 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="flex flex-col lg:justify-start items-center pb-4 md:items-start md:text-right"
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-6"
            variants={listAnimation2}
          >
            هل ترغب باستعادة شبابك{" "}
            <span className="text-[#137131]">وقوتك الجنسية</span> لتسترجع أيام
            العشق والرغبة مع شريكتك؟
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={listAnimation2}
          >
            أشعل الرغبة لديك وفاجئ شريكتك بليلة ملتهبة وطويلة مع قوتك ورغبتك
            الجامحة من اليوم
          </motion.p>

          {/* الزر مع الحركة */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
            variants={listAnimation2}
          >
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
          </motion.div>
        </motion.div>

        {/* الصور مع الحركة */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.7 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="relative"
        >
          <motion.img
            src={img1}
            alt="Urinexa Product"
            className="mx-auto rounded-lg w-[300px] lg:w-[500px] max-w-md"
            variants={listAnimation}
          />
          <motion.img
            src={img2}
            alt="Urinexa Product"
            className="mx-auto rounded-lg w-[300px] lg:w-[500px] max-w-md absolute bottom-[-50px]  lg:bottom-[-70px]"
            variants={listAnimation}
          />
        </motion.div>
      </div>
    </div>
  );
}
