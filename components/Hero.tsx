import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-students-working-on-a-project-4437-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center md:justify-end pb-20 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic text-white mb-4 leading-none tracking-tighter">
            Aprendizaje significativo <br />
            <span className="text-brand-red">asistido por IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 font-serif italic mb-8 max-w-xl">
            Pensamiento Crítico, Aprendizaje Lúdico.
          </p>
          
          <div>
            <Button variant="outline" size="lg">
              Comenzar el Viaje
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};