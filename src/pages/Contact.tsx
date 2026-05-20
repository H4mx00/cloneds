import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us - EuropeCV';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full bg-[#f8f9fc] py-12 lg:py-20 min-h-[calc(100-80px)]">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header Area */}
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#4F46E5] font-medium transition-colors text-[14px] mb-4"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-[32px] sm:text-[40px] font-bold text-[#0A1128] tracking-tight mb-2">
            Contact us
          </h1>
          <p className="text-gray-500 text-[16px] max-w-sm">
            Have a question or feedback? We usually respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <div className="bg-[#4F46E5] rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-indigo-100">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
              <Mail className="mb-4 opacity-80" size={24} />
              <h3 className="text-[18px] font-bold mb-1">Direct Email</h3>
              <p className="text-indigo-100 text-[14px] mb-4">Fastest for urgent issues</p>
              <a href="mailto:contact@europecv.io" className="text-white font-semibold hover:underline">
                contact@europecv.io
              </a>
            </div>
          </div>

          {/* Right Column: Compact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0A1128] mb-2">Success!</h3>
                  <p className="text-gray-600 text-[15px]">We've received your message.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-6 text-[#4F46E5] font-medium hover:underline text-[14px]">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 sm:col-span-1">
                    <label className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" required placeholder="name@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all bg-gray-50/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-1">
                    <label className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Topic</label>
                    <select 
                      required defaultValue=""
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all bg-gray-50/30 appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234F46E5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                    >
                      <option value="" disabled>Select subject</option>
                      <option value="account">Account & CV Help</option>
                      <option value="tech">Technical Issue</option>
                      <option value="feedback">Improvement Idea</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Message</label>
                    <textarea 
                      required rows={3} placeholder="How can we help?"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all bg-gray-50/30 resize-none"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2 mt-2">
                    <button 
                      type="submit" disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-3 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338CA] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
