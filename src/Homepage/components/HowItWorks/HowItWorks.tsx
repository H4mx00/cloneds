import React from 'react';
import { Sparkles, CheckCircle2, TrendingUp, FileText, Wand2 } from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';
import { howItWorksStyles } from './howItWorksStyles';

export const HowItWorks = () => {
  const texts = HomeTextConfig.howItWorks;

  return (
    <section className={howItWorksStyles.section}>
      <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0A1128] tracking-tight mb-3 whitespace-pre-line flex items-start justify-center gap-3">
          <CheckCircle2 className="text-[#4F46E5] w-7 h-7 sm:w-8 sm:h-8 shrink-0 mt-1 sm:mt-1.5" />
          <span>{texts.headline}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-14">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="h-[220px] w-full bg-[#f0f3ff] rounded-[24px] mb-5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 to-transparent"></div>

            {/* ATS Score Card - SINGLE HIGHLIGHT CARD */}
            <div className="bg-white rounded-[20px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] p-5 border border-indigo-100 flex flex-col items-center justify-center gap-3.5 w-[160px] h-[160px] relative z-10">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-sm">
                <TrendingUp size={28} className="text-emerald-600" />
              </div>
              <div className="text-center">
                <span className="text-[11px] font-bold text-gray-400 block uppercase tracking-wider leading-none mb-0.5">ATS Score</span>
                <span className="text-[26px] font-extrabold text-emerald-600 leading-none">+97%</span>
              </div>
              <span className="bg-[#12193b] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">AI Assisted</span>
            </div>
          </div>
          
          <h3 className="text-[17px] font-medium text-[#0A1128] tracking-tight">{texts.step1Title}</h3>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="h-[220px] w-full bg-[#f0f3ff] rounded-[24px] mb-5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 to-transparent"></div>
            
            {/* Motivation Letter Card - Styled like the formats selection list */}
            <div className="bg-white rounded-[20px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] p-3.5 border border-indigo-100 flex flex-col justify-between w-[160px] h-[160px] relative z-10 select-none">
              <div className="flex items-center justify-between border-b border-gray-50 pb-1.5">
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Select Format</span>
                <span className="text-[12px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded leading-none border border-emerald-100">+86%</span>
              </div>
              
              <div className="flex flex-col gap-1.5 my-auto w-full">
                <div className="flex items-center gap-2 bg-red-50/50 p-1 rounded-md border border-red-100/20">
                  <div className="w-5 h-5 rounded bg-red-100 text-red-500 flex items-center justify-center font-black text-[7px] shrink-0">PDF</div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="h-[2px] w-12 bg-gray-200 rounded-full"></div>
                    <div className="h-[1.5px] w-8 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-blue-50/50 p-1 rounded-md border border-blue-100/20">
                  <div className="w-5 h-5 rounded bg-blue-100 text-blue-500 flex items-center justify-center font-black text-[7px] shrink-0">DOCX</div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="h-[2px] w-10 bg-gray-200 rounded-full"></div>
                    <div className="h-[1.5px] w-6 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <span className="bg-[#12193b] text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">AI Assisted</span>
              </div>
            </div>
          </div>

          <h3 className="text-[17px] font-medium text-[#0A1128] tracking-tight">{texts.step2Title}</h3>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="h-[220px] w-full bg-[#f0f3ff] rounded-[24px] mb-5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 to-transparent"></div>

            {/* Flag to Flag & Spanish Resume Card - SINGLE HIGHLIGHT Visual */}
            <div className="bg-white rounded-[20px] shadow-[0_12px_24px_rgba(0,0,0,0.06)] p-5 border border-indigo-100 flex flex-col items-center justify-between w-[160px] h-[160px] relative z-10 select-none">
              {/* Flag to Flag Flow */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0">
                  <img src="https://flagcdn.com/w80/us.png" alt="US Flag" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-gray-300 font-bold text-sm">→</span>
                <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0">
                  <img src="https://flagcdn.com/w80/es.png" alt="Spain Flag" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              
              {/* Added word in big */}
              <div className="text-center my-auto">
                <span className="text-[9px] font-bold text-gray-400 block uppercase tracking-wider mb-0.5">LOCAL VIBES</span>
                <span className="text-[17px] font-black text-indigo-600 leading-none">HOJA DE VIDA</span>
              </div>
              
              {/* AI Assisted badge */}
              <span className="bg-[#12193b] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">AI Assisted</span>
            </div>
          </div>

          <h3 className="text-[17px] font-medium text-[#0A1128] tracking-tight">{texts.step3Title}</h3>
        </div>
      </div>

      {/* Action Button underneath */}
      <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center relative">
        <div className="relative">
          <button className="relative bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 sm:px-8 py-2.5 rounded-[12px] transition-all flex items-center justify-center gap-3.5 text-left active:scale-95 shadow-sm">
            {/* Glow Outline */}
            <div className="absolute inset-[-4px] rounded-[16px] border border-[#4F46E5]/40 pointer-events-none z-0 animate-cta-glow" />
            {/* 3 Lines Mark (Top Left) */}
            <svg className="absolute -top-3.5 -left-3.5 w-7 h-7 text-[#4F46E5] opacity-95 pointer-events-none select-none animate-pulse z-10" viewBox="0 0 24 24" fill="none">
              <path d="M5 13C4.2 11 4.2 8.5 5 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M9 16.5C7.6 13.5 7.6 9 9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M13 20C10.5 15.5 10.5 8 13 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <Wand2 size={20} className="shrink-0 relative z-10" />
            <div className="flex flex-col relative z-10">
              <span className="font-extrabold text-[15px] sm:text-[16px] leading-tight tracking-wide">Fix My CV</span>
              <span className="text-[11px] font-medium text-white/80 mt-0.5 whitespace-nowrap">FREE - No Credit card</span>
            </div>
          </button>
          
          {/* Arrow pointing to compare section underneath */}
          <div className="absolute -right-16 lg:-right-32 bottom-[-60px] lg:bottom-[-80px] hidden md:flex flex-col items-center opacity-75 text-indigo-600 pointer-events-none z-20">
            <svg width="100" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-12">
              <path d="M15,15 C20,45 45,75 80,85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6,4" />
              <path d="M66,84 L80,85 L73,72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[12px] font-bold text-[#4F46E5] mt-1 rotate-6 whitespace-nowrap bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 shadow-sm leading-tight">
              Look Example
            </span>
          </div>
        </div>
        <div className="w-[140px] h-[10px] mt-2.5 opacity-30">
          <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-400">
            <path d="M5 10C55 5 145 5 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M30 16C70 12 150 12 170 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};
