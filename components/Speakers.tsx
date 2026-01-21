import React from 'react';
import { SPEAKERS } from '../constants';

export const Speakers: React.FC = () => {
  return (
    <section id="palestrantes" className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Os Mentores</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aprenda com quem vive na prática os desafios e as vitórias do empreendedorismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-brand-neon/20 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 blur-sm"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-brand-neon/50 transition-all duration-300 h-full flex flex-col items-center text-center shadow-xl group-hover:shadow-[0_0_20px_rgba(0,209,255,0.15)]">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-brand-neon/50 group-hover:border-brand-neon mb-6 shadow-[0_0_15px_rgba(0,209,255,0.3)] transition-all">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      transform: speaker.name === 'Fred Rocha' ? 'scale(2.0) translateY(25px)' : 'none'
                    }}
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-brand-neon transition-colors">{speaker.name}</h3>
                <p className="text-brand-neon font-semibold tracking-wide uppercase text-sm mb-4 drop-shadow-[0_0_5px_rgba(0,209,255,0.5)]">{speaker.role}</p>
                <p className="text-gray-300 leading-relaxed">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};