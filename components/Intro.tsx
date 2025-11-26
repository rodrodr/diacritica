import React from 'react';

interface IntroProps {
  onNavigate?: (view: 'project') => void;
}

export const Intro: React.FC<IntroProps> = ({ onNavigate }) => {
  return (
    <section id="project" className="py-24 md:py-32 bg-white text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8">
          <span className="font-bold">D-IA-Crítica</span> desarrolla materiales y métodos para la integración de la Inteligencia Artificial en el aula, <span className="font-bold">siempre con una estrecha supervisión del docente</span>. Creemos que la tecnología debe servir a la pedagogía, empoderando a los educadores para liderar la innovación.
        </p>
        
        <div className="flex justify-center mb-12">
           <div className="h-16 w-auto">
             {/* Stylized Signature Placeholder */}
             <svg width="200" height="60" viewBox="0 0 200 60" fill="none" stroke="currentColor" className="text-gray-800" strokeWidth="2">
               <path d="M10,30 Q50,5 80,30 T150,30 T190,10" />
               <path d="M20,40 L180,40" opacity="0.1" />
             </svg>
           </div>
        </div>

        <button 
          onClick={() => onNavigate?.('project')}
          className="inline-block px-8 py-3 border border-gray-300 text-xs font-bold uppercase tracking-widest text-gray-800 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300"
        >
          Sobre el Proyecto
        </button>
      </div>
    </section>
  );
};