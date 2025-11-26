import React from 'react';
import { Instagram, Facebook, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/5547997094291?text=Quero%20meu%20site%20por%20R%2499%2C90%2Fm%C3%AAs";

  return (
    <footer className="bg-[#02030a] text-gray-400 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(255,0,46,0.5)]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-12 md:pt-20 pb-8 md:pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16">
          
          {/* Coluna 1: Marca e Sobre (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
            <div>
              <span className="text-2xl font-bold text-white tracking-tight">Decola<span className="text-primary">Web</span></span>
              <p className="mt-2 md:mt-4 text-gray-500 leading-relaxed font-light pr-4 text-sm md:text-base">
                Democratizando o acesso ao digital. Criamos sites profissionais, rápidos e seguros para empresas que querem crescer na internet sem burocracia.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/decolaweb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/decolaweb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação (2 colunas) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">Navegação</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li><a href="#beneficios" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Entregáveis</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Contratar</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Como Funciona</a></li>
              <li><a href="#missao" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Missão</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Dúvidas</a></li>
            </ul>
          </div>

          {/* Coluna 3: Status (2 colunas) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">Status</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li>
                <div className="flex items-center gap-2 text-green-500 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Sistemas Operacionais
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato (3 colunas) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">Fale Conosco</h4>
            <div className="flex flex-col gap-4">
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 p-4 rounded-xl flex items-center justify-between group transition-all duration-300"
              >
                <div>
                  <span className="block text-[10px] text-gray-500 font-medium uppercase mb-1">Comercial</span>
                  <span className="text-white font-medium group-hover:text-primary transition-colors text-sm">Via WhatsApp</span>
                </div>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="mailto:contato@decolaweb.com.br" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>contato@decolaweb.com.br</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="h-px w-full bg-white/10 mb-6 md:mb-8"></div>

        {/* Rodapé Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-600">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} DecolaWeb Soluções Digitais. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gray-500" />
                <span>Site Seguro</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;