import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-brand-neon/10 py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="font-serif font-bold text-xl md:text-2xl tracking-tighter leading-none text-brand-neon drop-shadow-[0_0_5px_rgba(211, 225, 51,0.5)]">
            EMPRESÁRIOS<br />
            <span className="text-white text-sm md:text-base tracking-widest font-sans font-light">DE SUCESSO</span>
          </div>
        </div>

        {/* Center Logo - Sicoob (Visible on Scroll) */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img src="/sicoob.png" alt="Sicoob" className="h-8 md:h-10 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('palestrantes')} className="text-gray-300 hover:text-white transition-colors">Palestrantes</button>
          <button onClick={() => scrollToSection('agenda')} className="text-gray-300 hover:text-white transition-colors">Agenda</button>
          <Button onClick={() => scrollToSection('inscricao')} className="!py-2 !px-6 text-sm">
            Garanta sua Vaga
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
          <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-300 py-2">Sobre</button>
          <button onClick={() => scrollToSection('palestrantes')} className="text-left text-gray-300 py-2">Palestrantes</button>
          <button onClick={() => scrollToSection('agenda')} className="text-left text-gray-300 py-2">Agenda</button>
          <Button onClick={() => scrollToSection('inscricao')} fullWidth>
            Garanta sua Vaga
          </Button>
        </div>
      )}
    </header>
  );
};