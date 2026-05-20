import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Loader2, FileText, AlertCircle, ScanSearch, Wand2, ArrowRight, Gift, TrendingUp, TrendingDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loadingStep, setLoadingStep] = useState(0);
  const [revealStep, setRevealStep] = useState(-1);
  const [wordCountReveal, setWordCountReveal] = useState(0);

  const paragraphText = "Hamza is Cybersecurity Engineer studied in ESPRIT\nLast Experience in Dataplan GmbH in Germany he has good certifications such as CEH Comptia security Plus ..";

  useEffect(() => {
    if (isChecking) {
      setWordCountReveal(0);
      const wordsCount = paragraphText.split(/\s+/).filter(Boolean).length;
      const interval = setInterval(() => {
        setWordCountReveal(prev => {
          if (prev >= wordsCount) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 45); // 45ms per word to make the paragraph flow beautifully in ~1.5s
      return () => clearInterval(interval);
    }
  }, [isChecking]);

  useEffect(() => {
    if (resultsReady && revealStep < 6) {
      const timer = setTimeout(() => {
        setRevealStep(prev => prev + 1);
      }, revealStep === -1 ? 100 : 1000);
      return () => clearTimeout(timer);
    }
  }, [resultsReady, revealStep]);

  const processSelectedFile = (selected: File) => {
    setFile(selected);
    const url = URL.createObjectURL(selected);
    setPdfUrl(url);
    setIsChecking(true);
    setLoadingStep(0);
    setRevealStep(-1);
    
    const interval = setInterval(() => {
      setLoadingStep(prev => prev + 1);
    }, 1000); // 1s reveal for each checklist progress item

    setTimeout(() => {
      clearInterval(interval);
      setIsChecking(false);
      setResultsReady(true);
    }, 4000); // 4 seconds total to complete checks and transition to results
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      processSelectedFile(selected);
    }
  };

  const reset = () => {
    setFile(null);
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setPdfUrl(null);
    setIsChecking(false);
    setResultsReady(false);
  };

  return (
    <section className="w-full bg-[#f8f9fc] py-8 lg:py-12 border-t border-gray-50 relative">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 relative">
        {/* Left pointing arrow to compare section */}
        <div className="absolute -left-12 lg:-left-28 bottom-[-45px] lg:bottom-[-65px] hidden md:flex flex-col items-center opacity-65 text-indigo-600 pointer-events-none z-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75,15 C20,35 15,75 35,105" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6,4" />
            <path d="M24,96 L35,105 L42,91" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] font-bold text-[#4F46E5] mt-1 -rotate-6 whitespace-nowrap bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 shadow-sm">
            How we fix
          </span>
        </div>

        <div className="bg-white rounded-[24px] border border-gray-200 shadow-xl shadow-indigo-900/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[300px] h-[300px] bg-indigo-50/70 rounded-full blur-3xl pointer-events-none"></div>
          
          {!resultsReady && !isChecking && (
            <div className="flex flex-col md:flex-row items-stretch z-10 relative h-auto bg-gradient-to-br from-[#f8f9fc]/80 to-white">
              {/* Left Side: Value Props */}
              <div className="md:w-1/2 p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/40 text-left">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[11px] font-bold uppercase tracking-wider border border-indigo-150/50">
                    <Gift size={14} className="animate-pulse" />
                    FREE - No Account needed
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-[26px] md:text-[30px] font-extrabold text-[#0A1128] tracking-tight leading-[1.12]">
                      Let's check your current resume <span className="text-[#4F46E5] relative whitespace-nowrap">quickly<svg className="absolute w-full h-2.5 -bottom-1 left-0 text-indigo-200/60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>
                    </h2>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium">
                      Find out why recruiters are ghosting you. Our advanced analyzer runs custom tests matching 22+ European countries' recruitment criteria.
                    </p>
                  </div>
                </div>

                {/* Scannable bullets */}
                <div className="space-y-3.5 mt-8 md:mt-10">
                  <div className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <CheckCircle2 size={13} strokeWidth={3} />
                    </div>
                    <span className="text-[#0A1128] font-bold text-[13.5px]">Analyze matches for 55 EU targets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <CheckCircle2 size={13} strokeWidth={3} />
                    </div>
                    <span className="text-[#0A1128] font-bold text-[13.5px]">Extract critical missing keywords</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <CheckCircle2 size={13} strokeWidth={3} />
                    </div>
                    <span className="text-[#0A1128] font-bold text-[13.5px]">100% Private & GDPR compliant</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Upload Zone */}
              <div className="md:w-1/2 p-8 lg:p-10 flex flex-col justify-center items-center bg-white relative">
                <div className="absolute -right-8 lg:-right-32 -top-16 lg:-top-24 hidden md:block opacity-60 text-indigo-600 rotate-12 pointer-events-none">
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90,10 C90,50 60,75 20,90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6,4" />
                    <path d="M30,75 L20,90 L38,92" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const selected = e.dataTransfer.files?.[0];
                    if (selected && selected.type === "application/pdf") {
                      processSelectedFile(selected);
                    }
                  }}
                  className="w-full h-full min-h-[300px] border-2 border-dashed border-indigo-200/80 bg-slate-50/20 hover:bg-indigo-50/25 hover:border-[#4F46E5] rounded-[20px] p-6 cursor-pointer flex flex-col items-center justify-center text-center group transition-all duration-300 shadow-3xs"
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden" 
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                  
                  {/* Modern Animated Upload Icon area */}
                  <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-indigo-50 rounded-2xl group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300 ease-out"></div>
                    <UploadCloud size={28} className="text-[#4F46E5] relative z-10 transition-transform group-hover:-translate-y-0.5 duration-300" />
                  </div>

                  <h3 className="font-extrabold text-[#0A1128] text-lg lg:text-[19px] mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">
                    Upload & Fix my CV for free
                  </h3>

                  {/* Red PDF Icon and custom format bubble */}
                  <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mb-3 shadow-[0_1px_3px_rgba(244,63,94,0.03)] group-hover:bg-rose-50 transition-colors">
                    <span className="bg-rose-600 text-[8px] font-black text-white px-1 py-0.5 rounded shadow-3xs">PDF</span>
                    <FileText size={13} className="text-rose-600 fill-rose-100/50 shrink-0" />
                    <span className="text-[#9F1239] text-[11px] font-extrabold uppercase tracking-wider">PDF format accepted</span>
                  </div>

                  <p className="text-gray-400 text-[12.5px] leading-relaxed max-w-[240px] font-medium group-hover:text-slate-500 transition-colors">
                    Drag and drop your resume here, or click to browse files.
                  </p>
                  
                  <span className="text-[10px] text-gray-300 mt-4 uppercase tracking-widest font-bold">
                    Max file size 5MB
                  </span>
                </div>
              </div>
            </div>
          )}

          {isChecking && (
            <div className="flex flex-col items-center justify-center text-center py-10 lg:py-16 z-10 relative h-auto lg:h-[500px] p-6 lg:p-10 bg-gradient-to-br from-[#f8f9fc] to-white">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0A1128] mb-6 tracking-tight flex items-center gap-2.5">
                <Loader2 size={28} className="text-[#4F46E5] animate-spin" />
                Analyzing resume...
              </h3>
              
              <div className="w-full max-w-[500px] text-left border border-indigo-50 bg-indigo-50/20 p-5 rounded-2xl mb-6 font-medium text-gray-700 leading-relaxed text-[14px] sm:text-[15px] shadow-sm select-none">
                {paragraphText.split("\n").map((line, lineIdx) => {
                  const precedingLinesText = paragraphText.split("\n").slice(0, lineIdx).join(" ");
                  const startIndex = precedingLinesText ? precedingLinesText.split(/\s+/).filter(Boolean).length : 0;
                  
                  return (
                    <div key={lineIdx} className={lineIdx > 0 ? "mt-2" : ""}>
                      {line.split(/\s+/).map((word, wordIdx) => {
                        const absoluteIdx = startIndex + wordIdx;
                        return (
                          <span 
                            key={wordIdx} 
                            className={`inline-block mr-1.5 transition-all duration-300 ${
                              wordCountReveal > absoluteIdx 
                                ? 'opacity-100 translate-y-0 text-slate-800' 
                                : 'opacity-0 translate-y-2 text-transparent'
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3.5 text-left w-full max-w-[500px] bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                {[
                  "Matching +22 European Countries",
                  "Test ATS for 55 European Companies",
                  "Final Report"
                ].map((stepText, index) => {
                  const isVisible = loadingStep >= index + 1;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 transition-all duration-500 transform ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                      }`}
                    >
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                      <span className="text-[#0A1128] font-bold text-[14px] sm:text-[15px]">
                        {stepText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {resultsReady && (
            <div className="flex flex-col lg:flex-row h-auto z-10 relative bg-white min-h-[500px]">
              <div className="lg:w-1/2 h-[450px] lg:h-auto border-b lg:border-b-0 lg:border-r border-gray-100 bg-[#f8f9fc] p-5 lg:p-6 flex flex-col">
                 <div className="w-full flex justify-between items-center mb-4 px-1">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-indigo-100 text-[#4F46E5] rounded-md">
                        <FileText size={18} />
                      </div>
                      <span className="font-bold text-[#0A1128] text-[14px] truncate max-w-[160px] sm:max-w-[240px]">
                        {file?.name || 'Resume.pdf'}
                      </span>
                    </div>
                 </div>
                 <div className="flex-1 w-full rounded-xl shadow-sm border border-gray-200/60 bg-white overflow-hidden">
                   {pdfUrl ? (
                     <iframe src={pdfUrl} className="w-full h-full bg-white" title="PDF Preview" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-medium bg-gray-50">Preview unavailable</div>
                   )}
                 </div>
              </div>
              
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-white">
                <h3 className="text-[22px] lg:text-[26px] font-extrabold text-[#0A1128] mb-6 tracking-tight leading-tight flex items-center gap-2.5">
                  <ScanSearch size={28} className="text-[#4F46E5]" />
                  ATS Scan Results
                </h3>

                <div className="flex-1 w-full relative">
                  <div className="space-y-3 mb-6 text-[14px] lg:text-[15px] leading-relaxed text-gray-600">
                    <p className={`flex items-start gap-2 transition-all duration-500 ease-out transform ${revealStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <TrendingUp className="shrink-0 mt-0.5 text-emerald-600" size={16} />
                      <span>
                        <strong className="text-[#0A1128]">You're a catch!</strong> Your actual skills are a <span className="text-emerald-600 font-bold">70%</span> match for Germany and France.
                      </span>
                    </p>
                    <p className={`flex items-start gap-2 transition-all duration-500 ease-out transform ${revealStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <TrendingDown className="shrink-0 mt-0.5 text-rose-600" size={16} />
                      <span>
                        <strong className="text-[#0A1128]">The robots are ghosting you.</strong> Your ATS score is under <span className="text-rose-600 font-bold">40%</span> because the software just isn't "getting" you yet.
                      </span>
                    </p>
                    <p className={`flex items-start gap-2 transition-all duration-500 ease-out transform ${revealStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <TrendingDown className="shrink-0 mt-0.5 text-rose-600" size={16} />
                      <span>
                        <strong className="text-[#0A1128]">The missing pieces:</strong> There are <span className="text-rose-600 font-bold">21 things</span> you forgot to mention (like leaving out the best parts of a story!).
                      </span>
                    </p>
                    <p className={`flex items-start gap-2 transition-all duration-500 ease-out transform ${revealStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <TrendingDown className="shrink-0 mt-0.5 text-rose-600" size={16} />
                      <span>
                        <strong className="text-[#0A1128]">Time for a glow-up:</strong> <span className="text-rose-600 font-bold">14 points</span> need a little makeover so the algorithms finally swipe right.
                      </span>
                    </p>
                    <p className={`font-bold text-[#0A1128] text-[16px] pt-2 transition-all duration-500 ease-out transform ${revealStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      After reviewing your resume with our most intelligent ATS System checker: <span className="text-rose-600 uppercase ml-1 underline decoration-rose-600 decoration-2 underline-offset-4">REJECTED</span>
                    </p>
                  </div>

                  <div className={`pt-5 mt-2 border-t border-gray-100 transition-all duration-500 ease-out transform ${revealStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="bg-indigo-50 border border-indigo-100 rounded-[12px] p-3 mb-4 flex gap-2.5 text-indigo-900">
                      <AlertCircle className="shrink-0 mt-0.5 text-[#4F46E5]" size={16} />
                      <p className="text-[13px] font-medium leading-snug">
                        <strong className="font-bold text-[#4F46E5]">You’re qualified.</strong> 73% ATS systems will reject your CV <strong className="font-bold text-[#4F46E5]">before a human ever sees it.</strong>
                      </p>
                    </div>
                     <button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-3 text-[15px] rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                       <Wand2 size={18} className="opacity-90" />
                       Fix My CV Now
                       <ArrowRight size={18} className="ml-1 opacity-70" />
                     </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
