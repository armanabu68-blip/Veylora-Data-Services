/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProblemsSolvedSection } from './components/ProblemsSolvedSection';
import { ServicesSection } from './components/ServicesSection';
import { QualitySection } from './components/QualitySection';
import { WorkforceSection } from './components/WorkforceSection';
import { PartnershipSection } from './components/PartnershipSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProjectInquirySection } from './components/ProjectInquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>();
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(null);

  // Synchronize with URL hash on load and hash change for deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash.startsWith('services/')) {
        const slug = hash.replace('services/', '');
        setActiveServiceSlug(slug);
        setActiveSection('services');
        const elem = document.getElementById('services');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      } else if (hash) {
        setActiveSection(hash);
        const elem = document.getElementById(hash);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash and smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = `#/${sectionId}`;
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    handleNavigate('project-inquiry');
  };

  const handleSelectServiceSlug = (slug: string) => {
    setActiveServiceSlug(slug);
    window.location.hash = `#/services/${slug}`;
  };

  const handleCloseServiceSlug = () => {
    setActiveServiceSlug(null);
    window.location.hash = `#/services`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar with exact 8 items in requested order */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main>
        {/* 1. Home / Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. About Us: Managed Remote Workforce Provider in India */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Client Problems We Help Solve Section */}
        <ProblemsSolvedSection onNavigate={handleNavigate} />

        {/* 3. Services: 9 Core Offerings with Workflows & Deliverables */}
        <ServicesSection 
          onSelectService={handleSelectServiceForInquiry}
          activeServiceSlug={activeServiceSlug}
          onCloseServiceSlug={handleCloseServiceSlug}
        />

        {/* 4. Quality: Disciplined 6-Stage Quality Control Architecture */}
        <QualitySection />

        {/* 5. Workforce: Managed Remote Workforce, Capacity & Sizing Estimator */}
        <WorkforceSection />

        {/* 6. Partnership: B2B Collaboration Models & Subcontracting */}
        <PartnershipSection onNavigate={handleNavigate} />

        {/* 7. How We Work: 5-Step Operational Project Workflow */}
        <HowWeWorkSection onNavigate={handleNavigate} />

        {/* Why Choose Us */}
        <WhyChooseUsSection onNavigate={handleNavigate} />

        {/* Dedicated Project Inquiry Form (Preserved exactly as requested) */}
        <ProjectInquirySection initialService={selectedServiceForInquiry} />

        {/* 8. Dedicated Contact Us Section (Clean display of Email & Phone only) */}
        <ContactSection />
      </main>

      {/* Deep Navy Professional Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onSelectServiceSlug={handleSelectServiceSlug} 
      />
    </div>
  );
}
