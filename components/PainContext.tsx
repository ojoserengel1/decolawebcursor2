import React from 'react';
import Button from './ui/Button';
import { Search, AlertCircle, TrendingDown, ArrowRight } from 'lucide-react';

const PainContext: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header da Seção */}
        <div className="text-center max-w-full mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6 flex flex-col items-center justify-center">
            <span className="md:whitespace-nowrap text-center">
              Seus futuros clientes já <br className="md:hidden" /> estão te procurando.
            </span>
            <span className="text-primary mt-1 md:mt-2 md:whitespace-nowrap text-center">
              Eles te encontram ou <br className="md:hidden" /> encontram seu concorrente?
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-full mx-auto md:whitespace-nowrap px-2">
            O comportamento do consumidor mudou. Veja o que acontece agora mesmo na sua região:
          </p>
        </div>

        {/* Cards de Fluxo (O Problema) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100 hover:shadow-md transition-shadow relative">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
             </div>
             <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">1. A Busca</h3>
             <p className="text-sm md:text-base text-gray-600">
               Seu cliente abre o Google e digita: <br/>
               <span className="italic text-gray-800 font-medium">“advogado em [cidade]”</span> ou <span className="italic text-gray-800 font-medium">“clínica no [bairro]”</span>.
             </p>
             {/* Seta visual para desktop */}
             <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-gray-300" />
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100 hover:shadow-md transition-shadow relative">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
             </div>
             <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">2. O Vazio</h3>
             <p className="text-sm md:text-base text-gray-600">
               Se você não tem site, <strong className="text-primary">você não aparece</strong>. Eles não encontram seu telefone, endereço ou serviços.
             </p>
             {/* Seta visual para desktop */}
             <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-gray-300" />
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-dark/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <TrendingDown className="w-5 h-5 md:w-6 md:h-6 text-dark" />
             </div>
             <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">3. A Perda</h3>
             <p className="text-sm md:text-base text-gray-600">
               Eles clicam no site do concorrente, tiram dúvidas, ganham confiança e fecham negócio com ele.
             </p>
          </div>
        </div>

        {/* Bloco de Destaque (A Realidade) - Refinado */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/20 via-transparent to-primary/5 shadow-2xl">
            <div className="bg-dark rounded-[22px] px-4 py-8 md:p-14 text-center relative overflow-hidden">
                {/* Background Texture & Effects */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-sm">
                        <AlertCircle className="w-3 h-3" />
                        <span>Realidade do Mercado</span>
                    </div>

                    <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
                        A verdade é simples:
                    </h3>

                    <p className="text-base md:text-xl text-gray-400 font-light mb-8 md:mb-10 leading-relaxed max-w-2xl px-2">
                        Enquanto você depende só de Instagram e indicação, <br className="hidden md:block" /> 
                        <span className="text-gray-200">sua empresa está invisível para quem pesquisa no Google.</span>
                    </p>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-8 rounded-2xl mb-8 md:mb-10 w-full max-w-xl shadow-inner">
                         <p className="text-lg md:text-2xl text-white font-medium">
                            Se você não está posicionado, <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-primary font-bold drop-shadow-sm">está deixando dinheiro na mesa.</span>
                         </p>
                    </div>
                    
                    <Button 
                        variant="primary" 
                        onClick={() => window.open('https://wa.me/5547997094291?text=Quero%20meu%20site%20por%20R%2499%2C90%2Fm%C3%AAs', '_blank')}
                        className="shadow-xl hover:shadow-red-600/40 text-base md:text-lg px-8 py-4 md:px-10 md:py-5 w-full md:w-auto transition-transform hover:-translate-y-1"
                    >
                        Quero parar de perder clientes
                    </Button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PainContext;