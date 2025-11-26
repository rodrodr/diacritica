import React, { useState } from 'react';
import { 
  Brain, 
  Users, 
  Shield, 
  Lightbulb, 
  Eye, 
  Layout, 
  Mic, 
  PenTool, 
  FileText, 
  CheckCircle2,
  UserCheck,
  Laptop,
  School,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Database,
  Code,
  MessageSquare,
  BookOpen,
  Cpu,
  Layers,
  HeartHandshake,
  Search
} from 'lucide-react';

export const Methodology: React.FC = () => {
  const [activeLight, setActiveLight] = useState<string | null>('green');

  const toggleLight = (color: string) => {
    setActiveLight(prev => prev === color ? null : color);
  };

  return (
    <div className="pt-32 bg-white min-h-screen text-brand-dark font-sans">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black italic text-brand-dark mb-6 tracking-tighter">
          el marco
        </h1>
        <p className="text-xl text-gray-500 font-serif italic max-w-3xl mx-auto leading-relaxed">
          Una guía integral para integrar la IA generativa en el proceso educativo: 
          desde el diseño del curso hasta la evaluación, centrándose en el <span className="text-brand-dark font-bold not-italic">pensamiento crítico</span> y la <span className="text-brand-dark font-bold not-italic">supervisión humana</span>.
        </p>
      </div>

      {/* Section 1: The 6 Principles */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex items-end gap-4 mb-12 border-b border-brand-dark pb-4">
           <h2 className="text-3xl font-bold uppercase tracking-tighter">Principios Rectores</h2>
           <p className="text-sm font-serif italic text-gray-500 pb-1">La base de nuestra metodología asistida por IA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <PrincipleCard 
              icon={UserCheck}
              title="Centrado en el Estudiante, Supervisado por el Docente"
              desc="La IA mejora la autonomía, pero los docentes deben proporcionar una orientación clara, una supervisión estrecha y una instrucción constante, especialmente en las etapas académicas tempranas."
           />
           <PrincipleCard 
              icon={Layout}
              title="Integración TPCK"
              desc="Actualización del Conocimiento Tecnológico Pedagógico del Contenido: alinear las herramientas de IA con contenidos disciplinarios específicos y objetivos pedagógicos."
           />
           <PrincipleCard 
              icon={Shield}
              title="Integración Responsable"
              desc="Promover la igualdad, la inclusión social y la integridad académica. Formar a los estudiantes sobre las limitaciones y las cuestiones éticas antes de su uso."
           />
           <PrincipleCard 
              icon={Brain}
              title="Cerebro → Máquina"
              desc="Priorizar la dinámica 'Cerebro a Máquina'. El pensamiento crítico debe preceder a la generación por IA. Evitar delegar tareas cognitivas de manera acrítica."
           />
           <PrincipleCard 
              icon={Lightbulb}
              title="Creatividad y Autonomía"
              desc="La IA debe alimentar la creatividad, no reemplazarla. El marco apoya a los estudiantes en las fases en las que asumen un papel protagonista como aprendices."
           />
           <PrincipleCard 
              icon={Eye}
              title="Privacidad y Transparencia"
              desc="Proteger la privacidad de los datos. Los instructores deben diseñar sistemas de tutoría seguros (RAG) para salvaguardar los derechos fundamentales."
           />
        </div>
      </section>

      {/* Section 2: The Framework Flow (Fig 1) */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
                 El Proceso Educativo
               </h2>
               <p className="text-gray-400 text-lg max-w-2xl mx-auto font-serif">
                  Un flujo de trabajo de cuatro etapas que combina las oportunidades de la IA con la supervisión humana.
               </p>
            </div>

            <div className="space-y-24">
               
               {/* STAGE 1: PREPARATION */}
               <div className="relative">
                  <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Etapa 01
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Teacher Side */}
                     <div className="text-right pr-8 relative">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Diseño del Material</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Rol Docente • IA Involucrada</p>
                        <ul className="space-y-4 text-gray-300 text-sm inline-block text-right">
                           <li className="flex items-center justify-end gap-3">
                              Curación de textos para evitar alucinaciones <BookOpen size={16} />
                           </li>
                           <li className="flex items-center justify-end gap-3">
                              Diseño de evaluaciones alineadas con IA <PenTool size={16} />
                           </li>
                           <li className="flex items-center justify-end gap-3">
                              Configuración de entornos NotebookLM <Laptop size={16} />
                           </li>
                        </ul>
                     </div>

                     {/* Student Side */}
                     <div className="pl-8 relative">
                        <h3 className="text-2xl font-bold mb-2 text-white">Clase Invertida</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Rol Estudiante • IA Específica</p>
                        <ul className="space-y-4 text-gray-300 text-sm">
                           <li className="flex items-center gap-3">
                              <MessageSquare size={16} /> Chat con materiales previos
                           </li>
                           <li className="flex items-center gap-3">
                              <FileText size={16} /> Resúmenes generados por IA
                           </li>
                           <li className="flex items-center gap-3">
                              <Mic size={16} /> Escuchar podcasts de IA (NotebookLM)
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* STAGE 2: IN-CLASS */}
               <div className="relative">
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Etapa 02
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Instructions */}
                     <div className="text-right pr-8">
                        <h3 className="text-2xl font-bold mb-2 text-white">Instrucciones</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Aula • SIN IA</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                           Breve revisión de contenidos mediante lecciones presenciales tradicionales. 
                           Foco en aclarar dudas que la IA no pudo resolver en casa.
                        </p>
                        <div className="inline-block bg-purple-700 border border-purple-600 px-3 py-1 text-xs text-white font-bold rounded-sm shadow-[0_0_15px_rgba(126,34,206,0.4)]">
                           Debates Críticos
                        </div>
                     </div>

                     {/* Work */}
                     <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Trabajo en Aula</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Activo • IA Específica</p>
                        <ul className="space-y-4 text-gray-300 text-sm">
                           <li className="flex items-center gap-3">
                              <Users size={16} /> Lluvia de ideas y planificación grupal
                           </li>
                           <li className="flex items-center gap-3">
                              <CheckCircle2 size={16} /> Resolución de problemas con apoyo de IA
                           </li>
                           <li className="flex items-start gap-3 text-brand-red">
                              <XCircle size={16} className="shrink-0 mt-0.5" /> Escritura realizada SIN IA
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* STAGE 3: POST-CLASS */}
               <div className="relative">
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Etapa 03
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Assessment */}
                     <div className="text-right pr-8">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Corrección y Feedback</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Rol Docente • IA Involucrada</p>
                        <div className="space-y-6 text-sm text-gray-300">
                           <div className="flex flex-col items-end">
                              <span className="font-bold text-white block mb-1">1. Corrección Humana Inicial</span>
                              <span className="text-gray-500">Revisión basada en rúbricas establecidas.</span>
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="font-bold text-white block mb-1">2. Comentarios Mejorados por IA</span>
                              <span className="text-gray-500">Generación de informes detallados vía prompt.</span>
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="font-bold text-white block mb-1">3. Revisión Humana Final</span>
                              <span className="text-gray-500">Verificación de alucinaciones/sesgos.</span>
                           </div>
                        </div>
                     </div>

                     {/* Early Identification */}
                     <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-2 text-white">Identificación Temprana</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Casos Sensibles • Asistido por IA</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                           La IA ayuda a los docentes a identificar estudiantes que requieren más atención debido a resultados pobres o extremadamente desiguales.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 border-l-2 border-yellow-500 rounded-r-sm">
                               <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                                  <AlertTriangle size={14} className="text-yellow-500" /> Detección de Anomalías
                               </h4>
                               <p className="text-xs text-gray-400">Detección de disparidades en calificaciones y caídas en la participación.</p>
                            </div>
                             <div className="bg-white/5 p-4 border-l-2 border-brand-red rounded-r-sm">
                               <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                                  <Eye size={14} className="text-brand-red" /> Alerta Proactiva
                               </h4>
                               <p className="text-xs text-gray-400">El sistema activa alertas para que los docentes brinden orientación.</p>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>

                {/* STAGE 4: TUTORIALS */}
                <div className="relative">
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Etapa 04
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Tutorials */}
                     <div className="text-right pr-8">
                        <h3 className="text-2xl font-bold mb-2 text-white">Tutorías Presenciales</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Interacción Humana • SIN IA</p>
                        
                        <div className="flex flex-col items-end space-y-4">
                           <div className="flex items-center gap-4 p-3 rounded-sm bg-white/5 w-full justify-end hover:bg-white/10 transition-colors group cursor-default">
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Detectar obstáculos específicos</span>
                              <div className="bg-brand-red/20 p-2 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all"><Search size={16} /></div>
                           </div>
                           <div className="flex items-center gap-4 p-3 rounded-sm bg-white/5 w-full justify-end hover:bg-white/10 transition-colors group cursor-default">
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Reorganizar ideas del proyecto</span>
                              <div className="bg-brand-red/20 p-2 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all"><Lightbulb size={16} /></div>
                           </div>
                           <div className="flex items-center gap-4 p-3 rounded-sm bg-white/5 w-full justify-end hover:bg-white/10 transition-colors group cursor-default">
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Impulsar la motivación</span>
                              <div className="bg-brand-red/20 p-2 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all"><HeartHandshake size={16} /></div>
                           </div>
                        </div>
                     </div>

                     {/* Personalized Assistance */}
                     <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Asistencia Personalizada</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Desarrollo Estudiantil • SIN IA</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                           Un enfoque claro en el desarrollo del estudiante y una asistencia pedagógica sólida. Ir más allá de la entrega de contenido hacia la mentoría.
                        </p>
                        <div className="space-y-4">
                           <div className="flex items-start gap-3">
                              <div className="w-1 h-full min-h-[40px] bg-white/20 rounded-full"></div>
                              <div>
                                 <h4 className="text-white font-bold text-sm">Mentoría Holística</h4>
                                 <p className="text-gray-500 text-xs mt-1">Abordar el crecimiento académico y personal.</p>
                              </div>
                           </div>
                           <div className="flex items-start gap-3">
                              <div className="w-1 h-full min-h-[40px] bg-white/20 rounded-full"></div>
                              <div>
                                 <h4 className="text-white font-bold text-sm">Orientación Pedagógica</h4>
                                 <p className="text-gray-500 text-xs mt-1">Consejos adaptados para futuros pasos profesionales.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Section 2.5: The Toolkit */}
      <section className="py-24 bg-brand-gray border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
               <h2 className="text-4xl font-black italic text-brand-dark tracking-tighter mb-4">
                  El Kit de Herramientas
               </h2>
               <p className="text-gray-600 font-serif text-lg max-w-2xl mx-auto">
                  Un ecosistema curado de modelos, software y diseños estratégicos utilizados para construir el entorno enriquecido por IA.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
               
               {/* Left Column: Tech Stack */}
               <div className="space-y-10">
                  <div>
                     <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-6 border-b border-brand-dark/10 pb-4">
                       <Cpu className="text-brand-red" size={24} /> Modelos y Espacios de Trabajo
                     </h3>
                     
                     <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-red mb-6 group hover:shadow-md transition-all">
                        <h4 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">Espacios de Trabajo Mejorados por IA</h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                           Utilizamos <strong>NotebookLM</strong> como sistema principal RAG (Retrieval-Augmented Generation). Esto proporciona a los estudiantes un entorno seguro y fundamentado donde pueden estudiar materiales del curso subidos, generar resúmenes y aclarar dudas sin el riesgo de alucinaciones de la web abierta.
                        </p>
                        <div className="flex gap-2">
                           <span className="text-[10px] font-bold uppercase bg-brand-gray px-2 py-1 text-gray-500 rounded-sm">Sistema RAG</span>
                           <span className="text-[10px] font-bold uppercase bg-brand-gray px-2 py-1 text-gray-500 rounded-sm">Asistente de Estudio</span>
                        </div>
                     </div>

                     <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-dark group hover:shadow-md transition-all">
                        <h4 className="font-bold text-lg mb-2">Modelos Generativos</h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                           Un enfoque agnóstico seleccionando modelos basados en el rendimiento de tareas específicas. Utilizado para generación de contenido, asistencia en codificación y creación de imágenes.
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-widest rounded-sm text-gray-500">ChatGPT</span>
                           <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-widest rounded-sm text-gray-500">Claude</span>
                           <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-widest rounded-sm text-gray-500">Gemini</span>
                        </div>
                     </div>
                  </div>

                  <div>
                      <h3 className="text-xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                         <Layers size={20} className="text-gray-400" /> Software de Apoyo
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                         Integración con herramientas de código abierto como <strong>R</strong> y <strong>Quarto</strong> para crear simuladores interactivos, desplegados vía <strong>Moodle</strong> o LMS institucional.
                      </p>
                  </div>
               </div>

               {/* Right Column: Design & Strategy */}
               <div className="space-y-10">
                  <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-6 border-b border-brand-dark/10 pb-4">
                    <PenTool className="text-brand-red" size={24} /> Diseño y Estrategia
                  </h3>

                  <div className="space-y-6">
                     <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center shrink-0 font-bold text-sm mt-1">01</div>
                        <div>
                           <h4 className="font-bold text-lg mb-2">Materiales Didácticos</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">
                              Diseño de diversos activos incluyendo <strong>podcasts</strong> para aprendizaje auditivo, <strong>simuladores</strong> para manipulación de variables y <strong>evaluaciones</strong> que desafían el pensamiento crítico en lugar de la memorización.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center shrink-0 font-bold text-sm mt-1">02</div>
                         <div>
                           <h4 className="font-bold text-lg mb-2">Prompts Estratégicos</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">
                              Ingeniería de prompts complejos no solo para creación, sino para <strong>evaluación y feedback</strong>. Estos prompts instruyen a la IA para actuar como un tutor socrático o un calificador estricto basado en rúbricas específicas.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 font-bold text-sm mt-1">03</div>
                         <div>
                           <h4 className="font-bold text-lg mb-2">Identificación Temprana</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">
                              Despliegue de prompts de capa de seguridad diseñados para detectar estudiantes con dificultades en conceptos básicos o aquellos que malutilizan las herramientas. Esto permite una <strong>identificación temprana</strong> de casos sensibles que requieren intervención humana directa.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Section 3: Practical Applications (The 3 Examples) */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-4xl font-black italic text-brand-dark tracking-tighter mb-4">
                  Metodología en Acción
               </h2>
               <p className="text-gray-600 font-serif text-lg">
                  Tres tipos de asignaciones distintas diseñadas para implementar este marco en Ciencias Sociales.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               {/* Example 1 */}
               <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-brand-red/30 transition-colors group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                     <Mic size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Conceptos Teóricos</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">El Podcast</p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                     Usando IA para generar una fábula ("La Asamblea del Bosque") y un debate entre estudiantes sintéticos. Convierte la escucha pasiva en análisis activo de conceptos complejos como la Ley de Hierro de la Oligarquía.
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                     <span className="text-xs font-mono text-gray-400">Herramientas: ChatGPT + Gemini TTS</span>
                  </div>
               </div>

               {/* Example 2 */}
               <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-brand-red/30 transition-colors group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                     <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Medición Híbrida</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">El Simulador</p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                     Superando barreras matemáticas usando "Vibe-Coding". La IA genera simuladores HTML interactivos para conceptos como el "Número Efectivo de Partidos", permitiendo a los estudiantes visualizar fórmulas abstractas.
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                     <span className="text-xs font-mono text-gray-400">Herramientas: Claude Sonnet + Quarto</span>
                  </div>
               </div>

               {/* Example 3 */}
               <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-brand-red/30 transition-colors group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                     <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Recolección de Datos</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">La Consultoría Gamificada</p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                     Una asignación de juego de rol donde los estudiantes actúan como analistas. La IA genera el escenario y prevalida la rúbrica, mientras los estudiantes realizan la limpieza y análisis manual de datos.
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                     <span className="text-xs font-mono text-gray-400">Herramientas: Excel + Rúbricas IA</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Section 4: Ethical Traffic Light (Accordion Redesign) */}
      <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-brand-dark/0 via-brand-dark/0 to-brand-red/5 pointer-events-none"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <h2 className="text-5xl md:text-6xl font-black italic text-white tracking-tighter mb-6">
                  Semáforo Ético
               </h2>
               <p className="text-gray-400 font-serif italic max-w-2xl mx-auto text-lg">
                  Haz clic en las luces para explorar las directrices.
               </p>
            </div>

            <div className="max-w-3xl mx-auto bg-[#111] rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl relative">
               <div className="flex flex-col gap-8 md:gap-12">
                  
                  {/* RED */}
                  <TrafficLightRow 
                    color="red" 
                    title="ALTO" 
                    subtitle="Uso Perjudicial" 
                    isOpen={activeLight === 'red'} 
                    onClick={() => toggleLight('red')}
                    items={["Copiar y pegar trabajo de IA como propio", "Inventar citas (Fabricación)", "Compartir datos personales/sensibles", "Omitir la lectura original"]}
                  />

                  {/* YELLOW */}
                  <TrafficLightRow 
                    color="yellow" 
                    title="CEDA EL PASO" 
                    subtitle="Revisión Crítica" 
                    isOpen={activeLight === 'yellow'} 
                    onClick={() => toggleLight('yellow')}
                    items={["Resúmenes de IA (Nunca reemplazar lectura)", "Búsqueda de fuentes (Riesgo de alucinación)", "Explicaciones teóricas (Doble verificación)"]}
                  />

                  {/* GREEN */}
                  <TrafficLightRow 
                    color="green" 
                    title="ADELANTE" 
                    subtitle="Uso Constructivo" 
                    isOpen={activeLight === 'green'} 
                    onClick={() => toggleLight('green')}
                    items={["Apoyo a la lectura y ejemplos", "Generación de esquemas y mapas conceptuales", "Asistencia técnica (Código/Formato)", "Corrección de lenguaje y gramática"]}
                  />

               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

const PrincipleCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
   <div className="bg-gray-50 p-8 rounded-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-brand-dark hover:border-brand-red group">
      <div className="mb-4 text-brand-dark group-hover:text-brand-red transition-colors">
         <Icon size={32} />
      </div>
      <h3 className="font-bold text-lg mb-3 text-brand-dark">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
   </div>
);

const TrafficLightRow = ({ 
  color, 
  title, 
  subtitle, 
  isOpen, 
  onClick, 
  items 
}: { 
  color: 'red' | 'yellow' | 'green', 
  title: string, 
  subtitle: string, 
  isOpen: boolean, 
  onClick: () => void, 
  items: string[] 
}) => {
  
  const colorStyles = {
    red: {
      on: "bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.8)] border-red-500",
      off: "bg-red-950/50 border-red-900/30 opacity-50",
      text: "text-red-500"
    },
    yellow: {
      on: "bg-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.8)] border-yellow-300",
      off: "bg-yellow-950/50 border-yellow-900/30 opacity-50",
      text: "text-yellow-400"
    },
    green: {
      on: "bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.8)] border-green-400",
      off: "bg-green-950/50 border-green-900/30 opacity-50",
      text: "text-green-500"
    }
  };

  const currentStyle = colorStyles[color];

  return (
    <div className="flex gap-8 items-start group cursor-pointer" onClick={onClick}>
      {/* Light Circle */}
      <div className="relative shrink-0 pt-2">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 transition-all duration-500 ease-out ${isOpen ? currentStyle.on : currentStyle.off} hover:scale-105`}></div>
        {/* Connector Line to next light (only for red and yellow) */}
        {color !== 'green' && (
             <div className="absolute left-1/2 -translate-x-1/2 top-20 md:top-24 w-1 h-20 md:h-24 bg-[#222] -z-10"></div>
        )}
      </div>

      {/* Text Content */}
      <div className={`flex-grow pt-2 md:pt-4 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`}>
        <h3 className={`text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-1 ${currentStyle.text}`}>
          {title}
        </h3>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          {subtitle}
        </p>
        
        <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
           <div className="overflow-hidden">
              <ul className="space-y-3 border-t border-white/10 pt-4">
                {items.map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${currentStyle.text.replace('text-', 'bg-')}`}></span>
                      <span className="leading-relaxed">{item}</span>
                   </li>
                ))}
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};