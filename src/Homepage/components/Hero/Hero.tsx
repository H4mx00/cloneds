import React from 'react';
import { Star, Sparkles, TrendingUp, Video, MapPin, Phone, Mail, Linkedin, CheckCircle2, ArrowRight, Wand2 } from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';

export const TrustpilotStars = () => (
  <div className="flex gap-[3px] items-center">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="bg-[#00B67A] w-6 h-6 flex items-center justify-center rounded-sm">
        <Star size={14} fill="white" className="text-white" />
      </div>
    ))}
  </div>
);

type ThemeColor = 'indigo' | 'slate' | 'rose' | 'emerald' | 'amber';

interface ThemeConfig {
  primary: string;
  lightBg: string;
  lightBorder: string;
  darkBg: string;
  accent: string;
}

const THEMES: Record<ThemeColor, ThemeConfig> = {
  indigo: {
    primary: 'text-indigo-700',
    lightBg: 'bg-indigo-100/50',
    lightBorder: 'border-indigo-100/50',
    darkBg: 'bg-[#F0F2F5]',
    accent: 'text-indigo-400'
  },
  slate: {
    primary: 'text-slate-700',
    lightBg: 'bg-slate-100/50',
    lightBorder: 'border-slate-100/50',
    darkBg: 'bg-[#E2E8F0]',
    accent: 'text-slate-400'
  },
  rose: {
    primary: 'text-rose-700',
    lightBg: 'bg-rose-100/50',
    lightBorder: 'border-rose-100/50',
    darkBg: 'bg-[#FEE2E2]',
    accent: 'text-rose-400'
  },
  emerald: {
    primary: 'text-emerald-700',
    lightBg: 'bg-emerald-100/50',
    lightBorder: 'border-emerald-100/50',
    darkBg: 'bg-[#D1FAE5]',
    accent: 'text-emerald-400'
  },
  amber: {
    primary: 'text-amber-700',
    lightBg: 'bg-amber-100/50',
    lightBorder: 'border-amber-100/50',
    darkBg: 'bg-[#FEF3C7]',
    accent: 'text-amber-400'
  }
};

export const MiniCV = ({ themeColor = 'indigo' }: { themeColor?: ThemeColor }) => {
  const theme = THEMES[themeColor];
  
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] w-[360px] h-[520px] flex font-sans text-gray-800 relative bg-clip-padding p-3 gap-3 transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
      <div className={`w-[38%] ${theme.darkBg} rounded-[16px] p-4 flex flex-col shrink-0 h-full overflow-hidden transition-colors duration-300`}>
        <div className="space-y-6 flex flex-col h-full">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider mb-2 text-gray-900 border-b border-gray-300 pb-1">Contact</h4>
            <div className="space-y-2 text-[7.5px] text-gray-600">
              <div className="flex items-center gap-1.5"><MapPin size={8} /><p>Harringay, London</p></div>
              <div className="flex items-center gap-1.5"><Phone size={8} /><p>+44 7123 456 789</p></div>
              <div className="flex items-center gap-1.5"><Mail size={8} /><p className="truncate">elsa.manet@gmail.com</p></div>
              <div className="flex items-center gap-1.5"><Linkedin size={8} /><p>linked.in/elsa-manet</p></div>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider mb-2 text-gray-900 border-b border-gray-300 pb-1">Skills</h4>
            <ul className="space-y-1.5 text-[7.5px] text-gray-600 font-medium">
              <li className="flex items-center gap-1.5"><span className="text-[6px]">◆</span> Ready-to-Wear Sales</li>
              <li className="flex items-center gap-1.5"><span className="text-[6px]">◆</span> Customer Relations</li>
              <li className={`flex items-center gap-1.5 ${theme.primary} ${theme.lightBg} px-1 -ml-1 rounded transition-colors duration-300`}><span className="text-[6px]">◆</span> Strategic Inventory Control</li>
              <li className="flex items-center gap-1.5"><span className="text-[6px]">◆</span> Visual Merchandising</li>
              <li className={`flex items-center gap-1.5 ${theme.primary} ${theme.lightBg} px-1 -ml-1 rounded transition-colors duration-300`}><span className="text-[6px]">◆</span> High-End Luxury Consulting</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white pr-2 py-4 flex flex-col gap-5 overflow-hidden">
        <div className="space-y-0.5 relative">
          <h1 className="text-2xl font-bold tracking-[0.05em] text-gray-900 leading-none">ELSA MANET</h1>
          <h2 className="text-[11px] font-medium text-gray-500 tracking-wide">Sales Advisor</h2>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  const texts = HomeTextConfig.hero;

  return (
    <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-0 sm:mt-1 lg:mt-4">
      <div className="bg-[#F8F9FC] rounded-[36px] sm:rounded-[48px] flex flex-col md:flex-row relative overflow-hidden min-h-[420px] md:min-h-[580px]">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[48%] bg-[#0B152A] hidden md:block shadow-2xl" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 pt-8 pb-10 sm:py-12 md:py-16 md:pl-20 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-5 md:mb-4 md:items-start">
             <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/150?img=47" alt="User 1" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white shadow-sm object-cover" />
                <img src="https://i.pravatar.cc/150?img=12" alt="User 2" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white shadow-sm object-cover" />
                <img src="https://i.pravatar.cc/150?img=33" alt="User 3" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white shadow-sm object-cover" />
              </div>
            <div className="text-xs sm:text-sm font-medium text-[#0A1128]">
              <span className="text-indigo-600 font-medium mr-1">{texts.usersCount}</span> 
              {texts.usersText}
            </div>
          </div>
          <h1 className="text-[1.75rem] sm:text-[2.75rem] leading-[1.15] font-medium text-[#0A1128] tracking-tight mb-4">
            {texts.headline}
          </h1>
          <p className="text-[13px] sm:text-[15px] text-gray-500 mb-6 sm:mb-8 max-w-lg leading-relaxed font-medium mx-auto md:mx-0">
            {texts.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 md:mb-6 w-full max-w-2xl mx-auto md:mx-0">
            <button className="relative w-full flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-4 py-2.5 rounded-[10px] transition-all flex items-center justify-center gap-3 text-left">
              {/* Glow Outline */}
              <div className="absolute inset-[-4px] rounded-[14px] border border-[#4F46E5]/40 pointer-events-none z-0 animate-cta-glow" />
              {/* 3 Lines Mark (Top Left) */}
              <svg className="absolute -top-3.5 -left-3.5 w-7 h-7 text-[#4F46E5] opacity-95 pointer-events-none select-none animate-pulse z-10" viewBox="0 0 24 24" fill="none">
                <path d="M5 13C4.2 11 4.2 8.5 5 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M9 16.5C7.6 13.5 7.6 9 9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M13 20C10.5 15.5 10.5 8 13 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <Wand2 size={20} className="shrink-0 relative z-10" />
              <div className="flex flex-col relative z-10">
                <span className="font-bold text-[15px] sm:text-[16px] leading-tight">Fix My CV</span>
                <span className="text-[11px] font-medium text-white/80 mt-0.5 whitespace-nowrap">FREE - No Credit card</span>
              </div>
            </button>
            <button className="w-full flex-1 bg-[#EA4335] hover:bg-[#D93025] text-white px-4 py-2.5 rounded-[10px] transition-all flex items-center justify-center gap-3 text-left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-bold text-[15px] sm:text-[16px] leading-tight">Signup with Google</span>
                <span className="text-[11px] font-medium text-white/90 mt-0.5 whitespace-nowrap">One click - Instant Account</span>
              </div>
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-[#0A1128]">{texts.trustpilotReview}</span>
            <TrustpilotStars />
            <div className="flex items-center text-sm font-medium text-gray-700">
              <span>{texts.trustpilotOn}</span>
              <span className="flex items-center ml-1.5 space-x-1">
                <Star size={16} fill="#00B67A" className="text-[#00B67A] -mt-0.5" />
                <span className="font-medium text-[#0A1128]">{texts.trustpilotName}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full md:w-[55%] flex items-center justify-center p-3 sm:p-8 md:p-0 mt-0 md:mt-0 min-h-[400px] sm:min-h-[500px] md:h-auto overflow-visible">
          <div className="relative w-full max-w-[600px] aspect-square flex justify-center items-center md:-translate-x-[60px] scale-[0.4] xs:scale-[0.55] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Woman working on laptop" className="absolute left-[5%] top-[10%] -ml-[70px] w-[300px] h-[450px] object-cover rounded-[28px] shadow-2xl z-10 opacity-40 md:opacity-100 grayscale-[20%]" />
            <div className="relative md:absolute md:right-[5%] md:-right-4 md:top-[8%] z-20 sm:rotate-2 shadow-2xl rounded-[20px]">
              <MiniCV themeColor="indigo" />
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none scale-95">
                <div className="bg-[#4F46E5] p-[3px] rounded-full shadow-[0_10px_25px_-5px_rgba(79,70,229,0.3)]">
                  <div className="bg-[#0A1128] text-white px-6 py-2.5 rounded-full flex items-center gap-2 border border-white/5">
                     <Sparkles size={15} className="text-white fill-white" />
                     <span className="font-medium text-[14px] tracking-tight whitespace-nowrap">{texts.miniCVAiGenerate}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-[8%] -left-4 xs:-left-8 sm:-left-12 md:-left-16 bg-white p-2.5 rounded-[16px] shadow-[0_20px_50px_-5px_rgba(0,0,0,0.15)] ring-1 ring-gray-100 flex items-center gap-2 xs:gap-3 z-30 cursor-default animate-bounce-slow">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F3F2FF] flex items-center justify-center text-[#5B5FC7]">
                  <Video size={16} fill="currentColor" />
                </div>
                <div className="flex flex-col pr-2 xs:pr-3">
                  <span className="text-[11px] sm:text-[13px] font-medium text-[#0A1128] leading-tight">{texts.miniCVInvite.label}</span>
                  <span className="text-[9px] sm:text-[11px] text-[#5B5FC7] font-medium mt-0.5">{texts.miniCVInvite.tool}</span>
                </div>
              </div>
              <div className="absolute top-[68%] -left-4 xs:-left-12 sm:-left-16 md:-left-20 bg-white p-3 rounded-[20px] shadow-[0_20px_50px_-5px_rgba(0,0,0,0.15)] ring-1 ring-gray-100 flex items-center gap-2.5 xs:gap-3.5 z-30 cursor-default w-[180px] xs:w-[210px] sm:w-[230px]">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ml-0.5 xs:ml-1">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="#F3F4F6" strokeWidth="4" fill="none" />
                    <path strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="#4F46E5" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-[10px] sm:text-[12px] font-bold text-gray-800">{texts.miniCVAts.score}</span>
                </div>
                <div className="flex flex-col pr-1 xs:pr-2">
                  <span className="text-[12px] sm:text-[14px] font-medium text-[#0A1128] leading-tight">{texts.miniCVAts.label}</span>
                  <span className="text-[9px] sm:text-[11px] text-[#00B67A] font-medium tracking-wide mt-1 flex items-center gap-1">
                    <TrendingUp size={10} strokeWidth={3} /> {texts.miniCVAts.sub}
                  </span>
                </div>
              </div>
              <div className="absolute top-[58%] -mt-[80px] sm:-mt-[90px] -right-2 xs:-right-4 md:-right-8 bg-white/95 backdrop-blur rounded-[16px] p-2 sm:p-2.5 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] ring-1 ring-gray-100 flex flex-col gap-2 z-30 cursor-default w-[120px] xs:w-[140px] sm:w-[160px]">
                <div className="text-[9px] sm:text-[11px] font-bold text-gray-800 px-0.5 xs:px-1 flex items-center gap-1.5"><Sparkles size={9} className="text-[#4F46E5]" /> {texts.miniCVTranslate.label}</div>
                <div className="flex items-center justify-between bg-gray-50/80 p-1.5 sm:p-2 rounded-[12px] border border-gray-100/80">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                    <img src="https://flagcdn.com/w80/fr.png" alt="French Flag" className="w-full h-full object-cover" />
                  </div>
                  <ArrowRight size={10} strokeWidth={2.5} className="text-gray-400" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                    <img src="https://flagcdn.com/w80/gb.png" alt="UK Flag" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
