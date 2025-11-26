import React, { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView?: 'home' | 'repository' | 'material-detail' | 'methodology' | 'project' | 'publications';
  onNavigate?: (view: 'home' | 'repository' | 'methodology' | 'project' | 'publications') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', onNavigate }) => {
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Always have solid background on repository/detail/methodology/project/publications page or when scrolled
  const isSolidBackground = scrollPosition > 50 || currentView === 'repository' || currentView === 'material-detail' || currentView === 'methodology' || currentView === 'project' || currentView === 'publications';

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isSolidBackground 
      ? 'bg-black/90 backdrop-blur-sm py-4 shadow-lg' 
      : 'bg-transparent py-8'
  }`;

  const logoClasses = `text-2xl font-black italic tracking-tighter uppercase cursor-pointer ${
    isSolidBackground ? 'text-white' : 'text-white'
  }`;

  const linkClasses = (isActive: boolean) => `cursor-pointer text-xs font-bold uppercase tracking-widest hover:text-brand-red transition-colors ${
    isActive ? 'text-brand-red' : (isSolidBackground ? 'text-gray-300' : 'text-white')
  }`;

  const handleNav = (view: 'home' | 'repository' | 'methodology' | 'project' | 'publications', anchorId?: string) => {
    if (onNavigate) {
      onNavigate(view);
    } else {
      if (view === 'home') window.location.href = "/";
    }
    
    if (anchorId && view === 'home') {
      // Small delay to allow view change before scrolling
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => handleNav('home')} className={logoClasses}>
          <span className="text-brand-red">D-</span>IA<span className="text-brand-red">-Crítica</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => handleNav('home')} className={linkClasses(currentView === 'home' && !window.location.hash)}>Inicio</button>
          <button onClick={() => handleNav('project')} className={linkClasses(currentView === 'project')}>El Proyecto</button>
          <button onClick={() => handleNav('methodology')} className={linkClasses(currentView === 'methodology')}>Metodología</button>
          {/* Highlight Repository link if in repo OR in detail view */}
          <button onClick={() => handleNav('repository')} className={linkClasses(currentView === 'repository' || currentView === 'material-detail')}>Repositorio</button>
          <button onClick={() => handleNav('publications')} className={linkClasses(currentView === 'publications')}>Publicaciones</button>
          <button onClick={() => handleNav('home', 'team')} className={linkClasses(false)}>Equipo</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden focus:outline-none ${isSolidBackground ? 'text-white' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white border-t border-white/10 md:hidden flex flex-col p-8 gap-6">
          <button onClick={() => handleNav('home')} className="text-left text-sm font-bold uppercase tracking-widest hover:text-brand-red">Inicio</button>
          <button onClick={() => handleNav('project')} className="text-left text-sm font-bold uppercase tracking-widest hover:text-brand-red">El Proyecto</button>
          <button onClick={() => handleNav('methodology')} className="text-left text-sm font-bold uppercase tracking-widest hover:text-brand-red">Metodología</button>
          <button onClick={() => handleNav('repository')} className="text-left text-sm font-bold uppercase tracking-widest hover:text-brand-red">Repositorio</button>
          <button onClick={() => handleNav('publications')} className="text-left text-sm font-bold uppercase tracking-widest hover:text-brand-red">Publicaciones</button>
          <button onClick={() => handleNav('home', 'team')} className="text-left text-sm font-bold uppercase tracking-widest hover:text-brand-red">Equipo</button>
        </div>
      )}
    </nav>
  );
};