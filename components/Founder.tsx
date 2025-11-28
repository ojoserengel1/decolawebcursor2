import React, { useState } from 'react';
import { Instagram, Target, TrendingUp, Users } from 'lucide-react';

const Founder: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="founder" className="py-16 md:py-32 bg-[#02030a] relative overflow-hidden text-white">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-[350px] mx-auto md:max-w-none grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto e História (7 colunas) */}
          <div className="lg:col-span-7 order-1 lg:order-1">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-sm">
                <Users className="w-3 h-3" />
                <span>Sobre o Fundador</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
              Quem está por trás da <span className="text-primary">DecolaWeb?</span>
            </h2>
            
            <p className="text-sm md:text-lg text-gray-300 font-medium mb-8 md:mb-10 italic border-l-4 border-primary pl-4 md:pl-6 whitespace-normal md:whitespace-nowrap">
              "Um fundador obcecado em tirar empresas da invisibilidade digital."
            </p>

            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                A DecolaWeb nasceu da visão e da inquietação de <strong className="text-white">José Rengel</strong>, estrategista digital que há mais de 3 anos vive o dia a dia de marketing, vendas e posicionamento online para negócios de diferentes segmentos.
              </p>
              
              <p>
                Ao longo desse tempo, o José enxergou um padrão claro: <span className="text-gray-200 font-medium">muita empresa boa, com produto forte e atendimento sério, simplesmente não aparecia na internet.</span> Faltava site, faltava posicionamento, faltava estrutura — e sobrava frustração com soluções caras, complicadas ou mal executadas.
              </p>
              
              <p>
                Foi dessa dor que surgiu o propósito que hoje guia a DecolaWeb: <strong className="text-white">democratizar o acesso ao posicionamento digital profissional para empresas em todo o Brasil.</strong>
              </p>

              <p>
                Em vez de vender dezenas de serviços diferentes, o José decidiu focar em um único produto extremamente bem-feito: <strong className="text-white">um site profissional completo, com domínio, hospedagem, segurança e suporte, por um valor acessível e um processo simples.</strong>
              </p>
              
              <p className="text-sm text-gray-500 italic">
                Algo que qualquer empresa séria consegue contratar e sustentar mês a mês.
              </p>
            </div>

          </div>

          {/* Coluna Direita: Card Mini-Bio (5 colunas) */}
          <div className="lg:col-span-5 order-2 lg:order-2 lg:sticky lg:top-32">
            <div className="bg-[#02030a] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
                
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header Card */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-white/10 flex items-center justify-center overflow-hidden relative">
                        {!imageError ? (
                            <picture>
                                <source srcSet="/jose-rengel.webp" type="image/webp" />
                                <img 
                                    src="/jose-rengel.jpg" 
                                    alt="José Rengel, fundador da DecolaWeb" 
                                    className="w-full h-full object-cover rounded-full"
                                    onError={() => setImageError(true)}
                                />
                            </picture>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                <Users className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">José Rengel</h3>
                        <span className="text-primary text-sm font-medium tracking-wide uppercase">Fundador da DecolaWeb</span>
                    </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-6 relative z-10">
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-primary">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">Experiência de Campo</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Mais de 3 anos no mercado digital, atuando diretamente no campo de batalha.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-primary">
                            <Target className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">Estrategista</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Atuação em estratégias de marketing, funis de venda e posicionamento online.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-primary">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">Foco em Resultado</h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Obsessão por transformar presença digital em geração real de oportunidades para empresas.</p>
                        </div>
                    </div>
                </div>

                {/* Quote no Card */}
                <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                    <blockquote className="text-sm md:text-base italic text-gray-300 leading-relaxed mb-4">
                        "Eu sei o quanto é difícil fazer uma empresa crescer no Brasil. <br/><br/>
                        <span className="text-white font-medium not-italic">Meu compromisso com a DecolaWeb é simples:</span> você cuida do seu negócio, e eu cuido para que ele seja visto na internet."
                    </blockquote>
                    <cite className="text-xs text-primary font-bold uppercase tracking-wider not-italic">
                        – José Rengel, fundador da DecolaWeb
                    </cite>
                </div>

                {/* Social Links (Opcional) */}
                <div className="mt-6 flex gap-4 relative z-10">
                    <a href="https://www.instagram.com/ojoserengel" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
