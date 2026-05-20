import React from 'react';
import { Wand2, CheckCircle2 } from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';

export const CTA = () => {
  const texts = HomeTextConfig.cta;

  return (
    <section className="w-full bg-[#0A1128] overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12 flex flex-col md:flex-row relative">
        
        {/* Left Side Content */}
        <div className="w-full md:w-[50%] py-12 sm:py-16 flex flex-col justify-center relative z-10">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white tracking-tight leading-tight mb-6 max-w-md">
            {texts.headline}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-white/90 mb-10 max-w-sm leading-relaxed">
            {texts.subheadline}
          </p>
          <div>
            <button className="relative bg-white hover:bg-slate-50 text-[#0A1128] px-6 sm:px-8 py-2.5 rounded-[12px] transition-all flex items-center justify-center gap-3.5 text-left active:scale-95 shadow-md w-full sm:w-fit">
              {/* Glow Outline */}
              <div className="absolute inset-[-4px] rounded-[16px] border border-[#4F46E5]/40 pointer-events-none z-0 animate-cta-glow" />
              {/* 3 Lines Mark (Top Left) */}
              <svg className="absolute -top-3.5 -left-3.5 w-7 h-7 text-[#4F46E5] opacity-95 pointer-events-none select-none animate-pulse z-10" viewBox="0 0 24 24" fill="none">
                <path d="M5 13C4.2 11 4.2 8.5 5 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M9 16.5C7.6 13.5 7.6 9 9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M13 20C10.5 15.5 10.5 8 13 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <Wand2 size={20} className="shrink-0 text-[#4F46E5] relative z-10" />
              <div className="flex flex-col relative z-10">
                <span className="font-extrabold text-[15px] sm:text-[16px] leading-tight tracking-wide">Fix My CV</span>
                <span className="text-[11px] font-semibold text-slate-500 mt-0.5 whitespace-nowrap">FREE - No Credit card</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side Image/Asset */}
        <div className="w-full md:w-[50%] relative min-h-[300px] md:min-h-[350px]">
          {/* Cyan Shape */}
           <div className="absolute bottom-0 right-0 md:-right-4 w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-[#d0f4f4] rounded-tl-[60px] md:rounded-tl-[80px] z-20"></div>
          
          {/* Blue Scribble SVG */}
          <svg className="absolute -top-6 md:top-8 right-10 md:right-4 w-40 sm:w-56 h-auto z-10 text-[#4F46E5] hidden md:block" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50,0 Q 150,50 50,100 T 200,100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
            <path d="M15.4293 25.4373C35.8302 24.3162 61.218 31.5544 80.5285 36.6975C106.877 43.7144 133.003 52.3276 159.208 59.882C167.318 62.2212 186.291 66.8617 190.237 77.0123C193.36 85.0456 182.253 91.5645 175.767 95.3444C154.512 107.728 129.418 114.778 105.748 121.233C87.4947 126.21 68.6186 128.79 50.0483 132.323" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M49.1918 132.551C77.4111 133.4 104.975 138.868 132.618 143.208C148.971 145.776 166.425 146.467 182.809 149.697" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M149.972 5.09766C153.945 13.9261 141.258 19.3496 135.539 23.3688" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Main Image with specific borders matching screenshot */}
          <div className="absolute inset-0 md:top-14 md:bottom-0 md:left-10 md:-right-10 bg-gray-200 md:rounded-tl-[80px] overflow-hidden z-10 flex">
             <img 
               src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Create CV" 
               className="w-full h-full object-cover object-center md:object-left-top"
             />
          </div>
        </div>
      </div>
    </section>
  );
};
