import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ChevronRight,
  ArrowRight,
  Search,
  Rss
} from 'lucide-react';
import { ARTICLES } from '../configurations/blog/AllBlogs';

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blog & Career Guides | EuropeCV';
  }, []);

  const filteredArticles = ARTICLES.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen">
      {/* Blog Header */}
      <div className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#4F46E5] font-medium transition-colors text-[14px]"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <a 
              href="/rss.xml" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#4F46E5] font-medium transition-colors text-[14px]"
            >
              <Rss size={16} className="text-gray-400" />
              Subscribe via RSS
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-[36px] lg:text-[48px] font-bold text-[#0A1128] leading-tight tracking-tight mb-4">
                European <span className="text-[#4F46E5]">Career Insights</span>
              </h1>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                Practical guides and trends for the modern European job market.
              </p>
            </div>
            
            <div className="relative w-full max-w-sm">
              <input 
                type="text" 
                placeholder="Search resources..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all bg-white shadow-sm text-[15px]"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/blog/${article.slug}`}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#4F46E5] text-[12px] font-bold rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-gray-400 text-[13px] mb-4">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-[#0A1128] mb-3 group-hover:text-[#4F46E5] transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-3">
                    {article.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[#4F46E5] font-bold text-[14px] flex items-center gap-2">
                      Read Guide
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4 flex justify-center">
                <Search size={48} className="opacity-20" />
            </div>
            <h3 className="text-[20px] font-bold text-[#0A1128] mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse all categories.</p>
          </div>
        )}

        {/* Future Pagination Placeholder */}
        <div className="mt-20 flex items-center justify-center">
            <div className="text-gray-400 text-[14px] font-medium flex items-center gap-2">
                <div className="w-8 h-[1px] bg-gray-200"></div>
                More guides arriving weekly
                <div className="w-8 h-[1px] bg-gray-200"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
