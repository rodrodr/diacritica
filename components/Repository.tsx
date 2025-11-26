import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ExternalLink, FileText, Mic, Monitor, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { RepoItem } from '../data';

interface RepositoryProps {
  items: RepoItem[];
  onItemSelect?: (id: number) => void;
  initialCategory?: string;
}

const categories = ["Todos", "Prompts", "Simulaciones", "Podcasts", "Prácticas", "Tutoriales"];
const ITEMS_PER_PAGE = 6;

export const Repository: React.FC<RepositoryProps> = ({ items, onItemSelect, initialCategory = "Todos" }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = activeCategory === "Todos" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText size={16} />;
      case 'audio': return <Mic size={16} />;
      case 'tool': return <Monitor size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black italic text-brand-dark mb-6 tracking-tighter">
          repositorio
        </h1>
        <p className="text-gray-500 font-serif italic max-w-2xl mx-auto text-lg">
          Materiales de acceso abierto desarrollados y probados para el enfoque de IA supervisado por docentes.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 pb-2 border-b-2 ${
                activeCategory === cat 
                  ? 'text-brand-red border-brand-red' 
                  : 'text-gray-400 border-transparent hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {currentItems.map((item) => (
            <div key={item.id} className="group flex flex-col h-full cursor-pointer" onClick={() => onItemSelect?.(item.id)}>
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-6 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} // Keep as raw text if possible, but for alt it should be stripped. HTML in alt is bad.
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Action */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <Button variant="primary" size="sm">
                        Ver Material
                     </Button>
                  </div>
                </div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-brand-dark shadow-sm">
                  {getIcon(item.type)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col items-start">
                <div className="flex items-center gap-3 mb-3 w-full">
                   <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
                     {item.category}
                   </span>
                   <div className="flex-grow h-px bg-gray-100"></div>
                   <div 
                     className="text-xs text-gray-400 font-serif italic"
                     dangerouslySetInnerHTML={{ __html: item.date }}
                   />
                </div>
                
                <h3 
                  className="text-2xl font-bold text-brand-dark mb-3 leading-tight group-hover:text-brand-red transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                
                <div 
                  className="text-gray-500 font-serif text-sm leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                <div className="mt-auto pt-4 border-t border-gray-100 w-full flex justify-between items-center text-sm font-bold text-brand-dark uppercase tracking-wider">
                   <span className="group-hover:translate-x-2 transition-transform duration-300">
                     Ver Caso de Estudio
                   </span>
                   <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-red" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-red hover:text-white hover:border-brand-red disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-dark disabled:hover:border-gray-200 transition-all duration-300"
            >
                <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-300 ${
                            currentPage === page 
                            ? 'bg-brand-dark text-white scale-110' 
                            : 'text-gray-400 hover:bg-gray-100 hover:text-brand-dark'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-red hover:text-white hover:border-brand-red disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-dark disabled:hover:border-gray-200 transition-all duration-300"
            >
                <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};