import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Download, Share2, Link as LinkIcon, Twitter, Instagram, MessageCircle, Check, ExternalLink } from 'lucide-react';
import { RepoItem } from '../data';
import { Button } from './Button';

interface MaterialDetailProps {
  item: RepoItem;
  nextItem?: RepoItem;
  onBack: () => void;
  onNavigateTo: (id: number) => void;
}

export const MaterialDetail: React.FC<MaterialDetailProps> = ({ item, nextItem, onBack, onNavigateTo }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Scroll to top when item changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsShareOpen(false); // Close share menu on navigation
  }, [item]);

  const handleDownloadRIS = () => {
    // Note: We strip HTML tags for the metadata export to ensure clean file format
    const stripHtml = (html: string) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    };

    const content = `TY  - GEN\nTI  - ${stripHtml(item.title)}\nAU  - ${stripHtml(item.author)}\nPY  - ${stripHtml(item.date)}\nDO  - ${stripHtml(item.doi)}\nAB  - ${stripHtml(item.description)}\nER  -`;
    const blob = new Blob([content], { type: 'application/x-research-info-systems' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${stripHtml(item.title).replace(/\s+/g, '_')}.ris`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadBibTex = () => {
    const stripHtml = (html: string) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    };

    const content = `@misc{dia_${item.id},\n  author = {${stripHtml(item.author)}},\n  title = {${stripHtml(item.title)}},\n  year = {${stripHtml(item.date)}},\n  doi = {${stripHtml(item.doi)}},\n  howpublished = {D-IA-Crítica Repository}\n}`;
    const blob = new Blob([content], { type: 'application/x-bibtex' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${stripHtml(item.title).replace(/\s+/g, '_')}.bib`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };
  // Associate image to sharing by including it in the text where possible
  const shareText = `Echa un vistazo a ${stripHtml(item.title)} en D-IA-Crítica. Imagen: ${item.image}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAccess = () => {
    window.open(item.downloadUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Navigation Bar Placeholder Spacer since Navbar is fixed */}
      <div className="h-24 bg-white"></div>

      {/* Header Section */}
      <section className="pt-12 pb-20 px-6 container mx-auto text-center">
        <div className="inline-block mb-6">
           <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-red transition-colors mb-8 mx-auto"
          >
            <ArrowLeft size={14} />
            Volver al Repositorio
          </button>
        </div>

        <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">{item.category}</p>
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black italic text-brand-dark mb-8 tracking-tighter max-w-5xl mx-auto leading-none"
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
        <div 
          className="text-xl md:text-2xl text-gray-500 font-serif italic max-w-2xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-24">
        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl">
          <img 
            src={item.image} 
            alt={stripHtml(item.title)} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
          />
        </div>
      </section>

      {/* Content Layout */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Sidebar / Metadata */}
          <div className="w-full lg:w-1/4 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 border-b border-gray-200 pb-2">Tipo</h4>
                <div 
                  className="text-gray-600 font-serif italic capitalize"
                  dangerouslySetInnerHTML={{ __html: item.type }}
                />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 border-b border-gray-200 pb-2">Autor</h4>
                <div 
                  className="text-gray-600 font-serif italic"
                  dangerouslySetInnerHTML={{ __html: item.author }}
                />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 border-b border-gray-200 pb-2">Fecha</h4>
                <div 
                  className="text-gray-600 font-serif italic"
                  dangerouslySetInnerHTML={{ __html: item.date }}
                />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 border-b border-gray-200 pb-2">DOI</h4>
                <a 
                  href={`https://doi.org/${item.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src={`https://img.shields.io/badge/DOI-${encodeURIComponent(item.doi)}-007ec6?style=flat-square&logo=doi&logoColor=white`} 
                    alt={`DOI: ${item.doi}`} 
                    className="h-6"
                  />
                </a>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 border-b border-gray-200 pb-2">Licencia</h4>
                <div 
                  className="text-gray-600 font-serif italic"
                  dangerouslySetInnerHTML={{ __html: item.license }}
                />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 border-b border-gray-200 pb-2">Formato</h4>
                <div 
                  className="text-gray-600 font-serif italic"
                  dangerouslySetInnerHTML={{ __html: item.format }}
                />
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 border-b border-gray-200 pb-2">Citar como</h4>
                <div 
                  className="text-gray-600 font-serif italic text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: item.citation }}
                />
                <div className="flex gap-2">
                    <button 
                      onClick={handleDownloadRIS}
                      className="text-[10px] font-bold uppercase tracking-widest border border-gray-300 px-3 py-2 hover:bg-brand-dark hover:text-white transition-all"
                    >
                      Exportar RIS
                    </button>
                    <button 
                      onClick={handleDownloadBibTex}
                      className="text-[10px] font-bold uppercase tracking-widest border border-gray-300 px-3 py-2 hover:bg-brand-dark hover:text-white transition-all"
                    >
                      Exportar BibTex
                    </button>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <Button variant="primary" className="w-full gap-2" onClick={handleAccess}>
                  <ExternalLink size={16} /> Acceder
                </Button>
                
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="w-full gap-2" 
                    onClick={() => setIsShareOpen(!isShareOpen)}
                  >
                    <Share2 size={16} /> Compartir
                  </Button>

                  {isShareOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsShareOpen(false)} />
                      <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 shadow-xl rounded-sm p-2 z-20 flex flex-col gap-1 animate-in fade-in zoom-in duration-200">
                        <button 
                          onClick={handleCopyLink}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-black hover:text-white text-[10px] font-bold uppercase tracking-widest text-gray-600 text-left transition-colors w-full"
                        >
                          {copied ? <Check size={14} className="text-green-500" /> : <LinkIcon size={14} />}
                          {copied ? "Copiado" : "Copiar Enlace"}
                        </button>
                        
                        <a 
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2 hover:bg-black hover:text-white text-[10px] font-bold uppercase tracking-widest text-gray-600 text-left transition-colors w-full"
                        >
                          <Twitter size={14} /> Twitter
                        </a>
                        
                        <a 
                          href={`https://www.instagram.com/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2 hover:bg-black hover:text-white text-[10px] font-bold uppercase tracking-widest text-gray-600 text-left transition-colors w-full"
                        >
                          <Instagram size={14} /> Instagram
                        </a>
                        
                        <a 
                          href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2 hover:bg-black hover:text-white text-[10px] font-bold uppercase tracking-widest text-gray-600 text-left transition-colors w-full"
                        >
                          <MessageCircle size={14} /> WhatsApp
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-p:font-serif prose-p:text-gray-600 prose-a:text-brand-red hover:prose-a:text-red-800">
              
              <h3 className="text-3xl font-bold text-brand-dark mb-6">Resumen</h3>
              <div 
                className="mb-12 leading-loose font-serif text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.resumen }}
              />

              <h3 className="text-3xl font-bold text-brand-dark mb-6">Objetivos de Aprendizaje</h3>
              <div 
                className="mb-8 leading-loose font-serif text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.objetivos }}
              />
              
              {item.objetivosSteps && item.objetivosSteps.length > 0 && (
                <ul className="list-none space-y-4 pl-0 mb-12">
                  {item.objetivosSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                       <span className="text-brand-red font-bold text-xl">0{index + 1}.</span>
                       <span 
                         className="font-serif text-gray-600"
                         dangerouslySetInnerHTML={{ __html: step }}
                       />
                    </li>
                  ))}
                </ul>
              )}

              {/* AI Integration Section */}
              {item.aiIntegration && (
                <>
                    <h3 className="text-3xl font-bold text-brand-dark mb-6">Integración de IA</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 border border-gray-200 rounded-sm overflow-hidden">
                        {/* Design */}
                        <div className="p-4 text-center border-r border-b md:border-b-0 border-gray-200 last:border-0 md:last:border-0">
                            <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs mb-3">Diseño</h4>
                            <div className={`inline-block px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs ${item.aiIntegration.design ? 'bg-green-600 text-white' : 'bg-brand-red text-white'}`}>
                                {item.aiIntegration.design ? 'Sí' : 'No'}
                            </div>
                        </div>
                        {/* Usage */}
                        <div className="p-4 text-center border-r border-b md:border-b-0 border-gray-200 last:border-0 md:last:border-0 md:border-r">
                             <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs mb-3">Uso</h4>
                             <div className={`inline-block px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs ${item.aiIntegration.usage ? 'bg-green-600 text-white' : 'bg-brand-red text-white'}`}>
                                {item.aiIntegration.usage ? 'Sí' : 'No'}
                            </div>
                        </div>
                        {/* Evaluation */}
                        <div className="p-4 text-center border-r border-gray-200 last:border-0">
                             <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs mb-3">Evaluación</h4>
                             <div className={`inline-block px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs ${item.aiIntegration.evaluation ? 'bg-green-600 text-white' : 'bg-brand-red text-white'}`}>
                                {item.aiIntegration.evaluation ? 'Sí' : 'No'}
                            </div>
                        </div>
                        {/* Feedback */}
                        <div className="p-4 text-center">
                             <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs mb-3">Feedback</h4>
                             <div className={`inline-block px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs ${item.aiIntegration.feedback ? 'bg-green-600 text-white' : 'bg-brand-red text-white'}`}>
                                {item.aiIntegration.feedback ? 'Sí' : 'No'}
                            </div>
                        </div>
                    </div>
                </>
              )}

              <h3 className="text-3xl font-bold text-brand-dark mb-6">Aplicaciones</h3>
              <div 
                className="mb-8 leading-loose font-serif text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.aplicaciones }}
              />

              <h3 className="text-3xl font-bold text-brand-dark mb-6">Validación</h3>
              <div className="flex gap-4 mb-6">
                 <div className={`px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-sm border-2 transition-colors ${item.validated ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-gray-300 border-gray-200'}`}>
                    Sí
                 </div>
                 <div className={`px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-sm border-2 transition-colors ${!item.validated ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-gray-300 border-gray-200'}`}>
                    No
                 </div>
              </div>
              <div 
                className="mb-8 leading-loose font-serif text-gray-600"
                dangerouslySetInnerHTML={{ 
                  __html: item.validated && item.validationDetails 
                    ? item.validationDetails 
                    : "Este material aún no ha sido validado empíricamente en un contexto educativo." 
                }}
              />
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-500 font-serif italic text-sm">
                  Si ha empleado este recurso y tiene resultados de validación, por favor contacte con <a href="mailto:rodrodr@usal.es" className="text-brand-red underline hover:text-brand-dark">rodrodr@usal.es</a> para proporcionar detalles y actualizar la información sobre la validación del recurso.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer (Next Project) */}
      {nextItem && (
        <section className="bg-brand-gray py-24 border-t border-gray-200 group cursor-pointer" onClick={() => onNavigateTo(nextItem.id)}>
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Siguiente Material</p>
            <h2 
              className="text-4xl md:text-6xl font-black italic text-brand-dark group-hover:text-brand-red transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: nextItem.title }}
            />
            <div className="flex justify-center mt-8">
               <div className="w-12 h-12 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all duration-300">
                 <ArrowRight size={20} />
               </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};