import React, { useState } from 'react';
import {
  Laptop,
  Landmark,
  HeartPulse,
  Settings,
  Megaphone,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Scale,
  Users,
  Truck,
  Headphones,
  Palette,
  BarChart,
  Building,
  Plane,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  FileText,
  Check,
  ChevronRight
} from 'lucide-react';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';

const marketIcons = [
  Laptop,
  Landmark,
  HeartPulse,
  Settings,
  Megaphone,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Scale,
  Users,
  Truck,
  Headphones,
  Palette,
  BarChart,
  Building,
  Plane,
];

interface CountryCompliance {
  code: string;
  name: string;
  scheme: string;
  jobs: string;
  photoRule: 'Forbidden' | 'Optional' | 'Recommended' | 'Standard';
  language: string;
  tip: string;
  badge: string;
}

const countryComplianceData: CountryCompliance[] = [
  {
    code: 'de',
    name: 'Germany',
    scheme: 'Opportunity Card (Chancenkarte)',
    jobs: '1.5M+ Active Openings',
    photoRule: 'Recommended',
    language: 'German or English accepted',
    tip: 'Keep certifications ready. German employers heavily value structured copies of physical diplomas and exact work certificates.',
    badge: 'Tech & Engineering Core'
  },
  {
    code: 'gb',
    name: 'United Kingdom',
    scheme: 'Skilled Worker Visa Pathway',
    jobs: '950K+ Active Openings',
    photoRule: 'Forbidden',
    language: 'Strictly British English',
    tip: 'Strict anti-bias laws. Remove your photo, date of birth, age, gender, and nationality entirely to prevent automatic filter rejection.',
    badge: 'Finance & Software Hub'
  },
  {
    code: 'fr',
    name: 'France',
    scheme: 'Talent Passport Initiative',
    jobs: '800K+ Active Openings',
    photoRule: 'Standard',
    language: 'French highly preferred',
    tip: 'Include a clean professional headshot. Place brief, powerful bilingual summaries stating your target starting date immediately.',
    badge: 'Global Tech Passport'
  },
  {
    code: 'nl',
    name: 'Netherlands',
    scheme: 'Highly Skilled Migrant Scheme',
    jobs: '400K+ Active Openings',
    photoRule: 'Optional',
    language: 'English standard in Tech',
    tip: 'Focus on scaling stats. Dutch startup and corporate recruiters evaluate metrics, performance gains, and cultural alignment tools.',
    badge: 'High English Proficiency'
  },
  {
    code: 'es',
    name: 'Spain',
    scheme: 'Digital Nomad Visa Program',
    jobs: '350K+ Active Openings',
    photoRule: 'Recommended',
    language: 'Spanish or English',
    tip: 'Write a warm, engaging personal profile. Highlight remote self-reliance and project management certifications clearly.',
    badge: 'Nomad & Remote Haven'
  },
  {
    code: 'ch',
    name: 'Switzerland',
    scheme: 'Specialist Quotas Program',
    jobs: '250K+ Active Openings',
    photoRule: 'Standard',
    language: 'German, French, or English',
    tip: 'Detail every work contract precisely. Swiss CVs expect highly chronological stability with structured reference contacts.',
    badge: 'Highest Average Salaries'
  },
  {
    code: 'ie',
    name: 'Ireland',
    scheme: 'Critical Skills Employment Permit',
    jobs: '180K+ Active Openings',
    photoRule: 'Forbidden',
    language: 'English standard',
    tip: 'Similar to the UK: do not upload a photo. Irish tech recruiters prioritize direct links to clean portfolio/GitHub source projects.',
    badge: 'MNC European HQ Gateway'
  },
  {
    code: 'se',
    name: 'Sweden',
    scheme: 'Fast-Track Swedish Work Visa',
    jobs: '200K+ Active Openings',
    photoRule: 'Optional',
    language: 'English or Swedish',
    tip: 'Keep it transparent and egalitarian. Mention collaboration, team scale, and balance in your brief core intro statement.',
    badge: 'Sustainability & Tech Pioneer'
  }
];

interface MarketInsight {
  demand: string;
  matchRate: string;
  template: string;
  focus: string;
  category: 'Tech & Science' | 'Finance & Strategy' | 'Ops & Healthcare' | 'Creative & People';
}

const marketInsightsRecord: Record<string, MarketInsight> = {
  'Technology': { demand: 'Critical Shortage', matchRate: '99.2%', template: 'Modern Tech Mono', focus: 'AI Systems, Solution Multi-threading, Cloud Core', category: 'Tech & Science' },
  'Finance & Banking': { demand: 'Highly Competitive', matchRate: '98.5%', template: 'Classic Swiss Serif', focus: 'Asset Optimization, Regulatory Compliance Frameworks', category: 'Finance & Strategy' },
  'Healthcare & Medical': { demand: 'Severe Understaffing', matchRate: '97.4%', template: 'Clean Academic', focus: 'Clinical Certifications, Practitioner Patient Care Protocols', category: 'Ops & Healthcare' },
  'Engineering': { demand: 'High Demand', matchRate: '98.9%', template: 'Structured Minimalist', focus: 'QA Protocols, Project Life-Cycle Planning', category: 'Tech & Science' },
  'Marketing & Advertising': { demand: 'Balanced / High Talent', matchRate: '96.8%', template: 'Impact Bold', focus: 'Client Acquisition Strategy, Paid Channels ROI Metrics', category: 'Creative & People' },
  'Sales & Business Development': { demand: 'High Demand', matchRate: '97.2%', template: 'Executive Chronology', focus: 'KPI Conversion Metrics, Enterprise Pipeline Growth', category: 'Creative & People' },
  'Consulting': { demand: 'Elite Selection', matchRate: '99.0%', template: 'Swiss Modern', focus: 'Strategic Vision, Complex Stakeholder Alignment', category: 'Finance & Strategy' },
  'Education & Teaching': { demand: 'Stable Shortage', matchRate: '96.2%', template: 'Academic Structured', focus: 'Curriculum Blueprinting, Interactive Classroom Tech', category: 'Creative & People' },
  'Legal': { demand: 'Highly Regulated', matchRate: '97.8%', template: 'Classic Letterpress', focus: 'Regulatory Compliance Codes, Multi-border Due Diligence', category: 'Finance & Strategy' },
  'Human Resources': { demand: 'Steady Expansion', matchRate: '97.1%', template: 'Balanced Minimal', focus: 'Global Talent Acquisition, EU Labor Directives', category: 'Creative & People' },
  'Operations & Supply Chain': { demand: 'Strategic Importance', matchRate: '98.3%', template: 'Logistics Clean', focus: 'Value Chain Optimization, Procurement Reductions', category: 'Ops & Healthcare' },
  'Customer Support & Service': { demand: 'High Volume', matchRate: '95.8%', template: 'Direct Modern', focus: 'SLA Escalations, Quality Assurance Tracking', category: 'Creative & People' },
  'Design & Creative': { demand: 'Portfolio-Primacy', matchRate: '96.5%', template: 'Visual Elegant', focus: 'Figma Systems, Typography Grid layouts', category: 'Creative & People' },
  'Data & Analytics': { demand: 'Critical Shortage', matchRate: '99.1%', template: 'Tech Data Mono', focus: 'Predictive Pipelines, Advanced Quant Modelling', category: 'Tech & Science' },
  'Construction & Architecture': { demand: 'Highly Specialised', matchRate: '97.0%', template: 'Architectural Clean', focus: 'Industrial Safety Codes, CAD Blueprints, Tendering', category: 'Ops & Healthcare' },
  'Hospitality & Tourism': { demand: 'Seasonal Growth', matchRate: '95.2%', template: 'Service Minimalist', focus: 'VVIP Guest Relations, Multi-language Team Coordination', category: 'Creative & People' },
};

export const BuiltFor = () => {
  const texts = HomeTextConfig.builtFor;
  const [selectedCountry, setSelectedCountry] = useState<CountryCompliance>(countryComplianceData[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMarket, setSelectedMarket] = useState<string>('Technology');

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const filtered = texts.jobMarkets.filter((market) => {
      if (cat === 'All') return true;
      const insight = marketInsightsRecord[market];
      return insight && insight.category === cat;
    });
    if (filtered.length > 0) {
      setSelectedMarket(filtered[0]);
    }
  };

  const filteredMarkets = texts.jobMarkets.filter((market) => {
    if (selectedCategory === 'All') return true;
    const insight = marketInsightsRecord[market];
    return insight && insight.category === selectedCategory;
  });

  const activeInsight = marketInsightsRecord[selectedMarket];

  return (
    <section className="mx-auto max-w-[1240px] px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
      <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#0A1128] tracking-tight flex items-center justify-center gap-3">
          <CheckCircle2 className="text-[#4F46E5] w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
          {texts.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column (SPAN 7): High-integrity Interactive Target Country Board */}
        <div className="lg:col-span-7 bg-[#0A1128] rounded-[20px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          {/* Background visual curve same as Compare the Difference */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-[60%] bg-[#373FE5] opacity-[0.85] rounded-l-full hidden md:block pointer-events-none z-0" 
            style={{ transform: 'translateX(20%) scale(1.2)' }}
          ></div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-[#4F46E5] shrink-0" />
                    {texts.leftTitle}
                  </h3>
                  <p className="text-xs text-indigo-200/60 font-semibold mt-0.5">
                    Select a country to view local localization advice
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-white/5 border border-white/10 text-indigo-300 px-3 py-1 rounded-full">
                  Active Standards 2026
                </span>
              </div>

              {/* Flat Interactive Grid representing countries securely */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {countryComplianceData.map((country) => {
                  const isSelected = selectedCountry.code === country.code;
                  return (
                    <button
                      key={country.code}
                      onClick={() => setSelectedCountry(country)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-indigo-600 border-[#4F46E5] text-white'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={country.name}
                        className="w-6 h-4 object-cover rounded shadow-xs shrink-0"
                      />
                      <span className="text-[12px] font-bold tracking-tight truncate">
                        {country.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Compliance HUD Panel */}
              <div className="bg-[#121E3E] rounded-2xl p-5 border border-white/5 space-y-4 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-white/5 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w80/${selectedCountry.code}.png`}
                        alt={selectedCountry.name}
                        className="w-5 h-3.5 object-cover rounded shadow-2xs"
                      />
                      <h4 className="text-white font-extrabold text-[15px]">
                        {selectedCountry.name} CV Standards
                      </h4>
                    </div>
                    <p className="text-xs text-indigo-200/70 font-semibold mt-1">
                      🎯 Route: {selectedCountry.scheme}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center">
                    <span className="text-[10px] text-gray-400 font-bold bg-[#0A1128] px-2.5 py-1 rounded-lg border border-white/5">
                      {selectedCountry.jobs}
                    </span>
                  </div>
                </div>

                {/* Specific requirements visual markers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="bg-[#0A1128]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block mb-1">
                      Photo Requirement
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[12px] font-extrabold px-2 py-0.5 rounded ${
                        selectedCountry.photoRule === 'Forbidden'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : selectedCountry.photoRule === 'Recommended'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-slate-500/10 text-slate-300 border border-slate-500/20'
                      }`}>
                        {selectedCountry.photoRule}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold leading-tight">
                        {selectedCountry.photoRule === 'Forbidden' 
                          ? 'Mandatory removal rule' 
                          : 'Aligned with standards'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#0A1128]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block mb-1">
                      CV Language
                    </span>
                    <span className="text-[12px] font-bold text-slate-200 block truncate">
                      {selectedCountry.language}
                    </span>
                  </div>
                </div>

                {/* Expert Tips & Guidance block */}
                <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-900/30">
                  <div className="flex gap-2.5">
                    <AlertCircle size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                        Local Selection Bias Tip:
                    </span>
                      <p className="text-[12.5px] text-slate-300 leading-relaxed font-medium">
                        {selectedCountry.tip}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={12} className="text-emerald-500" /> Fully aligned with European Europass frameworks
              </span>
              <span className="hidden sm:inline">100% compliant with anti-discrimination rules</span>
            </div>
          </div>
        </div>

        {/* Right Column (SPAN 5): Interactive Sector Blueprint Guidelines with Dynamic Selection */}
        <div className="lg:col-span-5 flex flex-col bg-[#F8F9FC] border border-gray-100 rounded-[20px] sm:rounded-[32px] p-6 sm:p-8 justify-between shadow-xs">
          <div>
            <div className="mb-5">
              <h3 className="text-lg font-extrabold text-[#0A1128] tracking-tight flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#4F46E5] shrink-0" />
                {texts.rightTitle}
              </h3>
              <p className="text-xs text-gray-400 font-semibold mt-0.5 leading-relaxed">
                Click any sector to view optimized formatting rules and ATS keyword targets.
              </p>
            </div>

            {/* Premium Flat Category Tabs (NO animations, crisp static states) */}
            <div className="flex flex-wrap gap-1 mb-5">
              {['All', 'Tech & Science', 'Finance & Strategy', 'Ops & Healthcare', 'Creative & People'].map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0A1128] border-[#0A1128] text-white'
                        : 'bg-white border-gray-200/60 hover:border-gray-300 text-gray-500'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Grid list of sectors - beautifully matches professional list styling */}
            <div className="grid grid-cols-1 gap-2.5 max-h-[220px] overflow-y-auto pr-1 select-none [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:bg-transparent pb-3">
              {filteredMarkets.map((market) => {
                const index = texts.jobMarkets.indexOf(market);
                const Icon = marketIcons[index] || Laptop;
                const isSelected = selectedMarket === market;
                const insight = marketInsightsRecord[market];

                return (
                  <button
                    key={market}
                    onClick={() => setSelectedMarket(market)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-indigo-600 shadow-sm'
                        : 'bg-white/70 border-gray-100 hover:border-indigo-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-[#4F46E5]'
                      }`}>
                        <Icon size={16} strokeWidth={2.4} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[12.5px] font-bold text-gray-800 tracking-tight block truncate">
                          {market}
                        </span>
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block mt-0.5">
                          {insight?.category || 'General'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 shrink-0">
                      {insight && (
                        <span className="text-[9.5px] font-bold text-[#4F46E5] bg-indigo-50 px-1.5 py-0.5 rounded">
                          {insight.matchRate} ATS
                        </span>
                      )}
                      <ChevronRight size={13} className={`text-gray-400 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-indigo-600' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Blueprint Guidance Block - Solid, highly legible, clean card matching page background style */}
          {activeInsight && (
            <div className="mt-5 bg-white border border-gray-200/85 rounded-2xl p-4.5 space-y-3.5 shadow-3xs text-left">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 justify-center h-2 rounded-full bg-indigo-600"></div>
                  <h4 className="font-extrabold text-[#0A1128] text-[13px] tracking-tight">
                    {selectedMarket} Parameters
                  </h4>
                </div>
                <span className="text-[9px] uppercase font-bold tracking-widest bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">
                  {activeInsight.demand}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#F8F9FC] p-2.5 rounded-xl border border-gray-100">
                  <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest block mb-1">
                    Ideal Layout Style
                  </span>
                  <span className="text-[11.5px] font-bold text-gray-800 block truncate">
                    {activeInsight.template}
                  </span>
                </div>

                <div className="bg-[#F8F9FC] p-2.5 rounded-xl border border-gray-100">
                  <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest block mb-1">
                    ATS Match Index
                  </span>
                  <span className="text-[11.5px] font-bold text-[#4F46E5] block">
                    {activeInsight.matchRate} Target
                  </span>
                </div>
              </div>

              <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50 flex gap-2">
                <Check size={14} className="text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[9.5px] font-bold text-indigo-900 uppercase tracking-wider block">
                    Key Recruiting Keywords:
                  </span>
                  <p className="text-[11.5px] text-indigo-950 font-bold truncate leading-relaxed">
                    {activeInsight.focus}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
