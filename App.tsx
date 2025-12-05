import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import UnifiedSystemFlow from './components/UnifiedSystemFlow';
import FeaturesShowcase from './components/FeaturesShowcase';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Educational from './components/Educational';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <UnifiedSystemFlow />
        <FeaturesShowcase />
        <HowItWorks />
        <Pricing />
        <Educational />
        <Comparison />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}