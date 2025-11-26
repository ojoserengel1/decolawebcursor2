import React from 'react';
import Button from './ui/Button';
import { ShieldCheck, CheckCircle2, Server, Globe, Mail, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#03041A] pt-28 pb-16 md:pt-48 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* --- Background Effects (Premium Lighting) --- */}
      
      {/* 1. Grid Pattern sutil ao fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* 2. Spotlight Principal (Luz vindo do topo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-60 pointer-events-none mix-blend-screen"></div>
      
      {/* 3. Ambient Glow (Azul profundo na base) */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#03041A] via-[#03041A]/80 to-transparent pointer-events-none z-10"></div>


      <div className="container mx-auto px-4 max-w-6xl relative z-20 text-center flex flex-col items-center">
        
        {/* Top Badge Refinado */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,0,46,0.1)] mb-6 md:mb-8 animate-fade-in-up max-w-[95%]">
            <Star className="w-3 h-3 text-primary fill-primary shrink-0" />
            <span className="text-gray-200 font-medium text-xs md:text-sm tracking-wide truncate">Toda empresa de sucesso tem um site. Agora é sua vez.</span>
        </div>

        {/* Headline Principal */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 tracking-tight leading-[1.1] md:leading-[1.15]">
          Site profissional completo <br className="hidden md:block" />
          por apenas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF002E] via-[#ff4d6d] to-[#FF002E] animate-gradient-x drop-shadow-sm whitespace-nowrap">R$ 99,90/mês.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base md:text-xl text-gray-400 max-w-4xl mb-8 md:mb-12 font-light leading-relaxed max-w-[320px] md:max-w-4xl mx-auto">
          Site moderno, domínio, hospedagem, segurança e suporte — tudo em um único plano, <br className="hidden md:block" />
          sem investimento alto e sem se preocupar com parte técnica.
        </p>
        
        {/* CTA Button com Glow Effect */}
        <div className="relative group mb-12 md:mb-16 w-full md:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 hidden md:block"></div>
            <Button 
                variant="primary" 
                className="relative text-base md:text-xl px-8 py-4 md:px-12 md:py-5 shadow-2xl w-full md:w-auto"
                onClick={() => window.open('https://wa.me/5547997094291?text=Quero%20meu%20site%20por%20R%2499%2C90%2Fm%C3%AAs', '_blank')}
            >
            Quero meu site por R$ 99,90/mês
            </Button>
        </div>

        {/* Trust Badges Container (Glassmorphism) */}
        <div className="w-full max-w-5xl">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl shadow-black/50">
                <div className="flex flex-col md:flex-row justify-between items-center gap-y-3 md:gap-y-0 text-gray-300 text-xs md:text-base font-medium">
                    
                    <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                        <span className="whitespace-nowrap">Sem taxa</span>
                    </div>
                    
                    {/* Divisor Vertical (Desktop) */}
                    <div className="hidden md:block w-px h-6 bg-white/10"></div>

                    <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                        <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                        <span className="whitespace-nowrap">Domínio incluso</span>
                    </div>

                    <div className="hidden md:block w-px h-6 bg-white/10"></div>

                    <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                        <Server className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                        <span className="whitespace-nowrap">Hospedagem</span>
                    </div>

                    <div className="hidden md:block w-px h-6 bg-white/10"></div>

                    <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                        <span className="whitespace-nowrap">Certificado SSL</span>
                    </div>
                    
                    <div className="hidden md:block w-px h-6 bg-white/10"></div>

                    <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                        <span className="whitespace-nowrap">E-mail incluso</span>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;