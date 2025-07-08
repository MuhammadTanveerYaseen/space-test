'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold gradient-text">GHLSPACE</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-[hsl(var(--ghl-blue))] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-[hsl(var(--ghl-blue))] transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-[hsl(var(--ghl-blue))] transition-colors">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-700 hover:text-[hsl(var(--ghl-blue))] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-700 hover:text-[hsl(var(--ghl-blue))] transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-[hsl(var(--ghl-blue))] transition-colors">Contact</button>
            </div>
            
            <Button 
              className="hidden md:inline-flex bg-gradient-to-r from-[hsl(var(--ghl-blue))] to-[hsl(var(--cf-red))] text-white px-6 py-3 font-semibold hover:scale-105 transition-transform"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const headerHeight = 80;
                  const targetPosition = element.offsetTop - headerHeight;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
            >
              Book a Call
            </Button>
            
            <button 
              className="md:hidden text-slate-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 md:hidden">
          <div className="p-6">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 mb-8"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col space-y-6">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 text-lg text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 text-lg text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 text-lg text-left">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-700 text-lg text-left">Pricing</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-700 text-lg text-left">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 text-lg text-left">Contact</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
