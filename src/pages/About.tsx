import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About EuropeCV - Our Story & Mission';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about the story behind EuropeCV, a platform created to simplify CV creation for the European job market.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about the story behind EuropeCV, a platform created to simplify CV creation for the European job market.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="w-full bg-[#f8f9fc] py-12 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#4F46E5] font-medium transition-colors text-[14px] sm:text-[15px]"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        <h1 className="text-[32px] sm:text-[40px] font-bold text-[#0A1128] tracking-tight mb-8 text-center">
          About EuropeCV
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 mb-8">
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#0A1128] mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px]">
              EuropeCV started in April 2026 as a small side project with a simple idea: make it easier for people to create professional, structured CVs that match European standards. What began as an experiment quickly grew into a focused effort to help job seekers present their skills clearly and effectively across different countries in Europe.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#0A1128] mb-4">Location</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px] flex-1">
                EuropeCV is based in Baden-Württemberg, Germany, and is built with a strong understanding of the European job market and its requirements.
              </p>
              <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2 rounded-full shadow-sm whitespace-nowrap">
                <MapPin size={16} className="text-[#4F46E5]" />
                <span className="font-semibold text-[14px]">Baden-Württemberg, DE <img src="https://flagcdn.com/w20/de.png" alt="Germany flag" className="inline-block w-[18px] ml-1 rounded-[2px] shadow-sm mb-0.5" /></span>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#0A1128] mb-6">Who Created EuropeCV</h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                <img 
                  src="https://ui-avatars.com/api/?name=Hamza+Ghariani&size=256&background=4F46E5&color=fff" 
                  alt="Hamza Ghariani" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px]">
                  I created EuropeCV as an independent project, combining my background as a cybersecurity engineer and AI specialist with a simple goal: to make CV creation easier and more effective. After experiencing the challenges of building a CV for the European job market myself, I wanted to create a solution that is practical, clear, and actually useful.
                </p>
              </div>
            </div>
            
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#0A1128] mb-4">The Idea Behind EuropeCV</h2>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px] mb-4">
              The idea for EuropeCV came from my own experience as a student in Europe. After graduating, I was just like you trying to figure out how to create a CV that actually worked across different countries. It was confusing, frustrating, and time-consuming.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px]">
              After struggling with tools like Europass, I decided to create something simpler to help others avoid the same problems I faced.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold text-[#0A1128] mb-4">Why EuropeCV</h2>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px] mb-4">
              The goal of EuropeCV is straightforward:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-600 leading-relaxed text-[15px] sm:text-[16px] space-y-2">
              <li>Make CV creation simple and structured</li>
              <li>Align with European standards</li>
              <li>Help users present their skills clearly</li>
              <li>Save time without sacrificing quality</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px]">
              Instead of complex tools or generic templates, EuropeCV focuses on clarity, usability, and real-world application—helping users create CVs that work.
            </p>
          </section>
        </div>

        {/* Contact Us Card */}
        <div className="bg-[#4F46E5] rounded-2xl shadow-sm text-center p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <h2 className="text-[24px] font-bold text-white mb-3 relative z-10">Get in touch</h2>
          <p className="text-indigo-100 mb-6 text-[15px] sm:text-[16px] max-w-md mx-auto relative z-10">
            Have questions, suggestions, or just want to say hi? We'd love to hear from you.
          </p>
          <a 
            href="mailto:contact@europecv.io" 
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#4F46E5] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-sm relative z-10"
          >
            contact@europecv.io
          </a>
        </div>

      </div>
    </div>
  );
};
