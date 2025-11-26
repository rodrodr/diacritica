import React from 'react';
import { Button } from './Button';

interface SplitSectionProps {
  onNavigate?: (view: 'home' | 'repository' | 'methodology') => void;
}

export const SplitSection: React.FC<SplitSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-4 bg-white">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Block 1 - Methodology */}
          <div id="methodology" className="relative h-[500px] group overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
              alt="Methodology" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <p className="text-xs font-bold text-gray-300 tracking-widest uppercase mb-2">más divertido, más humano... más inteligente</p>
              <h3 className="text-4xl font-bold text-white mb-8 italic">metodología</h3>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => onNavigate?.('methodology')}
              >
                Ver Metodología
              </Button>
            </div>
          </div>

          {/* Block 2 - Repository */}
          <div id="repository" className="relative h-[500px] group overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
              alt="Repository" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <p className="text-xs font-bold text-gray-300 tracking-widest uppercase mb-2">Código Abierto. Accesible.</p>
              <h3 className="text-4xl font-bold text-white mb-8 italic">repositorio</h3>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => onNavigate?.('repository')}
              >
                Acceder al Repositorio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};