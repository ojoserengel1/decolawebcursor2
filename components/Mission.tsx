import React from 'react';
import { Target, Zap, Heart, Globe2 } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="missao" className="py-16 md:py-32 bg-[#02030a] text-white relative overflow-hidden">
      
      {/* Background Texture & Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
          
          {/* Coluna Esquerda: A Narrativa */}
          <div className="relative md:sticky md:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-sm shadow-lg shadow-primary/5">
              <Heart className="w-3 h-3 fill-current" />
              <span>Nossa Essência</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Nossa missão é <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400">democratizar</span> <br />
              o digital no Brasil.
            </h2>

            <div className="relative mb-8 md:mb-10 pl-4 md:pl-6 border-l-2 border-primary/50">
                <p className="text-lg md:text-xl text-white font-medium italic leading-relaxed">
                "Nenhuma empresa séria deveria ficar invisível <br className="hidden lg:block" /> só porque não consegue ter um site profissional."
                </p>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                Na DecolaWeb, acreditamos que site profissional não é luxo, é <span className="text-gray-200 font-semibold">infraestrutura básica</span> de qualquer negócio que leva o próprio trabalho a sério.
              </p>
              <p>
                Criamos um único produto com um único propósito: <strong className="text-white font-bold">colocar empresas de todos os tamanhos no mapa da internet</strong>, com uma solução completa, acessível e confiável.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Os Pilares e Manifesto */}
          <div className="flex flex-col gap-5 md:gap-6 mt-4 md:mt-0">
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <div className="h-px w-6 md:w-8 bg-primary"></div>
                Nossos Pilares Fundamentais
            </h3>

            {/* Cards de Pilares (Empilhados) */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Tirar a internet do pedestal</h3>
                    <p className="text-xs md:text-sm text-gray-400">Tornar o digital algo natural, simples e acessível para qualquer empreendedor, não um bicho de sete cabeças.</p>
                </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Zap className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Eliminar barreiras de entrada</h3>
                    <p className="text-xs md:text-sm text-gray-400">Acabar com o custo proibitivo de agências tradicionais e a complexidade técnica de fazer sozinho.</p>
                </div>
            </div>

             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Globe2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Entregar presença profissional</h3>
                    <p className="text-xs md:text-sm text-gray-400">Qualidade visual e técnica de alto nível por um valor mensal que cabe no bolso.</p>
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;