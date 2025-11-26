import React from 'react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'repository' | 'methodology' | 'project' | 'publications') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: 'home' | 'repository' | 'methodology' | 'project' | 'publications', id?: string) => {
    if (onNavigate) {
      onNavigate(view);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold italic mb-6 uppercase">
              <span className="text-brand-red">D-</span>IA<span className="text-brand-red">-Crítica</span>
            </h3>
            <div className="flex gap-4">
               {/* Social Icons placeholder */}
               <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
               </div>
               <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                  <span className="sr-only">Twitter</span>
               </div>
               <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                  <span className="sr-only">Instagram</span>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Proyecto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <button onClick={() => handleNav('home', 'team')} className="hover:text-white transition-colors text-left">
                  Equipo
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('methodology')} className="hover:text-white transition-colors text-left">
                  Metodología
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('project')} className="hover:text-white transition-colors text-left">
                  Arquitectura
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Recursos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <button onClick={() => handleNav('repository')} className="hover:text-white transition-colors text-left">
                  Repositorio
                </button>
              </li>
              <li>
                 <button onClick={() => handleNav('publications')} className="hover:text-white transition-colors text-left">
                   Publicaciones
                 </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            © {new Date().getFullYear()} D-IA-Crítica.
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Diseñado como una herramienta para docentes.
          </p>
        </div>
      </div>
    </footer>
  );
};