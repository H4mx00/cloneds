import React from 'react';
import { Briefcase, Award, TrendingUp, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';

export const Stats = () => {
  const texts = HomeTextConfig.statsMarket;

  // Pair the 3 new value statements with clean icons for premium visuals
  const statementIcons = [TrendingUp, ShieldCheck, Compass];

  return (
    <section className="w-full bg-[#FAFAFC] border-y border-gray-100 py-12 sm:py-16 mt-12 relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
        
        {/* Left Side: Headline and Human-Centric Trend Highlights */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center xl:pr-4">
          <div>
            <div className="inline-flex items-center bg-indigo-50/85 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-[#4F46E5] mb-4.5 border border-indigo-100 uppercase tracking-widest w-fit select-none">
              In-Depth Access 2026
            </div>
            
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0A1128] tracking-tight mb-3.5 leading-[1.2] flex items-center gap-3">
              <CheckCircle2 className="text-[#4F46E5] w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
              {texts.headline}
            </h2>
            
            <p className="text-[14px] sm:text-[14.5px] font-medium text-gray-500 leading-relaxed max-w-lg mb-8">
              {texts.subheadline}
            </p>
          </div>

          {/* Premium Statement Blocks (Upgraded to match light professional style perfectly) */}
          <div className="space-y-4">
            {texts.topStats.map((stat, i) => {
              const IconComponent = statementIcons[i] || TrendingUp;
              const numericalKeys = ['+4.8M', '+34%', '+28%'];
              const numericalStat = numericalKeys[i];
              return (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-3xs cursor-default hover:border-indigo-100 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-emerald-50 border border-emerald-100 shrink-0">
                    <span className="text-[16px] sm:text-[18px] font-black text-emerald-600 tracking-tight">
                      {numericalStat}
                    </span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <IconComponent size={14} className="text-indigo-600 shrink-0" />
                      <span className="text-[9.5px] font-bold text-indigo-600 uppercase tracking-widest block">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-[13.5px] sm:text-[14px] font-extrabold text-[#0A1128] leading-snug">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Enhanced Countries Board */}
        <div className="w-full lg:w-[55%] flex flex-col justify-between bg-white rounded-[24px] border border-gray-100 p-6 sm:p-8 shadow-3xs">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
              <div>
                <h3 className="text-[15px] font-extrabold text-[#0A1128] tracking-tight">
                  Priority Mobility Corridors
                </h3>
                <p className="text-[11.5px] text-gray-400 font-semibold mt-0.5">
                  Top performing target nations for international skilled profiles
                </p>
              </div>
              <span className="text-[9.5px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider hidden sm:inline-block">
                Updated Daily
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[460px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-track]:bg-transparent">
              {texts.countries.map((country, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-gray-100/60 transition-colors cursor-default"
                >
                  {/* Circular Flag representation with standard dimensions */}
                  <div className="w-9.5 h-9.5 rounded-full overflow-hidden shrink-0 border border-gray-200/95 shadow-3xs mt-0.5 bg-slate-50">
                    <img 
                      src={`https://flagcdn.com/w80/${country.code}.png`} 
                      alt={country.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-[#0A1128] truncate">
                        {country.name}
                      </span>
                      <span className="text-[9.5px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded shrink-0">
                        {country.growth} Growth
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                      <Briefcase size={11} className="shrink-0" />
                      <span className="text-[11px] font-medium text-gray-500 truncate font-semibold">
                        {country.jobs} Active Jobs
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Award size={11} className="text-indigo-400 shrink-0" />
                      <span className="text-[10px] font-bold text-indigo-600 truncate uppercase tracking-wider">
                        {country.policy}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400 font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              All figures verified on official national statistical registers
            </span>
            <span className="text-[#4F46E5] hover:underline cursor-pointer flex items-center gap-0.5">
              Explore visa options <ArrowRight size={10} />
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
