import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  const faqs = [
    {
      question: "المنتج غالي الثمن ، لا امتلك المال؟",
      answer:
        "صحيح  قد لا يكون السعر رخيص حقًا ، لكن احكم بنفسك - ما المنتج الرخيص الذي سيساعدك على التخلص من أعراض طبية صعبة ويحفظ لك النتيجة أيضًا؟. يعتمد منتجنا على أساس طبيعي ولا يسبب آثارًا جانبية ويحسن التمثيل الغذائي الذي سيمةحك قوة جسدية وجنسية مهما كان عمرك او طبيعة جسمك او الأمراض التي تعاني منها.",
    },
    {
      question: "كيف أضمن أن المنتج فعال وسيحقق لي النتيجة المطلوبة؟",
      answer:
        "بالطبع, نتفهم أن هناك بعض الشكوك في جودة أو فعالية المنتج, لهذا السبب نسأل كل زبون للتأكد من أن المنتج سيساعده حقًا. أيضًا ، سيتم إرفاق شهادة الجودة في طلبك ، حتى تكون مقتنعًا بجودة المنتج. بالإضافة لإمكانية إرجاع المنتج في حال عدم الحصول على نتيجة فعالة. في المقابل ، لكي تحصل على قوة وطاقة جنسية وتتخلص من من مشاكل الضعف الجنسي ، و لكي نتمكن من أن نضمن ذلك ، يجب عليك الالتزام بعناية بالتعليمات وعدم مقاطعة استخدام المنتج.",
    },
    {
      question: "هل يجب علي إستشارة طبيب؟",
      answer:
        "أتفهم أن رأي الطبيب سيكون موثوقًا بالنسبة لك ، لذلك بصفتي خبير في المنتج ، ألفت انتباهك إلى حقيقة أنك تطلب منتجًا طبيعيًا وآمنًا تمامًا لا يحتوي على كيمياء ، لذلك فهو يستخدم بدون وصفة طبية من الطبيب. معظم الأدوية التي يصفها الأطباء كيميائية ، أي أنها تؤثر على التمثيل الغذائي في الجسم وتسبب مشاكل في الأمعاء والكبد وما إلى ذلك. ، لذلك لديهم العديد من موانع الاستعمال والآثار الجانبية والقيود. أعتقد أنك واجهت هذا في العديد من الادويةوليس سراً أن الأطباء يوصون بالعقاقير التي تدفع لهم ثمنها مختبرات صنع الأدوية. نحن نعمل مباشرة مع الزبائن. من خلال استخدام منتجنا ، فأنت لا تخفي الأعراض لفترة من الوقت فحسب ، بل تقضي على السبب الأساسي.",
    },
    {
      question: "هل يمكنني الحصول على شهادة الجودة؟",
      answer:
        "نعم ، أفهمك ، يسعدنا تزويدك بشهادة الجودة ، ولكن على المستوى القانوني ، يجب أن تأتي الشهادة فقط مع المنتج نفسه , عندما يصلك المنتج سيكون مرقق بشهادة الجودة الخاصة به.",
    },
    {
      question: "لماذا لا يباع منتجكم في الصيدلية؟",
      answer:
        "أتفق معك ، سيكون هناك دائمًا خوف عند الطلب عبر الإنترنت ، ومن ناحية أخرى ، عندما اشتريت الدواء من الصيدلية لمدة من الزمن ، لم تكن خائفًا من أنه لن يساعدك ، على الرغم من حقيقة انه لم تثبت فعالية هذه الأدوية بأي شكل من الأشكال ، والتي لم تساعدك في التخلص من الأعراض والمرض نفسه تقدم تدريجيًا ، في حين أن منتجنا تم اختباره و لدينا الاف ردود الفعل الإيجابية. ",
    },
    {
      question: "لدي إستفسارات أخرى, كيف يمكنني الحصول على إجابات؟",
      answer:
        "عند إرسال طلبك للمنتج سيقوم خبير لدينا بالتواصل معك للإجابة على جميع إستفساراتك إذا وجدت وتأكيد طلبك.",
    },
  ];

  return (
    <div className="py-16 bg-white">
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
          الأسئلة الشائعة
        </motion.h2>

        <motion.div variants={listAnimation} className="space-y-4 transition">
          {faqs.map((faq, index) => (
            <motion.div
              variants={listAnimation}
              key={index}
              className="border border-[#137131] rounded-lg"
            >
              <motion.button
                variants={listAnimation}
                transition={{ duration: 0.3 }}
                className="w-full text-right px-6 py-4 flex items-center justify-between transition hover:shadow-lg hover:bg-green-100"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <motion.span
                  transition={{ duration: 0.3 }}
                  className="font-semibold text-lg text-gray-900 transition"
                >
                  {faq.question}
                </motion.span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#137131] transition" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#137131] transition" />
                )}
              </motion.button>
              {openIndex === index && (
                <div className="px-6 pb-4 transition">
                  <p className="text-gray-600 transition">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
