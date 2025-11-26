import React from 'react';
import Button from './ui/Button';
import { Check, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-[#02030a] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      
      {/* Spotlight Central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        
        {/* Headline Block */}
        <h2 className="text-xl md:text-5xl font-extrabold text-white mb-6 md:mb-8 tracking-tight leading-tight">
          Toda empresa de sucesso tem um site.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-orange-500">
             A sua vai continuar ficando de fora?
          </span>
        </h2>
        
        <p className="text-sm md:text-lg text-gray-400 mb-8 md:mb-12 max-w-5xl mx-auto font-light leading-relaxed px-2">
           Você já entendeu que seus clientes estão te procurando na internet e que não ter um site faz você perder dinheiro.
           <br className="hidden md:block" />
           Ter um site completo por <span className="text-white font-bold">R$ 99,90/mês</span> é, no mínimo, inteligente para qualquer negócio sério.
        </p>

        {/* The Choice Block - Premium Design */}
        <div className="relative max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-primary/30 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-[#0A0B14] border border-white/10 rounded-3xl p-1 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    
                    {/* Option A (Negative) */}
                    <div className="p-6 md:p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left opacity-50 hover:opacity-70 transition-opacity">
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 uppercase mb-2 md:mb-3">O Caminho Difícil</span>
                        <p className="text-gray-300 font-medium text-base md:text-lg">
                            Continuar dependendo só de rede social, indicação e improviso...
                        </p>
                    </div>

                    {/* Option B (Positive) */}
                    <div className="relative p-6 md:p-10 bg-white/5 rounded-2xl md:rounded-l-none md:rounded-r-2xl border border-white/5 flex flex-col justify-center items-center md:items-start text-center md:text-left overflow-hidden">
                         {/* Glow */}
                         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                         
                         <div className="relative z-10">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-2 md:mb-3 block">AGORA A ESCOLHA É SUA:</span>
                            <p className="text-white font-bold text-base md:text-xl">
                                Ter um site profissional, assinado por especialistas, com <span className="text-primary">tudo incluído.</span>
                            </p>
                         </div>
                    </div>

                </div>
                
                {/* Divider Line Mobile */}
                <div className="md:hidden w-full h-px bg-white/10"></div>
                {/* Divider Line Desktop */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-white/10"></div>
            </div>
        </div>

        {/* CTA Area */}
        <div className="flex flex-col items-center w-full">
            <div className="relative group w-full md:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-200 hidden md:block"></div>
                <Button 
                    variant="primary" 
                    className="relative text-sm md:text-2xl px-4 py-4 md:px-12 md:py-6 w-full md:w-auto shadow-2xl"
                    onClick={() => window.open('https://wa.me/5547997091?text=Quero%20meu%20site%20por%20R%2499%2C90%2Fm%C3%AAs', '_blank')}
                >
                    <span className="whitespace-nowrap tracking-tight">
                        Quero meu site profissional por R$ 99,90/mês
                    </span>
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;