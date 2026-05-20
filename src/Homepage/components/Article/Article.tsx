import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';

export const Article = () => {
  return (
    <section className="mx-auto max-w-[800px] px-6 lg:px-12 py-10 sm:py-12 lg:py-16 mb-10">
      <div className="text-gray-700">
        
        <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0A1128] mb-6 tracking-tight flex items-start gap-3">
          <CheckCircle2 className="text-[#4F46E5] w-7 h-7 sm:w-8 sm:h-8 shrink-0 mt-1" />
          <span>Find Jobs in Europe and Get Hired Faster in 2026</span>
        </h2>
        
        <p className="mb-4 text-[15px] sm:text-[16px] leading-relaxed">
          The European job market in 2026 is competitive, digital, and driven by relevance. Employers receive hundreds of applications for a single role, and most companies use <strong>Applicant Tracking Systems (ATS)</strong> to filter candidates before a recruiter reviews a CV. <strong>Sending the same CV to every job</strong> is one of the main reasons candidates don’t get interviews.
        </p>

        <p className="mb-4 text-[15px] sm:text-[16px] leading-relaxed">
          To succeed in Europe, your CV needs to <strong>match each job description</strong>. This means using the right keywords, highlighting relevant experience, and aligning your skills with what employers are actively looking for.
        </p>

        <p className="mb-10 text-[15px] sm:text-[16px] leading-relaxed">
          <strong>EuropeCV helps you do this in seconds</strong> — making it easier to apply across multiple countries and industries.
        </p>

        <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A1128] mt-12 mb-8 tracking-tight">
          How to Get Hired in Europe
        </h3>

        <div className="space-y-6 mb-12 text-[15px] sm:text-[16px]">
          {[
            {
              title: "Tailor your CV to each job",
              desc: "Generic CVs rarely perform well. Matching your CV to the job description improves relevance and visibility."
            },
            {
              title: "Optimize for ATS systems",
              desc: "Most European employers use ATS software. Including the right keywords increases your chances of passing initial screening."
            },
            {
              title: "Apply across multiple countries",
              desc: "Opportunities vary by country. Expanding your search increases your chances of finding the right role."
            },
            {
              title: "Translate your CV when needed",
              desc: "Adapting your CV to local languages helps you apply more effectively in different European markets."
            },
            {
              title: "Add a tailored cover letter",
              desc: "A motivation letter that matches your CV and the job strengthens your application."
            },
            {
              title: "Focus on in-demand skills",
              desc: "Sectors like technology, healthcare, engineering, and finance continue to lead hiring in Europe."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-[13px] sm:text-[14px] mt-0.5 border border-indigo-100">
                {index + 1}
              </div>
              <div>
                <strong className="text-[#0A1128] block mb-1">{item.title}</strong>
                <span className="text-gray-600 leading-relaxed">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A1128] mt-12 mb-6 tracking-tight">
          Best Countries to Work in Europe (2026)
        </h3>

        <p className="mb-10 text-[15px] sm:text-[16px] leading-relaxed">
          Countries like <strong>Germany, Netherlands, France, Ireland, and Sweden</strong> offer strong job markets, high demand for skilled workers, and opportunities for international candidates. Many of these countries are actively hiring in sectors facing talent shortages.
        </p>

        <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A1128] mt-12 mb-6 tracking-tight">
          Common Questions About Jobs in Europe
        </h3>

        <div className="space-y-6 mb-12">
          {[
            { q: "Is it hard to get a job in Europe?", a: "It depends on your profile and how well your CV matches the job. Tailored applications perform significantly better than generic ones." },
            { q: "How long does the hiring process take?", a: "Hiring in Europe can take a few weeks to several months, often involving multiple interview stages." },
            { q: "Do I need a different CV for every job?", a: "Yes. Matching your CV to each job description increases your chances of getting interviews." },
            { q: "Are cover letters important?", a: "Yes. In many European countries, motivation letters are expected and can improve your application." },
            { q: "Can I apply in multiple languages?", a: "Yes. Translating your CV helps you apply across different countries and increases your reach." }
          ].map((qa, i) => (
            <div key={i} className="text-[15px] sm:text-[16px]">
              <strong className="block text-[#0A1128] mb-1.5">{qa.q}</strong>
              <p className="text-gray-600 leading-relaxed m-0">{qa.a}</p>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A1128] mt-12 mb-6 tracking-tight">
          Why Matching Your CV Matters
        </h3>

        <ul className="mb-12 space-y-3">
          {[
            "Increase interview chances by aligning your CV with job requirements",
            "Pass ATS filters using relevant keywords and skills",
            "Stand out to recruiters with a clear, targeted application",
            "Apply faster without rewriting your CV every time",
            "Adapt across Europe with translation and localization"
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
              <span className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A1128] mt-12 mb-6 tracking-tight">
          Make Every Application Count
        </h3>

        <p className="mb-4 text-[15px] sm:text-[16px] leading-relaxed">
          Getting hired in Europe is not about sending more applications — it’s about sending <strong>better ones</strong>. By matching your CV to each job, optimizing for ATS, generating tailored cover letters, and translating your application for different markets, you improve your chances of success.
        </p>

        <p className="text-[15px] sm:text-[16px] leading-relaxed">
          <strong>Apply smarter, save time, and get more interviews across Europe with a CV that fits every job.</strong>
        </p>

      </div>
    </section>
  );
};
