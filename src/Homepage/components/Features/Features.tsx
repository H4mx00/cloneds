import React from 'react';
import { Sparkles, CheckCircle2, Star } from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';
import { featuresStyles } from './featuresStyles';

const FeatureCard = ({ title, description, illustration, bgColorClass, index }: { title: string, description: string, illustration: React.ReactNode, bgColorClass: string, index: number }) => (
  <div className="flex flex-col items-center text-center group">
    <div className={`h-[220px] w-full ${bgColorClass} rounded-[24px] mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-300`}>
       {illustration}
    </div>
    <div className="flex flex-col items-center gap-3 mt-1">
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-[18px] shadow-sm border border-indigo-100 flex-shrink-0">
          {index + 1}
        </div>
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0A1128] tracking-tight">{title}</h3>
      </div>
      <p className="text-[15px] sm:text-[16px] text-gray-500 leading-relaxed font-medium max-w-[280px]">
        {description}
      </p>
    </div>
  </div>
);

export const Features = () => {
  const texts = HomeTextConfig.features;

  return (
    <section className={featuresStyles.section}>
      <div className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0A1128] tracking-tight mb-3">
          {texts.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12 xl:gap-x-14">
        {/* Card 1 */}
        <FeatureCard 
          index={0}
          title={texts.cards[0].title}
          description={texts.cards[0].description}
          bgColorClass="bg-[#f5f5f5]"
          illustration={
            <div className="w-[140px] bg-white rounded-xl shadow-xl p-4 flex flex-col gap-3 scale-110">
               <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Select Format</span>
                 <div className="w-2 h-2 rounded-full bg-green-400"></div>
               </div>
               <div className="flex items-center gap-3 bg-red-50/50 p-2 rounded-lg">
                 <div className="w-7 h-7 rounded bg-red-100 text-red-500 flex items-center justify-center font-black text-[10px]">PDF</div>
                 <div className="flex flex-col gap-1">
                   <div className="h-[3px] w-14 bg-gray-200 rounded-full"></div>
                   <div className="h-[2px] w-10 bg-gray-100 rounded-full"></div>
                 </div>
               </div>
               <div className="flex items-center gap-3 bg-blue-50/50 p-2 rounded-lg">
                 <div className="w-7 h-7 rounded bg-blue-100 text-blue-500 flex items-center justify-center font-black text-[10px]">DOCX</div>
                 <div className="flex flex-col gap-1">
                   <div className="h-[3px] w-12 bg-gray-200 rounded-full"></div>
                   <div className="h-[2px] w-8 bg-gray-100 rounded-full"></div>
                 </div>
               </div>
            </div>
          }
        />

        {/* Card 2 */}
        <FeatureCard 
          index={1}
          title={texts.cards[1].title}
          description={texts.cards[1].description}
          bgColorClass="bg-[#f5f5f5]"
          illustration={
            <div className="w-[150px] bg-white rounded-xl shadow-xl p-4 flex flex-col gap-3 scale-110">
               <div className="flex items-center gap-2 mb-1">
                 <Sparkles size={10} className="text-indigo-600" />
                 <span className="text-[8.5px] font-bold text-indigo-600 uppercase tracking-widest">AI IMPROVEMENT</span>
               </div>
               <div className="space-y-3">
                 <div className="flex items-start gap-2 bg-indigo-50/30 p-2 rounded-md border border-indigo-50">
                    <div className="w-3 h-3 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 shrink-0">
                       <CheckCircle2 size={8} className="text-indigo-600" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                       <div className="h-[2px] w-full bg-indigo-200 rounded-full"></div>
                       <div className="h-[2px] w-[80%] bg-indigo-100 rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex items-center justify-between mt-1 px-1">
                    <span className="text-[7.5px] font-bold text-gray-400">Cancel</span>
                    <span className="text-[7.5px] font-bold text-white bg-indigo-600 py-1.5 px-3 rounded shadow-sm">Fix now</span>
                 </div>
               </div>
            </div>
          }
        />

        {/* Card 3 */}
        <FeatureCard 
          index={2}
          title={texts.cards[2].title}
          description={texts.cards[2].description}
          bgColorClass="bg-[#f5f5f5]"
          illustration={
            <div className="w-[140px] bg-white rounded-xl shadow-xl p-4 flex flex-col gap-4 scale-110">
               <div className="flex flex-col items-center gap-1 border-b border-emerald-50 pb-3">
                 <span className="text-[7.5px] font-bold text-gray-500 uppercase tracking-widest">Match Score</span>
                 <div className="text-[18px] font-black text-emerald-500">92<span className="text-[10px] text-gray-300 ml-0.5 font-bold">%</span></div>
               </div>
               <div className="space-y-2.5">
                 <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                       <div className="h-[3px] w-12 bg-gray-200 rounded-full"></div>
                       <div className="h-[2px] w-8 bg-gray-100 rounded-full"></div>
                    </div>
                    <CheckCircle2 size={10} className="text-emerald-500" />
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                       <div className="h-[3px] w-14 bg-gray-200 rounded-full"></div>
                       <div className="h-[2px] w-10 bg-gray-100 rounded-full"></div>
                    </div>
                    <CheckCircle2 size={10} className="text-emerald-500" />
                 </div>
               </div>
            </div>
          }
        />

        {/* Card 4 */}
        <FeatureCard 
          index={3}
          title={texts.cards[3].title}
          description={texts.cards[3].description}
          bgColorClass="bg-[#f5f5f5]"
          illustration={
            <div className="w-[130px] bg-white rounded-lg shadow-xl p-4 flex flex-col gap-3 scale-110">
                <div className="flex justify-between items-center border-b border-pink-50 pb-2">
                   <div className="w-10 h-[2.5px] bg-pink-200 rounded-full"></div>
                   <div className="px-1.5 py-0.5 bg-pink-50 rounded-[2px] text-[6px] font-bold text-pink-500">DRAFT</div>
                </div>
                <div className="space-y-2 py-1">
                   <div className="h-[2px] w-full bg-gray-100"></div>
                   <div className="h-[2px] w-[95%] bg-gray-100"></div>
                   <div className="h-[2px] w-[90%] bg-gray-100"></div>
                   <div className="h-[2px] w-[95%] bg-gray-100"></div>
                   <div className="h-[2px] w-[40%] bg-gray-100"></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                   <div className="w-12 h-4 bg-gray-50 rounded-sm"></div>
                   <div className="w-4 h-4 bg-pink-100 rounded-full flex items-center justify-center">
                      <Sparkles size={7} className="text-pink-500" />
                   </div>
                </div>
            </div>
          }
        />

        {/* Card 5 */}
        <FeatureCard 
          index={4}
          title={texts.cards[4].title}
          description={texts.cards[4].description}
          bgColorClass="bg-[#f5f5f5]"
          illustration={
            <div className="w-[140px] bg-white rounded-xl shadow-xl p-4 flex flex-col gap-3 scale-110">
               <div className="text-[7.5px] font-bold text-gray-400 uppercase tracking-widest border-b border-amber-50 pb-2">Language Pack</div>
               <div className="grid grid-cols-2 gap-2">
                  <div className="bg-amber-50/50 p-1.5 rounded flex items-center gap-2 border border-amber-100/50">
                     <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-4 h-auto rounded-[1px] shadow-sm" referrerPolicy="no-referrer" />
                     <span className="text-[8px] font-bold text-amber-700">English</span>
                  </div>
                  <div className="bg-gray-50/50 p-1.5 rounded flex items-center gap-2 border border-gray-100/50 opacity-60">
                     <img src="https://flagcdn.com/w40/fr.png" alt="French" className="w-4 h-auto rounded-[1px] shadow-sm" referrerPolicy="no-referrer" />
                     <span className="text-[8px] font-bold text-gray-500">French</span>
                  </div>
                  <div className="bg-gray-50/50 p-1.5 rounded flex items-center gap-2 border border-gray-100/50 opacity-60">
                     <img src="https://flagcdn.com/w40/de.png" alt="German" className="w-4 h-auto rounded-[1px] shadow-sm" referrerPolicy="no-referrer" />
                     <span className="text-[8px] font-bold text-gray-500">German</span>
                  </div>
                  <div className="bg-gray-50/50 p-1.5 rounded flex items-center gap-2 border border-gray-100/50 opacity-60">
                     <img src="https://flagcdn.com/w40/es.png" alt="Spanish" className="w-4 h-auto rounded-[1px] shadow-sm" referrerPolicy="no-referrer" />
                     <span className="text-[8px] font-bold text-gray-500">Spanish</span>
                  </div>
               </div>
               <div className="w-full h-8 bg-amber-50 rounded-lg flex items-center justify-center mt-1 border border-amber-100/50">
                  <span className="text-[8px] font-bold text-amber-600 italic">Translating... 80%</span>
               </div>
            </div>
          }
        />

        {/* Card 6 */}
        <FeatureCard 
          index={5}
          title={texts.cards[5].title}
          description={texts.cards[5].description}
          bgColorClass="bg-[#f5f5f5]"
          illustration={
            <div className="w-[140px] bg-white rounded-xl shadow-xl p-5 flex flex-col items-center gap-4 scale-110">
               <div className="relative w-12 h-12">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#E0E7FF" strokeWidth="4"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#60A5FA" strokeWidth="4" strokeDasharray="100" strokeDashoffset="25" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-blue-600">75%</div>
               </div>
               <div className="flex flex-col items-center gap-1">
                  <span className="text-[8px] font-black text-gray-900 uppercase">Interview Match</span>
                  <div className="flex gap-0.5">
                     {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} size={8} fill={i <= 4 ? "#FBBF24" : "none"} className={i <= 4 ? "text-amber-400" : "text-gray-200"} />
                     ))}
                  </div>
               </div>
               <div className="w-full h-7 bg-emerald-50 rounded-full flex items-center justify-center gap-2 border border-emerald-100">
                  <CheckCircle2 size={10} className="text-emerald-500" />
                  <span className="text-[7.5px] font-bold text-emerald-700">OPTIMIZED FOR ATS</span>
               </div>
            </div>
          }
        />
      </div>
    </section>
  );
};
