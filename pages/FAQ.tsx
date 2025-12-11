import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Do you ship internationally?",
      a: "Currently, we only ship within India. We are looking to expand our shipping capabilities in the future."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit/debit cards, UPI, Net Banking, and Cash on Delivery (COD) for eligible pin codes."
    },
    {
      q: "How can I track my order?",
      a: "Once your order is shipped, you will receive an email and SMS with the tracking details. You can also track your order from the 'My Orders' section."
    },
    {
      q: "Are the products covered under warranty?",
      a: "Yes, most of our electronics come with a standard manufacturer warranty. Warranty details are mentioned on the product page."
    },
    {
      q: "Can I return a product if I don't like it?",
      a: "Yes, we have a 7-day return policy for most items. Please ensure the product is unused and in original packaging."
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-500 mb-12">Find answers to common questions about our products and services.</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-gray-50 dark:bg-[#111] rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-900 dark:text-white">
                {faq.q}
                <span className="ml-4 flex-shrink-0 text-gray-400 group-open:hidden">
                  <Plus size={20} />
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-400 hidden group-open:block">
                  <Minus size={20} />
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
