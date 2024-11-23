import Counter from "./Counter";
import { CircleAlert } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
export default function Urgency({
  counter,
  setCounter,
  handleClick,
  text,
  show,
  isModalOpen,
  setIsModalOpen,
}) {
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-amber-100 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ threshold: 0.7 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <motion.div
          variants={listAnimation}
          className="flex items-center justify-center mb-6"
        >
          <CircleAlert className="h-14 w-14 text-red-600 mr-2" />
        </motion.div>
        <motion.p
          variants={listAnimation}
          className="text-lg text-gray-700 mb-4"
        >
          {text}
        </motion.p>
        <motion.div variants={listAnimation}>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Counter remaining={counter} handleClick={handleClick} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
