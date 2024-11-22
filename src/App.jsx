import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Urgency from "./components/Urgency";
import Problems from "./components/Problems";
import Story from "./components/Story";
import Benefits from "./components/Benefits";
import Urgency2 from "./components/Urgency2";
import Ingredients from "./components/Ingredients";
import Testimonials from "./components/Testimonials";
import Price from "./components/Price";
import SimpleSlider from "./components/SimpleSlider";
import { useState } from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [counter, setCounter] = useState(4);
  function handleClick() {
    if (counter === 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  }
  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      <Navbar />
      <Hero />
      <Urgency
        text={
          "يُسمح لنا إستيراد 150 قطعة فقط من منتج Urinexa كل شهر. وهذا لقلة توفر المنتج بسبب ندرة الأعشاب المستخدمة فيه مع الطلب الكبير عليها. لذلك لاتضيع هذا المنتج عليك واحجز عبوتك قبل نفاذ الكمية."
        }
        counter={counter}
        setCounter={setCounter}
        handleClick={handleClick}
      />
      <Problems />
      <Story />
      <Benefits />
      <Urgency2 />
      <Ingredients />
      <Testimonials />
      <Price />
      <FAQ />
      <Footer />
    </div>
  );
}
