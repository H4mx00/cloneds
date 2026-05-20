import React, { useState, useRef, useEffect } from 'react';
import { Code, Mail, Phone, MapPin, Star, TrendingUp, ArrowRight, Wand2, CheckCircle2 } from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';

const MockCVBefore = () => (
  <div className="w-full h-full bg-white flex text-gray-800 text-[6.5px] sm:text-[7.5px] leading-tight select-none pointer-events-none rounded-[inherit]">
    <div className="w-[30%] bg-[#3A3F47] text-white p-2 sm:p-4 flex flex-col items-center h-full">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden mb-3 border border-gray-400 shrink-0">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" />
      </div>
      <div className="w-full text-left overflow-hidden">
        <h3 className="font-bold border-b border-gray-500 pb-0.5 mb-1.5 uppercase text-[7px] sm:text-[9px]">CONTACT</h3>
        <p className="mb-0.5 text-gray-300 truncate">sarah.mitchell@example.com</p>
        <p className="mb-0.5 text-gray-300">+44 20 7123 9876</p>
        <p className="mb-0.5 text-gray-300">London, UK</p>
        <p className="mb-0.5 text-gray-300 truncate">sarahmitchell.co</p>
        
        <h3 className="font-bold border-b border-gray-500 pb-0.5 mb-1.5 mt-3 uppercase text-[7px] sm:text-[9px]">EDUCATION</h3>
        <div className="mb-1.5">
          <p className="font-bold text-white leading-[1.1]">MSc Product Management</p>
          <p className="text-gray-300 text-[6px]">London School of Economics</p>
        </div>
        <div>
          <p className="font-bold text-white leading-[1.1]">BSc Computer Science</p>
          <p className="text-gray-300 text-[6px]">University of Manchester</p>
        </div>

        <h3 className="font-bold border-b border-gray-500 pb-0.5 mb-1.5 mt-3 uppercase text-[7px] sm:text-[9px]">SKILLS</h3>
        <ul className="list-disc pl-2.5 text-gray-300 space-y-0.5 text-[6px] sm:text-[7px]">
          <li>Product strategy</li>
          <li>Stakeholder management</li>
          <li>A/B testing</li>
          <li>SQL, Mixpanel</li>
          <li>OKR & Goal setting</li>
        </ul>
      </div>
    </div>
    <div className="w-[70%] h-full p-3 sm:p-5 bg-white flex flex-col overflow-hidden">
      <div className="mb-2 sm:mb-3">
        <h1 className="text-[14px] sm:text-[18px] lg:text-[20px] font-bold text-gray-900 leading-none mb-0.5 tracking-tight uppercase">Sarah Mitchell</h1>
        <h2 className="text-[8px] sm:text-[10px] text-gray-600 font-bold uppercase">Senior Product Manager</h2>
      </div>
      
      <div className="mb-3">
        <h3 className="font-bold border-b border-gray-300 pb-0.5 mb-1 text-[7.5px] sm:text-[9px]">ABOUT ME</h3>
        <p className="text-gray-600 leading-normal text-[6.5px] sm:text-[8px]">
          Senior Product Manager with 9+ years building B2B SaaS. experienced leading cross-functional squads and mentoring junior PMs. I focus on outcomes over features and move key metrics.
        </p>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <h3 className="font-bold border-b border-gray-300 pb-0.5 mb-1.5 text-[7.5px] sm:text-[9px]">WORK EXPERIENCE</h3>
        
        <div className="mb-2">
          <div className="font-bold text-[7.5px] sm:text-[9px] text-gray-900">Senior Product Manager | Northbridge Systems</div>
          <div className="text-gray-500 mb-0.5 italic">Jan 2021 - Present</div>
          <ul className="list-disc pl-3 text-gray-600 space-y-0.5 text-[6.5px] sm:text-[8px]">
            <li>Lead product strategy for £5M ARR analytics platform.</li>
            <li>Increased adoption by 23% through redesigned onboarding.</li>
            <li>Built and mentored a team of three associate PMs.</li>
          </ul>
        </div>
        
        <div className="mb-2">
          <div className="font-bold text-[7.5px] sm:text-[9px] text-gray-900">Product Manager | Brightwave Technologies</div>
          <div className="text-gray-500 mb-0.5 italic">Sep 2017 - Dec 2020</div>
          <ul className="list-disc pl-3 text-gray-600 space-y-0.5 text-[6.5px] sm:text-[8px]">
            <li>Owned backlog for customer support platform with 20k+ users.</li>
            <li>Reduced average time-to-resolution by 18% through workflow updates.</li>
          </ul>
        </div>
      </div>

      <div className="mt-1 sm:mt-2 border-t border-gray-200 pt-1.5">
        <h3 className="font-bold text-[7.5px] sm:text-[9px] mb-1">REFERENCES</h3>
        <div className="grid grid-cols-2 gap-x-3 text-[6px] sm:text-[7px]">
          <div>
            <p className="font-bold text-gray-800">James Chen</p>
            <p className="text-gray-500">VP Product / Northbridge</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">Emma Walsh</p>
            <p className="text-gray-500">Head of Engineering / Brightwave</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MockCVAfter = () => (
  <div className="w-full h-full bg-white flex text-gray-800 text-[6.5px] sm:text-[7.5px] leading-tight select-none pointer-events-none rounded-[inherit]">
    <div className="w-[30%] bg-[#1E3A8A] text-white p-2 sm:p-4 flex flex-col items-center h-full">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden mb-3 border-2 border-indigo-300 shrink-0 relative">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" />
      </div>
      <div className="w-full text-left overflow-hidden">
        <h3 className="font-bold text-indigo-100 border-b border-indigo-700 pb-0.5 mb-1.5 uppercase text-[7px] sm:text-[9px]">CONTACT</h3>
        <p className="mb-0.5 text-indigo-100 flex items-center gap-1"><Mail size={6}/> sarah.mitchell@gmail.com</p>
        <p className="mb-0.5 text-indigo-100 flex items-center gap-1"><Phone size={6}/> +44 20 7123 9876</p>
        <p className="mb-0.5 text-indigo-100 flex items-center gap-1"><MapPin size={6}/> London, UK</p>
        <p className="mb-0.5 text-indigo-100 flex items-center gap-1"><Star size={6}/> sarahmitchell.co</p>
        
        <h3 className="font-bold text-indigo-100 border-b border-indigo-700 pb-0.5 mb-1.5 mt-3 uppercase text-[7px] sm:text-[9px]">EDUCATION</h3>
        <div className="mb-1.5">
          <p className="font-bold text-white leading-[1.1]">MSc Product Management</p>
          <p className="text-indigo-200/80 text-[6px]">London School of Economics</p>
        </div>
        <div>
          <p className="font-bold text-white leading-[1.1]">BSc Computer Science</p>
          <p className="text-indigo-200/80 text-[6px]">University of Manchester</p>
        </div>

        <h3 className="font-bold text-indigo-100 border-b border-indigo-700 pb-0.5 mb-1.5 mt-3 uppercase text-[7px] sm:text-[9px]">SKILLS</h3>
        <ul className="space-y-0.8 text-[6px] sm:text-[7px]">
          <li className="bg-indigo-400/30 px-1 rounded -ml-1 text-white font-medium">Product Strategy & Roadmaps</li>
          <li className="bg-indigo-400/30 px-1 rounded -ml-1 text-white font-medium">Cross-functional Leadership</li>
          <li>Stakeholder Management</li>
          <li className="bg-indigo-400/30 px-1 rounded -ml-1 text-white font-medium">Data Analysis (SQL, Looker)</li>
          <li>GTM Planning & Agile Delivery</li>
          <li>OKR & Goal Setting</li>
        </ul>
      </div>
    </div>
    <div className="w-[70%] h-full p-3 sm:p-5 bg-white relative flex flex-col overflow-hidden">
      <div className="mb-2 sm:mb-3">
        <h1 className="text-[14px] sm:text-[18px] lg:text-[20px] font-black text-[#0B152A] leading-none mb-0.5 tracking-tight uppercase">Sarah Mitchell</h1>
        <h2 className="text-[8px] sm:text-[10px] text-indigo-600 font-bold mb-1 uppercase tracking-wide">Senior Product Manager</h2>
      </div>
      
      <div className="mb-3 relative group">
        <h3 className="font-bold border-b border-indigo-100 pb-0.5 mb-1 text-[7.5px] sm:text-[9px] text-indigo-900">ABOUT ME</h3>
        <div className="absolute -inset-0.5 bg-emerald-50/30 rounded z-0 pointer-events-none border border-emerald-100/50"></div>
        <p className="text-gray-700 relative z-10 leading-normal text-[6.5px] sm:text-[8px]">
          Strategic Product Leader with <span className="text-emerald-700 font-bold bg-emerald-100/40 px-0.5 rounded">9+ years excellence</span> scaling B2B SaaS. Expert in user-centric discovery, consistently driving <span className="text-indigo-600 font-bold bg-indigo-50 px-0.5 rounded">exponential growth</span> and aligning cross-functional teams with OKRs.
        </p>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <h3 className="font-bold border-b border-indigo-100 pb-0.5 mb-1.5 text-[7.5px] sm:text-[9px] text-indigo-900 uppercase tracking-wide">WORK EXPERIENCE</h3>
        
        <div className="mb-2.5">
          <div className="font-bold text-[7.5px] sm:text-[9px] text-[#0B152A] flex justify-between items-center">
            Senior Product Manager
            <span className="text-[5.5px] sm:text-[6.5px] bg-emerald-100 text-emerald-700 px-1 rounded font-bold uppercase tracking-tighter">Promoted</span>
          </div>
          <div className="text-indigo-500 mb-0.5 font-bold italic text-[7px] sm:text-[8.5px]">Northbridge Systems | 2021 - Present</div>
          <ul className="list-disc pl-3 text-gray-700 space-y-0.5 text-[6.5px] sm:text-[8px] leading-snug">
            <li>Spearheaded strategy for <span className="font-bold text-gray-900 bg-gray-100/50 px-0.5 rounded">£5M ARR analytics platform</span>, serving 400+ EMEA clients.</li>
            <li>Catalyzed <span className="text-emerald-700 font-bold">23% adoption surge</span> and <span className="text-emerald-700 font-bold">15% expansion revenue</span> growth.</li>
            <li>Mentored 3 high-performing PMs, establishing org-wide discovery rituals.</li>
          </ul>
        </div>
        
        <div className="mb-2.5">
          <div className="font-bold text-[7.5px] sm:text-[9px] text-[#0B152A]">Product Manager</div>
          <div className="text-indigo-500 mb-0.5 font-bold italic text-[7px] sm:text-[8.5px]">Brightwave Technologies | 2017 - 2020</div>
          <ul className="list-disc pl-3 text-gray-700 space-y-0.5 text-[6.5px] sm:text-[8px] leading-snug">
            <li>Directed backlog for support platform with <span className="font-bold text-[#0B152A]">20k+ daily users</span>.</li>
            <li>Optimized workflows to <span className="text-emerald-700 font-bold">slash resolution time by 18%</span> via new KB.</li>
            <li>Delivered API/SSO capabilities securing 12 enterprise deals in FY2020.</li>
          </ul>
        </div>
      </div>

      <div className="mt-1 sm:mt-2 border-t border-indigo-100 pt-2 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold text-[7px] sm:text-[8.5px] mb-0.5 text-[#0B152A] uppercase">REFERENCES</h3>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-gray-800 text-[6px] sm:text-[7px]">James Chen <span className="text-gray-400 font-normal">| VP Product</span></p>
            <p className="font-bold text-gray-800 text-[6px] sm:text-[7px]">Emma Walsh <span className="text-gray-400 font-normal">| Engineering</span></p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="text-[9px] sm:text-[11px] font-black text-indigo-600 leading-tight">MAKEMYCV</div>
          <div className="text-[5px] sm:text-[6px] text-gray-400 font-medium">AI-ENHANCED TEMPLATE v2.1</div>
        </div>
      </div>
    </div>
  </div>
);

export const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const texts = HomeTextConfig.compareDifference;

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      // Also listen to mousemove on window to make it smoother
      const handleWindowMouseMove = (e: MouseEvent) => handleMove(e.clientX);
      window.addEventListener('mousemove', handleWindowMouseMove);
      return () => {
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleMouseUp);
        window.removeEventListener('mousemove', handleWindowMouseMove);
      };
    }
  }, [isDragging]);

  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 w-full relative">
      <div className="relative w-full max-w-[1100px] bg-[#0A1128] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-2xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 md:p-16 gap-10 md:gap-16">
      
      {/* Background visual curve */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[60%] bg-[#373FE5] opacity-[0.85] rounded-l-full hidden md:block" 
        style={{ transform: 'translateX(20%) scale(1.2)' }}
      ></div>

      {/* Left Side Text & Cards */}
      <div className="w-full md:w-[45%] flex flex-col justify-start text-left h-full relative z-10 md:py-4">
         <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-indigo-200 mb-4 border border-white/10 uppercase tracking-widest">
               {texts.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-medium text-white mb-3 sm:mb-4 tracking-tight leading-[1.15]">
              {texts.headline}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-white/80 font-medium leading-relaxed max-w-[400px]">
              {texts.description}
            </p>
         </div>

         {/* The Cards */}
         <div className="space-y-3 sm:space-y-4 flex-1">
            {/* ATS Score Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[16px] p-4 flex items-center justify-between">
               <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
                     <TrendingUp size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[13px] sm:text-[14px]">{texts.atsOptimization.title}</h4>
                    <p className="text-white/60 text-[11px] sm:text-[12px] font-medium mt-0.5">{texts.atsOptimization.description}</p>
                  </div>
               </div>
               <div className="text-xl font-bold text-[#10B981]">{texts.atsOptimization.scoreBase}<span className="text-[12px] text-[#10B981]/60 font-medium ml-0.5">{texts.atsOptimization.scoreMax}</span></div>
            </div>
            
            {/* Job Matching Score */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[16px] p-4 flex items-center justify-between">
               <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
                     <TrendingUp size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[13px] sm:text-[14px]">{texts.jobMatching.title}</h4>
                    <p className="text-white/60 text-[11px] sm:text-[12px] font-medium mt-0.5">{texts.jobMatching.description}</p>
                  </div>
               </div>
               <div className="text-xl font-bold text-[#10B981]">{texts.jobMatching.scoreBase}<span className="text-[12px] text-[#10B981]/60 font-medium ml-0.5">{texts.jobMatching.scoreMax}</span></div>
            </div>

            {/* Interview Score */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[16px] p-4 flex items-center justify-between">
               <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
                     <TrendingUp size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[13px] sm:text-[14px]">{texts.interviewScore.title}</h4>
                    <p className="text-white/60 text-[11px] sm:text-[12px] font-medium mt-0.5">{texts.interviewScore.description}</p>
                  </div>
               </div>
               <div className="text-xl font-bold text-[#10B981]">{texts.interviewScore.scoreBase}<span className="text-[12px] text-[#10B981]/60 font-medium ml-0.5">{texts.interviewScore.scoreMax}</span></div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 relative bg-white hover:bg-slate-50 text-[#0A1128] px-6 sm:px-8 py-2.5 rounded-[12px] transition-all flex items-center justify-center gap-3.5 text-left active:scale-95 shadow-md w-full sm:w-fit">
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

      {/* Right Side Slider (Resume Container) */}
      <div 
        className="w-full md:w-[55%] flex items-center justify-center relative touch-none z-10"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        <div 
          ref={containerRef}
          className={`relative w-full max-w-[500px] aspect-[1/1.414] mx-auto shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-transparent ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
        >
          {/* Before AI (Left side, base layer) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[inherit]">
            <MockCVBefore />
          </div>
          
          {/* After AI (Right side, top layer, clipped from left) */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none rounded-[inherit] overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <MockCVAfter />
          </div>

          {/* Slider Handle overlay (only over the resume) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* The line */}
            <div 
              className="absolute top-0 bottom-0 w-[4px] bg-[#1E293B] transition-colors duration-150"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* The knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#1E293B] rounded-full flex items-center justify-center text-white pointer-events-auto cursor-ew-resize shadow-lg">
                 <Code size={22} strokeWidth={2.8} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
