import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Scale, AlertTriangle, UserCheck, CreditCard, Trash2, HelpCircle } from 'lucide-react';

type Language = 'EN' | 'DE';

export const Terms = () => {
  const [lang, setLang] = useState<Language>('EN');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = lang === 'EN' ? 'Terms of Service | EuropeCV' : 'Allgemeine Geschäftsbedingungen | EuropeCV';
  }, [lang]);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const enContent = (
    <div className="space-y-16">
      <section id="section-1">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">1</span>
          Scope, Contractual Partner, and Language
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            1.1. These Terms and Conditions apply to all visitors, users, and registered members who access or use EuropeCV within the European Union and globally. By accessing, registering, or using the Service, you agree to be bound by these Terms.
          </p>
          <p>
            1.2. If you are using the service as a consumer (Verbraucher) pursuant to § 13 BGB (German Civil Code), you retain all statutory protective rights under your home jurisdiction.
          </p>
          <p>
            1.4. The binding language of the contract is English. For users operating inside Germany, text references may correspond structurally to standard local legal frameworks.
          </p>
          <div className="mt-6 border-l-2 border-indigo-100 pl-8 py-2">
            <h3 className="font-bold text-[#0A1128] mb-2">Contractual Partner</h3>
            <div className="text-[15px] text-gray-700 leading-relaxed">
              <strong>EuropeCV Tech Solutions</strong><br />
              Friedrichstraße 123<br />
              10117 Berlin, Germany<br />
              Email: contact@europecv.io
            </div>
          </div>
        </div>
      </section>

      <section id="section-2">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">2</span>
          Description of Digital Services
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            EuropeCV operates an automated, cloud-based platform utilizing advanced Artificial Intelligence (AI) models. The system provides:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Automated parsing and layout rendering of structural resumes.</li>
            <li>Generative AI text-synthesis for optimized cover letters.</li>
            <li>Automated machine-translation into diverse European languages.</li>
          </ul>
        </div>
      </section>

      <section id="section-3">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">3</span>
          Account Registration, Age Gate, and Security
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            <strong>3.1. Age Requirement:</strong> The services are strictly directed toward individuals who are at least 16 years of age. In compliance with GDPR, we do not intentionally process data from minors under 16.
          </p>
          <p>
            <strong>3.2. Account Accuracy:</strong> You must provide an accurate email address. You are responsible for protecting your credentials.
          </p>
          <p>
            <strong>3.3. Prohibited Activities:</strong> Scraping, reverse-engineering our AI prompts, or automated querying via custom bots is prohibited and may lead to legal action.
          </p>
        </div>
      </section>

      <section id="section-4">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">4</span>
          Specific AI Disclaimer and Liability Limitations
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
            <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} />
              Nature of Artificial Intelligence
            </h3>
            <p className="text-orange-800/80 text-sm">
              Generative AI can generate outputs that are contextually invalid or inaccurate (AI hallucinations). It is your sole, absolute responsibility to manually audit and verify every single word before submission.
            </p>
          </div>
          <p>
            <strong>4.3. No Job Guarantees:</strong> EuropeCV is a drafting assistant tool. We do not guarantee career success, employment offers, or recruitment feedback. 
          </p>
          <p>
            <strong>4.4. Limitation of Liability:</strong> We are liable without limitation for damages caused willfully or through gross negligence. For simple negligence, our liability is limited to the foreseeable, typically occurring damage related to material contractual obligations.
          </p>
        </div>
      </section>

      <section id="section-5">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">5</span>
          User Data License Grant
        </h2>
        <p className="text-gray-600 leading-relaxed">
          You retain 100% ownership of your raw personal data and the text content generated. To provide the services, you grant us a temporary, non-exclusive license to host, cache, and process your details. This license terminates upon file deletion or account closure.
        </p>
      </section>

      <section id="section-6">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">6</span>
          Payments, Subscriptions, and Billing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Certain premium features require a paid tier. Prices displayed inside the EU are final and include statutory VAT. We utilize secure third-party payment gateways like Stripe. Your billing cycle is governed by the chosen provider's conditions.
        </p>
      </section>

      <section id="section-7">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">7</span>
          GDPR Minimization and File Purges
        </h2>
        <div className="text-gray-600 space-y-4">
          <p>
            <strong>7.1. Registered Profiles:</strong> You can delete documents or your account at any time. Erase occurs irretrievably within 24-48 hours.
          </p>
          <p>
            <strong>7.2. Guest Mode:</strong> Guest data is kept in volatile memory and destroyed within 2 hours of inactivity.
          </p>
          <p>
            <strong>7.4. Bookkeeping Exception:</strong> Invoices and billing history are preserved for 10 years as mandated by German tax law (§ 147 AO).
          </p>
        </div>
      </section>

      <section id="section-8">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">8</span>
          Statutory Right of Withdrawal (EU)
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            EU residents have a 14-day right of withdrawal. <strong>Notice:</strong> Your right expires prematurely for digital content once execution begins with your explicit consent during checkout.
          </p>
        </div>
      </section>

      <section id="section-9">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">9</span>
          Intellectual Property
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The design layouts, code, and trademarks of EuropeCV remain the exclusive property of the Platform. You may not redistribute our core styles outside of personal resume use.
        </p>
      </section>

      <section id="section-11">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">11</span>
          Choice of Law and Jurisdiction
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Managed exclusively by the laws of the Federal Republic of Germany. For merchants, the place of jurisdiction is Berlin, Germany.
        </p>
      </section>
    </div>
  );

  const deContent = (
    <div className="space-y-16">
      <section id="section-1">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">1</span>
          Geltungsbereich und Vertragspartner
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            1.1 Diese Allgemeinen Geschäftsbedingungen gelten für alle Besucher und Nutzer von EuropeCV weltweit.
          </p>
          <div className="mt-6 border-l-2 border-indigo-100 pl-8 py-2">
            <h3 className="font-bold text-[#0A1128] mb-2">Vertragspartner</h3>
            <div className="text-[15px] text-gray-700 leading-relaxed">
              <strong>EuropeCV Tech Solutions</strong><br />
              Friedrichstraße 123<br />
              10117 Berlin, Deutschland
            </div>
          </div>
        </div>
      </section>

      <section id="section-2">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">2</span>
          Beschreibung der Dienste
        </h2>
        <p className="text-gray-600 leading-relaxed">
          EuropeCV betreibt eine automatisierte, cloudbasierte Plattform zur Erstellung und Optimierung von Bewerbungsunterlagen mittels Künstlicher Intelligenz.
        </p>
      </section>

      <section id="section-4">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">4</span>
          KI-Haftungsausschluss
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
            <p className="text-orange-800/80 text-sm">
              KI-Systeme können fehlerhafte Informationen generieren ("Halluzinationen"). Es liegt in Ihrer alleinigen Verantwortung, alle erstellten Dokumente vor der Verwendung sorgfältig auf Richtigkeit zu prüfen.
            </p>
          </div>
        </div>
      </section>

      <section id="section-6">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">6</span>
          Zahlungen und Abonnements
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Bestimmte Premium-Funktionen sind kostenpflichtig. Die Preise enthalten die gesetzliche Mehrwertsteuer.
        </p>
      </section>

      <section id="section-8">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">8</span>
          Widerrufsbelehrung (EU)
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Verbraucher haben ein 14-tägiges Widerrufsrecht. Dieses erlischt vorzeitig bei digitalen Inhalten, sobald mit deren Bereitstellung mit Ihrer ausdrücklichen Zustimmung begonnen wurde.
        </p>
      </section>

      <section id="section-11">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">11</span>
          Recht und Gerichtsstand
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
        </p>
      </section>
    </div>
  );

  return (
    <div className="w-full bg-[#f8f9fc] min-h-screen font-sans">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#f8f9fc]/80 backdrop-blur-md py-3">
        <div className="max-w-[1000px] mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-3 text-gray-500 hover:text-[#4F46E5] font-bold transition-all text-[18px] group">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
              <ArrowLeft size={24} />
            </div>
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 py-4 lg:py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[12px] font-bold uppercase tracking-wider">
              <Scale size={14} />
              Terms of Service
            </div>

            <div className="flex p-0.5 bg-gray-100/50 rounded-lg gap-1">
              <button 
                onClick={() => toggleLang('EN')}
                className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${lang === 'EN' ? 'bg-[#4F46E5] text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-3.5 rounded-[1px]" />
                EN
              </button>
              <button 
                onClick={() => toggleLang('DE')}
                className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${lang === 'DE' ? 'bg-[#4F46E5] text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <img src="https://flagcdn.com/w20/de.png" alt="DE" className="w-3.5 rounded-[1px]" />
                DE
              </button>
            </div>
          </div>
          <h1 className="text-[40px] lg:text-[56px] font-bold text-[#0A1128] leading-tight tracking-tight mb-6">
            {lang === 'EN' ? <>Terms of <span className="text-[#4F46E5]">Service</span></> : <>Allgemeine <span className="text-[#4F46E5]">Bedingungen</span></>}
          </h1>
          <p className="text-gray-500 text-[18px] max-w-2xl leading-relaxed">
            {lang === 'EN' 
              ? 'Please read these terms carefully before using our automated career documentation services.'
              : 'Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere automatisierten Dienste nutzen.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Quick Nav */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest px-4">Sections</div>
              {[
                { id: '1', title: lang === 'EN' ? 'General' : 'Allgemeines' },
                { id: '2', title: lang === 'EN' ? 'Services' : 'Leistungen' },
                { id: '3', title: lang === 'EN' ? 'Account' : 'Konto' },
                { id: '4', title: lang === 'EN' ? 'AI Disclaimer' : 'KI-Hinweis' },
                { id: '6', title: lang === 'EN' ? 'Payment' : 'Zahlung' },
                { id: '8', title: lang === 'EN' ? 'Withdrawal' : 'Widerruf' },
                { id: '11', title: lang === 'EN' ? 'Jurisdiction' : 'Rechtliches' }
              ].map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 px-4 py-2 text-gray-500 font-medium text-[15px] hover:text-[#4F46E5] transition-colors cursor-pointer group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#4F46E5]"></div>
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* Terms Content */}
          <div className="lg:col-span-3">
            {lang === 'EN' ? enContent : deContent}

            {/* Footer Note */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-[14px] text-gray-400 font-medium">
              <div>Last updated: May 19, 2026</div>
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="hover:text-[#4F46E5]">Privacy Policy</Link>
                <a href="#" className="hover:text-[#4F46E5]">Legal Notice</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
