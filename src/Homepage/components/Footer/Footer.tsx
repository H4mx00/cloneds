import React from 'react';
import { Linkedin, Facebook, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 lg:px-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8 mb-12">
          
          {/* Left: Logo & Description */}
          <div className="flex flex-col items-start gap-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">E</span>
              </div>
              <span className="text-[#0A1128] font-bold text-xl tracking-tight">EuropeCV</span>
            </div>
            <p className="text-gray-500 text-[15px] mt-2 max-w-sm leading-relaxed font-medium">
              Your ultimate tool for creating a tailored European CV and landing jobs abroad. Match your CV to any job description in seconds.
            </p>
          </div>

          {/* Center: Services */}
          <div className="flex flex-col gap-4 md:pl-4 lg:pl-10">
            <h4 className="font-bold text-[#0A1128] text-[16px] mb-2 tracking-tight">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                "ATS Checker",
                "Resume Checker",
                "AI Resume",
                "AI Cover Letter",
                "AI Translation"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-500 hover:text-[#4F46E5] text-[15px] font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Company */}
          <div className="flex flex-col gap-4 md:pl-4 lg:pl-10">
            <h4 className="font-bold text-[#0A1128] text-[16px] mb-2 tracking-tight">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Blog", path: "/blog" },
                { name: "About", path: "/about" },
                { name: "Pricing", path: "#" },
                { name: "Contact us", path: "/contact-us" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms", path: "/terms" },
                { name: "Impressum", path: "#" }
              ].map((item, idx) => (
                <li key={idx}>
                  {item.path.startsWith('/') ? (
                    <Link to={item.path} className="text-gray-500 hover:text-[#4F46E5] text-[15px] font-medium transition-colors">
                      {item.name}
                    </Link>
                  ) : (
                    <a href={item.path} className="text-gray-500 hover:text-[#4F46E5] text-[15px] font-medium transition-colors">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm font-medium">
            Copyright {currentYear}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:bg-[#4F46E5] hover:border-[#4F46E5] hover:text-white flex items-center justify-center transition-all">
              <Linkedin size={16} fill="currentColor" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:bg-[#4F46E5] hover:border-[#4F46E5] hover:text-white flex items-center justify-center transition-all">
              <Facebook size={16} fill="currentColor" className="border-none" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:bg-[#4F46E5] hover:border-[#4F46E5] hover:text-white flex items-center justify-center transition-all">
              <Github size={16} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
