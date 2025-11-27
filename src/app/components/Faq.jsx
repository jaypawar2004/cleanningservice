"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "Do I need to be home during the cleaning?", answer: "No, you don't! Many of our clients leave a key or entry code. We are fully insured and vetted." },
  { question: "Are your cleaning products pet-safe?", answer: "Yes! We use eco-friendly and non-toxic products that are safe for pets and children." },
  { question: "What if I am not satisfied with the service?", answer: "We offer a 100% satisfaction guarantee. If you're not happy, let us know within 24 hours and we'll re-clean for free." },
  { question: "How do I pay?", answer: "We accept all major credit cards and online payments via our secure booking form." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              {openIndex === index ? <Minus size={20} className="text-blue-600"/> : <Plus size={20} className="text-gray-400"/>}
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm bg-gray-50 border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}