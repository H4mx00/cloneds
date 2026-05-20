import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Link as LinkIcon, 
  Facebook, 
  Twitter, 
  Linkedin, 
  CheckCircle2,
  Hash
} from 'lucide-react';
import { ARTICLES } from '../../configurations/blog/AllBlogs';

export const EuropeanCVGuide = () => {
  const [copied, setCopied] = useState(false);
  const { slug } = useParams<{ slug: string }>();

  // If we want this component to handle a specific slug or be dynamic
  // The user specifically mentioned this file for the European CV Guide
  // But if we want it to be dynamic based on slug, we could use currentSlug
  const currentSlug = slug || 'how-to-make-european-cv-in-2026';
  const article = ARTICLES.find(a => a.slug === currentSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} | EuropeCV`;
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" />;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Blog Hero Section */}
      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-gray-900">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 max-w-[900px] mx-auto px-6 pb-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-[#0A1128] border border-white/20 rounded-xl font-medium transition-all text-[14px] mb-8 backdrop-blur-sm"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-indigo-200 text-[14px] mb-4">
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full font-bold text-[12px] uppercase tracking-wider">{article.category}</span>
            <div className="flex items-center gap-1.5 line-clamp-1">
              <Calendar size={14} />
              {article.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              {article.readTime}
            </div>
          </div>
          <h1 className="text-[36px] md:text-[52px] font-bold text-white leading-tight tracking-tight max-w-3xl">
            {article.title.includes('European CV') ? (
              <>
                {article.title.split('European CV')[0]}
                <span className="text-indigo-400">European CV</span>
                {article.title.split('European CV')[1]}
              </>
            ) : article.title}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        {/* Article Body */}
        <article className="flex-1 max-w-[800px]">
          <div className="prose prose-lg prose-indigo max-w-none">
            {article.content}
          </div>

          {/* Social Share Footer */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-bold text-[14px] uppercase tracking-wider">Share Article</span>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Facebook size={18} />
                </button>
                <button 
                  onClick={handleCopyLink}
                  className={`flex items-center gap-2 px-4 h-10 rounded-full font-medium transition-all ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {copied ? <CheckCircle2 size={16} /> : <LinkIcon size={16} />}
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-3 py-2 px-4 bg-gray-50 rounded-xl border border-gray-100">
              <img src={article.author.avatar} alt="Author" className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-[14px] font-bold text-[#0A1128]">{article.author.name}</div>
                <div className="text-[12px] text-gray-500 leading-none">{article.author.role}</div>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-[320px] shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* CTA Card */}
            <div className="bg-[#0A1128] rounded-[24px] p-8 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <h3 className="text-[20px] font-bold mb-3 relative z-10">Land your dream job in Europe.</h3>
              <p className="text-gray-400 text-[14px] mb-6 relative z-10 leading-relaxed">
                Create a professional, ATS-optimized CV in minutes with our 2026-ready templates.
              </p>
              <a 
                href="https://europecv.io/login" 
                className="inline-flex items-center justify-center w-full py-3 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338CA] transition-all shadow-lg shadow-indigo-500/20"
              >
                Build My CV Now
              </a>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-[24px] p-8 border border-gray-100">
              <h3 className="text-[18px] font-bold text-[#0A1128] mb-2">Related Articles</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Stay tuned! More expert guides and career insights in the <span className="text-[#4F46E5] font-medium">{article.category}</span> category are arriving next week.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-[12px] font-bold text-indigo-400 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                  Updating Soon
                </div>
              </div>
            </div>

            {/* Keywords Section */}
            <div className="px-4">
              <h3 className="text-[16px] font-bold text-[#0A1128] mb-4 flex items-center justify-between">
                Keywords
                <Hash size={16} className="text-gray-300" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map(kw => (
                  <a 
                    key={kw.name} 
                    href={kw.url}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-[12px] font-medium rounded-full cursor-pointer hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                  >
                    {kw.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
