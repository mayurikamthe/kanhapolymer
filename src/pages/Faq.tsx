import { useState } from "react";

const Faqs = [
  {
    question: "What materials are your bags made of?",
    answer:
      "Our bags are made from eco-friendly PP woven, jute, canvas, and recycled materials to ensure both durability and sustainability.",
  },
  {
    question: "How can I place a bulk order?",
    answer:
      "You can contact us through the 'Contact' page or call our sales team directly. We offer special discounts on bulk orders.",
  },
  {
    question: "Do you offer custom printing on bags?",
    answer:
      "Yes, we provide customized printing services for logos, brand names, and messages on selected bag types.",
  },
  {
    question: "What is the estimated delivery time?",
    answer:
      "Orders are usually delivered within 5–7 business days depending on your location.",
  },
  {
    question: "Can I return or exchange a bag?",
    answer:
      "Yes, you can return or exchange a product within 7 days of delivery, provided it is unused and in original condition.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {Faqs.map((item, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left font-semibold text-lg"
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <p className="text-gray-700 mt-2">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
