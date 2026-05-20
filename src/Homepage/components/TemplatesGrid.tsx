import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cvTemplateImages = [
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/35/resume_template_professional.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/378/resume_template_stockholm.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/388/resume_template_vienna.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/380/resume_template_sydney.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/376/resume_template_london.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/382/resume_template_dublin.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/384/resume_template_madrid.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/374/resume_template_milan.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/372/resume_template_new_york.webp',
  'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/webp_image/386/resume_template_paris.webp'
];

const MiniCVPreview = ({ 
  index,
  highlightedName
}: { 
  index: number;
  highlightedName?: string;
}) => {
  const imageUrl = cvTemplateImages[index % cvTemplateImages.length];

  return (
    <div className="w-full aspect-[1/1.4] bg-white border border-gray-200 rounded text-left shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
      <img src={imageUrl} alt={`CV Template ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

type TemplateType = {
  role: string;
  company: string;
  logo: string;
  flag: string;
  h: number;
  variant: 1 | 2 | 3;
  colorTheme: 'gray' | 'blue' | 'indigo' | 'emerald';
};

const templates: TemplateType[] = [
  { role: 'SAP Founder', company: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', flag: 'de', h: 4.5, variant: 1, colorTheme: 'gray' },
  { role: 'Student Technical Assistant', company: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg', flag: 'se', h: 5.5, variant: 2, colorTheme: 'blue' },
  { role: 'Front-End Engineer', company: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg', flag: 'de', h: 3.5, variant: 3, colorTheme: 'indigo' },
  { role: 'Senior Business Analyst', company: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg', flag: 'gb', h: 3.5, variant: 1, colorTheme: 'gray' },
  { role: 'Data Engineer', company: 'Booking.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Booking.com_Logo_2013.svg', flag: 'nl', h: 3.5, variant: 2, colorTheme: 'gray' },
  { role: 'Software Developer', company: 'Revolut', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Revolut_logo_on_white.svg', flag: 'gb', h: 3.5, variant: 3, colorTheme: 'emerald' },
  { role: 'Corporate Rotational Graduate', company: 'Ericsson', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ericsson_logo.svg', flag: 'se', h: 4, variant: 1, colorTheme: 'emerald' },
  { role: 'Senior Project Manager', company: 'adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg', flag: 'de', h: 5.5, variant: 2, colorTheme: 'blue' },
  { role: 'Creative Producer', company: 'IKEA', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg', flag: 'se', h: 3.5, variant: 3, colorTheme: 'gray' },
  { role: 'Media Production Internship', company: 'BBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/BBC.svg', flag: 'gb', h: 3.5, variant: 1, colorTheme: 'indigo' }
];

export const TemplatesGrid = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400; // Scroll by roughly 1-2 items
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#f8f9fc] py-16 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="relative mb-10">
          <div className="absolute right-0 top-0 bottom-0 hidden md:flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="text-center w-full max-w-2xl mx-auto">
            <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A1128] tracking-tight mb-5">
              Join professionals hired by top European companies
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-[10px] hover:bg-gray-50 transition-colors shadow-sm text-[15px] w-full sm:w-auto">
                View all Examples
              </button>
              <button className="px-6 py-2.5 bg-[#4F46E5] text-white font-medium rounded-[10px] hover:bg-[#4338CA] transition-colors shadow-sm text-[15px] w-full sm:w-auto">
                Upload your CV
              </button>
            </div>
          </div>
          
          {/* Mobile Arrows positioned below text */}
          <div className="md:hidden flex items-center justify-end gap-3 mt-6">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 -mx-6 px-6 lg:-mx-12 lg:px-12 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {templates.map((tpl, idx) => (
            <div 
              key={idx} 
              className="flex flex-col cursor-pointer group flex-shrink-0 w-[80vw] sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-25.6px)] snap-start"
            >
              <MiniCVPreview 
                index={idx}
                highlightedName={
                  tpl.role === 'SAP Founder' ? 'Jacob Jacquet' : 
                  tpl.variant === 2 ? 'Matthew Jones' : 
                  tpl.variant === 3 ? 'Lisa Hayes' : 
                  'Charles Bloomberg'
                }
              />
              <div className="mt-4 text-left">
                <h4 className="font-bold text-[14px] text-gray-900 leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{tpl.role}</h4>
                <div className="flex items-center gap-2.5">
                  <img 
                    src={tpl.logo} 
                    alt={tpl.company} 
                    className={`object-contain`}
                    style={{ height: `${tpl.h * 4}px` }} 
                  />
                  <img 
                    src={`https://flagcdn.com/w20/${tpl.flag}.png`} 
                    alt={tpl.flag} 
                    className="w-[20px] rounded-[2px] shadow-sm border border-gray-200 opacity-90"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

