import logo from "../../public/images/inHand.png";
import { motion } from "framer-motion";
export default function Fourth() {
  return (
    <div className="bg-amber-100 py-16 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <div className="flex flex-col md:flex-row items-center gap-3 ">
          <img src={logo} className="h-40 md:h-48" />
          <p className="text2xl sm:text-3xl text-center md:text-right text-gray-900 font-semibold mb-4">
            المنتج بدون أي قيمة مضافة{" "}
            <span className="text-green-600">URIXENA</span> واحد من أفضل 20
            معالج ومقوي جنسي طبيعي بحسب منظمة الصحة العالمية وشهادات المنتج
            المعتمدة من وزارة الصحة في تونس.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
