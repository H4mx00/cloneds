import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Shield, Lock, Eye, FileText, ChevronRight, Clock } from 'lucide-react';

type Language = 'EN' | 'DE';

export const PrivacyPolicy = () => {
  const [lang, setLang] = useState<Language>('EN');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = lang === 'EN' ? 'Privacy Policy | EuropeCV' : 'Datenschutzerklärung | EuropeCV';
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
          General Information and Mandatory Disclosures
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            The protection of your personal data is a matter of utmost importance to us. We treat your personal data confidentially and in strict accordance with the statutory data protection regulations—specifically the European General Data Protection Regulation (GDPR) and the German Telecommunications-Digital-Services-Data-Protection-Act (TDDDG)—as well as this Privacy Policy.
          </p>
          <p>
            When you use this website and our application ("EuropeCV"), various items of personal data are collected. Personal data is any data with which you can be personally identified. This Privacy Policy explains what data we collect, what we use it for, where it is stored, how long it is kept, and the precise mechanisms we use to protect your rights.
          </p>
        </div>

        <div className="mt-8 border-l-2 border-indigo-100 pl-8 py-2">
          <h3 className="font-bold text-[#0A1128] mb-4">Controller (Verantwortliche Stelle)</h3>
          <p className="text-gray-500 mb-6">
            The controller responsible for data processing on this website under data protection laws is:
          </p>
          <div className="text-[15px] text-gray-700 leading-relaxed">
            <strong>EuropeCV Tech Solutions</strong><br />
            Friedrichstraße 123<br />
            10117 Berlin, Germany<br />
            Email: contact@europecv.io
          </div>
          <p className="mt-4 text-gray-500 text-[14px]">
            The controller is the natural or legal person who alone or jointly with others determines the purposes and means of processing personal data (e.g., names, email addresses, uploaded resume details).
          </p>
        </div>
      </section>

      <section id="section-2">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">2</span>
          Data Collection and Server Log Files
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            When you visit our website without registering or submitting information, your browser automatically transmits data to our servers for technical reasons. This data is collected and stored automatically in so-called server log files. This includes:
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 py-4">
            {['Browser type and version', 'Operating system', 'Referrer URL', 'IP Address'].map(item => (
              <div key={item} className="flex items-center gap-2 text-[14px] text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[15px]">
            <strong>Legal Basis:</strong> Art. 6(1)(f) GDPR. Our legitimate interest lies in the technically error-free presentation, optimization, stability, and cryptographic security of our web application.
          </p>
          <p className="text-[15px]">
            <strong>Retention Period:</strong> This data is automatically and permanently overwritten/deleted after 14 days.
          </p>
        </div>
      </section>

      <section id="section-3">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">3</span>
          Account Registration and Account Data
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            To utilize the full scope of features offered by EuropeCV (such as saving multiple revisions of resumes, managing generation history, and maintaining an editable career profile), you must create a user account.
          </p>
          <p>
            <strong>Processed Data:</strong> Email address, password (stored exclusively using industry-standard salted hashing algorithms), and timestamp of registration.
          </p>
          <p>
            <strong>Legal Basis:</strong> Art. 6(1)(b) GDPR (Performance of a contract or pre-contractual measures).
          </p>
          <p>
            <strong>Retention Period:</strong> This baseline account data is retained for as long as your registered account exists.
          </p>
        </div>
      </section>

      <section id="section-4">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">4</span>
          Core AI Processing Services
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>
            EuropeCV processes highly specific, structured professional and personal information to provide automated, AI-driven resume optimization, contextual cover letter synthesis, and multilingual translation across European languages.
          </p>
          
          <div className="border-l-2 border-indigo-50 pl-8 space-y-6">
            <h3 className="font-bold text-[#0A1128]">A. Scope of Processed Data</h3>
            <p>We process all information that you explicitly fill out within our application fields or upload as existing document files. This includes:</p>
            <ul className="space-y-2 pl-4">
              <li className="list-disc"><strong>Master Data:</strong> Full name, date of birth, nationality, contact details.</li>
              <li className="list-disc"><strong>Professional History:</strong> Previous employment, job titles, companies, dates.</li>
              <li className="list-disc"><strong>Education & Skills:</strong> Schools, universities, degrees, certifications.</li>
              <li className="list-disc"><strong>Media:</strong> Application photographs (if explicitly uploaded).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1128] mb-3">B. Disclosure to AI Sub-processors (API Systems)</h3>
            <p>To generate, optimize, and translate your documents, the text inputs and resume parameters are programmatically transmitted via an API interface to external AI cloud service providers.</p>
            <p className="mt-4"><strong>Model Training Opt-out:</strong> We have concluded Data Processing Agreements (DPAs) pursuant to Art. 28 GDPR. Your submitted data will not be used to train public AI models.</p>
          </div>
        </div>
      </section>

      <section id="section-5">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">5</span>
          Data Retention Timelines
        </h2>
        <div className="text-gray-600 space-y-6">
          <p>
            <strong>Registered Users:</strong> Your profile parameters, drafts, and generated resumes are stored securely in an encrypted cloud database located entirely within the European Union (Frankfurt Region). This data remains accessible for as long as your profile exists.
          </p>
          <p>
            <strong>Guest Users:</strong> Your inputted career text and generated files are stored transiently in a stateless cache solely to let you view and download your final document. This data is automatically purged after 2 hours of inactivity or upon closing the session.
          </p>
        </div>
      </section>

      <section id="section-6">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">6</span>
          Payment Processing and Financial Data
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            Our platform offers premium features. To process payments securely, we do not store your credit card or financial account numbers on our own servers. Card details are handled directly by providers like Stripe.
          </p>
        </div>
      </section>

      <section id="section-7">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">7</span>
          International Data Transfers
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Infrastructure nodes map to global providers. We enforce Standard Contractual Clauses (SCCs) to guarantee European privacy protections within third-country borders.
        </p>
      </section>

      <section id="section-8">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">8</span>
          No Automated Decision-Making
        </h2>
        <p className="text-gray-600 leading-relaxed">
          EuropeCV does not perform any automated decision-making or profiling. Our AI acts strictly as an assistive drafting tool.
        </p>
      </section>

      <section id="section-9">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">9</span>
          Cookie Policy for EuropeCV
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>
            This Cookie Policy explains how EuropeCV uses cookies and similar local storage technologies to recognize you when you visit our web application. It explains what these technologies are, why we use them, and your absolute rights to control their usage under Section 25 of the German TDDDG and Art. 6(1) of the GDPR.
          </p>

          <div>
            <h3 className="font-bold text-[#0A1128] mb-3">1. What are Cookies and Local Storage?</h3>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Local Storage is a technology built into your browser that allows us to store data locally on your device. We use these technologies to ensure security, maintain your logged-in session, cache your temporary resume edits, and (only with explicit permission) track anonymous usage data.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1128] mb-3">2. Granular Breakdown of Technologies Used</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-indigo-700 mb-2">A. Strictly Necessary Storage (Consent Exempt)</h4>
                <p className="text-sm mb-4">These items are technically required for the core application to function. Legal Basis: Sec. 25 para. 2 No. 2 TDDDG.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-gray-200">
                        <th className="pb-2">Name</th>
                        <th className="pb-2">Provider</th>
                        <th className="pb-2">Purpose</th>
                        <th className="pb-2">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500">
                      <tr>
                        <td className="py-2">__session</td>
                        <td>Supabase</td>
                        <td>Account login state</td>
                        <td>Session / 30 Days</td>
                      </tr>
                      <tr>
                        <td className="py-2">cv_draft_cache</td>
                        <td>EuropeCV</td>
                        <td>Content preservation</td>
                        <td>Tab close</td>
                      </tr>
                      <tr>
                        <td className="py-2">cookie_consent</td>
                        <td>EuropeCV</td>
                        <td>Remembers settings</td>
                        <td>1 Year</td>
                      </tr>
                      <tr>
                        <td className="py-2">stripe_mid</td>
                        <td>Stripe</td>
                        <td>Fraud prevention</td>
                        <td>1 Year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-indigo-700 mb-2">B. Analytics and Performance Cookies (Consent Required)</h4>
                <p className="text-sm mb-4">These help us analyze how users navigate our application. Legal Basis: Art. 6(1)(a) GDPR. Disabled by default.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-gray-200">
                        <th className="pb-2">Name</th>
                        <th className="pb-2">Provider</th>
                        <th className="pb-2">Purpose</th>
                        <th className="pb-2">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500">
                      <tr>
                        <td className="py-2">_ga / _gid</td>
                        <td>Google</td>
                        <td>Anonymized metrics</td>
                        <td>2 Years / 24h</td>
                      </tr>
                      <tr>
                        <td className="py-2">mp_mixpanel</td>
                        <td>Mixpanel</td>
                        <td>Usage optimization</td>
                        <td>1 Year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1128] mb-3">3. How to Manage and Revoke Your Consent</h3>
            <p>
              You are in complete control of your data. You can adjust your choices at any time using:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Our Consent Widget:</strong> Reopen the settings by clicking the "Cookie Settings" link in our footer.</li>
              <li><strong>Browser Settings:</strong> Configure your browser to refuse all cookies or alert you when they are sent.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="section-11">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">11</span>
          Data Security
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This website strictly mandates end-to-end SSL or TLS encryption. All data is encrypted both in transit and at rest.
        </p>
      </section>

      <section id="section-10">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">10</span>
          Rights of the Data Subject
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Access', icon: Eye, ref: 'Art. 15' },
            { title: 'Rectification', icon: FileText, ref: 'Art. 16' },
            { title: 'Erasure', icon: Shield, ref: 'Art. 17' },
            { title: 'Restriction', icon: Lock, ref: 'Art. 18' },
            { title: 'Portability', icon: Globe, ref: 'Art. 20' },
            { title: 'Object', icon: Shield, ref: 'Art. 21' }
          ].map((right, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex items-center gap-4 hover:border-indigo-200 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center">
                <right.icon size={20} />
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#0A1128]">{right.title}</div>
                <div className="text-[12px] text-gray-400 font-medium">{right.ref} GDPR</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const deContent = (
    <div className="space-y-16">
      <section id="section-1">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">1</span>
          Allgemeine Informationen und Pflichtangaben
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften.
          </p>
        </div>

        <div className="mt-8 border-l-2 border-indigo-100 pl-8 py-2">
          <h3 className="font-bold text-[#0A1128] mb-4">Verantwortliche Stelle</h3>
          <div className="text-[15px] text-gray-700 leading-relaxed">
            <strong>EuropeCV Tech Solutions</strong><br />
            Friedrichstraße 123<br />
            10117 Berlin, Deutschland<br />
            E-Mail: contact@europecv.io
          </div>
        </div>
      </section>

      <section id="section-2">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">2</span>
          Datenerfassung
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Informationen wie Browsertyp, Betriebssystem und IP-Adresse werden automatisch in Server-Log-Dateien gespeichert.
        </p>
      </section>

      <section id="section-3">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">3</span>
          Kontoregistrierung und Kontodaten
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            Um den vollen Funktionsumfang von EuropeCV nutzen zu können, müssen Sie ein Benutzerkonto erstellen.
          </p>
          <p>
            <strong>Verarbeitete Daten:</strong> E-Mail-Adresse, Passwort (gehasht) und Registrierungszeitpunkt.
          </p>
        </div>
      </section>

      <section id="section-4">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">4</span>
          KI-Verarbeitungsdienste
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>
            EuropeCV nutzt KI-Dienste zur Optimierung Ihrer Bewerbungsunterlagen. Wir haben Auftragsverarbeitungsverträge (AVV) gemäß Art. 28 DSGVO abgeschlossen. Your data will not be reviewed by humans or used to train public AI models.
          </p>
        </div>
      </section>

      <section id="section-5">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">5</span>
          Speicherdauer
        </h2>
        <div className="text-gray-600 space-y-6">
          <p>
            <strong>Registrierte Nutzer:</strong> Ihre Daten werden sicher in einer verschlüsselten Cloud-Datenbank innerhalb der EU (Region Frankfurt) gespeichert und bleiben bis zur Löschung des Kontos erhalten.
          </p>
          <p>
            <strong>Gäste:</strong> Daten werden nur flüchtig im Cache gespeichert und nach 2 Stunden Inaktivität automatisch gelöscht.
          </p>
        </div>
      </section>

      <section id="section-9">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">9</span>
          Cookie-Richtlinie
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>
            Diese Cookie-Richtlinie erklärt, wie EuropeCV Cookies und ähnliche Technologien zur lokalen Speicherung verwendet, um Sie beim Besuch unserer Webanwendung wiederzuerkennen.
          </p>

          <div>
            <h3 className="font-bold text-[#0A1128] mb-3">1. Was sind Cookies und lokaler Speicher?</h3>
            <p>
              Cookies sind kleine Datendateien, die auf Ihrem Computer gespeichert werden. Lokaler Speicher (Local Storage) ist eine in Ihren Browser integrierte Technologie, die es uns ermöglicht, Daten lokal auf Ihrem Gerät zu speichern.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1128] mb-3">2. Granulare Aufschlüsselung der Technologien</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-indigo-700 mb-2">A. Technisch notwendige Speicherung (Einwilligungsfrei)</h4>
                <p className="text-sm mb-4">Diese Elemente sind technisch erforderlich. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-gray-200">
                        <th className="pb-2">Name</th>
                        <th className="pb-2">Anbieter</th>
                        <th className="pb-2">Zweck</th>
                        <th className="pb-2">Dauer</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500">
                      <tr>
                        <td className="py-2">__session</td>
                        <td>Supabase</td>
                        <td>Login-Status</td>
                        <td>30 Tage</td>
                      </tr>
                      <tr>
                        <td className="py-2">cv_draft_cache</td>
                        <td>EuropeCV</td>
                        <td>Inhaltssicherung</td>
                        <td>Sitzungsende</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-indigo-700 mb-2">B. Analyse-Cookies (Einwilligungspflichtig)</h4>
                <p className="text-sm mb-4">Helfen uns, die Nutzung zu analysieren. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1128] mb-3">3. Verwaltung und Widerruf</h3>
            <p>
              Sie haben die volle Kontrolle. Sie können Ihre Auswahl jederzeit über den Link "Cookie-Einstellungen" im Footer anpassen oder Ihre Browsereinstellungen ändern.
            </p>
          </div>
        </div>
      </section>

      <section id="section-6">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">6</span>
          Zahlungsabwicklung
        </h2>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          Kreditkartendaten werden direkt von PCI-konformen Anbietern wie Stripe verarbeitet. Wir speichern keine Finanzdaten auf unseren Servern.
        </p>
      </section>

      <section id="section-7">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">7</span>
          Internationale Datentransfers
        </h2>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          Wir nutzen Standardvertragsklauseln (SCCs), um ein angemessenes Datenschutzniveau bei der Nutzung globaler Cloud-Infrastrukturen zu gewährleisten.
        </p>
      </section>

      <section id="section-11">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">11</span>
          Datensicherheit
        </h2>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          Diese Website nutzt SSL/TLS-Verschlüsselung für alle Datenübertragungen. Ihre Unterlagen sind sowohl bei der Übertragung als auch im Ruhezustand verschlüsselt.
        </p>
      </section>

      <section id="section-10">
        <h2 className="text-[24px] font-bold text-[#0A1128] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center text-[16px]">10</span>
          Rechte der betroffenen Person
        </h2>
        <p className="text-gray-600 mb-6">Sie haben jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17) und Datenübertragbarkeit (Art. 20).</p>
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
              <Shield size={14} />
              Data Protection
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
            {lang === 'EN' ? <>Privacy <span className="text-[#4F46E5]">Policy</span></> : <>Datenschutz<span className="text-[#4F46E5]">erklärung</span></>}
          </h1>
          <p className="text-gray-500 text-[18px] max-w-2xl leading-relaxed">
            {lang === 'EN' 
              ? 'Transparent information about how we process your personal data and protect your professional documents.'
              : 'Transparente Informationen darüber, wie wir Ihre personenbezogenen Daten verarbeiten und Ihre beruflichen Dokumente schützen.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Quick Nav */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest px-4">Sections</div>
              {[
                { id: '1', title: lang === 'EN' ? 'General' : 'Allgemeines' },
                { id: '2', title: lang === 'EN' ? 'Data Collection' : 'Datenerfassung' },
                { id: '3', title: lang === 'EN' ? 'Accounts' : 'Konten' },
                { id: '4', title: lang === 'EN' ? 'AI Services' : 'KI-Dienste' },
                { id: '9', title: lang === 'EN' ? 'Cookies' : 'Cookies' },
                { id: '5', title: lang === 'EN' ? 'Retention' : 'Speicherdauer' },
                { id: '6', title: lang === 'EN' ? 'Payment' : 'Zahlung' },
                { id: '10', title: lang === 'EN' ? 'Your Rights' : 'Ihre Rechte' }
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

          {/* Policy Content */}
          <div className="lg:col-span-3">
            {lang === 'EN' ? enContent : deContent}

            {/* Footer Note */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-[14px] text-gray-400 font-medium">
              <div>Last updated: May 19, 2026</div>
              <div className="flex items-center gap-6">
                <Link to="/terms" className="hover:text-[#4F46E5]">Terms of Use</Link>
                <a href="#" className="hover:text-[#4F46E5]">Legal Notice</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
