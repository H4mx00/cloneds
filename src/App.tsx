import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Homepage/components/Navbar/Navbar';
import { Hero } from './Homepage/components/Hero/Hero';
import { HowItWorks } from './Homepage/components/HowItWorks/HowItWorks';
import { BeforeAfter } from './Homepage/components/BeforeAfter/BeforeAfter';
import { BuiltFor } from './Homepage/components/BuiltFor/BuiltFor';
import { Stats } from './Homepage/components/Stats/Stats';
import { FAQ } from './Homepage/components/FAQ/FAQ';
import { Article } from './Homepage/components/Article/Article';
import { CTA } from './Homepage/components/CTA/CTA';
import { Footer } from './Homepage/components/Footer/Footer';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { EuropeanCVGuide } from './pages/Blog/EuropeanCVGuide';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { ContactSection } from './Homepage/components/Contact/ContactSection';
import { SocialProof } from './Homepage/components/SocialProof/SocialProof';

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <ContactSection />
      <HowItWorks />
      <BeforeAfter />
      <Stats />
      <BuiltFor />
      <FAQ />
      <Article />
      <CTA />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FFFFFF] font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<EuropeanCVGuide />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
