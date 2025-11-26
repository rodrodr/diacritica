import React from 'react';
import { CheckCircle2, Search, PenTool, Users, BarChart, ArrowRight, BookOpen } from 'lucide-react';

export const Project: React.FC = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
       {/* Header */}
       <div className="container mx-auto px-6 mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic text-brand-dark mb-6 tracking-tighter">
            el proyecto
          </h1>
          <p className="text-xl text-gray-500 font-serif italic max-w-3xl mx-auto leading-relaxed">
             <span className="font-bold text-brand-dark not-italic">D-IA-CRÍTICA:</span> Un marco integral para la docencia asistida por IA con orientación crítica y control humano.
          </p>
       </div>

       {/* Section 1: The Vision (Objectives) */}
       <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-start">
             <div className="w-full md:w-1/2 md:sticky md:top-32">
                <div className="relative mb-10">
                   <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/10 rounded-full z-0"></div>
                   <img 
                     src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                     className="relative w-full rounded-sm shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700" 
                     alt="Discusión en el aula" 
                   />
                   <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 max-w-xs z-20 shadow-xl hidden lg:block">
                      <p className="font-serif italic text-sm">"Alejarse de visiones tecnocráticas para centrarse en una metodología crítica."</p>
                   </div>
                </div>

                {/* Project Metadata Card */}
                <div className="bg-gray-50 border-l-4 border-brand-red p-8 rounded-sm shadow-sm relative overflow-hidden mt-12">
                   {/* Decorative background element */}
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full -z-0"></div>
                   
                   <div className="relative z-10 space-y-6">
                      <div>
                         <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">ID del Proyecto</p>
                         <p className="font-mono text-brand-dark font-bold">ID2025/275</p>
                      </div>
                      
                      <div>
                         <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Título Oficial</p>
                         <p className="text-brand-dark font-bold text-sm leading-relaxed">
                            D-IA-CRÍTICA: MARCO METODOLÓGICO PARA UNA DOCENCIA ASISTIDA POR IA CON ORIENTACIÓN CRÍTICA Y CONTROL HUMANO
                         </p>
                      </div>
                      
                      <div className="flex justify-between items-end pt-4 border-t border-gray-200">
                         <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Institución</p>
                            <p className="text-brand-dark font-serif italic">Universidad de Salamanca</p>
                         </div>
                         <div className="text-right">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Financiación</p>
                            <p className="text-brand-red font-mono font-bold">700€</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-brand-dark mb-8 leading-tight">
                   Integración de IA <br/><span className="text-brand-red">Reflexiva y Responsable</span>
                </h2>
                <p className="text-gray-600 leading-loose mb-8 font-serif text-lg">
                   Respondemos a la necesidad urgente de integrar la inteligencia artificial en la docencia universitaria no como una muleta, sino como un catalizador para el pensamiento crítico. El proyecto propone una incorporación metodológica que refuerza la ética y la construcción de conocimiento a lo largo del proceso educativo.
                </p>
                
                <div className="space-y-8">
                   <div className="group">
                      <h4 className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-2 text-brand-dark group-hover:text-brand-red transition-colors">
                        <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs">01</span>
                        Supervisión Humana
                      </h4>
                      <p className="text-sm text-gray-500 pl-11">Desarrollo de un marco donde la IA sirva como una herramienta complementaria bajo estricta supervisión humana para favorecer competencias centrales.</p>
                   </div>
                   
                   <div className="group">
                      <h4 className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-2 text-brand-dark group-hover:text-brand-red transition-colors">
                        <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs">02</span>
                        Habilidades Críticas
                      </h4>
                      <p className="text-sm text-gray-500 pl-11">Fomento de habilidades centrales como el pensamiento crítico, la alfabetización digital y la gestión ética de nuevas tecnologías.</p>
                   </div>
                   
                   <div className="group">
                      <h4 className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-2 text-brand-dark group-hover:text-brand-red transition-colors">
                        <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs">03</span>
                        Estandarización
                      </h4>
                      <p className="text-sm text-gray-500 pl-11">Creación de protocolos rigurosos para la preparación de materiales, feedback y evaluación objetiva asistida por IA.</p>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Quote Section */}
       <section className="bg-gray-50 py-32 mb-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 text-[20rem] leading-none font-serif text-gray-100 -translate-y-1/2 translate-x-10 select-none">“</div>
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
             <blockquote className="text-3xl md:text-5xl font-serif italic text-brand-dark leading-tight mb-10">
                Defendemos la dinámica 'Cerebro a Máquina': donde el pensamiento crítico humano lidera y la Inteligencia Artificial sigue. Nuestro objetivo no es eludir el esfuerzo cognitivo del aprendizaje, sino elevarlo, asegurando que, aunque las herramientas sean artificiales, la comprensión siga siendo auténticamente humana.
             </blockquote>
             <div className="flex flex-col items-center gap-2">
                <cite className="text-brand-red font-bold uppercase tracking-widest not-italic text-sm">
                   D-IA-Crítica
                </cite>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Proyecto de Innovación Docente</span>
             </div>
          </div>
       </section>

       {/* Section 2: Innovation Pillars */}
       <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
             <div>
               <h2 className="text-4xl font-bold text-brand-dark mb-2">Pilares de Innovación</h2>
               <p className="font-serif italic text-gray-500">Integración transversal a lo largo del proceso de enseñanza.</p>
             </div>
             <div className="hidden md:block text-right">
               <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Nivel de Innovación</p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
                { icon: Search, title: "Material Docente", desc: "Uso de IA para generar apuntes, resúmenes y contenido multimedia bajo supervisión." },
                { icon: Users, title: "Dinámicas de Trabajo", desc: "Creación de espacios enriquecidos supervisados por docentes para guiar el aprendizaje previo a la clase." },
                { icon: PenTool, title: "Feedback con IA", desc: "La IA asiste en la corrección de tareas y reportes individualizados, validados por docentes." },
                { icon: BarChart, title: "Monitoreo", desc: "Uso de reportes parciales de desempeño para mejorar la tutoría y detectar dificultades de forma temprana." }
             ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group rounded-sm">
                   <div className="w-12 h-12 bg-gray-100 text-brand-dark flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <item.icon size={20} />
                   </div>
                   <h3 className="font-bold text-lg mb-3 text-brand-dark">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
       </section>

       {/* NEW SECTION: Courses */}
       <section className="container mx-auto px-6 mb-32">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-dark mb-6">Asignaturas Impactadas</h2>
                <p className="font-serif italic text-gray-500 max-w-2xl mx-auto">
                  La metodología se está implementando en diversas asignaturas del plan de estudios, beneficiando a un alumnado diverso.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { code: "140506", name: "Methods and Techniques (Grado en Global Studies)", url: "https://guias.usal.es/node/231860" },
                  { code: "109951", name: "Tecnologías, poder político y gobierno (Grado en Ciencia Política y Administración Pública)", url: "https://guias.usal.es/node/230842" },
                  { code: "109927", name: "Conceptos y Métodos de Política Comparada (Grado en Ciencia Política y Administración Pública)", url: "https://guias.usal.es/node/230785" },
                  { code: "304792", name: "Comparative Public Policy (Máster en Ciencia Política y Administración Pública)", url: "https://guias.usal.es/filesg/guias2015/Fichas%20de%20las%20asignatura%20MUCP%2025_26.pdf" },
                  { code: "109929", name: "Sistemas políticos de América Latina (Grado en Ciencia Política y Administración Pública)", url: "https://guias.usal.es/node/211770" },
                  { code: "109931", name: "Partidos y sistemas de partidos (Grado en Ciencia Política y Administración Pública)", url: "https://guias.usal.es/node/230920" },
                  { code: "208435", name: "Avanced Methods and Techniques (Máster en Global and International Studies)", url: "https://www.usal.es/files/titulos_propios/asig/mfp_en_global_and_international_studies_0.pdf" },
                  { code: "100424", name: "Política y gobierno de España (Grado en Ciencia Política y Administración Pública)", url: "https://guias.usal.es/node/230829" },
                  { code: "140536", name: "Transitional Justice and Democratization (Grado en Global Studies)", url: "https://guias.usal.es/node/232588" },
                  { code: "100428", name: "Políticas Públicas (Grado en Ciencia Política y Administración/Derecho)", url: "https://guias.usal.es/node/211129" },
                  { code: "109608", name: "Sistemas Políticos (Grado en Sociología)", url: "https://guias.usal.es/node/230133" }
                ].map((course, idx) => (
                   <a 
                     key={idx}
                     href={course.url}
                     target="_blank"
                     rel="noopener noreferrer" 
                     className="flex items-center justify-between p-6 transition-all duration-300 group rounded-sm bg-brand-dark text-white border border-white/10 hover:bg-white hover:text-brand-dark hover:border-gray-100 hover:shadow-lg cursor-pointer no-underline"
                   >
                      <div className="flex items-center gap-4 pr-4">
                         <div className="p-3 rounded-full transition-colors shrink-0 bg-brand-red text-white group-hover:bg-brand-gray group-hover:text-brand-dark">
                            <BookOpen size={20} />
                         </div>
                         <span className="font-bold text-sm text-white group-hover:text-brand-dark">{course.name}</span>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded border whitespace-nowrap shrink-0 transition-colors bg-white/10 text-gray-300 border-white/20 group-hover:text-gray-400 group-hover:bg-gray-50 group-hover:border-gray-200">
                        {course.code}
                      </span>
                   </a>
                ))}
             </div>
          </div>
       </section>

       {/* Section 3: Work Plan (Timeline) */}
       <section className="bg-brand-dark text-white py-32">
          <div className="container mx-auto px-6">
             <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                   <div className="sticky top-32">
                      <h2 className="text-5xl font-black italic mb-6 tracking-tighter">
                         Hoja de Ruta <br /> <span className="text-brand-red">del Proyecto</span>
                      </h2>
                      <p className="text-gray-400 text-lg font-serif mb-8">
                         Un plan estructurado en cuatro fases que garantiza un desarrollo lógico desde la conceptualización hasta la difusión.
                      </p>
                      <div className="h-1 w-20 bg-white/20"></div>
                   </div>
                </div>
                
                <div className="lg:w-2/3 space-y-20 relative">
                   {/* Vertical Line */}
                   <div className="absolute left-[15px] top-2 bottom-0 w-px bg-white/20 md:left-[15px]"></div>

                   {/* Phase 1 */}
                   <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-brand-red text-white flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">01</span>
                      <h3 className="text-3xl font-bold mb-2">Diseño y Planificación</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Meses 1 - 2</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Definición del alcance, roles y calendario detallado. Revisión bibliográfica exhaustiva sobre IA en educación superior y marcos éticos.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Reunión inaugural', 'Revisión del estado del arte', 'Marco metodológico'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>

                   {/* Phase 2 */}
                   <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-white text-brand-dark flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">02</span>
                      <h3 className="text-3xl font-bold mb-2">Desarrollo</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Meses 3 - 4</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Creación de guías paso a paso para docentes, recursos de estudio asistidos por IA y rúbricas de evaluación optimizadas.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Protocolos de integración', 'Materiales docentes', 'Rúbricas de evaluación', 'Configuración de NotebookLM'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>

                   {/* Phase 3 */}
                   <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-white text-brand-dark flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">03</span>
                      <h3 className="text-3xl font-bold mb-2">Implementación</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Meses 5 - 9</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Uso activo en el aula. Formación ética para estudiantes, seguida de la aplicación sesión por sesión de la metodología.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Sesión de código ético', 'Feedback revisado por humanos', 'Tutoría proactiva'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>

                    {/* Phase 4 */}
                    <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-white text-brand-dark flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">04</span>
                      <h3 className="text-3xl font-bold mb-2">Evaluación</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Meses 10 - 12</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Recolección de datos cuantitativos (logs, calificaciones) y cualitativos (encuestas, entrevistas) para refinar el modelo.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Análisis de datos', 'Grupos focales', 'Marco v2.0', 'Difusión'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Evaluation Section */}
       <section className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-brand-dark mb-12">Estrategia de Evaluación</h2>
             <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-brand-red">
                   <h3 className="font-bold text-xl mb-4">Cumplimiento de Objetivos</h3>
                   <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-red shrink-0 mt-1"/> Análisis de coherencia y aplicabilidad</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-red shrink-0 mt-1"/> Encuestas de percepción estudiantil</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-red shrink-0 mt-1"/> Evaluación del desarrollo del pensamiento crítico</li>
                   </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-brand-dark">
                   <h3 className="font-bold text-xl mb-4">Protocolo y Materiales</h3>
                   <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-dark shrink-0 mt-1"/> Reducción del tiempo de corrección mecánica</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-dark shrink-0 mt-1"/> Calidad y detalle del feedback</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-dark shrink-0 mt-1"/> Analíticas de uso de notebookLM</li>
                   </ul>
                </div>
             </div>
          </div>
       </section>

    </div>
  );
};