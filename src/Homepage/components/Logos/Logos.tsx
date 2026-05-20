import React from 'react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';
import { logosStyles } from './logosStyles';

export const Logos = () => {
  const texts = HomeTextConfig.logos;

  return (
    <section className={logosStyles.section}>
      <div className="bg-[#F8F9FC] rounded-[24px] lg:rounded-[36px] py-6 sm:py-4 px-6 sm:px-10 flex flex-col xl:flex-row items-center justify-between gap-8 sm:gap-10 relative">
        <div className="flex items-center gap-4 z-10 shrink-0">
          <span className="font-medium text-[#0A1128] text-base sm:text-sidebar tracking-tight text-center xl:text-left">
            {texts.headline.split('*')[0]}<span className="text-[#0A1128]">*</span> :
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-16 sm:gap-y-8 xl:flex-nowrap opacity-70 z-10">
          
          <div className="flex items-center gap-2 transform scale-90 sm:scale-100">
            <svg viewBox="0 0 384 512" className="w-[22px] h-[26px] sm:w-[26px] sm:h-[30px]" fill="#0F172A">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <span className="font-medium text-lg sm:text-[20px] text-slate-900 tracking-tight ml-1">{texts.companyNames[0]}</span>
          </div>

          <div className="flex flex-col items-center justify-center transform scale-80 sm:scale-100">
             <div className="font-[900] italic text-2xl sm:text-3xl tracking-tighter text-[#0F172A] leading-none mb-0.5" style={{ WebkitTextStroke: '1px #0F172A'}}>
               {texts.companyNames[1]}
             </div>
             <div className="h-[2px] w-[40px] sm:w-[50px] bg-[#0F172A]"></div>
          </div>

          <div className="flex items-end font-sans translate-y-[-2px] transform scale-90 sm:scale-100">
            <span className="font-extrabold text-xl sm:text-[22px] tracking-tight leading-none text-[#0F172A]">{texts.companyNames[2]}</span>
          </div>

          <div className="flex flex-col items-center justify-center translate-y-1 transform scale-90 sm:scale-100">
            <span className="font-medium text-xl sm:text-[24px] tracking-tight text-[#0F172A] leading-none">{texts.companyNames[3]}</span>
            <svg width="50" height="12" viewBox="0 0 100 25" className="mt-0.5 ml-1 sm:ml-2">
              <path d="M10,5 Q50,25 90,0 M85,-2 L90,0 L88,5" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="font-[600] font-sans text-lg sm:text-2xl tracking-[0.25em] text-[#0F172A] ml-2 transform scale-90 sm:scale-100">
            {texts.companyNames[4]}
          </div>
          
        </div>
        
        <div className="absolute -left-12 -bottom-10 lg:-left-20 lg:-bottom-8 opacity-40 xl:opacity-100 transform -rotate-12 pointer-events-none hidden md:block">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
            <path d="M20,60 C35,25 65,15 90,15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" strokeDasharray="6,4" />
            <path d="M80,5 L92,15 L80,25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
          </svg>
        </div>
      </div>
    </section>
  );
};
