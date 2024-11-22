import { ShoppingCart } from "lucide-react";
export default function CTAButton() {
  return (
    <button
      className="bg-[#137131] hover:bg-[#0b471e] transition text-white text-xl font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 flex gap-1 items-center"
      onClick={() => (window.location.href = "#order")}
    >
      <ShoppingCart className="ml-2 h-5 w-5" />
      إطلبه الآن
    </button>
  );
}
