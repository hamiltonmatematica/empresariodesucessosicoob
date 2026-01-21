import React from 'react';
import { Quote } from 'lucide-react';
import { Button } from './Button';

export const Testimonials: React.FC = () => {
    const testimonials = [
        {
            content: "Sentar com o Fred Rocha nos fazem repensar atitudes, abrir horizontes e voltar para casa com vontade de fazer mais e melhor. Com sua energia contagiante e uma visão prática do varejo, ele conseguiu traduzir de forma leve e direta temas essenciais para empresários e profissionais de vendas. Fred conecta pessoas e negócios com a mesma naturalidade e profundidade.",
            author: "Olga Fonseca",
            role: "Diretora da Simmons do Brasil",
        },
        {
            content: "Fred Rocha traduz vendas como poucos: com propósito, leitura real de mercado e profunda compreensão do comportamento do consumidor. Seu trabalho nasce da prática e provoca empresários a enxergarem o negócio com mais clareza, estratégia e coragem para se reinventar.",
            author: "Camila Farani",
            role: "Investidora Shark Tank Brasil",
        },
        {
            content: "Fred Rocha é um profissional de excelência, com uma capacidade única de conectar conhecimento prático à realidade dos empresários. Seu trabalho junto às associações comerciais mineiras foi transformador, trazendo inovação, inspiração e resultados concretos.",
            author: "Valmir Rodrigues",
            role: "Presidente da Federaminas / Vice Presidente Sebrae Minas",
        },
        {
            content: "Tive a oportunidade de assistir a palestra que o Diego Suzano deu no G4 Educação. Eu já esperava algo bom, mas confesso que fiquei impressionada com o que vi. A presença de palco, os insights de negócio e a visão de mercado do Diego realmente me impressionaram. Na época eu atuava como gestora de produtos educacionais do G4 e, por esse motivo, tinha contato constante com outros membros. Lembro claramente de receber ótimos feedbacks dessa palestra do Diego. Ouvi-lo é de fato uma aula de negócios.",
            author: "Desirée Gonçalves",
            role: "Community G4 Educação",
        }
    ];

    return (
        <section className="py-20 bg-brand-dark/50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        O que dizem os <span className="text-brand-neon">Grandes Líderes</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-2xl relative backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.2)] flex flex-col">
                            <Quote className="absolute top-6 left-6 text-brand-neon/20 w-12 h-12 -z-10" />

                            <div className="relative z-10 flex-1">
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 italic">
                                    "{item.content}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
                                    {/* Placeholder for avatar if needed
                  <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon font-bold text-xl">
                    {item.author.charAt(0)}
                  </div>
                  */}
                                    <div>
                                        <h4 className="text-white font-bold text-base">{item.author}</h4>
                                        <p className="text-brand-neon text-xs uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center items-center">
                    <Button onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}>
                        GARANTA SUA VAGA
                    </Button>
                </div>
            </div>
        </section>
    );
};
