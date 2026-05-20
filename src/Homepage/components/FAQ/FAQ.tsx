import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, CheckCircle2 } from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';

export const FAQ = () => {
  const texts = HomeTextConfig.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-[800px] px-6 lg:px-12 py-10 sm:py-12 lg:py-16 mb-10 sm:mb-16">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4 shadow-sm border border-indigo-100">
          <MessageCircleQuestion className="text-indigo-600" size={24} />
        </div>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0A1128] tracking-tight mb-4">
          {texts.headline}
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-500 max-w-lg">
          {texts.subheadline}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {texts.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? 'bg-white border-indigo-100 shadow-sm' : 'bg-white/50 border-gray-100 hover:border-gray-200 hover:bg-white'}`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
              >
                <span className={`text-[15px] sm:text-[16px] font-medium pr-4 transition-colors ${isOpen ? 'text-[#0A1128]' : 'text-gray-700'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${isOpen ? 'bg-indigo-50 text-indigo-600 rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                  <ChevronDown size={18} strokeWidth={2.5} />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 sm:p-6 pt-0 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
