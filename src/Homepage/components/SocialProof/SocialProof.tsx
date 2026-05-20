import React from 'react';
import { Star } from 'lucide-react';

const users = [
  {
    name: 'Amira B.',
    title: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=533',
    from: { code: 'tn', name: 'Tunisia' },
    workingIn: { code: 'de', name: 'Germany' }
  },
  {
    name: 'Mateo G.',
    title: 'SecOps Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=533',
    from: { code: 'br', name: 'Brazil' },
    workingIn: { code: 'es', name: 'Spain' }
  },
  {
    name: 'Sarah M.',
    title: 'Senior PM',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=533',
    from: { code: 'in', name: 'India' },
    workingIn: { code: 'gb', name: 'UK' }
  },
  {
    name: 'Klaus W.',
    title: 'Operations Dir.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=533',
    from: { code: 'pl', name: 'Poland' },
    workingIn: { code: 'at', name: 'Austria' }
  },
  {
    name: 'Elena D.',
    title: 'Data Strategist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=533',
    from: { code: 'it', name: 'Italy' },
    workingIn: { code: 'ie', name: 'Ireland' }
  },
  {
    name: 'Aris K.',
    title: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=533',
    from: { code: 'gr', name: 'Greece' },
    workingIn: { code: 'nl', name: 'Netherlands' }
  }
];

export const SocialProof = () => {
  return (
    <section id="social-proof-section" className="w-full bg-[#FFFFFF] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Rating and Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          {/* Star Icons */}
          <div className="flex items-center gap-1 mb-3 bg-indigo-50/50 px-3 py-1.5 rounded-full border border-indigo-100/30">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-amber-500 fill-amber-500 animate-pulse-slow" />
            ))}
          </div>
          
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#0A1128] tracking-tight leading-none mb-3">
            Real Users. Real Success
          </h2>
          <p className="text-[14px] sm:text-[15px] font-semibold text-slate-600 max-w-2xl">
            🎖️ 90-Day Job Guarantee: Get hired or we manually fix your CV for free
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {users.map((user, index) => (
            <div 
              key={index} 
              id={`user-proof-card-${index}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 p-3 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Visual Placeholder: 3:4 aspect ratio photo of beautiful professional */}
                <div className="aspect-[3/4] w-full rounded-xl overflow-hidden relative border border-gray-50">
                  <img 
                    src={user.image} 
                    alt={user.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Profile short details */}
                <div className="mt-3 text-left">
                  <h3 className="font-extrabold text-[15px] text-[#0A1128] leading-tight group-hover:text-indigo-600 transition-colors">
                    {user.name}
                  </h3>
                  <p className="text-[11px] font-medium text-gray-500 leading-tight mt-0.5">
                    {user.title}
                  </p>
                </div>
              </div>

              {/* Flags Pathway: From & Working In Details */}
              <div className="mt-4 pt-3.5 border-t border-gray-100 space-y-2">
                {/* Origin Country */}
                <div className="flex items-center justify-between text-[11px] text-gray-500">
                  <span className="font-medium text-gray-400">From</span>
                  <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                    <img 
                      src={`https://flagcdn.com/w40/${user.from.code}.png`} 
                      className="w-4.5 h-3 rounded-sm object-cover border border-gray-100 shadow-xs" 
                      alt={user.from.name} 
                      referrerPolicy="no-referrer"
                    />
                    {user.from.name}
                  </span>
                </div>

                {/* Destination Country */}
                <div className="flex items-center justify-between text-[11px] text-gray-500">
                  <span className="font-medium text-gray-400">Working in</span>
                  <span className="flex items-center gap-1.5 font-bold text-indigo-600 bg-indigo-50/50 px-1.5 py-0.5 rounded border border-indigo-100/55 shadow-3xs">
                    <img 
                      src={`https://flagcdn.com/w40/${user.workingIn.code}.png`} 
                      className="w-4.5 h-3 rounded-sm object-cover border border-gray-100 shadow-xs" 
                      alt={user.workingIn.name} 
                      referrerPolicy="no-referrer"
                    />
                    {user.workingIn.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
