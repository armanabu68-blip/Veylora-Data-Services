import React, { useState, useEffect } from 'react';
import { VeyloraLogo } from './VeyloraLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'quality', label: 'Quality' },
    { id: 'workforce', label: 'Workforce' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'how-we-work', label: 'How We Work' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20 py-2.5'
          : 'bg-slate-950/85 backdrop-blur-sm border-b border-slate-800/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1, Zone 2, Zone 3 */}
        <div className="flex items-center justify-between gap-4 xl:gap-6">
          {/* Zone 1: Official Logo Brand Lockup */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-0.5"
            aria-label="Veylora Data Services Home"
          >
            <VeyloraLogo variant="dark" size="sm" />
          </a>

          {/* Zone 2: Navigation Links (single line, whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[13px] xl:text-sm font-medium text-slate-300" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 tracking-tight transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA Button - "Let's Talk" */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200 whitespace-nowrap shrink-0 active:scale-[0.98] cursor-pointer"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-blue-600/20 text-white font-semibold border-l-2 border-blue-500'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg transition-colors cursor-pointer"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
