import React from 'react';

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: React.ReactNode;
  keywords: { name: string; url: string; }[];
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'how-to-make-european-cv-in-2026',
    title: 'How to make a European CV in 2026',
    description: 'The European job market is evolving faster than ever. Learn how to optimize your CV for the human-AI filter and highlight transversal skills.',
    image: '/src/assets/images/blog_european_cv_guide_1779201850029.png',
    date: 'May 19, 2026',
    readTime: '8 min read',
    category: 'Guide',
    author: {
      name: 'Mark Weber',
      role: 'CV Strategy Expert',
      avatar: 'https://ui-avatars.com/api/?name=Mark+Weber&background=4F46E5&color=fff'
    },
    keywords: [
      { name: 'Build European Resume', url: 'https://europecv.io/login' },
      { name: 'ATS Optimized CV', url: 'https://europecv.io/login' },
      { name: 'European CV Format 2026', url: 'https://europecv.io/login' },
      { name: 'Europass CV Alternative', url: 'https://europecv.io/login' },
      { name: 'Professional Resume Builder', url: 'https://europecv.io/login' },
      { name: 'Modern CV Templates', url: 'https://europecv.io/login' }
    ],
    content: (
      <>
        <p className="text-[18px] text-gray-600 leading-relaxed mb-8 font-medium">
          The European job market is evolving faster than ever. In 2026, a simple list of your past tasks is no longer enough to catch the eye of recruiters in Berlin, Paris, or Madrid. To stand out, you need a document that speaks the language of modern European companies.
        </p>

        <h2 className="text-[28px] font-bold text-[#0A1128] mt-12 mb-6">1. The Shift to Skills-First Hiring</h2>
        <p className="text-gray-600 mb-6">
          Major European tech hubs are shifting away from rigid degree requirements toward skills-based assessments. Your CV should front-load "Transversal Skills" (adaptability, digital literacy, cross-cultural communication) alongside technical expertise.
        </p>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl my-8">
          <p className="italic text-indigo-900 font-medium font-sans">
            "In 2026, 75% of European HR departments use AI-driven screening that prioritizes dynamic skill tagging over static job titles."
          </p>
        </div>

        <h2 className="text-[28px] font-bold text-[#0A1128] mt-12 mb-6">2. Optimizing for the "Human-AI" Filter</h2>
        <p className="text-gray-600 mb-6">
          Modern Applicant Tracking Systems (ATS) in Europe aren't just looking for keywords; they're looking for context. Instead of just "Project Management," use "Agile project scaling in decentralized European teams."
        </p>
        <ul className="space-y-4 mb-8 list-none pl-0">
          <li className="flex items-start gap-3">
            <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700"><strong>Use Standard Layouts:</strong> Stick to clean, single-column formats.</span>
          </li>
          <li className="flex items-start gap-3">
             <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700"><strong>Quantifiable Impacts:</strong> Replace "Handled sales" with "Increased B2B revenue by 22% in the DACH region."</span>
          </li>
        </ul>

        <h2 className="text-[28px] font-bold text-[#0A1128] mt-12 mb-6">3. Visual Presentation Matters</h2>
        <p className="text-gray-600 mb-8">
          Professionalism in 2026 means minimal design with high readability. Avoid "creativity bars" or complex infographics unless you're in a creative field. Use a font like <strong>Inter</strong> or <strong>Outfit</strong> for a contemporary, trustworthy feel.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 my-12">
          <div className="bg-gray-100 p-2 flex items-center gap-2 border-b border-gray-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-4 text-[10px] text-gray-400 font-mono uppercase tracking-widest">Premium Template v4.0</div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern CV Template" 
            className="w-full"
          />
        </div>

        <h2 className="text-[28px] font-bold text-[#0A1128] mt-12 mb-6">Conclusion</h2>
        <p className="text-gray-600 mb-12">
          Building a European CV in 2026 is about balancing technical precision with human narrative. Ensure your document is a living reflection of your growth, not just a historical archive.
        </p>
      </>
    )
  }
];
